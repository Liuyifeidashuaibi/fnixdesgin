import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A120A] border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="text-white text-lg font-serif tracking-[0.3em] mb-4 block">
              LUMINA
            </Link>
            <p className="text-white/60 text-xs leading-relaxed tracking-wide">
              Timeless elegance. Modern essence.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white text-xs tracking-[0.25em] mb-6">SHOP</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#collection" className="text-white/60 text-xs tracking-wide hover:text-white transition-colors" data-testid="link-footer-earrings">
                  Earrings
                </a>
              </li>
              <li>
                <a href="/#collection" className="text-white/60 text-xs tracking-wide hover:text-white transition-colors" data-testid="link-footer-necklaces">
                  Necklaces
                </a>
              </li>
              <li>
                <a href="/#collection" className="text-white/60 text-xs tracking-wide hover:text-white transition-colors" data-testid="link-footer-rings">
                  Rings
                </a>
              </li>
              <li>
                <a href="/#collection" className="text-white/60 text-xs tracking-wide hover:text-white transition-colors" data-testid="link-footer-bracelets">
                  Bracelets
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white text-xs tracking-[0.25em] mb-6">ABOUT</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#about" className="text-white/60 text-xs tracking-wide hover:text-white transition-colors" data-testid="link-footer-story">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/#journal" className="text-white/60 text-xs tracking-wide hover:text-white transition-colors" data-testid="link-footer-journal">
                  Journal
                </a>
              </li>
              <li>
                <a href="/#stores" className="text-white/60 text-xs tracking-wide hover:text-white transition-colors" data-testid="link-footer-stores">
                  Stores
                </a>
              </li>
              <li>
                <a href="/#" className="text-white/60 text-xs tracking-wide hover:text-white transition-colors" data-testid="link-footer-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-white text-xs tracking-[0.25em] mb-6">CUSTOMER CARE</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#" className="text-white/60 text-xs tracking-wide hover:text-white transition-colors" data-testid="link-footer-shipping">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="/#" className="text-white/60 text-xs tracking-wide hover:text-white transition-colors" data-testid="link-footer-care">
                  Jewelry Care
                </a>
              </li>
              <li>
                <a href="/#" className="text-white/60 text-xs tracking-wide hover:text-white transition-colors" data-testid="link-footer-sizing">
                  Sizing Guide
                </a>
              </li>
              <li>
                <a href="/#" className="text-white/60 text-xs tracking-wide hover:text-white transition-colors" data-testid="link-footer-faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs tracking-wide">
            © {currentYear} LUMINA. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="/#" className="text-white/40 text-xs tracking-wide hover:text-white transition-colors" data-testid="link-footer-privacy">
              Privacy Policy
            </a>
            <a href="/#" className="text-white/40 text-xs tracking-wide hover:text-white transition-colors" data-testid="link-footer-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
