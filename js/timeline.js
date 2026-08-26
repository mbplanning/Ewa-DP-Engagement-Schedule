(function () {
  const data = window.EWA_ENGAGEMENT;
  const ICONS = {
    clipboard:
      '<polyline points="8 7 8 4 16 4 16 7"/><rect x="6" y="7" width="12" height="14" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>',
    people:
      '<circle cx="9" cy="8" r="2.2"/><circle cx="15" cy="8.5" r="1.8"/><path d="M5.5 18c.4-3 2-5 4.5-5s4.1 2 4.5 5"/><path d="M14 13.2c1.7 0 3.2 1.4 3.6 3.8"/>',
    building:
      '<path d="M4 20V8l8-4 8 4v12"/><rect x="9" y="12" width="2.2" height="2.2"/><rect x="13" y="12" width="2.2" height="2.2"/><rect x="9" y="16.5" width="6" height="3.5"/>',
    pin:
      '<path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z"/><circle cx="12" cy="11" r="2"/>',
    talk:
      '<path d="M5 15.5V7.5A2.5 2.5 0 0 1 7.5 5h7A2.5 2.5 0 0 1 17 7.5v4A2.5 2.5 0 0 1 14.5 14H9l-4 3.2z"/><path d="M17 10.5h.5A2.5 2.5 0 0 1 20 13v3l-2.4-1.6"/>',
    exhibit:
      '<rect x="4" y="5" width="9" height="7"/><rect x="11" y="12" width="9" height="7"/><line x1="6.5" y1="16" x2="6.5" y2="20"/><line x1="4.5" y1="20" x2="8.5" y2="20"/>'
  };

  const typeById = Object.fromEntries(data.types.map((t) => [t.id, t]));
  const chapterById = Object.fromEntries(data.chapters.map((c) => [c.id, c]));
  let activeType = "all";
  let activeChapter = "all";
  const STORAGE_KEY = "ewa-engagement-board";
  const HISTORY_KEY = "ewa-engagement-history";
  const MAX_UNDO = 5;
  let board = loadBoard();
  let history = loadHistory();

  function cloneData(source) {
    return JSON.parse(JSON.stringify(source));
  }

  function syncEventChapters(targetEvents) {
    (targetEvents || []).forEach((savedEvent) => {
      const src = data.events.find((item) => item.id === savedEvent.id);
      if (!src) return;
      if (!savedEvent.chapters || !savedEvent.chapters.length) {
        savedEvent.chapters = (src.chapters || []).slice();
      }
    });
  }

  function loadBoard() {
    const fresh = cloneData(data);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return fresh;
      const parsed = JSON.parse(saved);
      syncEventChapters(parsed.events);
      if (
        parsed.dataVersion === data.dataVersion &&
        Array.isArray(parsed.stages) &&
        Array.isArray(parsed.events)
      ) {
        parsed.stages = fresh.stages;
        parsed.chapters = fresh.chapters;
        parsed.types = fresh.types;
        parsed.notes = fresh.notes;
        return parsed;
      }
      localStorage.removeItem(HISTORY_KEY);
      (parsed.events || []).forEach((savedEvent) => {
        const event = fresh.events.find((item) => item.id === savedEvent.id);
        if (event && savedEvent.completed) event.completed = true;
      });
      return fresh;
    } catch (err) {
      /* use bundled data */
    }
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(HISTORY_KEY);
    return fresh;
  }

  function loadHistory() {
    try {
      const saved = localStorage.getItem(HISTORY_KEY);
      if (saved) {
        const list = JSON.parse(saved);
        return Array.isArray(list) ? list.slice(-MAX_UNDO) : [];
      }
    } catch (err) {
      /* empty history */
    }
    return [];
  }

  function persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }

  function setUndoRemaining() {
    const button = document.getElementById("undo-board");
    if (!button) return;
    button.disabled = history.length < 1;
    button.setAttribute("data-remaining", String(history.length));
  }

  function setStatus(message) {
    const node = document.getElementById("save-status");
    if (!node) return;
    node.hidden = !message;
    node.textContent = message || "";
  }

  function collectEdits() {
    document.querySelectorAll("[data-seq-index]").forEach((el) => {
      const index = Number(el.getAttribute("data-seq-index"));
      const field = el.getAttribute("data-field");
      if (!board.sequence[index] || !field) return;
      board.sequence[index][field] = el.textContent.trim();
    });
    document.querySelectorAll("[data-event-id]").forEach((el) => {
      const id = el.getAttribute("data-event-id");
      const field = el.getAttribute("data-field");
      const event = board.events.find((item) => item.id === id);
      if (!event || !field) return;
      event[field] = el.innerText.trim();
    });
  }

  function saveBoard() {
    collectEdits();
    let snapshot;
    try {
      const previous = localStorage.getItem(STORAGE_KEY);
      snapshot = previous ? JSON.parse(previous) : cloneData(data);
    } catch (err) {
      snapshot = cloneData(data);
    }
    history.push(snapshot);
    if (history.length > MAX_UNDO) history.shift();
    persist();
    setUndoRemaining();
    setStatus("Saved.");
  }

  function undoBoard() {
    if (history.length < 1) return;
    board = history.pop();
    persist();
    setUndoRemaining();
    renderIntro();
    renderMonthNav();
    renderTimeline();
    renderNotes();
    applyFilter();
    setStatus("Reversed the last step.");
  }

  const months = [];
  const cursor = new Date(2026, 7, 1);
  const last = new Date(2028, 2, 1);
  while (cursor <= last) {
    const key = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}`;
    months.push({
      key,
      label: cursor.toLocaleString("en-US", { month: "short" }),
      year: cursor.getFullYear()
    });
    cursor.setMonth(cursor.getMonth() + 1);
  }

  function iconSvg(name) {
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;
  }

  function chipLabel(code) {
    const labels = {
      A: "Alta",
      K: "Keith",
      "A*": "Alta if schedule allows"
    };
    return labels[code] || String(code || "");
  }

  function eventChapters(ev) {
    return (ev.chapters || []).map((id) => chapterById[id]).filter(Boolean);
  }

  function eventMatchesChapter(ev, chapterId) {
    if (chapterId === "all") return true;
    return (ev.chapters || []).includes(chapterId);
  }

  function eventMatchesFilters(ev) {
    const typeOk = activeType === "all" || ev.type === activeType;
    return typeOk && eventMatchesChapter(ev, activeChapter);
  }

  function chapterChipMarkup(ev) {
    const list = eventChapters(ev);
    if (!list.length) return "";
    if (list.length >= 8) {
      return '<span class="chip chapter-chip" data-chapter="all">All chapters</span>';
    }
    return list
      .map((ch) => {
        const key = ch.key ? " is-key" : "";
        return `<span class="chip chapter-chip${key}" data-chapter="${ch.id}" title="${ch.full}">${ch.short}</span>`;
      })
      .join("");
  }

  function renderHeader() {
    const today = document.getElementById("today-date");
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    today.textContent = "updated: " + date;
  }

  function renderIntro() {
    document.getElementById("sequence").innerHTML = board.sequence
      .map(
        (s, index) => `<article class="sequence-card">
          <h3 contenteditable="true" spellcheck="false" data-seq-index="${index}" data-field="title">${s.title}</h3>
          <p contenteditable="true" spellcheck="false" data-seq-index="${index}" data-field="text">${s.text}</p>
        </article>`
      )
      .join("");
  }

  function renderLegend() {
    const box = document.getElementById("legend");
    const buttons = [
      { id: "all", label: "All events", color: "#2b3990", icon: null },
      ...data.types
    ];
    box.innerHTML = buttons
      .map((t) => {
        const swatch = t.icon
          ? `<span class="swatch" style="color:${t.color}">${iconSvg(t.icon)}</span>`
          : "";
        return `<button type="button" data-type="${t.id}" aria-pressed="${t.id === "all"}">${swatch}${t.label}</button>`;
      })
      .join("");
  }

  function renderChapters() {
    const box = document.getElementById("chapters");
    const buttons = [
      { id: "all", label: "All chapters", key: false, full: "All chapters" },
      ...data.chapters
    ];
    box.innerHTML = buttons
      .map((ch) => {
        const keyClass = ch.key ? ' class="is-key"' : "";
        return `<button type="button"${keyClass} data-chapter="${ch.id}" title="${ch.full || ch.label}" aria-pressed="${ch.id === "all"}">${ch.label}</button>`;
      })
      .join("");
  }

  function renderMonthNav() {
    const track = document.getElementById("month-nav-track");
    track.innerHTML =
      '<div class="month-nav-line"></div>' +
      months
        .map((m) => {
          const events = (board.events || []).filter((ev) => eventTouchesMonth(ev, m.key));
          const dots = events
            .map((ev) => {
              const t = typeById[ev.type];
              if (!t) return "";
              const chNames = eventChapters(ev).map((ch) => ch.short).join(", ");
              const label = chNames ? `${ev.title} (${chNames})` : ev.title;
              return `<button class="month-dot" data-jump="${ev.id}" data-type="${ev.type}" data-chapters="${(ev.chapters || []).join(",")}" title="${label}" style="color:${t.color}" aria-label="${label}, ${ev.dateLabel}"></button>`;
            })
            .join("");
          const chapterSet = [];
          events.forEach((ev) => {
            const list = eventChapters(ev);
            if (list.length >= 8) {
              if (!chapterSet.some((item) => item.id === "all-cover")) {
                chapterSet.push({
                  id: "all-cover",
                  short: "All",
                  full: "All chapters",
                  key: false
                });
              }
              return;
            }
            list.forEach((ch) => {
              if (!chapterSet.some((item) => item.id === ch.id)) chapterSet.push(ch);
            });
          });
          const chapLabels = chapterSet
            .map((ch) => `<span class="month-chap${ch.key ? " is-key" : ""}" data-chapter="${ch.id}" title="${ch.full}">${ch.short}</span>`)
            .join("");
          const showYear = m.label === "Jan" || m.key === "2026-08";
          const yearMark = showYear ? ` ’${String(m.year).slice(2)}` : "";
          return `<div class="month-col" data-month="${m.key}">
            <span class="month-label">${m.label}${yearMark}</span>
            <span class="month-dots">${dots}</span>
            <span class="month-chaps">${chapLabels}</span>
          </div>`;
        })
        .join("");
  }

  function eventTouchesMonth(ev, key) {
    if (ev.month === key) return true;
    if (!ev.endMonth) return false;
    return ev.month <= key && key <= ev.endMonth;
  }

  function renderTimeline() {
    if (!Array.isArray(board.stages)) board.stages = cloneData(data.stages);
    if (!Array.isArray(board.events)) board.events = cloneData(data.events);
    const root = document.getElementById("timeline");
    root.innerHTML = board.stages
      .map((stage) => {
        const events = board.events.filter((ev) => ev.stage === stage.id);
        const items = events
          .map((ev) => {
            const t = typeById[ev.type];
            if (!t) return "";
            const chips = [];
            if (ev.format) chips.push(`<span class="chip">${ev.format}</span>`);
            (ev.attendance || []).forEach((code) => {
              const optional = code.includes("*") || ev.optional;
              chips.push(
                `<span class="chip${optional ? " is-optional" : ""}">${chipLabel(code)}</span>`
              );
            });
            const more = ev.details
              ? `<details class="event-more">
                  <summary>More from the strategy</summary>
                  <ul>${ev.details.map((d) => `<li>${d}</li>`).join("")}</ul>
                </details>`
              : "";
            const done = ev.completed ? " is-done" : "";
            const editable = ev.completed ? "false" : "true";
            const chapterChips = chapterChipMarkup(ev);
            const allChips = [chapterChips, ...chips].filter(Boolean);
            return `<li class="event-item" data-type="${ev.type}" data-chapters="${(ev.chapters || []).join(",")}" id="${ev.id}">
              <span class="event-icon" style="color:${t.color}">${iconSvg(t.icon)}</span>
              <article class="event-card${done}">
                <button type="button" class="event-check${done}" data-check-id="${ev.id}" aria-label="Mark complete" aria-pressed="${ev.completed ? "true" : "false"}">
                  <svg viewBox="0 0 16 16" aria-hidden="true"><polyline points="3.5 8.5 6.5 11.5 12.5 4.5"/></svg>
                </button>
                <div class="event-body">
                <div class="event-meta">
                  <span class="event-date">${ev.dateLabel}</span>
                  <span class="event-type" style="color:${t.color}">${t.label}</span>
                </div>
                <h3 contenteditable="${editable}" spellcheck="false" data-event-id="${ev.id}" data-field="title">${ev.title}</h3>
                <p class="event-summary" contenteditable="${editable}" spellcheck="false" data-event-id="${ev.id}" data-field="summary">${ev.summary}</p>
                ${allChips.length ? `<div class="event-chips">${allChips.join("")}</div>` : ""}
                ${more}
                </div>
              </article>
            </li>`;
          })
          .join("");
        return `<section class="stage-block" data-stage="${stage.id}">
          <div class="stage-mark">
            <span class="stage-mark-label">${stage.name}</span>
          </div>
          <ol class="event-list">${items}</ol>
        </section>`;
      })
      .join("");
  }

  function renderNotes() {
    const notes = Array.isArray(board.notes) ? board.notes : data.notes || [];
    document.getElementById("footnotes").innerHTML =
      notes.map((n) => `<p>${n}</p>`).join("") +
      "<p>Source: EDP Engagement Timeline workbook and Engagement strategy DPP draft, August 20, 2026. Event months follow the Excel Gantt. Explanations follow the strategy draft. Titles are cleaned for reading.</p>";
  }

  function applyFilter() {
    document.querySelectorAll("#legend button").forEach((btn) => {
      const id = btn.getAttribute("data-type");
      const on = id === activeType;
      btn.classList.toggle("is-on", on);
      btn.classList.toggle("is-dim", activeType !== "all" && !on);
      btn.setAttribute("aria-pressed", String(on));
    });
    document.querySelectorAll("#chapters button").forEach((btn) => {
      const id = btn.getAttribute("data-chapter");
      const on = id === activeChapter;
      btn.classList.toggle("is-on", on);
      btn.classList.toggle("is-dim", activeChapter !== "all" && !on);
      btn.setAttribute("aria-pressed", String(on));
    });
    document.querySelectorAll(".event-item").forEach((item) => {
      const ev = board.events.find((e) => e.id === item.id);
      const show = ev ? eventMatchesFilters(ev) : false;
      item.classList.toggle("is-hidden", !show);
    });
    document.querySelectorAll(".stage-block").forEach((block) => {
      const visible = block.querySelectorAll(".event-item:not(.is-hidden)").length;
      block.classList.toggle("is-hidden", visible === 0);
    });
    document.querySelectorAll(".month-dot").forEach((dot) => {
      const ev = board.events.find((e) => e.id === dot.getAttribute("data-jump"));
      const show = ev ? eventMatchesFilters(ev) : false;
      dot.classList.toggle("is-hidden", !show);
    });
    document.querySelectorAll(".month-chap").forEach((tag) => {
      const chap = tag.getAttribute("data-chapter");
      const show =
        activeChapter === "all" ||
        chap === activeChapter ||
        chap === "all-cover";
      tag.classList.toggle("is-hidden", !show);
    });
  }

  function jumpTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    const card = el.querySelector(".event-card");
    card.classList.add("is-target");
    window.setTimeout(() => card.classList.remove("is-target"), 1600);
  }

  function setEventDone(id, done) {
    const event = board.events.find((item) => item.id === id);
    if (!event || !!event.completed === done) return;
    event.completed = done;
    persist();
    const item = document.getElementById(id);
    if (!item) return;
    const card = item.querySelector(".event-card");
    const btn = item.querySelector(".event-check");
    card.classList.toggle("is-done", done);
    btn.classList.toggle("is-done", done);
    btn.setAttribute("aria-pressed", String(done));
    item.querySelectorAll("[contenteditable]").forEach((el) => {
      el.setAttribute("contenteditable", done ? "false" : "true");
    });
  }

  function bindControls() {
    let checkTimer = null;
    document.getElementById("legend").addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-type]");
      if (!btn) return;
      activeType = btn.getAttribute("data-type");
      applyFilter();
    });
    document.getElementById("chapters").addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-chapter]");
      if (!btn) return;
      activeChapter = btn.getAttribute("data-chapter");
      applyFilter();
    });
    document.getElementById("month-nav-track").addEventListener("click", (e) => {
      const chap = e.target.closest(".month-chap[data-chapter]");
      if (chap) {
        const id = chap.getAttribute("data-chapter");
        activeChapter = id === "all-cover" ? "all" : id;
        applyFilter();
        return;
      }
      const dot = e.target.closest("[data-jump]");
      if (!dot) return;
      jumpTo(dot.getAttribute("data-jump"));
    });
    document.getElementById("timeline").addEventListener("click", (e) => {
      const chapChip = e.target.closest(".chapter-chip[data-chapter]");
      if (chapChip) {
        activeChapter = chapChip.getAttribute("data-chapter");
        applyFilter();
        return;
      }
      const btn = e.target.closest(".event-check");
      if (!btn) return;
      e.preventDefault();
      const id = btn.getAttribute("data-check-id");
      if (checkTimer) window.clearTimeout(checkTimer);
      checkTimer = window.setTimeout(() => {
        checkTimer = null;
        setEventDone(id, true);
      }, 280);
    });
    document.getElementById("timeline").addEventListener("dblclick", (e) => {
      const btn = e.target.closest(".event-check");
      if (!btn) return;
      e.preventDefault();
      if (checkTimer) {
        window.clearTimeout(checkTimer);
        checkTimer = null;
      }
      setEventDone(idFromCheck(btn), false);
    });
    document.getElementById("save-board").addEventListener("click", saveBoard);
    document.getElementById("undo-board").addEventListener("click", () => {
      if (history.length < 1) return;
      undoBoard();
    });
  }

  function idFromCheck(btn) {
    return btn.getAttribute("data-check-id");
  }

  try {
    renderHeader();
    renderIntro();
    renderLegend();
    renderChapters();
    renderMonthNav();
    renderTimeline();
    renderNotes();
    applyFilter();
  } catch (err) {
    console.error(err);
  }
  setUndoRemaining();
  bindControls();
})();
