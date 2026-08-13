import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { content } from "./content.js";
import { cn } from "@/lib/utils";
import { HeroBackdrop } from "./components/previews.jsx";

/* ── 动效：淡入上移，一次触发 ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const inViewOptions = { once: true, margin: "-80px" };

/* ── 路由：#work / #about 双页跳转 ────────────────────────── */
function useRoute() {
  const [route, setRoute] = useState(() =>
    window.location.hash === "#about" ? "about" : "work"
  );

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash;
      const next = h === "#about" ? "about" : "work";
      setRoute(next);
      // 默认路由不占用 URL：点击"作品"后立即移除 #work，保持分享链接干净
      if (h === "#work") {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      }
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return route;
}

/* ── 顶部滚动进度发丝线 ─────────────────────────────────── */
function ScrollProgress({ className, style }) {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className={["scroll-progress", className].filter(Boolean).join(" ")}
      style={{ width: "100%", scaleX: scrollYProgress, ...style }}
    />
  );
}

/* ── 导航：作品页右上只留 FNIX.DESIGN；关于页只留左上 ───────── */
function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn("site-nav", scrolled && "is-scrolled")}
      data-component="nav"
      aria-label="页面导航"
    >
      <div className="container-page py-5">
        <div className="relative flex items-center justify-between">
          <a
            href="#work"
            className="font-display text-ink text-sm tracking-[0.35em]"
          >
            {content.profile.brand}
          </a>

          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-12 lg:flex">
            {content.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link",
                  active === link.href.slice(1) && "is-active"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 作品页右上：只留 FNIX.DESIGN；关于页：无 */}
          {active === "work" && (
            <div className="hidden items-center gap-8 lg:flex">
              <a
                href={content.profile.site}
                className="nav-link"
                style={{ color: "var(--gold-ink)" }}
              >
                FNIX.DESIGN
              </a>
            </div>
          )}

          <button
            type="button"
            className="text-ink lg:hidden"
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
            style={{
              background: "color-mix(in srgb, var(--seed-bg) 96%, transparent)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="container-page space-y-6 py-8">
              {content.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block text-xs uppercase tracking-[0.28em] transition-colors",
                    active === link.href.slice(1)
                      ? "text-goldink"
                      : "text-mutedink hover:text-ink"
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {active === "work" && (
                <div className="border-t border-hairline pt-6">
                  <a
                    href={content.profile.site}
                    className="text-xs uppercase tracking-[0.28em] text-goldink"
                    onClick={() => setMenuOpen(false)}
                  >
                    FNIX.DESIGN
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ── 作品链接行 ───────────────────────────────────────────── */
function ProjectLinks({ project, className, style }) {
  return (
    <div
      className={[
        "flex flex-wrap items-center gap-x-8 gap-y-3",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {project.links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="link-under text-ink"
        >
          {link.label} · {link.latin}
          <ArrowUpRight
            className="ml-1 inline h-3.5 w-3.5"
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  );
}

/* ── 作品首屏：左介绍 + 右大图，整屏最佳比例 ───────────────── */
function WorkHero({ project, className, style }) {
  const { profile } = content;
  const total = content.projects.length;

  return (
    <section
      id="work"
      data-component="projects"
      className={cn(
        "chapter-paper relative flex min-h-screen flex-col overflow-hidden",
        className
      )}
      style={style}
    >
      <HeroBackdrop />

      <div className="container-page relative grid flex-1 content-center gap-14 pb-10 pt-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-20 lg:pt-24">
        {/* 左：作品介绍 */}
        <div>
          <motion.p
            className="label mb-6 text-goldink"
            style={{ letterSpacing: "0.4em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {content.pages.work.eyebrow}
          </motion.p>

          <motion.h1
            className="display-hero text-ink mb-3"
            style={{
              fontSize: "calc(clamp(52px, 6.5vw, 92px) * var(--seed-type-scale))",
            }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.name}
          </motion.h1>
          <motion.p
            className="font-display mb-7 text-lg italic text-faintink"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {project.tagline}
          </motion.p>

          <motion.p
            className="mb-8 max-w-[48ch] text-[14px] leading-[1.9] text-mutedink"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            {project.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.95 }}
          >
            <ProjectLinks project={project} />
          </motion.div>
        </div>

        {/* 右：作品截图 */}
        <motion.figure
          className="lg:max-w-[640px] lg:justify-self-end"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          data-component="work-showcase"
        >
          <img
            src={project.screenshot}
            alt={project.screenshotAlt}
            className="h-auto w-full"
          />
          <figcaption className="label-sm mt-4 text-faintink">
            {project.name} — {project.links[0].latin}
          </figcaption>
        </motion.figure>
      </div>

      {/* 底部角标 */}
      <div className="container-page relative pb-8">
        <div className="flex items-center justify-between border-t border-hairline pt-5">
          <span className="label-sm text-faintink">
            PORTFOLIO — {profile.year}
          </span>
          <span className="label-sm meta-num text-faintink">
            01 — {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

/* ── 后续作品条目：上下排列，左文右图 ─────────────────────── */
function WorkEntry({ project, index, className, style }) {
  return (
    <section
      data-component="project-card"
      className={cn(
        "chapter-paper section-pad scroll-mt-16",
        className
      )}
      style={style}
    >
      <div className="container-page grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inViewOptions}
          variants={fadeUp}
        >
          <p className="label-sm meta-num mb-5 text-faintink">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="display-card text-ink mb-2">{project.name}</h2>
          <p className="font-display mb-7 text-base italic text-faintink">
            {project.tagline}
          </p>
          <p className="mb-8 max-w-[52ch] text-[15px] leading-[1.9] text-mutedink">
            {project.intro}
          </p>
          <ProjectLinks project={project} />
        </motion.div>

        <motion.img
          src={project.screenshot}
          alt={project.screenshotAlt}
          className="h-auto w-full lg:max-w-[640px] lg:justify-self-end"
          initial="hidden"
          whileInView="show"
          viewport={inViewOptions}
          variants={fadeUp}
          custom={0.15}
        />
      </div>
    </section>
  );
}

/* ── 作品页 ───────────────────────────────────────────────── */
function WorkPage() {
  const [first, ...rest] = content.projects;
  return (
    <>
      <WorkHero project={first} />
      {rest.map((project, i) => (
        <WorkEntry
          key={project.name}
          project={project}
          index={i + 1}
        />
      ))}
    </>
  );
}

/* ── 关于页：固定一屏，留白为主，底部一行联系 ──────────────── */
function AboutPage({ className, style }) {
  const { profile } = content;

  return (
    <section
      id="about"
      data-component="about"
      className={cn(
        "chapter-paper relative flex min-h-screen flex-col overflow-hidden lg:h-screen",
        className
      )}
      style={style}
    >
      <HeroBackdrop />

      {/* 中部：品牌服务声明 */}
      <div className="container-page relative flex flex-1 flex-col items-center justify-center text-center">
        <motion.h1
          className="display-hero text-ink"
          style={{
            fontSize: "calc(clamp(56px, 8vw, 118px) * var(--seed-type-scale))",
          }}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {content.about.service.brand}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <span className="rule-gold my-9" />
        </motion.div>

        <motion.p
          className="font-display text-mutedink"
          style={{
            fontSize: "calc(clamp(20px, 2.4vw, 28px) * var(--seed-type-scale))",
            letterSpacing: "0.6em",
            textIndent: "0.6em",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85 }}
        >
          {content.about.service.motto}
        </motion.p>
      </div>

      {/* 底部：联系一行 */}
      <div className="container-page relative pb-10">
        <motion.div
          className="flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-hairline pt-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="label-sm text-goldink">联系 · CONTACT</span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-under text-ink"
          >
            GITHUB · Liuyifeidashuaibi
            <ArrowUpRight
              className="ml-1 inline h-3.5 w-3.5"
              aria-hidden="true"
            />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="link-under text-ink"
          >
            {profile.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  const route = useRoute();

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <div className="min-h-screen bg-canvas font-body text-ink">
        <Nav active={route} />
        <main>{route === "about" ? <AboutPage /> : <WorkPage />}</main>
      </div>
    </MotionConfig>
  );
}
