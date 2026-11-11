import React from "react";

export function SlidePage2({ id }: { id?: string } = {}) {
  return (
    <article
      id={id}
      className="a4-page relative flex flex-col justify-between bg-[#0b0d13] text-zinc-100 p-6 sm:p-9 md:p-12 shadow-2xl rounded-sm border border-zinc-800/80 mx-auto select-text overflow-hidden print-page"
      aria-label="Liivrr-thon Campaign Budget - Page 2 of 3: Leadership & Prizes"
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
          LEADERSHIP &amp; PRIZES
        </span>
      </header>

      {/* Main Content Body */}
      <div className="flex flex-col gap-4 sm:gap-5 my-auto py-2">
        {/* Section 01: Program Direction */}
        <section className="space-y-3">
          <div className="flex items-start justify-between gap-2 border-b border-zinc-800/60 pb-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-black text-sm sm:text-base">01</span>
                <h2 className="text-sm sm:text-base md:text-lg font-black text-white tracking-wide uppercase">
                  PROGRAM DIRECTION &amp; IMPLEMENTATION
                </h2>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">
                Program Director &amp; Lead Implementer · 4–5 week end-to-end virtual leadership
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="font-mono font-black text-amber-400 text-sm sm:text-lg">$2,500</span>
            </div>
          </div>

          {/* Bullets with Amber Dots */}
          <ul className="space-y-1.5 text-xs sm:text-[13px] text-zinc-300">
            {[
              "Master timeline and daily Pan-African Discord / WhatsApp war room (covering hubs across SA, NG, KE, MZ and beyond)",
              "Recruiting and managing 8 Virtual Campus Ambassadors",
              "Digitally onboarding local restaurants and brands onto LIIVRR",
              "Managing campaign leaderboards, rules and anti-fraud checks",
              "Producing and hosting the live Pan-African Virtual Demo Day and payouts",
            ].map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span className="leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Payment Terms Sub-card */}
          <div className="pt-1">
            <h3 className="text-amber-500 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider mb-1.5">
              PAYMENT TERMS
            </h3>
            <div className="bg-[#10141f] border border-zinc-800/80 rounded-md p-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <p className="font-mono font-bold text-amber-400 text-xs">$1,250 · 50% UPFRONT</p>
                <p className="text-[11px] text-zinc-300 mt-0.5 leading-snug">
                  Due upon signing — pre-launch setup, Discord/Space setup and ambassador
                  recruitment.
                </p>
              </div>
              <div>
                <p className="font-mono font-bold text-amber-400 text-xs">$1,250 · 50% BALANCE</p>
                <p className="text-[11px] text-zinc-300 mt-0.5 leading-snug">
                  Due at the end of Week 1 of the program.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Student Cash & Reward Prize Pool */}
        <section className="space-y-3 pt-2">
          <div className="flex items-start justify-between gap-2 border-b border-zinc-800/60 pb-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-black text-sm sm:text-base">02</span>
                <h2 className="text-sm sm:text-base md:text-lg font-black text-white tracking-wide uppercase">
                  STUDENT CASH &amp; REWARD PRIZE POOL
                </h2>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">
                Paid directly to winners in local currency equivalents (ZAR, NGN, KES, MZN) via
                mobile money or bank transfer.
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="font-mono font-black text-amber-400 text-sm sm:text-lg">
                UP TO $10,000
              </span>
            </div>
          </div>

          {/* 4 Tracks Box */}
          <div className="space-y-2">
            {/* Track 1 */}
            <div className="bg-[#10141f] border border-zinc-800/80 rounded-md p-2.5 sm:p-3 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold text-xs sm:text-[13px] text-white">
                  TRACK 1 · PAN-AFRICAN BUILDERS (TECH &amp; AI)
                </h3>
                <span className="font-mono font-bold text-amber-400 text-xs sm:text-sm">
                  $4,000
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-300 mt-1">
                <span className="font-medium text-white/90">
                  1st place: $2,000 · 2nd place: $1,250 · 3rd place: $750
                </span>
              </p>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Open remotely to all African university developers.
              </p>
            </div>

            {/* Track 2 */}
            <div className="bg-[#10141f] border border-zinc-800/80 rounded-md p-2.5 sm:p-3 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold text-xs sm:text-[13px] text-white">
                  TRACK 2 · CREATORS &amp; CONNECTORS (IN-APP UTILITY)
                </h3>
                <span className="font-mono font-bold text-amber-400 text-xs sm:text-sm">
                  $3,000
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-300 mt-1">
                Top Pan-African Connector: $1,000 (most verified sign-ups / circles)
              </p>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Top City Squad Leaders: 4 primary hubs (e.g. JHB/CPT, Lagos, Nairobi, Maputo) × $500
                = $2,000
              </p>
            </div>

            {/* Track 3 */}
            <div className="bg-[#10141f] border border-zinc-800/80 rounded-md p-2.5 sm:p-3 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold text-xs sm:text-[13px] text-white">
                  TRACK 3 · VIRAL STREET &amp; SOCIAL (TIKTOK / IG REELS)
                </h3>
                <span className="font-mono font-bold text-amber-400 text-xs sm:text-sm">
                  $1,500
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-300 mt-1">
                Most Viral Pan-African Reel / TikTok: $1,000
              </p>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Best cross-border “Pass the Vibe” relay clip: $500
              </p>
            </div>

            {/* Instant Micro-Drops */}
            <div className="bg-[#10141f] border border-zinc-800/80 rounded-md p-2.5 sm:p-3 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold text-xs sm:text-[13px] text-white">
                  INSTANT DIGITAL &amp; DATA MICRO-DROPS
                </h3>
                <span className="font-mono font-bold text-amber-400 text-xs sm:text-sm">
                  $1,500
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-300 mt-1 leading-snug">
                1GB–5GB mobile data bundles and digital vouchers, released inside LIIVRR Deals &amp;
                Drops for instant Circle invites and flash milestones across Pan-Africa (featuring
                key hubs like South Africa, Nigeria, Kenya and Mozambique).
              </p>
            </div>
          </div>

          {/* Student Prize Pool Subtotal Banner */}
          <div className="bg-[#f97316] rounded-md px-3.5 py-2.5 flex items-center justify-between text-black shadow-md mt-1">
            <span className="font-black text-xs uppercase tracking-wider">
              STUDENT PRIZE POOL SUBTOTAL
            </span>
            <span className="font-black text-sm sm:text-base font-mono">UP TO $10,000</span>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between pt-3 border-t border-zinc-800/80 text-[10px] sm:text-[11px] text-zinc-500">
        <span className="tracking-wider uppercase font-medium">
          COMPLETE VIRTUAL CAMPAIGN &amp; OPERATIONAL BUDGET
        </span>
        <span className="font-mono font-medium">02 / 04</span>
      </footer>
    </article>
  );
}
