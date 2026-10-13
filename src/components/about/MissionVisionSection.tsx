import React from "react";
import { Target, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function MissionVisionSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#B1771B] text-white relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 w-96 h-96 rounded-full bg-black/15 blur-3xl"
      />

      <Container size="xl" className="relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Our Purpose &amp; Aspiration</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Our Mission &amp; Vision
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Aspirational brand statements shaping our commitment to India&apos;s construction community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: MISSION (Dark Slate Card with Yellow Accent) */}
          <div className="relative rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border border-white/15 shadow-2xl flex flex-col justify-between overflow-hidden group">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#FFBE0B]/10 blur-3xl group-hover:bg-[#FFBE0B]/15 transition-all"
            />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#FFBE0B]/15 border border-[#FFBE0B]/30 text-[#FFBE0B] flex items-center justify-center">
                  <Target className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#FFBE0B] text-xs font-bold uppercase tracking-wider">
                  Our Mission
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  Simplifying Industry Communication
                </h3>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  &ldquo;Construction industry ke customers aur service providers ke beech communication ko convenient banana, taaki machinery, transport aur material-related requirements ko efficiently share aur explore kiya ja sake.&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-800 relative z-10 flex items-center gap-2 text-xs font-semibold text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#FFBE0B]" />
              <span>Dedicated to seamless site requirements coordination</span>
            </div>
          </div>

          {/* Card 2: VISION (Crisp Pure White Card) */}
          <div className="relative rounded-3xl bg-white text-[#141B29] p-8 sm:p-12 border border-white shadow-2xl flex flex-col justify-between overflow-hidden group">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#0879D1]/10 blur-3xl group-hover:bg-[#0879D1]/15 transition-all"
            />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-[#0879D1] flex items-center justify-center">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0879D1] text-xs font-bold uppercase tracking-wider">
                  Our Vision
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141B29] tracking-tight mb-4">
                  India&apos;s Preferred Construction Platform
                </h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  &ldquo;Heavy machinery, reliable logistics trailers aur quality construction materials ke liye ek aisa digital ecosystem banna jahan har site requirement ko transparently solve kiya ja sake.&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100 relative z-10 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="w-2 h-2 rounded-full bg-[#0879D1]" />
              <span>Building digital infrastructure for heavy industries</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
