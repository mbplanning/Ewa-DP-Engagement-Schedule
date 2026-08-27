window.EWA_ENGAGEMENT = {
  title: "Ewa Development Plan Public Engagement",
  dataVersion: 6,
  sequence: [
    {
      title: "Public Participation",
      text: "Pop-ups, surveys, and a community symposium to spread the word about the EDP."
    },
    {
      title: "Topical Stakeholder Listening",
      text: "Listening sessions gather stakeholder, agency, and topic-expert input on a chapter outline before the draft is written."
    },
    {
      title: "CAC Advising",
      text: "The CAC reviews the draft policies together with what came out of the listening sessions."
    }
  ],
  notes: [
    "Stage 1 (project kick-off and agency interviews, October 2025–May 2026) is complete and is not shown.",
    "A = Alta Planning + Design. K = Keith Mattson, CAC facilitator. A* = Alta trip only if the schedule allows.",
    "The Excel chart marks October 2026 as VAC. December 2026 is highlighted because ʻEwa already has many seasonal community events."
  ],
  types: [
    {
      id: "team",
      label: "Team preparation",
      color: "#2b3990",
      icon: "clipboard"
    },
    {
      id: "cac",
      label: "CAC meeting",
      color: "#0070c0",
      icon: "people"
    },
    {
      id: "board",
      label: "Neighborhood Board",
      color: "#76777b",
      icon: "building"
    },
    {
      id: "popup",
      label: "Pop-up & survey",
      color: "#7030a0",
      icon: "pin"
    },
    {
      id: "listening",
      label: "Listening session",
      color: "#b97034",
      icon: "talk"
    },
    {
      id: "public",
      label: "Public exhibit",
      color: "#c00000",
      icon: "exhibit"
    }
  ],
  formats: [
    { id: "in-person", label: "In person" },
    { id: "hybrid", label: "Hybrid" },
    { id: "remote", label: "Remote only" }
  ],
  chapters: [
    {
      id: "ch1",
      mark: "1",
      short: "Ch1",
      label: "Ch1 Intro",
      full: "Ch1 Intro",
      key: true
    },
    {
      id: "ch2",
      mark: "2",
      short: "Ch2",
      label: "Ch2 Infrastructure",
      full: "Ch2 Infrastructure, Public Facilities, One Water",
      key: true
    },
    {
      id: "ch3-land",
      mark: "3.L",
      short: "Ch3 Land use",
      label: "Ch3 Land use",
      full: "Ch3 Land Use, Future Conditions, and Community Character",
      key: true
    },
    {
      id: "ch3-econ",
      mark: "3.E",
      short: "Ch3 Economy",
      label: "Ch3 Economy",
      full: "Ch3 Economic Development",
      key: true
    },
    {
      id: "ch4",
      mark: "4",
      short: "Ch4",
      label: "Ch4 Hazards",
      full: "Ch4 Hazards, Resilience, and Sustainability",
      key: false
    },
    {
      id: "ch5",
      mark: "5",
      short: "Ch5",
      label: "Ch5 Healthy Community",
      full: "Ch5 Healthy Community",
      key: false
    },
    {
      id: "ch6",
      mark: "6",
      short: "Ch6",
      label: "Ch6 Cultural resources",
      full: "Ch6 Cultural & Historic Resources",
      key: false
    },
    {
      id: "ch7",
      mark: "7",
      short: "Ch7",
      label: "Ch7 Parks",
      full: "Ch7 Public Parks, Beaches, Natural Open Space / Conservation Areas",
      key: false
    },
    {
      id: "ch8",
      mark: "8",
      short: "Ch8",
      label: "Ch8 Mobility",
      full: "Ch8 Mobility",
      key: true
    }
  ],
  stages: [
    {
      id: "stage-2",
      name: "Stage 2",
      title: "Preparation and regroup",
      timing: "August–November 2026",
      blurb: "Finish background memos and fact sheets, set up the first pop-up, and kick off the Community Advisory Committee."
    },
    {
      id: "stage-3",
      name: "Stage 3",
      title: "Core chapters",
      timing: "December 2026–September 2027",
      blurb: "Infrastructure, land use, economy, and mobility move through Neighborhood Boards, pop-ups, listening sessions, and CAC review. Mobility is brought forward because it keeps coming up in early outreach."
    },
    {
      id: "stage-4",
      name: "Stage 4",
      title: "Remaining chapters",
      timing: "October 2027–January 2028",
      blurb: "Sustainability, healthy community, cultural resources, and parks follow the same listen-then-CAC pattern."
    },
    {
      id: "stage-5",
      name: "Stage 5",
      title: "Public review and wrap-up",
      timing: "February–March 2028",
      blurb: "A mini pop-up catches leftover questions. The CAC reviews draft summary policies, Neighborhood Boards hear the update, and the public sees the draft at a gallery walk and community symposium."
    }
  ],
  events: [
    {
      id: "memos",
      chapters: [],
      stage: "stage-2",
      type: "team",
      month: "2026-08",
      endMonth: "2026-10",
      dateLabel: "August–October 2026",
      title: "Finalize memos and fact sheets",
      summary:
        "Complete background materials and existing-conditions information needed for later engagement. These packets become the CAC kickoff reading list and the first pop-up handouts.",
      details: [
        "Alta prepares outreach and presentation materials using the project branding package. DPP oversees content, public notices, and the website.",
        "Printed pieces may include project fact sheets, neighborhood profiles, meeting notices, and flyers for upcoming pop-ups and listening sessions.",
        "The Gantt marks October 2026 as VAC, so the work window is August through September with October as a pause."
      ],
      attendance: ["VAC in October"]
    },
    {
      id: "team-popup-setup",
      chapters: ["ch1"],
      stage: "stage-2",
      type: "team",
      month: "2026-11",
      dateLabel: "November 2026",
      title: "Project team meeting: set up for the first pop-up",
      summary:
        "Confirm content, materials, staffing, locations, and logistics for Pop-up Round 1 before the December community events.",
      details: [
        "DPP coordinates locations, event participation, staffing, and logistics. Alta prepares displays and handouts. DPP procures branded promo items.",
        "Possible locations later in the round include Ka Makana Aliʻi, Kapolei Commons, farmers markets, neighborhood events, Skyline stations, and community or street festivals.",
        "December is treated as a major outreach window because ʻEwa already has many established seasonal events."
      ],
      attendance: ["A", "K"],
      format: "in-person"
    },
    {
      id: "cac-1",
      chapters: ["ch1"],
      stage: "stage-2",
      type: "cac",
      month: "2026-11",
      dateLabel: "November 2026",
      title: "CAC Meeting 1: Kickoff",
      summary:
        "Introduce the project and CAC roles, confirm key issues, and identify gaps after the agency and stakeholder interviews. This is an in-person meeting. Keith Mattson facilitates.",
      details: [
        "The CAC is an advisory body of about 14–18 members from a cross-section of the ʻEwa community. Members review ideas coming out of broader engagement; they do not vote plan policy.",
        "Meeting 1 covers project orientation, the CAC purpose and Charter of Commitments, findings from agency and organization interviews, and a shared picture of current conditions.",
        "Pre-meeting materials: fact sheets, memos, neighborhood profiles, the community engagement plan, and a CAC road map, posted for members to read ahead of time.",
        "DPP hosts and answers questions. Alta helps prepare materials and writes summary notes. Elected officials currently in office will not serve on the CAC."
      ],
      attendance: ["A", "K"],
      format: "in-person"
    },
    {
      id: "nb-1",
      chapters: [],
      stage: "stage-3",
      type: "board",
      month: "2026-12",
      dateLabel: "December 2026",
      title: "Neighborhood Board presentation 1",
      summary:
        "Introduce the EDP update, share initial findings, and invite people into the upcoming pop-ups, surveys, and listening sessions. DPP will ask to be on the agendas of Neighborhood Board No. 23 ʻEwa and No. 34 Makakilo-Kapolei-Honokai Hale.",
      details: [
        "Keeping the boards informed is treated as essential. DPP also notifies the boards throughout the process when public events and comment opportunities come up.",
        "Purpose: introduce the update process and schedule, share key findings from interviews, outline the engagement plan, and encourage participation.",
        "Expected outcome: more awareness of the update, additional community concerns and stakeholders, and stronger turnout at later events.",
        "The strategy table lists this briefing in November; the Excel Gantt places it in December with Pop-up Round 1. This page follows the Gantt."
      ]
    },
    {
      id: "popup-1",
      chapters: ["ch1"],
      stage: "stage-3",
      type: "popup",
      month: "2026-12",
      dateLabel: "December 2026",
      title: "Survey 1 / Pop-up Round 1",
      summary:
        "Broad outreach on issues, opportunities, community values, the emerging vision, and where growth should go. Round 1 runs at a minimum of five community events or locations across ʻEwa, with an online and hard-copy survey in parallel.",
      details: [
        "Pop-ups take the process to places people already gather. Informal contact is meant to reach people who may not come to formal meetings.",
        "Possible activities: Love It / Change It boards, vision statements, Survey 1, a large aerial map with stickers for favorite places, missing amenities, unsafe intersections, congestion, flooding, and growth areas, a kids’ drawing station (“Draw your future ʻEwa”), a story-recording station, landmark boards, and sticker voting on top issues.",
        "Survey 1 covers issues, opportunities, and the vision statement. Alta prepares the survey; DPP disseminates it. QR codes go on printed materials. Analysis is wrapped into the pop-up summary. Surveys stay open about four weeks.",
        "Alta prepares materials. DPP staffs the events, monitors the online survey, and writes summary notes. Kids’ drawings may later appear at the gallery walk or symposium."
      ],
      format: "in-person"
    },
    {
      id: "listen-1",
      chapters: ["ch1", "ch2"],
      stage: "stage-3",
      type: "listening",
      month: "2027-01",
      dateLabel: "January 2027",
      title: "Listening Session 1: Chapters 1–2",
      summary:
        "Focused feedback on the introduction, infrastructure, public facilities, One Water, key issues, and the emerging vision and growth framework. Alta leads the chapter work. An outline goes out before the session.",
      details: [
        "Listening sessions sit between broad public outreach and CAC deliberations. Feedback is synthesized and taken to the CAC.",
        "DPP identifies relevant agencies and keeps an invitation and attendance tracker. DPP opens with the EDP process, the topic, and how comments will be used. Participants then move among topic tables or breakout rooms. Keith facilitates one table.",
        "The activities overview describes these as in-person, topic-focused sessions. The listening-session section of the same August 2026 draft says all listening sessions are planned to be remote. That conflict is left visible until the team confirms format.",
        "Expected outcome: a clearer picture of community priorities and concerns before CAC Meeting 3 reviews Chapters 1–2."
      ],
      attendance: ["K"],
      format: "remote"
    },
    {
      id: "cac-2",
      chapters: ["ch1"],
      stage: "stage-3",
      type: "cac",
      month: "2027-02",
      dateLabel: "February 2027",
      title: "CAC Meeting 2: Vision and growth framework",
      summary:
        "Review and refine the draft community vision, guiding principles, and preliminary growth framework. Hybrid meeting; in-person attendance is encouraged.",
      details: [
        "Expected outcome: members understand the growth framework as the foundation of the EDP and help strengthen the draft vision statement.",
        "Materials: proposed vision statements and framework, posted to the website. Alta prepares materials with DPP review. Keith runs the meeting.",
        "CAC Meetings 2 through 7 are hybrid. Meetings 1 and 8 are in person."
      ],
      attendance: ["K"],
      format: "hybrid"
    },
    {
      id: "cac-3",
      chapters: ["ch1", "ch2"],
      stage: "stage-3",
      type: "cac",
      month: "2027-03",
      dateLabel: "March 2027",
      title: "CAC Meeting 3: Review Chapters 1–2",
      summary:
        "Discuss findings and policy directions for the plan introduction, infrastructure, public facilities, and One Water, using what came out of Listening Session 1.",
      details: [
        "Chapters go to the CAC one by one. The intended sequence is listening session, then draft chapter, then CAC review so the committee is not asked to deliberate before broader input is in.",
        "After major events, the consultant or facilitator who attended prepares a “What We Heard” summary: themes, consensus, differences, and how comments affected the next draft."
      ],
      attendance: ["K"],
      format: "hybrid"
    },
    {
      id: "listen-2",
      chapters: ["ch3-land"],
      stage: "stage-3",
      type: "listening",
      month: "2027-04",
      dateLabel: "April 2027",
      title: "Listening Session 2: Chapter 3 land use",
      summary:
        "Focused feedback on land-use patterns, future growth, development capacity, and community character. Chapter 3 gets two listening sessions because it is broad and is expected to draw substantial interest.",
      details: [
        "Chapter 3 covers land use, future conditions, economic development, and community character. Session 2 is the land-use half; Session 3 is economy and character.",
        "The consultant prepares a drafted outline to start the discussion. DPP invites applicable agency staff through the director’s office.",
        "Alta leads this chapter. Input from this session feeds the Chapter 3 draft that CAC Meeting 4 will review."
      ],
      attendance: ["K"],
      format: "remote"
    },
    {
      id: "listen-3",
      chapters: ["ch3-econ"],
      stage: "stage-3",
      type: "listening",
      month: "2027-05",
      dateLabel: "May 2027",
      title: "Listening Session 3: Chapter 3 economy",
      summary:
        "Focused feedback on economic development, employment, and related community-character questions — the second half of Chapter 3.",
      details: [
        "Together with Session 2, this gives Chapter 3 enough room before a single CAC review of land use, growth, economy, and character.",
        "Same working method as other listening sessions: outline in advance, topic tables, agency staff invited, “What We Heard” afterward."
      ],
      attendance: ["K"],
      format: "remote"
    },
    {
      id: "cac-4",
      chapters: ["ch3-land", "ch3-econ"],
      stage: "stage-3",
      type: "cac",
      month: "2027-06",
      dateLabel: "June 2027",
      title: "CAC Meeting 4: Review Chapter 3",
      summary:
        "Review and refine draft policies on land use, future growth, economic development, and community character, informed by Listening Sessions 2 and 3.",
      details: [
        "This is the CAC checkpoint after the two Chapter 3 listening sessions.",
        "Hybrid meeting. Keith facilitates. Alta prepares materials with DPP review."
      ],
      attendance: ["K"],
      format: "hybrid"
    },
    {
      id: "popup-2",
      chapters: ["ch8"],
      stage: "stage-3",
      type: "popup",
      month: "2027-07",
      dateLabel: "July 2027",
      title: "Survey 2 / Pop-up Round 2",
      summary:
        "Broad community input on mobility, transportation priorities, and remaining concerns. Round 2 again uses at least five locations across ʻEwa, with Survey 2 focused on mobility.",
      details: [
        "Possible activities: mobility hot-spot mapping (congestion, dangerous intersections, missing sidewalks, bike facilities, transit destinations, priority spots); a five-token trade-off exercise (road capacity, bus, Skyline, walking, bikes, school travel, evacuation); a 2050 mobility vision board; and a daily-commute string map (home, destination, connecting string).",
        "Survey 2 is administered after the major chapter reviews and focuses on mobility. Alta prepares it; DPP disseminates. Findings go into the pop-up summary.",
        "Alta prepares materials. DPP attends and writes summary notes."
      ],
      format: "in-person"
    },
    {
      id: "listen-4",
      chapters: ["ch8"],
      stage: "stage-3",
      type: "listening",
      month: "2027-08",
      dateLabel: "August 2027",
      title: "Listening Session 4: Chapter 8 mobility",
      summary:
        "Focused feedback on transportation challenges, mobility priorities, and possible policies and implementation strategies. Fehr & Peers leads this chapter. Mobility was moved earlier because it is one of the issues raised most often in interviews.",
      details: [
        "Chapter 8 has both a dedicated listening session and a dedicated CAC meeting so there is enough time for transportation in detail.",
        "The Excel chart flags this as “bring mobility to an earlier chapter.” In the sequence it sits after land use and before sustainability, health, culture, and parks."
      ],
      attendance: ["K"],
      format: "remote"
    },
    {
      id: "cac-5",
      chapters: ["ch8"],
      stage: "stage-3",
      type: "cac",
      month: "2027-09",
      dateLabel: "September 2027",
      title: "CAC Meeting 5: Review Chapter 8",
      summary:
        "Review and refine mobility policies, transportation priorities, and proposed implementation actions after Listening Session 4 and Pop-up Round 2.",
      details: [
        "This is the CAC’s dedicated mobility meeting, paired with the earlier listening session and the mobility-focused pop-up and survey.",
        "Hybrid meeting. Keith facilitates."
      ],
      attendance: ["K"],
      format: "hybrid"
    },
    {
      id: "listen-5",
      chapters: ["ch4", "ch5"],
      stage: "stage-4",
      type: "listening",
      month: "2027-10",
      dateLabel: "October 2027",
      title: "Listening Session 5: Chapters 4–5",
      summary:
        "Discuss hazards, resilience, sustainability, healthy-community needs, and possible policy responses. Chapters 4 and 5 are grouped because they overlap on well-being, environment, and long-term resilience. Alta leads both.",
      details: [
        "Related topics are grouped because the number of CAC meetings is limited.",
        "Same listen-then-draft-then-CAC sequence as the core chapters."
      ],
      attendance: ["K"],
      format: "remote"
    },
    {
      id: "cac-6",
      chapters: ["ch4", "ch5"],
      stage: "stage-4",
      type: "cac",
      month: "2027-11",
      dateLabel: "November 2027",
      title: "CAC Meeting 6: Review Chapters 4–5",
      summary:
        "Review and refine policies on hazards, resilience, sustainability, health, and community well-being after Listening Session 5.",
      details: [
        "Hybrid meeting. Keith facilitates. Alta prepares chapter materials with DPP review."
      ],
      attendance: ["K"],
      format: "hybrid"
    },
    {
      id: "listen-6",
      chapters: ["ch6", "ch7"],
      stage: "stage-4",
      type: "listening",
      month: "2027-12",
      dateLabel: "December 2027",
      title: "Listening Session 6: Chapters 6–7",
      summary:
        "Focused feedback on cultural and historic resources, parks, beaches, natural open space, and conservation areas. Helber Hastert & Fee leads both chapters.",
      details: [
        "Chapters 6 and 7 are grouped because they share community identity, stewardship, and protection of cultural and environmental assets.",
        "This is the last listening session before the wrap-up stage."
      ],
      attendance: ["K"],
      format: "remote"
    },
    {
      id: "cac-7",
      chapters: ["ch6", "ch7"],
      stage: "stage-4",
      type: "cac",
      month: "2028-01",
      dateLabel: "January 2028",
      title: "CAC Meeting 7: Review Chapters 6–7",
      summary:
        "Review and refine recommendations on cultural resources, historic preservation, parks, beaches, open space, and natural resources after Listening Session 6.",
      details: [
        "This is the last chapter-by-chapter CAC review before the public-draft wrap-up.",
        "Hybrid meeting. Keith facilitates."
      ],
      attendance: ["K"],
      format: "hybrid"
    },
    {
      id: "popup-3",
      chapters: ["ch4", "ch5", "ch6", "ch7"],
      stage: "stage-5",
      type: "popup",
      month: "2028-02",
      dateLabel: "February 2028",
      title: "Mini pop-up 3: remaining questions",
      summary:
        "A smaller catch-all round at about two to three locations. Emphasis on leftover questions from Chapters 1–7, especially sustainability, health, culture, and parks.",
      details: [
        "Possible activity: a “Did we miss anything?” board organized by chapter — community character and growth; infrastructure and One Water; economy and jobs; sustainability and resilience; cultural resources; parks and open space; healthy communities.",
        "Expected outcome: remaining concerns, unintended consequences, and gaps to fix before the public draft.",
        "Alta prepares materials. DPP attends and writes summary notes."
      ],
      format: "in-person"
    },
    {
      id: "cac-8",
      chapters: ["ch1", "ch2", "ch3-land", "ch3-econ", "ch4", "ch5", "ch6", "ch7", "ch8"],
      stage: "stage-5",
      type: "cac",
      month: "2028-02",
      dateLabel: "February 2028",
      title: "CAC Meeting 8: Public draft review",
      summary:
        "Final CAC review of the draft summary policies — not the full plan. This meeting is in person. Alta’s trip is marked optional (A*) if the schedule allows.",
      details: [
        "Meeting 8 is one of the two in-person CAC meetings (with Meeting 1).",
        "The strategy narrative places this review with the Public Review Draft wrap-up. The Excel Gantt puts it in February 2028; the strategy phasing table lists March 2028. This page follows the Gantt.",
        "Keith facilitates. DPP hosts."
      ],
      attendance: ["A*"],
      format: "in-person",
      optional: true
    },
    {
      id: "nb-2",
      chapters: [],
      stage: "stage-5",
      type: "board",
      month: "2028-02",
      dateLabel: "February 2028",
      title: "Neighborhood Board presentation 2",
      summary:
        "Present key findings and draft directions, and tell residents how to comment on the Public Review Draft. Again covers Board No. 23 ʻEwa and No. 34 Makakilo-Kapolei-Honokai Hale.",
      details: [
        "Timed near the gallery walk and CAC Meeting 8, before the draft is released.",
        "DPP schedules with board leadership, presents findings and policy directions, and documents remaining issues.",
        "Expected outcome: a check on key findings, any last concerns before public review, and awareness of how to comment."
      ],
      attendance: ["K"]
    },
    {
      id: "gallery",
      chapters: ["ch1", "ch2", "ch3-land", "ch3-econ", "ch4", "ch5", "ch6", "ch7", "ch8"],
      stage: "stage-5",
      type: "public",
      month: "2028-03",
      dateLabel: "March 2028",
      title: "Draft policy and conceptual maps gallery walk",
      summary:
        "A multi-day exhibit where the public, stakeholders, and CAC members can review draft policies and conceptual maps at their own pace. Two questions: Do you approve of the draft policy? If not, how would you change it — and if so, how should it be implemented? Alta’s trip is optional (A*).",
      details: [
        "Unlike a single public meeting, the gallery walk uses large-format exhibits in an accessible place such as Kapolei Hale, open several days, with staffed office hours. Comment cards, sticky notes, dot voting, map notes, and online / QR forms are in play.",
        "Outreach should start weeks ahead via the website, email lists, neighborhood boards, community groups, and HOAs.",
        "DPP leads venue, schedule, staffing, and office hours. Alta designs boards and compiles in-person and electronic comments.",
        "Expected outcome: comments on draft policies and maps, and a clearer public path into the Public Review Draft."
      ],
      attendance: ["A*"],
      optional: true,
      format: "hybrid"
    },
    {
      id: "symposium",
      chapters: ["ch1", "ch2", "ch3-land", "ch3-econ", "ch4", "ch5", "ch6", "ch7", "ch8"],
      stage: "stage-5",
      type: "public",
      month: "2028-03",
      dateLabel: "March 2028",
      title: "Community symposium",
      summary:
        "Final major community event after CAC Meeting 8. Held at a public meeting space (library, cafeteria, or community center) to explain the Public Review Draft and how to comment. Additional Neighborhood Board presentations of the draft will be offered, including by request.",
      details: [
        "Purpose: introduce the Public Review Draft; show how community input shaped it; help people navigate the draft; highlight major policies, maps, and implementation recommendations; and explain the formal review process.",
        "Alta prepares topic fact sheets, neighborhood profiles, trend graphics, maps, presentation materials, comment forms, and QR codes. Kids’ drawings from earlier pop-ups may be shown as a small gallery.",
        "Expected outcome: better public understanding of the draft, more participation in formal review, and a record of remaining questions.",
        "The Gantt places this in March 2028 with Alta and Keith attending, after the gallery walk."
      ],
      attendance: ["A", "K"],
      format: "in-person"
    }
  ]
};
