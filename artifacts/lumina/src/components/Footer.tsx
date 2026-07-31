export default function Footer() {
  return <footer className="bg-[#101010] px-6 pb-7 pt-20 text-[#f4f1ec] md:px-12 md:pt-28 lg:px-16">
    <div className="mx-auto max-w-[1600px]">
      <p className="mb-5 text-[10px] font-medium tracking-[.23em] text-[#c6ff43]">HAVE A PROJECT IN MIND?</p>
      <a href="mailto:hello@fnix.design" className="group inline-flex items-center gap-4 font-display text-[clamp(3.6rem,9vw,9rem)] leading-none tracking-[-.07em]">Let's make it <span className="text-[#c6ff43] transition-transform duration-300 group-hover:translate-x-3">↗</span></a>
      <div className="mt-24 flex flex-col justify-between gap-5 border-t border-white/10 pt-5 text-[10px] font-medium tracking-[.18em] text-white/40 md:mt-32 md:flex-row"><span>© {new Date().getFullYear()} FNIX DESIGN</span><div className="flex gap-6"><a href="mailto:hello@fnix.design" className="hover:text-white">EMAIL</a><a href="#" className="hover:text-white">INSTAGRAM</a></div></div>
    </div>
  </footer>;
}
