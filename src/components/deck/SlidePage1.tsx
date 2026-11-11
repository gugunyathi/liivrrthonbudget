import React from "react";

export function SlidePage1({ id }: { id?: string } = {}) {
  return (
    <article
      id={id}
      className="a4-page relative flex flex-col justify-between bg-[#0b0d13] text-zinc-100 p-6 sm:p-9 md:p-12 shadow-2xl rounded-sm border border-zinc-800/80 mx-auto select-text overflow-hidden print-page"
      aria-label="Liivrr-thon Campaign Budget - Page 1 of 3: Budget Overview"
    >
      {/* Top Header */}
      <header className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-4 bg-amber-500 rounded-xs inline-block" />
          <span className="font-extrabold tracking-wider text-xs sm:text-sm text-white">
            LIIVRR-THON
          </span>
        </div>
        <span className="text-[11px] font-semibold tracking-widest text-zinc-400 uppercase">
          BUDGET OVERVIEW
        </span>
      </header>

      {/* Main Content Body */}
      <div className="flex flex-col gap-4 sm:gap-5 my-auto py-2">
        {/* Kicker & Title */}
        <section className="space-y-1">
          <p className="text-amber-400 font-bold tracking-widest text-[11px] sm:text-xs uppercase">
            PAN-AFRICA · ONE VIRTUAL SPRINT
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-[42px] font-black text-white tracking-tight leading-none uppercase pt-0.5">
            LIIVRR-THON:
            <br />
            CAMPAIGN BUDGET
          </h1>
          <p className="text-zinc-400 font-semibold text-xs sm:text-[13px] tracking-wider uppercase pt-1">
            COMPLETE VIRTUAL CAMPAIGN &amp; OPERATIONAL BUDGET
          </p>
        </section>

        {/* Narrative Description */}
        <section className="text-xs sm:text-[13px] text-zinc-300 space-y-1 leading-relaxed">
          <p className="font-medium text-white/95">
            A 4–5 week Pan-African virtual sprint across Africa (featuring key hubs such as South
            Africa, Nigeria, Kenya and Mozambique as examples).
          </p>
          <p className="text-zinc-400">
            100% digital and remote execution — no physical campus booths, print kits or venue AV
            logistics.
          </p>
        </section>

        {/* Executive Budget Summary Table */}
        <section className="space-y-1.5">
          <h2 className="text-amber-500 font-bold text-xs uppercase tracking-wider">
            EXECUTIVE BUDGET SUMMARY
          </h2>

          <div className="rounded-md overflow-hidden border border-zinc-800/90 bg-[#10141f]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f97316] text-black font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider">
                  <th className="py-2.5 px-3 sm:px-4 w-[28%] font-black">BUDGET CATEGORY</th>
                  <th className="py-2.5 px-2.5 sm:px-3 w-[16%] font-black">TOTAL COST (USD)</th>
                  <th className="py-2.5 px-2.5 sm:px-3 w-[16%] font-black">APPROX. ZAR</th>
                  <th className="py-2.5 px-3 sm:px-4 w-[40%] font-black">SUMMARY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80 text-xs">
                <tr className="hover:bg-zinc-800/30 transition-colors">
                  <td className="py-2.5 px-3 sm:px-4 font-semibold text-white">
                    1. Program Director &amp; Lead Implementer
                  </td>
                  <td className="py-2.5 px-2.5 sm:px-3 font-mono font-bold text-amber-400">
                    $2,500
                  </td>
                  <td className="py-2.5 px-2.5 sm:px-3 font-mono text-zinc-300">~R45,000</td>
                  <td className="py-2.5 px-3 sm:px-4 text-[11px] sm:text-xs text-zinc-300 leading-snug">
                    4–5 weeks of end-to-end virtual campaign leadership, ambassador management,
                    digital partner onboarding and Virtual Demo Day production.
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/30 transition-colors">
                  <td className="py-2.5 px-3 sm:px-4 font-semibold text-white">
                    2. Student Cash &amp; Reward Prize Pool
                  </td>
                  <td className="py-2.5 px-2.5 sm:px-3 font-mono font-bold text-amber-400">
                    Up to $10,000
                  </td>
                  <td className="py-2.5 px-2.5 sm:px-3 font-mono text-zinc-300">Up to ~R180,000</td>
                  <td className="py-2.5 px-3 sm:px-4 text-[11px] sm:text-xs text-zinc-300 leading-snug">
                    Builders, creators and viral rewards, city squad leader prizes, plus instant
                    mobile data micro-drops.
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/30 transition-colors">
                  <td className="py-2.5 px-3 sm:px-4 font-semibold text-white">
                    3. Paid Social &amp; Digital Promo
                  </td>
                  <td className="py-2.5 px-2.5 sm:px-3 font-mono font-bold text-amber-400">
                    $1,100
                  </td>
                  <td className="py-2.5 px-2.5 sm:px-3 font-mono text-zinc-300">~R19,800</td>
                  <td className="py-2.5 px-3 sm:px-4 text-[11px] sm:text-xs text-zinc-300 leading-snug">
                    Geo-targeted TikTok and Instagram ads across Pan-Africa (focusing on key hubs
                    like South Africa, Nigeria, Kenya and Mozambique), plus virtual ambassador data
                    stipends.
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/30 transition-colors">
                  <td className="py-2.5 px-3 sm:px-4 font-semibold text-white">
                    4. Other Execution &amp; Platform Costs
                  </td>
                  <td className="py-2.5 px-2.5 sm:px-3 font-mono font-bold text-amber-400">
                    $1,800
                  </td>
                  <td className="py-2.5 px-2.5 sm:px-3 font-mono text-zinc-300">~R32,400</td>
                  <td className="py-2.5 px-3 sm:px-4 text-[11px] sm:text-xs text-zinc-300 leading-snug">
                    Eight virtual campus ambassadors, video editing, livestream and API tools, FX
                    fees and contingency.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Big Orange Total Callout Banner */}
        <section className="bg-[#f97316] rounded-md p-3.5 sm:p-4 text-black flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 shadow-lg">
          <div>
            <p className="font-black text-xs uppercase tracking-wider text-black">
              TOTAL CAMPAIGN BUDGET
            </p>
            <p className="text-xs font-semibold text-black/85 mt-0.5">
              Up to ~R277,200 ZAR · Full operational spend + complete student prize pool
            </p>
          </div>
          <div className="sm:text-right shrink-0">
            <span className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight whitespace-nowrap">
              UP TO $15,400 USD
            </span>
          </div>
        </section>

        {/* Campaign At A Glance */}
        <section className="space-y-1.5">
          <p className="text-amber-500 font-bold text-[11px] uppercase tracking-wider">
            CAMPAIGN AT A GLANCE
          </p>
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            <div className="bg-[#10141f] border border-zinc-800/80 rounded-md p-3">
              <span className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase block">
                DURATION
              </span>
              <span className="text-sm sm:text-base font-bold text-white block mt-0.5">
                4–5 weeks
              </span>
            </div>
            <div className="bg-[#10141f] border border-zinc-800/80 rounded-md p-3">
              <span className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase block">
                DELIVERY
              </span>
              <span className="text-sm sm:text-base font-bold text-white block mt-0.5">
                100% virtual
              </span>
            </div>
            <div className="bg-[#10141f] border border-zinc-800/80 rounded-md p-3">
              <span className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase block">
                REGION
              </span>
              <span className="text-sm sm:text-base font-bold text-white block mt-0.5">
                Pan-Africa
              </span>
              <span className="text-[10px] text-zinc-400 block mt-0.5">
                (SA, NG, KE, MZ &amp; more)
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between pt-3 border-t border-zinc-800/80 text-[10px] sm:text-[11px] text-zinc-500">
        <span className="tracking-wider uppercase font-medium">
          COMPLETE VIRTUAL CAMPAIGN &amp; OPERATIONAL BUDGET
        </span>
        <span className="font-mono font-medium">01 / 04</span>
      </footer>
    </article>
  );
}
