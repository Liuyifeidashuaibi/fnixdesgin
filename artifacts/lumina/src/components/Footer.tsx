export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] px-6 pb-7 pt-20 text-[#f3efe8] md:px-12 md:pt-28 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-5 text-[10px] font-semibold tracking-[.24em] text-[#c6ff43]">READY FOR THE NEXT PROJECT?</p>
        <a
          href="mailto:hello@fnix.design"
          className="group inline-flex max-w-5xl items-center gap-4 font-display text-[clamp(3.5rem,8.8vw,8.8rem)] leading-none tracking-[-.07em]"
        >
          Let&apos;s make it real
          <span className="text-[#c6ff43] transition-transform duration-300 group-hover:translate-x-3">↗</span>
        </a>

        <div className="mt-20 flex flex-col justify-between gap-5 border-t border-white/10 pt-5 text-[10px] font-semibold tracking-[.18em] text-white/40 md:mt-28 md:flex-row">
          <span>© {new Date().getFullYear()} FNIX DESIGN</span>
          <div className="flex gap-6">
            <a href="mailto:hello@fnix.design" className="transition-colors hover:text-white">
              EMAIL
            </a>
            <a href="#work" className="transition-colors hover:text-white">
              WORK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
