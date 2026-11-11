import React from "react";

export function SlidePage4({ id }: { id?: string } = {}) {
  return (
    <article
      id={id}
      className="a4-page relative flex flex-col justify-between bg-[#0b0d13] text-zinc-100 p-6 sm:p-9 md:p-12 shadow-2xl rounded-sm border border-zinc-800/80 mx-auto select-text overflow-hidden print-page"
      aria-label="Liivrr-thon Campaign Budget - Page 4 of 4: Targets & Expected Outcomes"
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
          TARGETS &amp; OUTCOMES
        </span>
      </header>

      {/* Main Content Body */}
      <div className="flex flex-col gap-3 sm:gap-3.5 my-auto py-1">
        {/* Title & Big Reach Banner */}
        <section className="space-y-2">
          <div className="flex items-start justify-between gap-2 border-b border-zinc-800/60 pb-1.5">
            <div>
              <h1 className="text-base sm:text-xl font-black text-white tracking-tight uppercase">
                CAMPAIGN TARGETS &amp; EXPECTED OUTCOMES
              </h1>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">
                Acquisition volume, blended CAC, in-app utility metrics and viral growth levers.
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="font-mono font-black text-amber-400 text-sm sm:text-base">
                14-DAY SPRINT
              </span>
            </div>
          </div>

          {/* Executive Reach Callout Box */}
          <div className="bg-[#10141f] border border-amber-500/40 rounded-md p-2.5 sm:p-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-zinc-800/60 pb-1.5 mb-1.5">
              <span className="font-black text-xs uppercase tracking-wider text-amber-400">
                PROJECTED USER ACQUISITION: 4,500 – 8,500 VERIFIED SIGN-UPS
              </span>
              <span className="font-mono font-bold text-xs text-zinc-300">
                BLENDED CAC: <strong className="text-amber-400">$1.80 – $3.40 USD</strong>
              </span>
            </div>
            <p className="text-[11px] text-zinc-300 leading-relaxed">
              With a total campaign spend of up to{" "}
              <strong className="text-white">$15,400 USD</strong> across Pan-Africa (anchored by
              South Africa, Nigeria, Kenya, and Mozambique as key examples), you can realistically
              target 4,500 to 8,500 verified student sign-ups over the 14-day live sprint. Because
              the campaign uses a multi-channel acquisition model combining paid social media,
              mobile data micro-drops, and peer-to-peer squad loops, your blended Customer
              Acquisition Cost (CAC) stays low between $1.80 and $3.40 per verified user.
            </p>
          </div>
        </section>

        {/* Section 1: User Acquisition Breakdown by Channel */}
        <section className="space-y-1">
          <h2 className="text-amber-500 font-bold text-xs uppercase tracking-wide">
            1. USER ACQUISITION BREAKDOWN BY CHANNEL
          </h2>

          <div className="rounded-md overflow-hidden border border-zinc-800/80 bg-[#10141f]">
            <table className="w-full text-left border-collapse text-[10px] sm:text-[11px]">
              <thead>
                <tr className="bg-zinc-900/90 text-amber-400/90 font-bold text-[9.5px] uppercase border-b border-zinc-800/80">
                  <th className="py-1.5 px-2.5 w-[25%]">ACQUISITION CHANNEL</th>
                  <th className="py-1.5 px-2 w-[24%]">BUDGET / INCENTIVE DRIVER</th>
                  <th className="py-1.5 px-2 w-[22%]">EXPECTED VOLUME</th>
                  <th className="py-1.5 px-2.5 w-[29%]">CONVERSION MECHANICS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                <tr className="hover:bg-zinc-800/20">
                  <td className="py-1.5 px-2.5 font-semibold text-white align-top">
                    Paid Campus Social Ads (TikTok &amp; IG)
                  </td>
                  <td className="py-1.5 px-2 text-zinc-300 leading-tight align-top">
                    $950 ad spend (~$0.25–$0.45 CPI in African student markets)
                  </td>
                  <td className="py-1.5 px-2 font-mono font-bold text-amber-400 align-top whitespace-nowrap">
                    2,000 – 3,500 users
                  </td>
                  <td className="py-1.5 px-2.5 text-zinc-300 leading-tight align-top text-[10px]">
                    Hyper-local 3–5 km radius ads around anchor universities driving direct app
                    installs.
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/20">
                  <td className="py-1.5 px-2.5 font-semibold text-white align-top">
                    Mobile Data Micro-Drops &amp; Viral Referrals
                  </td>
                  <td className="py-1.5 px-2 text-zinc-300 leading-tight align-top">
                    $1,500 data pool (~1,000–1,500 bundles at $1–$1.50 each)
                  </td>
                  <td className="py-1.5 px-2 font-mono font-bold text-amber-400 align-top whitespace-nowrap">
                    1,500 – 3,000 users
                  </td>
                  <td className="py-1.5 px-2.5 text-zinc-300 leading-tight align-top text-[10px]">
                    Students must invite 3+ friends into a LIIVRR Circle to unlock instant 1GB–2GB
                    airtime/data vouchers.
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/20">
                  <td className="py-1.5 px-2.5 font-semibold text-white align-top">
                    8 Virtual Campus Ambassadors &amp; Societies
                  </td>
                  <td className="py-1.5 px-2 text-zinc-300 leading-tight align-top">
                    $800 stipends + $2,000 Squad Leader prizes
                  </td>
                  <td className="py-1.5 px-2 font-mono font-bold text-amber-400 align-top whitespace-nowrap">
                    700 – 1,400 users
                  </td>
                  <td className="py-1.5 px-2.5 text-zinc-300 leading-tight align-top text-[10px]">
                    Direct seeding into university WhatsApp/Telegram residence groups, CS clubs, and
                    student societies.
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/20">
                  <td className="py-1.5 px-2.5 font-semibold text-white align-top">
                    Track 1 Builders &amp; Hackathon Devs
                  </td>
                  <td className="py-1.5 px-2 text-zinc-300 leading-tight align-top">
                    $4,000 developer prize pool
                  </td>
                  <td className="py-1.5 px-2 font-mono font-bold text-amber-400 align-top whitespace-nowrap">
                    300 – 600 users
                  </td>
                  <td className="py-1.5 px-2.5 text-zinc-300 leading-tight align-top text-[10px]">
                    Computer science students forming teams of 2–4 to build Nova agents and venue
                    plugins.
                  </td>
                </tr>
                {/* Total Row */}
                <tr className="bg-[#f97316] text-black font-extrabold text-[10.5px]">
                  <td className="py-1.5 px-2.5 uppercase font-black">TOTAL CAMPAIGN REACH</td>
                  <td className="py-1.5 px-2 font-black">$15,400 Total Budget</td>
                  <td className="py-1.5 px-2 font-black whitespace-nowrap">4,500 – 8,500 Users</td>
                  <td className="py-1.5 px-2.5 font-black">Blended CAC: $1.81 – $3.42 / user</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Expected In-App Engagement & Content Output */}
        <section className="space-y-1">
          <h2 className="text-amber-500 font-bold text-xs uppercase tracking-wide">
            2. EXPECTED IN-APP ENGAGEMENT &amp; CONTENT OUTPUT
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="bg-[#10141f] border border-zinc-800/80 rounded-md p-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white text-[11px]">
                  ACTIVE STUDENT CIRCLES (SQUADS)
                </span>
                <span className="font-mono font-bold text-amber-400 text-xs">600 – 1,100</span>
              </div>
              <p className="text-[10px] sm:text-[10.5px] text-zinc-300 mt-0.5 leading-snug">
                Averaging 4–6 members per squad, locking in social retention rather than isolated
                sign-ups.
              </p>
            </div>

            <div className="bg-[#10141f] border border-zinc-800/80 rounded-md p-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white text-[11px]">
                  IN-VENUE MOMENTS &amp; REVIEWS
                </span>
                <span className="font-mono font-bold text-amber-400 text-xs">2,500 – 5,000</span>
              </div>
              <p className="text-[10px] sm:text-[10.5px] text-zinc-300 mt-0.5 leading-snug">
                Photo/video Moments uploaded tagging local restaurants, campus hangouts, and
                nightlife spots across JHB, Cape Town, Lagos, Nairobi, and Maputo.
              </p>
            </div>

            <div className="bg-[#10141f] border border-zinc-800/80 rounded-md p-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white text-[11px]">
                  CUSTOM AI AGENTS &amp; PLUGINS
                </span>
                <span className="font-mono font-bold text-amber-400 text-xs">
                  40 – 80 Prototypes
                </span>
              </div>
              <p className="text-[10px] sm:text-[10.5px] text-zinc-300 mt-0.5 leading-snug">
                Working prototypes (menu concierge bots, group bill-splitters, vibe-check tools)
                built by university developer teams.
              </p>
            </div>

            <div className="bg-[#10141f] border border-zinc-800/80 rounded-md p-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white text-[11px]">
                  EXTERNAL SOCIAL IMPRESSIONS
                </span>
                <span className="font-mono font-bold text-amber-400 text-xs">
                  250K – 600K+ Views
                </span>
              </div>
              <p className="text-[10px] sm:text-[10.5px] text-zinc-300 mt-0.5 leading-snug">
                Organic views on TikTok &amp; Reels driven by the &quot;Pass the Vibe&quot; relay
                clips and City vs. City leaderboard rivalries.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Key Levers That Push You Toward the 8,500+ Upper Limit */}
        <section className="space-y-1">
          <h2 className="text-amber-500 font-bold text-xs uppercase tracking-wide">
            3. KEY LEVERS THAT PUSH YOU TOWARD THE 8,500+ UPPER LIMIT
          </h2>

          <div className="space-y-1.5 text-[10.5px] sm:text-[11px] text-zinc-300 bg-[#10141f] border border-zinc-800/80 rounded-md p-2.5">
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
              <div>
                <strong className="text-white">Instant Data-for-Invite Triggers:</strong> African
                university students respond fastest to immediate utility. Automating the 1GB data
                drop the second a 4th member joins a student&apos;s Circle creates a self-sustaining
                referral loop that cuts paid ad reliance in half.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
              <div>
                <strong className="text-white">Pre-Loaded Venue Drops on Day 1:</strong> Having at
                least 3 to 5 live restaurant or nightlife vouchers active inside LIIVRR in each
                anchor city before Day 1 ensures that paid ad clicks convert into immediate active
                sessions rather than app churn.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
              <div>
                <strong className="text-white">City vs. City Pride:</strong> Publishing a daily
                visual leaderboard pitting Lagos vs. Joburg vs. Nairobi vs. Maputo triggers
                competitive sharing inside campus group chats at zero extra ad cost.
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between pt-3 border-t border-zinc-800/80 text-[10px] sm:text-[11px] text-zinc-500">
        <span className="tracking-wider uppercase font-medium">
          COMPLETE VIRTUAL CAMPAIGN &amp; OPERATIONAL BUDGET
        </span>
        <span className="font-mono font-medium">04 / 04</span>
      </footer>
    </article>
  );
}
