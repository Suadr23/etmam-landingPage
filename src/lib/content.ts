export type NavSection = {
  id: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
  bullets?: string[];
  icon?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  year?: string;
  href?: string;
  image?: string;
};

export type PortfolioCategory = {
  title: string;
  description?: string;
  projects: Project[];
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export const navSections: NavSection[] = [
  { id: "services", label: "الخدمات" },
  { id: "projects", label: "المشاريع" },
  { id: "timeline", label: "المسار" },
  { id: "contact", label: "تواصل معنا" },
];

export const etmamIdentity = {
  name: "ETMAM",
  slogan: "تعـمّق • تمكين • أثر",
  about:
    "ETMAM هي علامة/مبادرة تهدف إلى تمكين المؤسسات والأفراد من تحويل الأفكار إلى حلول واقعية عبر هندسة البرمجيات والتجربة الرقمية والتطوير المستمر.",
  highlights: [
    "تصميم وتجربة مستخدم (UX) تركز على القيمة",
    "هندسة حلول قابلة للتوسع",
    "تطوير واجهات حديثة وأداء عالي",
    "شراكات تنفيذية وموثوقة",
  ],
};

export const etmamServices: Service[] = [
  {
    title: "هندسة وبناء المنتجات الرقمية",
    description:
      "تصميم وتطوير حلول رقمية من البداية حتى الإطلاق: واجهات، منطق أعمال، وخدمات داعمة.",
    bullets: [
      "تحليل المتطلبات وبناء الخطة الفنية",
      "تصميم UI/UX متماسك",
      "تنفيذ Frontend & Backend",
      "اختبارات وتحسين جودة التسليم",
    ],
  },
  {
    title: "ويب وتصميم واجهات حديثة",
    description:
      "بناء مواقع وتطبيقات ويب بواجهات جذابة وسريعة مع اهتمام بتفاصيل الحركة والهوية.",
    bullets: [
      "حمل سريع وتجربة مستخدم سلسة",
      "حسابات ألوان وهوية بصرية متناسقة",
      "تكامل مع الخدمات الخارجية",
      "تحسين SEO التقني عند الحاجة",
    ],
  },
  {
    title: "تحسين الأداء والموثوقية",
    description:
      "تحسينات مستمرة لضمان سرعة واستقرار النظام مع مراقبة وتكامل.",
    bullets: [
      "تحسين زمن التحميل (LCP) وسلوك التمرير",
      "تحسين معمارية الكود وإعادة استخدام المكونات",
      "ضبط الاعتمادية وتقليل الأعطال",
      "تحسينات أمنية أساسية",
    ],
  },
  {
    title: "الرؤية والتخطيط للمشاريع",
    description:
      "تحويل فكرة المشروع إلى مسار واضح: نطاق، أهداف، مخرجات، وخطة تنفيذ.",
    bullets: [
      "تحديد الأهداف ومؤشرات النجاح",
      "Roadmap ومراحل التنفيذ",
      "تقدير نطاق العمل والتسليم",
      "مراجعات دورية وضمان الاتساق",
    ],
  },
];

export const etmamBranches = [
  {
    id: "etmam-labs",
    name: "ETMAM Labs",
    description:
      "مساحة للتجريب والبحث السريع: نماذج أولية، تقنيات جديدة، وتجارب واجهات/حركات.",
    points: [
      "نماذج أولية خلال دورات قصيرة",
      "تجارب تصميم وتفاعل",
      "تقييم الأداء وتجارب التحسين",
    ],
  },
  {
    id: "etmam-studio",
    name: "ETMAM Studio",
    description:
      "استوديو تصميم وتنفيذ: تجربة المستخدم والهوية الرقمية وصولاً لمنتجات عملية.",
    points: [
      "تصميم UI/UX",
      "تطوير واجهات تفاعلية",
      "تسليم مع توثيق",
    ],
  },
  {
    id: "etmam-systems",
    name: "ETMAM Systems",
    description:
      "هندسة حلول ومنصات: بنية قابلة للتوسع وتكاملات واضحة.",
    points: [
      "تحليل معماري",
      "حلول قابلة للتوسع",
      "تكامل خدمات وواجهات",
    ],
  },
];

export const portfolio: PortfolioCategory[] = [
  {
    title: "مشاريع المنتجات الرقمية",
    description: "أعمال تطبيقية تركز على النتائج وتجربة المستخدم.",
    projects: [
      {
        title: "منصة إدارة المحتوى",
        description:
          "نظام لإدارة المحتوى مع مسارات تحرير واضحة، وتصميم صفحات قابل للتخصيص.",
        tags: ["Next.js", "UI", "CMS"],
        year: "2025",
        href: "#",
        image: "/images/projects/content-platform.jpg",
      },
      {
        title: "لوحة متابعة الأداء",
        description:
          "لوحة مؤشرات تعرض الأداء وتقدم رؤية واضحة للفرق والإدارة.",
        tags: ["Dashboard", "Charts", "Performance"],
        year: "2025",
        href: "#",
        image: "/images/projects/performance-dashboard.jpg",
      },
    ],
  },
  {
    title: "مشاريع الواجهات والتجربة",
    description: "تفاعلات وحركات مدروسة مع هوية بصرية كحلي/ذهبي.",
    projects: [
      {
        title: "موقع تعريفي متحرك",
        description:
          "تصميم صفحة رئيسية مع حركات سلسة وأقسام واضحة ومتكاملة.",
        tags: ["Motion", "Brand", "Landing"],
        year: "2024",
        href: "#",
        image: "/images/projects/motion-landing.jpg",
      },
      {
        title: "بوابة خدمات متعددة",
        description:
          "بوابة تعرض الخدمات بشكل مرن مع فلاتر ومقاطع قابلة للتحديث.",
        tags: ["UX", "Components", "SEO"],
        year: "2024",
        href: "#",
        image: "/images/projects/services-gateway.jpg",
      },
    ],
  },
];

export const etmamTimeline: TimelineItem[] = [
  {
    year: "الآن",
    title: "بناء وتجريب وتحسين مستمر",
    description:
      "نواصل تطوير التجارب وتحسين الأداء وبناء مكونات قابلة لإعادة الاستخدام.",
  },
  {
    year: "2024",
    title: "توسيع نطاق المشاريع",
    description:
      "تركيز على واجهات حديثة وتجارب مستخدم مُحكمة مع تسليمات أسرع.",
  },
  {
    year: "2023",
    title: "تأسيس الهوية والتقنيات",
    description:
      "تجميع نماذج ومكونات لتأسيس أسلوب عمل موثوق وقابل للتوسع.",
  },
];

export const testimonials = [
  {
    name: "عميل/ة",
    role: "فريق منتج",
    quote:
      "أسلوب تنفيذ ETMAM منظم والنتائج كانت متناسقة مع رؤية العلامة. الأداء ممتاز والتفاصيل واضحة.",
  },
  {
    name: "عميل/ة",
    role: "شركة تطوير",
    quote:
      "التعاون كان سريعًا وشفافًا. تم تسليم نسخة عملية قابلة للتطوير مع توثيق جيد.",
  },
];

