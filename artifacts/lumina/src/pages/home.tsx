import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import luminaPreview from '@assets/c21c6775-5b23-4c5f-bd1a-f245a14ab235_1785418423471.png';
import luminaHero from '@assets/微信图片_20260731073118_336_43_1785454635209.png';

const introCards = [
  {
    label: 'What Fnix does',
    value: 'Brand sites, product storytelling, and premium landing pages.',
  },
  {
    label: 'What visitors get',
    value: 'A fast read, a clear point of view, and one obvious next step.',
  },
  {
    label: 'Current focus',
    value: 'A clean portfolio home for showcasing finished product design work.',
  },
];

const principles = [
  {
    title: 'Clarity first',
    text: 'Every section should answer a visitor question in seconds: who, what, and why this matters.',
  },
  {
    title: 'Luxury through restraint',
    text: 'Premium does not need noise. Space, contrast, typography, and one strong accent do more work than decoration.',
  },
  {
    title: 'Motion with purpose',
    text: 'Animation should guide attention, not compete with content, and it should calm down when the user prefers reduced motion.',
  },
];

const projectFacts = [
  'Editorial grid system',
  'Luxury-inspired contrast',
  'Mobile-first showcase flow',
  'Accessible motion states',
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-[#f3efe8] selection:bg-[#c6ff43] selection:text-black">
      <Navigation />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(198,255,67,.16),transparent_26%),radial-gradient(circle_at_82%_14%,rgba(214,192,168,.14),transparent_20%),linear-gradient(180deg,rgba(255,255,255,.03),transparent_35%)]" />
        <div className="absolute left-[6vw] top-[18vh] h-44 w-44 rounded-full border border-white/10" />
        <div className="absolute right-[8vw] top-[20vh] h-[34vw] w-[34vw] rounded-full border border-white/[.08]" />

        <div className="relative mx-auto grid min-h-[100svh] max-w-[1600px] grid-cols-1 gap-12 px-6 pb-8 pt-28 md:px-12 lg:grid-cols-12 lg:px-16 lg:pt-32">
          <div className="lg:col-span-7">
            <motion.p
              initial="hidden"
              animate="show"
              variants={reveal}
              custom={0}
              className="mb-6 flex items-center gap-3 text-[10px] font-semibold tracking-[.34em] text-[#c6ff43]"
            >
              <Sparkles size={13} strokeWidth={1.5} />
              FNIX DESIGN STUDIO / 2026
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={reveal}
              custom={0.1}
              className="max-w-5xl font-display text-[clamp(4.4rem,12vw,11.5rem)] leading-[.79] tracking-[-.08em]"
            >
              Design that feels
              <br />
              <em className="font-light text-[#d9d0c3]">expensive, but useful.</em>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={reveal}
              custom={0.24}
              className="mt-7 max-w-2xl text-base leading-8 text-white/68 md:text-lg"
            >
              Fnix is my brand for premium digital design. This site is built to help visitors understand the
              studio quickly, see real work first, and move straight to contact without friction.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={reveal}
              custom={0.34}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-[#c6ff43] px-5 py-3 text-[11px] font-bold tracking-[.2em] text-black transition-transform hover:-translate-y-0.5"
              >
                VIEW WORK
                <ArrowDownRight size={16} className="transition-transform group-hover:translate-y-1 group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:hello@fnix.design"
                className="inline-flex items-center gap-3 border border-white/15 px-5 py-3 text-[11px] font-bold tracking-[.2em] text-white/80 transition-colors hover:border-white/30 hover:text-white"
              >
                CONTACT FNIX
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <motion.div
              initial="hidden"
              animate="show"
              variants={reveal}
              custom={0.22}
              className="border border-white/10 bg-white/[.03] p-5 backdrop-blur-[2px] md:p-6"
            >
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4 text-[10px] font-semibold tracking-[.24em] text-white/45">
                <span>WHY THIS SITE WORKS</span>
                <span>01</span>
              </div>
              <div className="space-y-4">
                {introCards.map((card) => (
                  <article key={card.label} className="border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-[10px] font-semibold tracking-[.22em] text-[#c6ff43]">{card.label}</p>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/72">{card.value}</p>
                  </article>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={reveal}
              custom={0.38}
              className="mt-5 grid grid-cols-2 gap-3"
            >
              {projectFacts.map((fact) => (
                <div key={fact} className="border border-white/10 px-4 py-3 text-sm text-white/70">
                  {fact}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.9, delay: 0.72 }}
            className="mt-8 border-t border-white/10 pt-4 text-[10px] font-semibold tracking-[.22em] text-white/42 md:flex md:items-center md:justify-between"
          >
            <span>FNIX / PRODUCT DESIGN PORTFOLIO</span>
            <span className="mt-2 block md:mt-0">SCROLL FOR SELECTED WORK</span>
          </motion.div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10 px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 lg:grid-cols-12">
          <p className="text-[10px] font-semibold tracking-[.28em] text-[#c6ff43] lg:col-span-3">01 / ABOUT FNIX</p>
          <div className="lg:col-span-9">
            <p className="max-w-6xl font-display text-[clamp(2.6rem,5.4vw,6rem)] leading-[.95] tracking-[-.05em] text-[#e9e4dd]">
              A focused design studio presence is not just decoration. It is a decision-making tool for the
              visitor, so the interface should remove doubt as quickly as possible.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {principles.map((item) => (
                <article key={item.title} className="border border-white/10 bg-white/[.02] p-5">
                  <h3 className="text-[11px] font-semibold tracking-[.22em] text-[#c6ff43]">{item.title.toUpperCase()}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/68">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#e9e4dc] px-6 py-20 text-[#111111] md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 flex items-end justify-between border-b border-black/12 pb-4 md:mb-14">
            <div>
              <p className="mb-3 text-[10px] font-bold tracking-[.24em] text-black/48">02 / SELECTED WORK</p>
              <h2 className="font-display text-5xl tracking-[-.055em] md:text-7xl">One strong case.</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-6 text-black/55 md:block">
              The homepage only needs one featured project right now. That keeps attention on the best work instead
              of diluting it with placeholder content.
            </p>
          </div>

          <a href="#lumina" id="lumina" className="group block">
            <div className="relative overflow-hidden border border-black/10 bg-[#d4cec4]">
              <img
                src={luminaPreview}
                alt="LUMINA jewelry e-commerce website design preview"
                className="aspect-[16/10] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              <div className="absolute left-5 top-5 border border-white/30 bg-black/20 px-3 py-2 text-[10px] font-bold tracking-[.24em] text-white backdrop-blur-sm">
                FEATURED PROJECT
              </div>
              <div className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-[#c6ff43] text-black opacity-0 transition-all duration-300 group-hover:opacity-100 md:bottom-7 md:right-7">
                <ArrowUpRight size={20} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 border-b border-black/12 py-6 md:grid-cols-12 md:items-end md:py-8">
              <div className="md:col-span-5">
                <p className="mb-2 text-[10px] font-bold tracking-[.2em] text-black/45">DIGITAL FLAGSHIP / 2026</p>
                <h3 className="font-display text-5xl tracking-[-.06em] md:text-7xl">LUMINA</h3>
              </div>
              <p className="max-w-sm text-sm leading-6 text-black/66 md:col-span-4">
                A quiet-luxury shopping experience with a cinematic art direction, editorial spacing, and a cleaner
                path from browsing to buying.
              </p>
              <span className="text-[10px] font-bold tracking-[.18em] md:col-span-3 md:text-right">
                VIEW PROJECT
              </span>
            </div>
          </a>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { label: 'Purpose', text: 'Show the product design immediately, with the brand built around it.' },
              { label: 'UX focus', text: 'Reduce scanning effort and keep the next action visible at every step.' },
              { label: 'Visual tone', text: 'High-contrast editorial luxury with a disciplined green accent.' },
            ].map((item) => (
              <article key={item.label} className="border border-black/10 bg-[#f2ede6] p-5">
                <p className="text-[10px] font-bold tracking-[.24em] text-black/42">{item.label.toUpperCase()}</p>
                <p className="mt-3 text-sm leading-6 text-black/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <img
          src={luminaHero}
          alt="LUMINA visual direction"
          className="absolute inset-0 h-full w-full object-cover opacity-16 grayscale"
        />
        <div className="absolute inset-0 bg-[#111111]/72" />
        <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <p className="text-[10px] font-semibold tracking-[.28em] text-[#c6ff43] lg:col-span-3">03 / DIRECTION</p>
          <div className="lg:col-span-9">
            <p className="max-w-6xl font-display text-[clamp(2.7rem,5.8vw,6.5rem)] leading-[.94] tracking-[-.055em]">
              Identity systems that feel calm, sharp, and expensive.
              <br />
              <em className="font-light text-[#dbd4c7]">Built to let the work speak first.</em>
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/60">
              The design direction stays intentionally spare so the portfolio can scale later without rethinking the
              whole structure. That makes the site easier to extend, easier to read, and easier to trust.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
