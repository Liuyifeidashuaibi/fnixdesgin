/**
 * 作品集内容模型（真实信息版）
 * --------------------------------------------------------------
 * 站点为双页跳转结构：作品页（可滚动、可追加多个作品）+ 关于页（单页）。
 * 关于页：官网介绍为主板块，下方依次是名字、能力、联系方式（底部）。
 * 所有个人数据集中在此文件：替换姓名、链接、文案时只改这里。
 */

export const content = {
  profile: {
    name: "刘一飞",
    latin: "LIU YIFEI",
    brand: "FNIX",
    intent: "前端开发 / 网页视觉设计 · 专注品牌官网定制",
    email: "liuyifeidashuaibi@gmail.com",
    github: "https://github.com/Liuyifeidashuaibi",
    site: "https://design.fnix.online",
    year: "2026",
  },

  nav: {
    links: [
      { label: "作品", href: "#work" },
      { label: "关于", href: "#about" },
    ],
  },

  pages: {
    work: { eyebrow: "SELECTED WORK · 品牌官网" },
  },

  /* 作品列表：第一个为首屏大展示，其余依次上下排列；以后新增作品直接追加 */
  projects: [
    {
      name: "LUMINA",
      tagline: "Timeless Elegance. Modern Essence.",
      screenshot: "/shots/lumina-crop.png",
      screenshotAlt: "LUMINA 珠宝品牌官网首页截图：暖调影调首屏与衬线大标题",
      intro:
        "高端珠宝品牌前端官网，React + Vite 单页应用。滚动叙事丰富：电影感首屏、产品系列、造型册、品牌故事、编辑期刊、门店查询与订阅七个区块，完整呈现奢侈品官网的版式与动效语言。",
      links: [
        { label: "网站域名", latin: "lumina.fnix.online", href: "https://lumina.fnix.online" },
        { label: "GitHub", latin: "Liuyifeidashuaibi/lumina", href: "https://github.com/Liuyifeidashuaibi/lumina" },
      ],
    },
  ],

  /* 关于页内容：主板块讲品牌 FNIX；右侧放我的信息 */
  about: {
    brand: {
      eyebrow: "BRAND · 我的品牌",
      title: "FNIX",
      tagline: "Design × Code · 一个品牌，一套语言。",
      intro: [
        "FNIX 是我的个人品牌：专注品牌官网的视觉设计与前端实现，从对标分析、版式动效到部署上线，独立全流程完成。",
        "LUMINA、AURELIS 与 Fnix 官网，都是这个品牌下的实践。",
      ],
      link: { label: "官方网站", latin: "design.fnix.online", href: "https://design.fnix.online" },
    },
    name: {
      eyebrow: "NAME · 名字",
    },
    skills: {
      eyebrow: "CAPABILITIES · 能力",
      groups: [
        {
          group: "品牌官网 · 设计 + 开发",
          items: ["React", "Next.js", "Vite", "Tailwind CSS", "framer-motion", "品牌视觉", "响应式排版"],
        },
        {
          group: "全栈平台",
          items: ["Next.js App Router", "Node.js", "云函数", "Docker", "用户与预约系统"],
        },
        {
          group: "AI 应用",
          items: ["LLM 应用", "本地模型部署", "量化推理", "爬虫与数据管线", "Rust AgentOS 探索"],
        },
        {
          group: "工具站与工程化",
          items: ["原生 HTML/CSS/JS", "Canvas 图纸渲染", "Python 工具链", "静态站部署", "域名解析"],
        },
      ],
    },
    service: {
      brand: "FnixDesign",
      motto: "为您服务",
    },
    contact: {
      eyebrow: "CONTACT · 联系",
    },
  },
};

export default content;
