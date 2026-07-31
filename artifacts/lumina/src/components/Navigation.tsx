import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: 'mailto:hello@fnix.design' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute z-20 w-full text-white">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-12 md:py-8 lg:px-16">
        <a href="#" className="font-display text-3xl tracking-[-.08em]">
          fnix<span className="text-[#c6ff43]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <span className="text-[10px] font-semibold tracking-[.24em] text-white/40">INDEPENDENT DESIGN STUDIO</span>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] font-semibold tracking-[.22em] text-white/65 transition-colors hover:text-[#c6ff43]"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open ? (
        <div className="border-y border-white/10 bg-[#0d0d0d] px-6 py-8 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                onClick={() => setOpen(false)}
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-[.2em] text-white/80"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
