import { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'COLLECTION', href: '/#collection' },
    { label: 'ABOUT', href: '/#about' },
    { label: 'JOURNAL', href: '/#journal' },
    { label: 'STORES', href: '/#stores' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-sm font-serif tracking-[0.3em]">
            LUMINA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/90 text-xs tracking-[0.25em] hover:text-white transition-colors relative group"
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center gap-8">
            <button className="text-white/90 text-xs tracking-[0.25em] hover:text-white transition-colors" data-testid="button-search">
              <Search className="w-4 h-4" />
            </button>
            <button className="text-white/90 text-xs tracking-[0.25em] hover:text-white transition-colors" data-testid="button-account">
              <User className="w-4 h-4" />
            </button>
            <button className="text-white/90 text-xs tracking-[0.25em] hover:text-white transition-colors flex items-center gap-2" data-testid="button-cart">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs">(0)</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#2C1F0E] border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/90 text-sm tracking-[0.25em] hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 border-t border-white/10 flex gap-6">
                <button className="text-white/90 text-sm tracking-[0.25em] hover:text-white transition-colors flex items-center gap-2" data-testid="button-mobile-search">
                  <Search className="w-4 h-4" />
                  <span>SEARCH</span>
                </button>
                <button className="text-white/90 text-sm tracking-[0.25em] hover:text-white transition-colors flex items-center gap-2" data-testid="button-mobile-account">
                  <User className="w-4 h-4" />
                  <span>ACCOUNT</span>
                </button>
                <button className="text-white/90 text-sm tracking-[0.25em] hover:text-white transition-colors flex items-center gap-2" data-testid="button-mobile-cart">
                  <ShoppingBag className="w-4 h-4" />
                  <span>CART (0)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
