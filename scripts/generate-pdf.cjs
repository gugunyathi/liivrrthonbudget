const fs = require("fs");
const path = require("path");
const { jsPDF } = require("jspdf");

function generatePdf() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: false,
  });

  const BG_COLOR = [11, 13, 19];
  const CARD_BG = [16, 20, 31];
  const BORDER_COLOR = [39, 39, 42];
  const ORANGE = [249, 115, 22];
  const AMBER = [245, 158, 11];
  const AMBER_LIGHT = [251, 191, 36];
  const TEXT_WHITE = [255, 255, 255];
  const TEXT_MUTED = [161, 161, 170];
  const TEXT_LIGHT = [212, 212, 216];
  const BLACK = [0, 0, 0];

  function drawPageBackground() {
    doc.setFillColor(...BG_COLOR);
    doc.rect(0, 0, 210, 297, "F");
  }

  function drawHeader(subtitle) {
    doc.setFillColor(...ORANGE);
    doc.rect(16, 14, 1.5, 4.5, "F");

    doc.setTextColor(...TEXT_WHITE);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("LIIVRR-THON", 19, 18);

    doc.setTextColor(...TEXT_MUTED);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(subtitle, 194, 18, { align: "right" });

    doc.setDrawColor(...BORDER_COLOR);
    doc.setLineWidth(0.3);
    doc.line(16, 21.5, 194, 21.5);
  }

  function drawFooter(pageStr) {
    doc.setDrawColor(...BORDER_COLOR);
    doc.setLineWidth(0.3);
    doc.line(16, 280, 194, 280);

    doc.setTextColor(...TEXT_MUTED);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("COMPLETE VIRTUAL CAMPAIGN & OPERATIONAL BUDGET", 16, 285.5);

    doc.setFont("helvetica", "bold");
    doc.text(pageStr, 194, 285.5, { align: "right" });
  }

  // ==========================================
  // PAGE 1: BUDGET OVERVIEW
  // ==========================================
  drawPageBackground();
  drawHeader("BUDGET OVERVIEW");

  // Kicker
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("PAN-AFRICA · ONE VIRTUAL SPRINT", 16, 30);

  // Main title
  doc.setTextColor(...TEXT_WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(23);
  doc.text("LIIVRR-THON:", 16, 40);
  doc.text("CAMPAIGN BUDGET", 16, 49);

  // Subtitle
  doc.setTextColor(...TEXT_MUTED);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("COMPLETE VIRTUAL CAMPAIGN & OPERATIONAL BUDGET", 16, 56.5);

  // Narrative text
  doc.setTextColor(...TEXT_WHITE);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const narr1 =
    "A 4–5 week Pan-African virtual sprint across Africa (featuring key hubs such as South Africa, Nigeria, Kenya and Mozambique as examples).";
  const narr1Lines = doc.splitTextToSize(narr1, 178);
  doc.text(narr1Lines, 16, 64);

  doc.setTextColor(...TEXT_MUTED);
  doc.setFontSize(8.5);
  doc.text(
    "100% digital and remote execution — no physical campus booths, print kits or venue AV logistics.",
    16,
    73,
  );

  // Table Title
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("EXECUTIVE BUDGET SUMMARY", 16, 82);

  // Table Container
  doc.setFillColor(...CARD_BG);
  doc.setDrawColor(...BORDER_COLOR);
  doc.roundedRect(16, 85, 178, 68, 1.5, 1.5, "FD");

  // Table Header row (Orange)
  doc.setFillColor(...ORANGE);
  doc.roundedRect(16, 85, 178, 7.5, 1.5, 1.5, "F");
  doc.rect(16, 89, 178, 3.5, "F"); // square bottom corners of header

  doc.setTextColor(...BLACK);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text("BUDGET CATEGORY", 19, 90);
  doc.text("TOTAL COST (USD)", 72, 90);
  doc.text("APPROX. ZAR", 104, 90);
  doc.text("SUMMARY", 132, 90);

  // Rows data
  const rowsP1 = [
    {
      cat: "1. Program Director & Lead Implementer",
      usd: "$2,500",
      zar: "~R45,000",
      sum: "4–5 weeks of end-to-end virtual campaign leadership, ambassador management, digital partner onboarding and Virtual Demo Day production.",
      y: 92.5,
      h: 15,
    },
    {
      cat: "2. Student Cash & Reward Prize Pool",
      usd: "Up to $10,000",
      zar: "Up to ~R180,000",
      sum: "Builders, creators and viral rewards, city squad leader prizes, plus instant mobile data micro-drops.",
      y: 107.5,
      h: 15,
    },
    {
      cat: "3. Paid Social & Digital Promo",
      usd: "$1,100",
      zar: "~R19,800",
      sum: "Geo-targeted TikTok and Instagram ads across Pan-Africa (focusing on key hubs like South Africa, Nigeria, Kenya and Mozambique), plus virtual ambassador data stipends.",
      y: 122.5,
      h: 15,
    },
    {
      cat: "4. Other Execution & Platform Costs",
      usd: "$1,800",
      zar: "~R32,400",
      sum: "Eight virtual campus ambassadors, video editing, livestream and API tools, FX fees and contingency.",
      y: 137.5,
      h: 15,
    },
  ];

  rowsP1.forEach((r, idx) => {
    if (idx > 0) {
      doc.setDrawColor(...BORDER_COLOR);
      doc.setLineWidth(0.2);
      doc.line(16, r.y, 194, r.y);
    }
    doc.setTextColor(...TEXT_WHITE);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    const catLines = doc.splitTextToSize(r.cat, 50);
    doc.text(catLines, 19, r.y + 6);

    doc.setTextColor(...AMBER_LIGHT);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(r.usd, 72, r.y + 6);

    doc.setTextColor(...TEXT_LIGHT);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(r.zar, 104, r.y + 6);

    const sumLines = doc.splitTextToSize(r.sum, 58);
    doc.text(sumLines, 132, r.y + 4.5);
  });

  // Big Orange Total Callout Banner
  doc.setFillColor(...ORANGE);
  doc.roundedRect(16, 160, 178, 20, 2, 2, "F");

  doc.setTextColor(...BLACK);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("TOTAL CAMPAIGN BUDGET", 21, 168);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("Up to ~R277,200 ZAR · Full operational spend + complete student prize pool", 21, 175);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("UP TO $15,400 USD", 190, 173.5, { align: "right" });

  // Campaign At A Glance
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("CAMPAIGN AT A GLANCE", 16, 190);

  const glanceCards = [
    { label: "DURATION", val: "4–5 weeks", sub: null, x: 16 },
    { label: "DELIVERY", val: "100% virtual", sub: null, x: 77 },
    { label: "REGION", val: "Pan-Africa", sub: "(SA, NG, KE, MZ & more)", x: 138 },
  ];

  glanceCards.forEach((c) => {
    doc.setFillColor(...CARD_BG);
    doc.setDrawColor(...BORDER_COLOR);
    doc.roundedRect(c.x, 193, 56, 20, 1.5, 1.5, "FD");

    doc.setTextColor(...TEXT_MUTED);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.text(c.label, c.x + 4, 199);

    doc.setTextColor(...TEXT_WHITE);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(c.val, c.x + 4, 206.5);

    if (c.sub) {
      doc.setTextColor(...TEXT_MUTED);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(6.5);
      doc.text(c.sub, c.x + 4, 210.5);
    }
  });

  drawFooter("01 / 04");

  // ==========================================
  // PAGE 2: LEADERSHIP & PRIZES
  // ==========================================
  doc.addPage("a4", "portrait");
  drawPageBackground();
  drawHeader("LEADERSHIP & PRIZES");

  // Section 01
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("01", 16, 30);

  doc.setTextColor(...TEXT_WHITE);
  doc.text("PROGRAM DIRECTION & IMPLEMENTATION", 23, 30);

  doc.setTextColor(...AMBER_LIGHT);
  doc.text("$2,500", 194, 30, { align: "right" });

  doc.setTextColor(...TEXT_MUTED);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("Program Director & Lead Implementer · 4–5 week end-to-end virtual leadership", 16, 35);

  doc.setDrawColor(...BORDER_COLOR);
  doc.setLineWidth(0.2);
  doc.line(16, 37.5, 194, 37.5);

  const bulletsP2 = [
    "Master timeline and daily Pan-African Discord / WhatsApp war room (covering hubs across SA, NG, KE, MZ and beyond)",
    "Recruiting and managing 8 Virtual Campus Ambassadors",
    "Digitally onboarding local restaurants and brands onto LIIVRR",
    "Managing campaign leaderboards, rules and anti-fraud checks",
    "Producing and hosting the live Pan-African Virtual Demo Day and payouts",
  ];

  let bulletY = 43;
  bulletsP2.forEach((b) => {
    doc.setFillColor(...AMBER);
    doc.circle(18, bulletY - 1, 0.9, "F");

    doc.setTextColor(...TEXT_LIGHT);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    const bLines = doc.splitTextToSize(b, 170);
    doc.text(bLines, 22, bulletY);
    bulletY += bLines.length > 1 ? 9 : 6;
  });

  // Payment terms
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("PAYMENT TERMS", 16, bulletY + 3);

  doc.setFillColor(...CARD_BG);
  doc.setDrawColor(...BORDER_COLOR);
  doc.roundedRect(16, bulletY + 5.5, 178, 19, 1.5, 1.5, "FD");

  // Col 1
  doc.setTextColor(...AMBER_LIGHT);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("$1,250 · 50% UPFRONT", 21, bulletY + 12);
  doc.setTextColor(...TEXT_LIGHT);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text(
    "Due upon signing — pre-launch setup, Discord/Space setup and ambassador recruitment.",
    21,
    bulletY + 17,
    { maxWidth: 80 },
  );

  // Col 2
  doc.setTextColor(...AMBER_LIGHT);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("$1,250 · 50% BALANCE", 110, bulletY + 12);
  doc.setTextColor(...TEXT_LIGHT);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text("Due at the end of Week 1 of the program.", 110, bulletY + 17, { maxWidth: 80 });

  // Section 02
  const s2Y = bulletY + 31;
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("02", 16, s2Y);

  doc.setTextColor(...TEXT_WHITE);
  doc.text("STUDENT CASH & REWARD PRIZE POOL", 23, s2Y);

  doc.setTextColor(...AMBER_LIGHT);
  doc.text("UP TO $10,000", 194, s2Y, { align: "right" });

  doc.setTextColor(...TEXT_MUTED);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(
    "Paid directly to winners in local currency equivalents (ZAR, NGN, KES, MZN) via mobile money or bank transfer.",
    16,
    s2Y + 5,
  );

  doc.setDrawColor(...BORDER_COLOR);
  doc.setLineWidth(0.2);
  doc.line(16, s2Y + 7.5, 194, s2Y + 7.5);

  // 4 Track cards
  const tracks = [
    {
      title: "TRACK 1 · PAN-AFRICAN BUILDERS (TECH & AI)",
      usd: "$4,000",
      p1: "1st place: $2,000 · 2nd place: $1,250 · 3rd place: $750",
      p2: "Open remotely to all African university developers.",
      y: s2Y + 11,
      h: 21,
    },
    {
      title: "TRACK 2 · CREATORS & CONNECTORS (IN-APP UTILITY)",
      usd: "$3,000",
      p1: "Top Pan-African Connector: $1,000 (most verified sign-ups / circles)",
      p2: "Top City Squad Leaders: 4 primary hubs (e.g. JHB/CPT, Lagos, Nairobi, Maputo) × $500 = $2,000",
      y: s2Y + 34,
      h: 21,
    },
    {
      title: "TRACK 3 · VIRAL STREET & SOCIAL (TIKTOK / IG REELS)",
      usd: "$1,500",
      p1: "Most Viral Pan-African Reel / TikTok: $1,000",
      p2: "Best cross-border “Pass the Vibe” relay clip: $500",
      y: s2Y + 57,
      h: 21,
    },
    {
      title: "INSTANT DIGITAL & DATA MICRO-DROPS",
      usd: "$1,500",
      p1: "1GB–5GB mobile data bundles and digital vouchers, released inside LIIVRR Deals & Drops for instant Circle invites and flash milestones across Pan-Africa (featuring key hubs like South Africa, Nigeria, Kenya and Mozambique).",
      p2: null,
      y: s2Y + 80,
      h: 23,
    },
  ];

  tracks.forEach((t) => {
    doc.setFillColor(...CARD_BG);
    doc.setDrawColor(...BORDER_COLOR);
    doc.roundedRect(16, t.y, 178, t.h, 1.5, 1.5, "FD");

    doc.setTextColor(...TEXT_WHITE);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(t.title, 20, t.y + 6);

    doc.setTextColor(...AMBER_LIGHT);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text(t.usd, 190, t.y + 6, { align: "right" });

    doc.setTextColor(...TEXT_LIGHT);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    const p1Lines = doc.splitTextToSize(t.p1, 168);
    doc.text(p1Lines, 20, t.y + 11.5);

    if (t.p2) {
      doc.setTextColor(...TEXT_MUTED);
      doc.text(t.p2, 20, t.y + 16.5);
    }
  });

  // Student prize pool subtotal
  const subtotalY = s2Y + 106;
  doc.setFillColor(...ORANGE);
  doc.roundedRect(16, subtotalY, 178, 12, 1.5, 1.5, "F");

  doc.setTextColor(...BLACK);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("STUDENT PRIZE POOL SUBTOTAL", 21, subtotalY + 7.5);

  doc.setFontSize(11);
  doc.text("UP TO $10,000", 190, subtotalY + 8, { align: "right" });

  drawFooter("02 / 04");

  // ==========================================
  // PAGE 3: OPERATIONS & TOOLS
  // ==========================================
  doc.addPage("a4", "portrait");
  drawPageBackground();
  drawHeader("OPERATIONS & TOOLS");

  // Title
  doc.setTextColor(...TEXT_WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("FULL OPERATIONAL BREAKDOWN", 16, 29);

  doc.setTextColor(...AMBER_LIGHT);
  doc.setFontSize(13);
  doc.text("$2,900", 194, 29, { align: "right" });

  doc.setTextColor(...TEXT_MUTED);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(
    "Paid promotion, virtual delivery team, platforms and cross-border administration.",
    16,
    34,
  );

  doc.setDrawColor(...BORDER_COLOR);
  doc.setLineWidth(0.2);
  doc.line(16, 36.5, 194, 36.5);

  // Section A
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("A", 16, 43);

  doc.setTextColor(...TEXT_WHITE);
  doc.text("PAID SOCIAL MEDIA ADS & DIGITAL PROMO", 21, 43);

  doc.setTextColor(...AMBER_LIGHT);
  doc.text("$1,100", 194, 43, { align: "right" });

  // Table A
  doc.setFillColor(...CARD_BG);
  doc.setDrawColor(...BORDER_COLOR);
  doc.roundedRect(16, 46, 178, 35, 1.5, 1.5, "FD");

  // Header row
  doc.setFillColor(24, 24, 27);
  doc.rect(16, 46, 178, 6, "F");
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.text("LINE ITEM", 19, 50);
  doc.text("DETAILS & ALLOCATION", 70, 50);
  doc.text("COST (USD)", 190, 50, { align: "right" });

  // Table A Row 1
  doc.setTextColor(...TEXT_WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text("TikTok & Instagram geo-targeted ads", 19, 56, { maxWidth: 48 });

  doc.setTextColor(...TEXT_LIGHT);
  doc.setFont("helvetica", "normal");
  doc.text(
    "Digital radius ads (3–5 km around target university hubs across Pan-Africa, including South Africa, Nigeria, Kenya and Mozambique as key launch examples) to drive app downloads and challenge sign-ups; ~$235 per regional hub.",
    70,
    55,
    { maxWidth: 100 },
  );

  doc.setTextColor(...AMBER_LIGHT);
  doc.setFont("helvetica", "bold");
  doc.text("$950", 190, 56, { align: "right" });

  // Line
  doc.setDrawColor(...BORDER_COLOR);
  doc.line(16, 67, 194, 67);

  // Table A Row 2
  doc.setTextColor(...TEXT_WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text("Virtual Ambassador data stipends", 19, 72, { maxWidth: 48 });

  doc.setTextColor(...TEXT_LIGHT);
  doc.setFont("helvetica", "normal");
  doc.text(
    "Mobile data bundles for 8 leads hosting virtual info sessions, uploading daily Moments and running campus WhatsApp / Discord channels.",
    70,
    71,
    { maxWidth: 100 },
  );

  doc.setTextColor(...AMBER_LIGHT);
  doc.setFont("helvetica", "bold");
  doc.text("$150", 190, 72, { align: "right" });

  // Subtotal row A
  doc.setFillColor(24, 24, 27);
  doc.rect(16, 76, 178, 5, "F");
  doc.setTextColor(...TEXT_MUTED);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.text("SUBTOTAL — PAID ADS & DIGITAL PROMO", 19, 79.5);
  doc.setTextColor(...AMBER_LIGHT);
  doc.text("$1,100", 190, 79.5, { align: "right" });

  // Section B
  const sBY = 86;
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("B", 16, sBY);

  doc.setTextColor(...TEXT_WHITE);
  doc.text("SUPPORTING TEAM & VIRTUAL CAMPUS AMBASSADORS", 21, sBY);

  doc.setTextColor(...AMBER_LIGHT);
  doc.text("$1,200", 194, sBY, { align: "right" });

  // Table B
  doc.setFillColor(...CARD_BG);
  doc.setDrawColor(...BORDER_COLOR);
  doc.roundedRect(16, sBY + 3, 178, 48, 1.5, 1.5, "FD");

  doc.setFillColor(24, 24, 27);
  doc.rect(16, sBY + 3, 178, 6, "F");
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.text("ROLE", 19, sBY + 7);
  doc.text("SCOPE & ALLOCATION", 70, sBY + 7);
  doc.text("COST (USD)", 190, sBY + 7, { align: "right" });

  // Row 1
  doc.setTextColor(...TEXT_WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text("8× Virtual Campus Ambassadors", 19, sBY + 13, { maxWidth: 48 });

  doc.setTextColor(...TEXT_LIGHT);
  doc.setFont("helvetica", "normal");
  doc.text(
    "2 leads per regional hub (1 CS / Coding Club Lead + 1 Digital Creator Lead) in key Pan-African cities (e.g. Johannesburg / Cape Town, Lagos, Nairobi, Maputo and surrounding hubs); $100 each to mobilize student group chats and societies online.",
    70,
    sBY + 12,
    { maxWidth: 100 },
  );

  doc.setTextColor(...AMBER_LIGHT);
  doc.setFont("helvetica", "bold");
  doc.text("$800", 190, sBY + 13, { align: "right" });

  doc.setDrawColor(...BORDER_COLOR);
  doc.line(16, sBY + 24, 194, sBY + 24);

  // Row 2
  doc.setTextColor(...TEXT_WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text("Short-Form Video Editor Support", 19, sBY + 29, { maxWidth: 48 });

  doc.setTextColor(...TEXT_LIGHT);
  doc.setFont("helvetica", "normal");
  doc.text(
    "Part-time editor for cross-border “Pass the Vibe” TikTok / Reel relays, ad hooks and daily City vs. City leaderboard clips.",
    70,
    sBY + 28,
    { maxWidth: 100 },
  );

  doc.setTextColor(...AMBER_LIGHT);
  doc.setFont("helvetica", "bold");
  doc.text("$400", 190, sBY + 29, { align: "right" });

  doc.setDrawColor(...BORDER_COLOR);
  doc.line(16, sBY + 37, 194, sBY + 37);

  // Row 3
  doc.setTextColor(...TEXT_WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text("DevRel / Hackathon Mentor", 19, sBY + 42, { maxWidth: 48 });

  doc.setTextColor(...TEXT_LIGHT);
  doc.setFont("helvetica", "normal");
  doc.text(
    "Handled internally by LIIVRR’s engineering team (API sandbox, mock restaurant datasets and Day 1 virtual workshop).",
    70,
    sBY + 41,
    { maxWidth: 100 },
  );

  doc.setTextColor(...TEXT_MUTED);
  doc.text("$0 (Internal)", 190, sBY + 42, { align: "right" });

  // Subtotal row B
  doc.setFillColor(24, 24, 27);
  doc.rect(16, sBY + 46, 178, 5, "F");
  doc.setTextColor(...TEXT_MUTED);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.text("SUBTOTAL — SUPPORTING TEAM", 19, sBY + 49.5);
  doc.setTextColor(...AMBER_LIGHT);
  doc.text("$1,200", 190, sBY + 49.5, { align: "right" });

  // Section C
  const sCY = 142;
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("C", 16, sCY);

  doc.setTextColor(...TEXT_WHITE);
  doc.text("PLATFORMS, STREAMING & CROSS-BORDER ADMIN", 21, sCY);

  doc.setTextColor(...AMBER_LIGHT);
  doc.text("$600", 194, sCY, { align: "right" });

  // Table C
  doc.setFillColor(...CARD_BG);
  doc.setDrawColor(...BORDER_COLOR);
  doc.roundedRect(16, sCY + 3, 178, 80, 1.5, 1.5, "FD");

  doc.setFillColor(24, 24, 27);
  doc.rect(16, sCY + 3, 178, 6, "F");
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.text("PLATFORM / TOOL", 19, sCY + 7);
  doc.text("PURPOSE", 70, sCY + 7);
  doc.text("COST (USD)", 190, sCY + 7, { align: "right" });

  const rowsC = [
    {
      tool: "Virtual Demo Day livestream",
      purpose:
        "StreamYard (1-month Pro) for the Day 14 Pan-African Virtual Demo Day and live winner announcements across YouTube / IG / TikTok.",
      cost: "$50",
      y: sCY + 12,
    },
    {
      tool: "Airtime / Data Drop API Setup",
      purpose:
        "Reloadly / Africa’s Talking integration fees for automated instant data bundle micro-drops.",
      cost: "$100",
      y: sCY + 25,
    },
    {
      tool: "Design & Leaderboard Tools",
      purpose:
        "Canva Pro / CapCut Pro + Airtable workspace for live embedded City vs. City squad leaderboards.",
      cost: "$50",
      y: sCY + 38,
    },
    {
      tool: "FX & Cross-Border Payout Fees",
      purpose:
        "Paystack / Flutterwave / Wise / M-Pesa transfer and conversion fees (approximately 4–5% across Pan-African currencies including ZAR, NGN, KES, MZN).",
      cost: "$250",
      y: sCY + 51,
    },
    {
      tool: "Digital Operational Contingency",
      purpose:
        "Buffer for extra ad boosts, emergency streaming bandwidth or payment gateway adjustments.",
      cost: "$150",
      y: sCY + 66,
    },
  ];

  rowsC.forEach((r, idx) => {
    if (idx > 0) {
      doc.setDrawColor(...BORDER_COLOR);
      doc.line(16, r.y - 1.5, 194, r.y - 1.5);
    }
    doc.setTextColor(...TEXT_WHITE);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text(r.tool, 19, r.y + 4, { maxWidth: 48 });

    doc.setTextColor(...TEXT_LIGHT);
    doc.setFont("helvetica", "normal");
    doc.text(r.purpose, 70, r.y + 3, { maxWidth: 100 });

    doc.setTextColor(...AMBER_LIGHT);
    doc.setFont("helvetica", "bold");
    doc.text(r.cost, 190, r.y + 4, { align: "right" });
  });

  // Subtotal C
  doc.setFillColor(24, 24, 27);
  doc.rect(16, sCY + 78, 178, 5, "F");
  doc.setTextColor(...TEXT_MUTED);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.text("SUBTOTAL — TOOLS & ADMIN", 19, sCY + 81.5);
  doc.setTextColor(...AMBER_LIGHT);
  doc.text("$600", 190, sCY + 81.5, { align: "right" });

  // Operational Subtotal Banner
  doc.setFillColor(...CARD_BG);
  doc.setDrawColor(...AMBER);
  doc.setLineWidth(0.4);
  doc.roundedRect(16, 230, 178, 12, 1.5, 1.5, "FD");

  doc.setTextColor(...TEXT_LIGHT);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("OPERATIONAL SUBTOTAL · $1,100 + $1,200 + $600", 21, 237.5);

  doc.setTextColor(...AMBER_LIGHT);
  doc.setFontSize(12);
  doc.text("$2,900", 190, 238, { align: "right" });

  drawFooter("03 / 04");

  // ==========================================
  // PAGE 4: TARGETS & OUTCOMES
  // ==========================================
  doc.addPage("a4", "portrait");
  drawPageBackground();
  drawHeader("TARGETS & OUTCOMES");

  // Title
  doc.setTextColor(...TEXT_WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("CAMPAIGN TARGETS & EXPECTED OUTCOMES", 16, 29);

  doc.setTextColor(...AMBER_LIGHT);
  doc.setFontSize(11);
  doc.text("14-DAY SPRINT", 194, 29, { align: "right" });

  doc.setTextColor(...TEXT_MUTED);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(
    "Acquisition volume, blended CAC, in-app utility metrics and viral growth levers.",
    16,
    34,
  );

  doc.setDrawColor(...BORDER_COLOR);
  doc.setLineWidth(0.2);
  doc.line(16, 36.5, 194, 36.5);

  // Executive Reach Callout Box
  doc.setFillColor(...CARD_BG);
  doc.setDrawColor(...AMBER);
  doc.setLineWidth(0.4);
  doc.roundedRect(16, 39, 178, 22, 1.5, 1.5, "FD");

  doc.setTextColor(...AMBER_LIGHT);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("PROJECTED USER ACQUISITION: 4,500 – 8,500 VERIFIED SIGN-UPS", 20, 44);

  doc.setTextColor(...TEXT_WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("BLENDED CAC: $1.80 – $3.40 USD", 190, 44, { align: "right" });

  doc.setDrawColor(...BORDER_COLOR);
  doc.setLineWidth(0.2);
  doc.line(20, 46.5, 190, 46.5);

  doc.setTextColor(...TEXT_LIGHT);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  const reachDesc =
    "With a total campaign spend of up to $15,400 USD across Pan-Africa (anchored by South Africa, Nigeria, Kenya, and Mozambique as key examples), you can realistically target 4,500 to 8,500 verified student sign-ups over the 14-day live sprint. Because the campaign uses a multi-channel acquisition model combining paid social media, mobile data micro-drops, and peer-to-peer squad loops, your blended Customer Acquisition Cost (CAC) stays low between $1.80 and $3.40 per verified user.";
  const reachLines = doc.splitTextToSize(reachDesc, 170);
  doc.text(reachLines, 20, 50.5);

  // Section 1: User Acquisition Breakdown by Channel
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("1. USER ACQUISITION BREAKDOWN BY CHANNEL", 16, 66);

  // Table Container
  doc.setFillColor(...CARD_BG);
  doc.setDrawColor(...BORDER_COLOR);
  doc.roundedRect(16, 69, 178, 50.5, 1.5, 1.5, "FD");

  // Table Header row (Dark zinc)
  doc.setFillColor(24, 24, 27);
  doc.rect(16, 69, 178, 6, "F");
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.text("ACQUISITION CHANNEL", 19, 73);
  doc.text("BUDGET / INCENTIVE DRIVER", 62, 73);
  doc.text("EXPECTED VOLUME", 112, 73);
  doc.text("CONVERSION MECHANICS", 146, 73);

  const channelRows = [
    {
      channel: "Paid Campus Social Ads (TikTok & IG)",
      budget: "$950 ad spend (~$0.25–$0.45 CPI in African student markets)",
      volume: "2,000 – 3,500 users",
      mechanics:
        "Hyper-local 3–5 km radius ads around anchor universities driving direct app installs.",
      y: 75,
      h: 9,
    },
    {
      channel: "Mobile Data Micro-Drops & Viral Referrals",
      budget: "$1,500 data pool (~1,000–1,500 bundles at $1–$1.50 each)",
      volume: "1,500 – 3,000 users",
      mechanics:
        "Students must invite 3+ friends into a LIIVRR Circle to unlock instant 1GB–2GB airtime/data vouchers.",
      y: 84,
      h: 9,
    },
    {
      channel: "8 Virtual Campus Ambassadors & Societies",
      budget: "$800 stipends + $2,000 Squad Leader prizes",
      volume: "700 – 1,400 users",
      mechanics:
        "Direct seeding into university WhatsApp/Telegram residence groups, CS clubs, and student societies.",
      y: 93,
      h: 9,
    },
    {
      channel: "Track 1 Builders & Hackathon Devs",
      budget: "$4,000 developer prize pool",
      volume: "300 – 600 users",
      mechanics:
        "Computer science students forming teams of 2–4 to build Nova agents and venue plugins.",
      y: 102,
      h: 9,
    },
  ];

  channelRows.forEach((r, idx) => {
    if (idx > 0) {
      doc.setDrawColor(...BORDER_COLOR);
      doc.line(16, r.y, 194, r.y);
    }
    doc.setTextColor(...TEXT_WHITE);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text(r.channel, 19, r.y + 4, { maxWidth: 41 });

    doc.setTextColor(...TEXT_LIGHT);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.text(r.budget, 62, r.y + 3.5, { maxWidth: 48 });

    doc.setTextColor(...AMBER_LIGHT);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text(r.volume, 112, r.y + 4);

    doc.setTextColor(...TEXT_LIGHT);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.8);
    doc.text(r.mechanics, 146, r.y + 3, { maxWidth: 46 });
  });

  // Total Row in Table 1 (Orange bar)
  doc.setFillColor(...ORANGE);
  doc.rect(16, 111, 178, 8.5, "F");

  doc.setTextColor(...BLACK);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text("TOTAL CAMPAIGN REACH", 19, 116.5);
  doc.text("$15,400 Total Budget", 62, 116.5);
  doc.text("4,500 – 8,500 Users", 112, 116.5);
  doc.text("Blended CAC: $1.81 – $3.42 / user", 146, 116.5);

  // Section 2: Expected In-App Engagement & Content Output
  const s2Top = 124;
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("2. EXPECTED IN-APP ENGAGEMENT & CONTENT OUTPUT", 16, s2Top);

  const engagementCards = [
    {
      title: "ACTIVE STUDENT CIRCLES (SQUADS)",
      metric: "600 – 1,100",
      desc: "Averaging 4–6 members per squad, locking in social retention rather than isolated sign-ups.",
      x: 16,
      y: s2Top + 3,
      w: 87,
      h: 18.5,
    },
    {
      title: "IN-VENUE MOMENTS & REVIEWS",
      metric: "2,500 – 5,000",
      desc: "Photo/video Moments uploaded tagging local spots across Johannesburg, Cape Town, Lagos, Nairobi, and Maputo.",
      x: 107,
      y: s2Top + 3,
      w: 87,
      h: 18.5,
    },
    {
      title: "CUSTOM AI AGENTS & PLUGINS",
      metric: "40 – 80 Prototypes",
      desc: "Working prototypes (menu concierge bots, group bill-splitters, vibe-check tools) built by university dev teams.",
      x: 16,
      y: s2Top + 24,
      w: 87,
      h: 18.5,
    },
    {
      title: "EXTERNAL SOCIAL IMPRESSIONS",
      metric: "250K – 600K+ Views",
      desc: "Organic views on TikTok & Reels driven by the “Pass the Vibe” relay clips and City vs. City leaderboard rivalries.",
      x: 107,
      y: s2Top + 24,
      w: 87,
      h: 18.5,
    },
  ];

  engagementCards.forEach((c) => {
    doc.setFillColor(...CARD_BG);
    doc.setDrawColor(...BORDER_COLOR);
    doc.roundedRect(c.x, c.y, c.w, c.h, 1.5, 1.5, "FD");

    doc.setTextColor(...TEXT_WHITE);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.text(c.title, c.x + 3.5, c.y + 4.5);

    doc.setTextColor(...AMBER_LIGHT);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(c.metric, c.x + c.w - 3.5, c.y + 4.5, { align: "right" });

    doc.setTextColor(...TEXT_LIGHT);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.8);
    const dLines = doc.splitTextToSize(c.desc, c.w - 7);
    doc.text(dLines, c.x + 3.5, c.y + 9);
  });

  // Section 3: Key Levers That Push You Toward the 8,500+ Upper Limit
  const s3Top = 171;
  doc.setTextColor(...AMBER);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("3. KEY LEVERS THAT PUSH YOU TOWARD THE 8,500+ UPPER LIMIT", 16, s3Top);

  doc.setFillColor(...CARD_BG);
  doc.setDrawColor(...BORDER_COLOR);
  doc.roundedRect(16, s3Top + 3, 178, 102, 1.5, 1.5, "FD");

  const levers = [
    {
      title: "Instant Data-for-Invite Triggers:",
      body: "African university students respond fastest to immediate utility. Automating the 1GB data drop the second a 4th member joins a student’s Circle creates a self-sustaining referral loop that cuts your paid ad reliance in half.",
      y: s3Top + 6,
    },
    {
      title: "Pre-Loaded Venue Drops on Day 1:",
      body: "Having at least 3 to 5 live restaurant or nightlife vouchers active inside LIIVRR in each anchor city before Day 1 ensures that paid ad clicks convert into immediate active sessions rather than app churn.",
      y: s3Top + 39,
    },
    {
      title: "City vs. City Pride:",
      body: "Publishing a daily visual leaderboard pitting Lagos vs. Joburg vs. Nairobi vs. Maputo triggers competitive sharing inside campus group chats at zero extra ad cost.",
      y: s3Top + 72,
    },
  ];

  levers.forEach((l, idx) => {
    if (idx > 0) {
      doc.setDrawColor(...BORDER_COLOR);
      doc.line(20, l.y - 3, 190, l.y - 3);
    }

    doc.setFillColor(...AMBER);
    doc.circle(21, l.y + 2, 0.9, "F");

    doc.setTextColor(...TEXT_WHITE);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(l.title, 25, l.y + 3);

    doc.setTextColor(...TEXT_LIGHT);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    const bLines = doc.splitTextToSize(l.body, 163);
    doc.text(bLines, 25, l.y + 8);
  });

  drawFooter("04 / 04");

  // Output buffer
  const arrayBuffer = doc.output("arraybuffer");
  return Buffer.from(arrayBuffer);
}

// Write to all target locations
const pdfBuffer = generatePdf();

const targets = [
  path.join(__dirname, "../public/liivrr-thon-campaign-budget.pdf"),
  path.join(__dirname, "../public/liivrr-thon-pan-african-campaign-budget.pdf"),
  path.join(__dirname, "../public/assets/aistudio/liivrr-thon-campaign-budget__1__da473dfd.pdf"),
];

targets.forEach((targetPath) => {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, pdfBuffer);
  console.log(`Saved ${pdfBuffer.length} bytes to ${targetPath}`);
});

console.log("PDF generation complete!");
