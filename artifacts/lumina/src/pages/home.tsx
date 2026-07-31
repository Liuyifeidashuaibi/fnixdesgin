import { motion, type Variants } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import luminaPreview from '@assets/c21c6775-5b23-4c5f-bd1a-f245a14ab235_1785418423471.png';
import luminaHero from '@assets/微信图片_20260731073118_336_43_1785454635209.png';

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay } }),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101010] text-[#f4f1ec] selection:bg-[#c6ff43] selection:text-black">
      <Navigation />

      <section className="relative min-h-[92svh] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(198,255,67,.18),transparent_20%),radial-gradient(circle_at_12%_86%,rgba(222,192,151,.13),transparent_22%)]" />
        <div className="absolute -right-[18vw] top-[14vh] h-[54vw] w-[54vw] rounded-full border border-white/[.07]" />
        <div className="absolute -right-[6vw] top-[26vh] h-[33vw] w-[33vw] rounded-full border border-white/[.08]" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-[1600px] flex-col justify-between px-6 pb-8 pt-32 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <motion.p initial="hidden" animate="show" variants={reveal} custom={0.05} className="mb-7 flex items-center gap-3 text-[10px] font-medium tracking-[.28em] text-[#c6ff43]">
                <Sparkles size={13} strokeWidth={1.5} /> INDEPENDENT DESIGN STUDIO · 2026
              </motion.p>
              <motion.h1 initial="hidden" animate="show" variants={reveal} custom={0.15} className="max-w-5xl font-display text-[clamp(4.2rem,11.5vw,11rem)] leading-[.79] tracking-[-.075em]">
                Made to be<br /><em className="font-light text-[#d9d0c3]">remembered.</em>
              </motion.h1>
            </div>
            <motion.div initial="hidden" animate="show" variants={reveal} custom={0.35} className="lg:col-span-3 lg:col-start-10 lg:pb-2">
              <p className="max-w-xs text-sm leading-6 text-white/62">
                Fnix shapes distinct digital identities and editorial experiences for brands with something to say.
              </p>
              <a href="#work" className="group mt-7 inline-flex items-center gap-3 text-[11px] font-medium tracking-[.2em] text-white transition-colors hover:text-[#c6ff43]">
                VIEW SELECTED WORK <ArrowDownRight size={16} className="transition-transform group-hover:translate-y-1 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="mt-16 flex items-end justify-between border-t border-white/10 pt-4 text-[10px] font-medium tracking-[.22em] text-white/40">
            <span>FNIX / DESIGN</span><span>SCROLL TO EXPLORE</span>
          </motion.div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10 px-6 py-24 md:px-12 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 lg:grid-cols-12">
          <p className="text-[10px] font-medium tracking-[.23em] text-[#c6ff43] lg:col-span-3">01 — ABOUT FNIX</p>
          <div className="lg:col-span-8 lg:col-start-5">
            <p className="max-w-5xl font-display text-[clamp(2.5rem,5.1vw,5.6rem)] leading-[.98] tracking-[-.045em] text-[#e9e4dd]">
              We create websites where clarity meets <em className="font-light text-[#c6ff43]">character</em> — made for modern brands, built to leave a lasting impression.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#e8e4dc] px-6 py-20 text-[#121212] md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex items-end justify-between border-b border-black/15 pb-4 md:mb-16">
            <div><p className="mb-3 text-[10px] font-bold tracking-[.23em] text-black/50">02 — SELECTED WORK</p><h2 className="font-display text-5xl tracking-[-.05em] md:text-7xl">A beginning.</h2></div>
            <span className="hidden text-[10px] font-semibold tracking-[.18em] text-black/45 md:block">01 / 01</span>
          </div>

          <a href="#lumina" id="lumina" className="group block">
            <div className="relative overflow-hidden bg-[#d3cec5]">
              <img src={luminaPreview} alt="LUMINA jewelry e-commerce website design" className="aspect-[16/10] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              <div className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-[#c6ff43] text-black opacity-0 transition-all duration-300 group-hover:opacity-100 md:bottom-7 md:right-7"><ArrowUpRight size={20} /></div>
            </div>
            <div className="grid grid-cols-1 gap-5 border-b border-black/15 py-6 md:grid-cols-12 md:items-end md:py-8">
              <div className="md:col-span-7"><p className="mb-2 text-[10px] font-bold tracking-[.2em] text-black/45">DIGITAL FLAGSHIP · 2026</p><h3 className="font-display text-5xl tracking-[-.055em] md:text-7xl">LUMINA</h3></div>
              <p className="max-w-sm text-sm leading-6 text-black/62 md:col-span-3">A quiet-luxury jewelry experience with a cinematic art direction and an editorial shopping flow.</p>
              <span className="text-[10px] font-bold tracking-[.18em] md:col-span-2 md:text-right">VIEW PROJECT ↗</span>
            </div>
          </a>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#171717] px-6 py-24 md:px-12 md:py-32 lg:px-16">
        <img src={luminaHero} alt="LUMINA visual direction" className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale" />
        <div className="absolute inset-0 bg-[#171717]/55" />
        <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <p className="text-[10px] font-medium tracking-[.23em] text-[#c6ff43] lg:col-span-3">WHAT WE DESIGN</p>
          <p className="font-display text-[clamp(2.7rem,5.8vw,6.4rem)] leading-[.94] tracking-[-.055em] lg:col-span-8 lg:col-start-5">Identity systems.<br />Digital worlds.<br /><em className="font-light text-[#d8d0c4]">Objects of attention.</em></p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
