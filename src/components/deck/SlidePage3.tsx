import React from "react";

export function SlidePage3({ id }: { id?: string } = {}) {
  return (
    <article
      id={id}
      className="a4-page relative flex flex-col justify-between bg-[#0b0d13] text-zinc-100 p-6 sm:p-9 md:p-12 shadow-2xl rounded-sm border border-zinc-800/80 mx-auto select-text overflow-hidden print-page"
      aria-label="Liivrr-thon Campaign Budget - Page 3 of 3: Operations & Tools"
    >
      {/* Top Header */}
      <header className="flex items-center justify-between pb-3 sm:pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-4 bg-amber-500 rounded-xs inline-block" />
          <span className="font-extrabold tracking-wider text-xs sm:text-sm text-white">
            LIIVRR-THON
          </span>
        </div>
        <span className="text-[11px] font-semibold tracking-widest text-zinc-400 uppercase">
          OPERATIONS &amp; TOOLS
        </span>
      </header>

      {/* Main Content Body */}
      <div className="flex flex-col gap-3.5 sm:gap-4 my-auto py-1">
        {/* Top Operational Heading */}
        <section className="flex items-start justify-between gap-2 border-b border-zinc-800/60 pb-2">
          <div>
            <h1 className="text-base sm:text-xl font-black text-white tracking-tight uppercase">
              FULL OPERATIONAL BREAKDOWN
            </h1>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">
              Paid promotion, virtual delivery team, platforms and cross-border administration.
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="font-mono font-black text-amber-400 text-base sm:text-xl">$2,900</span>
          </div>
        </section>

        {/* Section A: Paid Social Media Ads & Digital Promo */}
        <section className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-amber-500 font-black text-xs sm:text-sm">A</span>
              <h2 className="text-xs sm:text-[13px] font-bold text-white uppercase tracking-wide">
                PAID SOCIAL MEDIA ADS &amp; DIGITAL PROMO
              </h2>
            </div>
            <span className="font-mono font-bold text-amber-400 text-xs sm:text-sm">$1,100</span>
          </div>

          <div className="rounded-md overflow-hidden border border-zinc-800/80 bg-[#10141f]">
            <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
              <thead>
                <tr className="bg-zinc-900/90 text-amber-400/90 font-bold text-[10px] uppercase border-b border-zinc-800/80">
                  <th className="py-1.5 px-3 w-[34%]">LINE ITEM</th>
                  <th className="py-1.5 px-3 w-[52%]">DETAILS &amp; ALLOCATION</th>
                  <th className="py-1.5 px-3 w-[14%] text-right">COST (USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                <tr className="hover:bg-zinc-800/20">
                  <td className="py-1.5 px-3 font-medium text-white align-top">
                    TikTok &amp; Instagram geo-targeted ads
                  </td>
                  <td className="py-1.5 px-3 text-zinc-300 leading-snug">
                    Digital radius ads (3–5 km around target university hubs across Pan-Africa,
                    including South Africa, Nigeria, Kenya and Mozambique as key launch examples) to
                    drive app downloads and challenge sign-ups; ~$235 per regional hub.
                  </td>
                  <td className="py-1.5 px-3 font-mono font-bold text-amber-400 text-right align-top">
                    $950
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/20">
                  <td className="py-1.5 px-3 font-medium text-white align-top">
                    Virtual Ambassador data stipends
                  </td>
                  <td className="py-1.5 px-3 text-zinc-300 leading-snug">
                    Mobile data bundles for 8 leads hosting virtual info sessions, uploading daily
                    Moments and running campus WhatsApp / Discord channels.
                  </td>
                  <td className="py-1.5 px-3 font-mono font-bold text-amber-400 text-right align-top">
                    $150
                  </td>
                </tr>
                <tr className="bg-zinc-900/50 font-bold text-zinc-200">
                  <td
                    colSpan={2}
                    className="py-1 px-3 text-[10px] uppercase tracking-wider text-zinc-400"
                  >
                    SUBTOTAL — PAID ADS &amp; DIGITAL PROMO
                  </td>
                  <td className="py-1 px-3 font-mono text-amber-400 text-right">$1,100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section B: Supporting Team & Virtual Campus Ambassadors */}
        <section className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-amber-500 font-black text-xs sm:text-sm">B</span>
              <h2 className="text-xs sm:text-[13px] font-bold text-white uppercase tracking-wide">
                SUPPORTING TEAM &amp; VIRTUAL CAMPUS AMBASSADORS
              </h2>
            </div>
            <span className="font-mono font-bold text-amber-400 text-xs sm:text-sm">$1,200</span>
          </div>

          <div className="rounded-md overflow-hidden border border-zinc-800/80 bg-[#10141f]">
            <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
              <thead>
                <tr className="bg-zinc-900/90 text-amber-400/90 font-bold text-[10px] uppercase border-b border-zinc-800/80">
                  <th className="py-1.5 px-3 w-[34%]">ROLE</th>
                  <th className="py-1.5 px-3 w-[52%]">SCOPE &amp; ALLOCATION</th>
                  <th className="py-1.5 px-3 w-[14%] text-right">COST (USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                <tr className="hover:bg-zinc-800/20">
                  <td className="py-1.5 px-3 font-medium text-white align-top">
                    8× Virtual Campus Ambassadors
                  </td>
                  <td className="py-1.5 px-3 text-zinc-300 leading-snug">
                    2 leads per regional hub (1 CS / Coding Club Lead + 1 Digital Creator Lead) in
                    key Pan-African cities (e.g. Johannesburg / Cape Town, Lagos, Nairobi, Maputo
                    and surrounding hubs); $100 each to mobilize student group chats and societies
                    online.
                  </td>
                  <td className="py-1.5 px-3 font-mono font-bold text-amber-400 text-right align-top">
                    $800
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/20">
                  <td className="py-1.5 px-3 font-medium text-white align-top">
                    Short-Form Video Editor Support
                  </td>
                  <td className="py-1.5 px-3 text-zinc-300 leading-snug">
                    Part-time editor for cross-border “Pass the Vibe” TikTok / Reel relays, ad hooks
                    and daily City vs. City leaderboard clips.
                  </td>
                  <td className="py-1.5 px-3 font-mono font-bold text-amber-400 text-right align-top">
                    $400
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/20">
                  <td className="py-1.5 px-3 font-medium text-white align-top">
                    DevRel / Hackathon Mentor
                  </td>
                  <td className="py-1.5 px-3 text-zinc-300 leading-snug">
                    Handled internally by LIIVRR’s engineering team (API sandbox, mock restaurant
                    datasets and Day 1 virtual workshop).
                  </td>
                  <td className="py-1.5 px-3 font-mono text-zinc-400 text-right align-top">
                    $0 (Internal)
                  </td>
                </tr>
                <tr className="bg-zinc-900/50 font-bold text-zinc-200">
                  <td
                    colSpan={2}
                    className="py-1 px-3 text-[10px] uppercase tracking-wider text-zinc-400"
                  >
                    SUBTOTAL — SUPPORTING TEAM
                  </td>
                  <td className="py-1 px-3 font-mono text-amber-400 text-right">$1,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section C: Platforms, Streaming & Cross-Border Admin */}
        <section className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-amber-500 font-black text-xs sm:text-sm">C</span>
              <h2 className="text-xs sm:text-[13px] font-bold text-white uppercase tracking-wide">
                PLATFORMS, STREAMING &amp; CROSS-BORDER ADMIN
              </h2>
            </div>
            <span className="font-mono font-bold text-amber-400 text-xs sm:text-sm">$600</span>
          </div>

          <div className="rounded-md overflow-hidden border border-zinc-800/80 bg-[#10141f]">
            <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
              <thead>
                <tr className="bg-zinc-900/90 text-amber-400/90 font-bold text-[10px] uppercase border-b border-zinc-800/80">
                  <th className="py-1.5 px-3 w-[34%]">PLATFORM / TOOL</th>
                  <th className="py-1.5 px-3 w-[52%]">PURPOSE</th>
                  <th className="py-1.5 px-3 w-[14%] text-right">COST (USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                <tr className="hover:bg-zinc-800/20">
                  <td className="py-1.5 px-3 font-medium text-white align-top">
                    Virtual Demo Day livestream
                  </td>
                  <td className="py-1.5 px-3 text-zinc-300 leading-snug">
                    StreamYard (1-month Pro) for the Day 14 Pan-African Virtual Demo Day and live
                    winner announcements across YouTube / IG / TikTok.
                  </td>
                  <td className="py-1.5 px-3 font-mono font-bold text-amber-400 text-right align-top">
                    $50
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/20">
                  <td className="py-1.5 px-3 font-medium text-white align-top">
                    Airtime / Data Drop API Setup
                  </td>
                  <td className="py-1.5 px-3 text-zinc-300 leading-snug">
                    Reloadly / Africa’s Talking integration fees for automated instant data bundle
                    micro-drops.
                  </td>
                  <td className="py-1.5 px-3 font-mono font-bold text-amber-400 text-right align-top">
                    $100
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/20">
                  <td className="py-1.5 px-3 font-medium text-white align-top">
                    Design &amp; Leaderboard Tools
                  </td>
                  <td className="py-1.5 px-3 text-zinc-300 leading-snug">
                    Canva Pro / CapCut Pro + Airtable workspace for live embedded City vs. City
                    squad leaderboards.
                  </td>
                  <td className="py-1.5 px-3 font-mono font-bold text-amber-400 text-right align-top">
                    $50
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/20">
                  <td className="py-1.5 px-3 font-medium text-white align-top">
                    FX &amp; Cross-Border Payout Fees
                  </td>
                  <td className="py-1.5 px-3 text-zinc-300 leading-snug">
                    Paystack / Flutterwave / Wise / M-Pesa transfer and conversion fees
                    (approximately 4–5% across Pan-African currencies including ZAR, NGN, KES, MZN).
                  </td>
                  <td className="py-1.5 px-3 font-mono font-bold text-amber-400 text-right align-top">
                    $250
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/20">
                  <td className="py-1.5 px-3 font-medium text-white align-top">
                    Digital Operational Contingency
                  </td>
                  <td className="py-1.5 px-3 text-zinc-300 leading-snug">
                    Buffer for extra ad boosts, emergency streaming bandwidth or payment gateway
                    adjustments.
                  </td>
                  <td className="py-1.5 px-3 font-mono font-bold text-amber-400 text-right align-top">
                    $150
                  </td>
                </tr>
                <tr className="bg-zinc-900/50 font-bold text-zinc-200">
                  <td
                    colSpan={2}
                    className="py-1 px-3 text-[10px] uppercase tracking-wider text-zinc-400"
                  >
                    SUBTOTAL — TOOLS &amp; ADMIN
                  </td>
                  <td className="py-1 px-3 font-mono text-amber-400 text-right">$600</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Operational Subtotal Banner */}
        <section className="bg-[#10141f] border border-amber-500/40 rounded-md p-3 flex items-center justify-between text-zinc-100 shadow-md">
          <span className="font-bold text-xs uppercase tracking-wider text-zinc-300">
            OPERATIONAL SUBTOTAL · $1,100 + $1,200 + $600
          </span>
          <span className="font-mono font-black text-amber-400 text-base sm:text-xl">$2,900</span>
        </section>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between pt-3 border-t border-zinc-800/80 text-[10px] sm:text-[11px] text-zinc-500">
        <span className="tracking-wider uppercase font-medium">
          COMPLETE VIRTUAL CAMPAIGN &amp; OPERATIONAL BUDGET
        </span>
        <span className="font-mono font-medium">03 / 04</span>
      </footer>
    </article>
  );
}
