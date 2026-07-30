import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const collectionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const journalRef = useRef<HTMLDivElement>(null);

  const collectionInView = useInView(collectionRef, { once: true, margin: '-100px' });
  const aboutInView = useInView(aboutRef, { once: true, margin: '-100px' });
  const journalInView = useInView(journalRef, { once: true, margin: '-100px' });

  const products = [
    {
      id: 1,
      name: 'Halo Hoop',
      category: 'Earrings',
      price: '$1,450',
      image: '/product-1.jpg',
    },
    {
      id: 2,
      name: 'Cascade Chain',
      category: 'Necklace',
      price: '$2,890',
      image: '/product-2.jpg',
    },
    {
      id: 3,
      name: 'Eternal Band',
      category: 'Ring',
      price: '$3,200',
      image: '/product-3.jpg',
    },
  ];

  const journalPosts = [
    {
      id: 1,
      title: 'The Art of Layering',
      date: 'March 2024',
      image: '/journal-1.jpg',
    },
    {
      id: 2,
      title: 'Crafting Heirlooms',
      date: 'February 2024',
      image: '/journal-2.jpg',
    },
    {
      id: 3,
      title: 'Gold & Light',
      date: 'January 2024',
      image: '/journal-3.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-[#2C1F0E]">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden"
        style={{
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(30, 18, 5, 0.3), rgba(30, 18, 5, 0.5))',
          }}
        />

        {/* Hero Content */}
        <div className="relative h-full container mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1
              className="text-white font-serif mb-6"
              style={{
                fontSize: 'clamp(4rem, 12vw, 10rem)',
                lineHeight: '0.9',
                letterSpacing: '0.05em',
              }}
              data-testid="text-hero-title"
            >
              LUMINA
            </h1>
            <motion.p
              className="text-white text-xs md:text-sm tracking-[0.4em] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              data-testid="text-hero-subtitle"
            >
              TIMELESS ELEGANCE. MODERN ESSENCE.
            </motion.p>
            <motion.a
              href="#collection"
              className="inline-block text-white text-xs tracking-[0.3em] underline hover:text-[#C9A96E] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              data-testid="link-explore-collection"
            >
              EXPLORE COLLECTION
            </motion.a>
          </motion.div>

          {/* Bottom Labels */}
          <motion.div
            className="absolute bottom-8 left-6 lg:left-12 text-white/80 text-xs tracking-[0.3em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            data-testid="text-hero-season"
          >
            SPRING / SUMMER 2024
          </motion.div>
          <motion.div
            className="absolute bottom-8 right-6 lg:right-12 text-white/80 text-xs tracking-[0.3em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            data-testid="text-hero-pagination"
          >
            01 — 03
          </motion.div>
        </div>
      </section>

      {/* Collection Section */}
      <section
        id="collection"
        ref={collectionRef}
        className="py-24 lg:py-32 bg-[#F5F0E8]"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={collectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2
              className="text-[#2C1F0E] font-serif mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1',
                letterSpacing: '0.05em',
              }}
              data-testid="text-collection-title"
            >
              The Collection
            </h2>
            <p className="text-[#3A2912] text-sm tracking-[0.2em]">
              SPRING / SUMMER 2024
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={collectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer"
                data-testid={`card-product-${product.id}`}
              >
                <div className="relative aspect-square bg-white mb-6 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-center space-y-2">
                  <p className="text-[#3A2912]/60 text-xs tracking-[0.25em]">
                    {product.category}
                  </p>
                  <h3 className="text-[#2C1F0E] font-serif text-xl tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-[#C9A96E] text-sm tracking-wide">
                    {product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={collectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <a
              href="#collection"
              className="inline-block text-[#2C1F0E] text-xs tracking-[0.3em] border-b border-[#2C1F0E] pb-1 hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors"
              data-testid="link-view-all"
            >
              VIEW ALL PIECES
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="relative py-24 lg:py-32 bg-[#2C1F0E] overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/about-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-white font-serif mb-8"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  lineHeight: '1',
                  letterSpacing: '0.05em',
                }}
                data-testid="text-about-title"
              >
                About LUMINA
              </h2>
              <div className="space-y-6 text-white/80 text-sm leading-relaxed tracking-wide">
                <p>
                  LUMINA was born from a singular vision: to craft jewelry that
                  transcends trends and becomes part of your story. Each piece is
                  a meditation on form, a balance between weight and air, between
                  tradition and the contemporary moment.
                </p>
                <p>
                  We work with ethically sourced materials and master artisans
                  whose hands have held this craft for generations. Every curve,
                  every clasp, every surface is considered. This is jewelry as
                  architecture—built to last, designed to be inherited.
                </p>
                <p>
                  For those who understand that true luxury is quiet, that
                  elegance needs no announcement. For collectors who wear their
                  values as proudly as they wear their pieces.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-[#C9A96E] text-xs tracking-[0.3em] mb-3">
                  CRAFTSMANSHIP
                </h3>
                <p className="text-white/70 text-sm leading-relaxed tracking-wide">
                  Every LUMINA piece is handcrafted in our atelier using
                  time-honored techniques passed down through generations of
                  master jewelers.
                </p>
              </div>
              <div>
                <h3 className="text-[#C9A96E] text-xs tracking-[0.3em] mb-3">
                  MATERIALS
                </h3>
                <p className="text-white/70 text-sm leading-relaxed tracking-wide">
                  We source only the finest ethically mined precious metals and
                  conflict-free stones, ensuring beauty without compromise.
                </p>
              </div>
              <div>
                <h3 className="text-[#C9A96E] text-xs tracking-[0.3em] mb-3">
                  LEGACY
                </h3>
                <p className="text-white/70 text-sm leading-relaxed tracking-wide">
                  LUMINA jewelry is designed to be treasured and passed down,
                  becoming part of your family's story for generations to come.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section
        id="journal"
        ref={journalRef}
        className="py-24 lg:py-32 bg-[#F5F0E8]"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={journalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2
              className="text-[#2C1F0E] font-serif mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1',
                letterSpacing: '0.05em',
              }}
              data-testid="text-journal-title"
            >
              Journal
            </h2>
            <p className="text-[#3A2912] text-sm tracking-[0.2em]">
              STORIES & INSPIRATION
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {journalPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={journalInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer"
                data-testid={`card-journal-${post.id}`}
              >
                <div className="relative aspect-[4/5] bg-white mb-6 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-[#3A2912]/60 text-xs tracking-[0.25em]">
                    {post.date}
                  </p>
                  <h3 className="text-[#2C1F0E] font-serif text-2xl tracking-wide">
                    {post.title}
                  </h3>
                  <a
                    href="#journal"
                    className="inline-block text-[#2C1F0E] text-xs tracking-[0.3em] border-b border-transparent hover:border-[#2C1F0E] transition-colors"
                    data-testid={`link-read-more-${post.id}`}
                  >
                    READ MORE
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section id="stores" className="py-24 lg:py-32 bg-[#2C1F0E]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-white font-serif mb-8"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1',
                letterSpacing: '0.05em',
              }}
              data-testid="text-stores-title"
            >
              Visit Our Ateliers
            </h2>
            <p className="text-white/80 text-sm tracking-[0.2em] mb-12 max-w-2xl mx-auto">
              Experience LUMINA in person at our flagship locations in New York,
              London, and Tokyo. Each space is designed to reflect our commitment
              to timeless elegance.
            </p>
            <a
              href="#stores"
              className="inline-block text-white text-xs tracking-[0.3em] border border-white px-12 py-4 hover:bg-white hover:text-[#2C1F0E] transition-all duration-300"
              data-testid="button-find-store"
            >
              FIND A STORE
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
