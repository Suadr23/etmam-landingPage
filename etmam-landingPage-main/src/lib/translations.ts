export type Lang = 'en' | 'ar';

const en = {
  dir: 'ltr',
  toggleLang: 'العربية',

  // ── Navigation ──
  navHome: 'Home',
  navServices: 'Services',
  navProjects: 'Projects',
  navAbout: 'About Us',
  navContact: 'Contact',
  backHome: 'Back to Home',
  sitemap: 'Sitemap',

  // ── Hero ──
  heroTitle: 'Advancing Innovative Engineering & Project Management',
  heroSub: 'Building the future with expertise and excellence.',
  heroBtn: 'Learn More',

  // ── Hero Cards ──
  card1Title: 'Residential Buildings',
  card2Title: 'Commercial Buildings',
  card3Title: 'Urban Solutions',
  cardBtn: 'Discover More',

  // ── About ──
  aboutTitle: 'About Us',
  aboutText1:
    'At "ETMAM for Engineering Services", we understand that exceptional projects are not born by chance; they are crafted through master expertise and precision. We are not just an engineering firm—we are the strategic advisor and executive partner that visionary investors and developers seek to ensure their grandest concepts are realized with absolute efficiency, high-end quality, and utmost security.',
  aboutText2:
    'We have established an integrated ecosystem that eliminates the complexity of multi-vendor coordination for our clients. We seamlessly blend the artistry of architectural innovation, interior, exterior, and landscape design with the rigor of professional project management, bulletproof engineering contract drafting, and turning around stalled or distressed projects, all while unlocking premier opportunities in real estate development.',
  aboutText3:
    'At ETMAM, we are the definitive answer to every engineering challenge, and the ultimate guarantee for a secure investment and uncompromised success.',

  // ── Expertise ──
  expTitle: 'Our Expertise',
  exp1Title: 'Professional Project Management',
  exp1Desc:
    'Comprehensive client-side project controls ensuring maximum value. We protect your investments through rigorous budget management, time-schedule tracking, interim payments auditing, material quality inspections, and contract management.',
  exp2Title: 'Comprehensive Architectural & Interior Design',
  exp2Desc:
    'Exceptional architectural, interior, exterior, and landscape design solutions tailored for both residential and commercial properties, balancing aesthetic elegance with functional engineering.',
  exp3Title: 'Engineering Contracts & Legal Frameworks',
  exp3Desc:
    'Bulletproof contract drafting and in-depth review services for new and ongoing projects, mitigating risks and establishing clear legal and operational boundaries for all parties.',
  exp4Title: 'Distress Project Recovery & Rescue',
  exp4Desc:
    'Radical engineering and financial solutions to salvage delayed or failing projects, restructuring workflows, budgets, and contracts to bring your project back on track to completion.',

  // ── Vision / Mission ──
  brandDeclaration: 'Corporate Pillars',
  strategicFoundations: 'Strategic Foundations',
  visionTitle: 'Our Vision',
  visionDesc:
    'To be the premier engineering benchmark and the most trusted partner in steering the future of architectural and project development—where the name ETMAM stands as the ultimate synonym for flawless execution, luxury innovation, and the absolute completion of ambitious milestones.',
  missionTitle: 'Our Mission',
  missionDesc:
    'To deliver top-tier engineering solutions and strategic management by combining innovative architectural designs, advanced technology, and sustainable engineering practices, ensuring every project is executed flawlessly from concept to completion.',

  // ── Internal Projects screen (Home) ──
  projectsTitle: 'Our Engineering Portfolio',
  projectsSub: 'Explore our unique architectural and development landmarks.',

  // ── Contact modal ──
  contact: {
    title: 'Contact Information',
    phone: 'Phone Number:',
    phoneVal: '968+ 72552026',
    insta: 'Instagram',
    location: 'Location:',
    locationBtn: 'Open on Google Maps',
    email: 'Email:',
    close: 'Close',
    emailUs: 'Email Us',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    googleMaps: 'Google Maps',
    quickMessage: 'Quick Message',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    yourMessage: 'Your Message',
    send: 'Send',
  },

  // ── Footer ──
  footerRights: '© 2026 ETMAM Engineering Services. All rights reserved.',

  // ── Misc / a11y ──
  altInfrastructure: 'Infrastructure',
  altCommercial: 'Commercial',
  altUrban: 'Urban',
  videoFallback: 'Your browser does not support the video tag.',

  // ── Services page ──
  services: {
    pill: 'Corporate Services',
    title: 'Our Services',
    items: [
      {
        title: 'Project Management & Client Representation',
        text: [
          'Complete control from initiation to delivery',
          'Schedule & Budget Optimization',
          'Material Inspection & Quality Control',
          'Valuation & Payment Certification',
          'Contract Management',
        ],
      },
      {
        title: 'Architectural & Spatial Design',
        text: [
          'Innovative spaces tailored to your vision',
          'Architectural Engineering',
          'Interior & Exterior Design',
          'Landscape Architecture',
          'Residential & Commercial Solutions',
        ],
      },
      {
        title: 'Contract Drafting & Contractual Review',
        text: [
          'Legal and operational risk mitigation',
          'Comprehensive Contract Reviews',
          'Custom Contract Drafting for New Projects',
          'Claims & Dispute Avoidance Strategies',
          'Risk Assessment',
        ],
      },
      {
        title: 'Troubled Project Rescue (Turnaround Services)',
        text: [
          'Restructuring and restoring failing projects',
          'Root-Cause & Delay Analysis',
          'Contractual & Financial Restructuring',
          'Corrective Action Plans',
          'Site Realignment & Completion Execution',
        ],
      },
    ],
  },

  // ── Portfolio section ──
  portfolio: {
    title: 'Our Engineering Portfolio',
    filters: ['All', 'Residential', 'Commercial', 'Interior', 'Urban', 'Landscaping'],
  },

  // ── Project detail page ──
  project: {
    notFound: 'Project Not Found',
    backToProjects: 'Back to Projects',
    overview: 'Project Overview',
    category: 'Category',
    year: 'Year',
    yearPrefix: 'Year:',
    cats: {
      luxury: 'Luxury',
      urban: 'Urban',
      commercial: 'Commercial',
    },
  },
};

const ar: typeof en = {
  dir: 'rtl',
  toggleLang: 'English',

  // ── Navigation ──
  navHome: 'الرئيسية',
  navServices: 'خدماتنا',
  navProjects: 'مشاريعنا',
  navAbout: 'مَن نحن؟',
  navContact: 'تواصل معنا',
  backHome: 'العودة للرئيسية',
  sitemap: 'خريطة الموقع',

  // ── Hero ──
  heroTitle: 'خدمات هندسية مبتكرة ومتقدمة',
  heroSub: 'نبني المستقبل بخبرة سيادية وهندسة دقيقة لا تُضاهى.',
  heroBtn: 'اكتشف المزيد',

  // ── Hero Cards ──
  card1Title: 'المباني السكنية',
  card2Title: 'المباني التجارية',
  card3Title: 'الحلول الحضرية والمدنية',
  cardBtn: 'اكتشف المزيد',

  // ── About ──
  aboutTitle: 'مَن نحن؟',
  aboutText1:
    'في "إتمام للخدمات الهندسية"، ندرك أن المشاريع الاستثنائية لا تولد بالمصادفة، بل تُصنع بالخبرة السيادية والقرارات الهندسية الدقيقة. نحن لسنا مجرد دار هندسية، بل نحن المستشار الاستراتيجي والشريك التنفيذي الذي يبحث عنه المستثمرون وصناع القرار لضمان تحويل الرؤى الطموحة إلى واقع ملموس بأعلى معايير الكفاءة الهندسية والأمان الفني والقانوني.',
  aboutText2:
    'لقد أسسنا منظومة متكاملة تختزل لعملائنا عناء التعامل مع جهات متعددة؛ حيث ندمج بين الإبداع المعماري والتصميم الداخلي والخارجي وهندسة اللاندسكيب، مع صرامة الحوكمة الإدارية والقانونية من خلال إدارة المشاريع الاحترافية، وصياغة العقود الهندسية المحكمة، وإيجاد الحلول الجذرية للمشاريع المتعثرة، وصولاً إلى استثمار الفرص الواعدة في التطوير العقاري.',
  aboutText3:
    'في "إتمام"، نحن الإجابة الحاسمة لكل تحدٍ هندسي، والضمان الأكيد لاستثمار آمن ونجاح لا يُضاهى.',

  // ── Expertise ──
  expTitle: 'خبراتنا الهندسية',
  exp1Title: 'إدارة احترافية للمشاريع',
  exp1Desc:
    'نقدم خدمات شاملة لضبط وإدارة المشاريع لصالح العميل، بما يضمن تحقيق أقصى قيمة ممكنة. ونعمل على حماية استثماراتكم من خلال الإدارة الدقيقة للميزانية، ومتابعة الجداول الزمنية، وتدقيق الدفعات المرحلية، وفحص جودة المواد، وإدارة العقود.',
  exp2Title: 'تصميم معماري وداخلي متكامل',
  exp2Desc:
    'حلول تصميم استثنائية تشمل الجوانب المعمارية والداخلية والخارجية وتنسيق المواقع، مخصصة للعقارات السكنية والتجارية، وتجمع بين الأناقة الجمالية والهندسة الوظيفية.',
  exp3Title: 'عقود الهندسة والأطر القانونية',
  exp3Desc:
    'خدمات صياغة عقود محكمة ومراجعة دقيقة للمشاريع الجديدة والقائمة، بما يضمن الحد من المخاطر وتحديد أطر قانونية وتشغيلية واضحة لجميع الأطراف.',
  exp4Title: 'إعادة تأهيل وإنقاذ المشاريع المتعثرة',
  exp4Desc:
    'حلول هندسية ومالية جذرية لإنقاذ المشاريع المتأخرة أو الفاشلة، وإعادة هيكلة سير العمل، والميزانيات، والعقود لتحقيق أهدافك.',

  // ── Vision / Mission ──
  brandDeclaration: 'ركائز الشركة',
  strategicFoundations: 'الأسس الاستراتيجية',
  visionTitle: 'رؤيتنا',
  visionDesc:
    'أن نكون المرجعية الهندسية الأولى والشريك الأكثر موثوقية في قيادة وصياغة مستقبل التطوير العقاري والهندسي، ليرتبط اسم "إتمام" دائماً بالجودة المطلقة، والابتكار الفاخر، والإتمام المثالي للمشاريع الأكثر طموحاً.',
  missionTitle: 'رسالتنا',
  missionDesc:
    'تقديم حلول هندسية وإدارية استراتيجية متكاملة تجمع بين الابتكار المعماري والاستدامة البيئية، مع ضمان تنفيذ كافة المشاريع بحوكمة صارمة من الفكرة وحتى التسليم المثالي.',

  // ── Internal Projects screen (Home) ──
  projectsTitle: 'معرض مشاريعنا الهندسية',
  projectsSub: 'استكشف نخبة من معالمنا المعمارية والتطويرية الفريدة.',

  // ── Contact modal ──
  contact: {
    title: 'بيانات التواصل',
    phone: 'رقم الهاتف:',
    phoneVal: '968+ 72552026',
    insta: 'إنستغرام:',
    location: 'الموقع الجغرافي:',
    locationBtn: 'فتح خرائط جوجل',
    email: 'البريد الإلكتروني:',
    close: 'إغلاق',
    emailUs: 'راسلنا عبر البريد',
    whatsapp: 'واتساب',
    instagram: 'إنستغرام',
    googleMaps: 'خرائط جوجل',
    quickMessage: 'رسالة سريعة',
    yourName: 'الاسم',
    yourEmail: 'البريد الإلكتروني',
    yourMessage: 'رسالتك',
    send: 'إرسال',
  },

  // ── Footer ──
  footerRights: '© 2026 إتمام للخدمات الهندسية. جميع الحقوق محفوظة.',

  // ── Misc / a11y ──
  altInfrastructure: 'بنية تحتية',
  altCommercial: 'تجاري',
  altUrban: 'حضري',
  videoFallback: 'متصفحك لا يدعم تشغيل الفيديو.',

  // ── Services page ──
  services: {
    pill: 'خدمات متكاملة',
    title: 'خدماتنا',
    items: [
      {
        title: 'إدارة المشاريع وتمثيل العميل',
        text: [
          'تحكم كامل من مرحلة البدء وحتى التسليم',
          'تحسين الجدول الزمني والميزانية',
          'فحص المواد ومراقبة الجودة',
          'التقييم واعتماد الدفعات المالية',
          'إدارة العقود',
        ],
      },
      {
        title: 'التصميم المعماري وتصميم المساحات',
        text: [
          'مساحات مبتكرة مصممة خصيصاً لتلائم رؤيتك',
          'الهندسة المعمارية',
          'التصميم الداخلي والخارجي',
          'تصميم وتنسيق المواقع (اللاندسكيب)',
          'حلول للمشاريع السكنية والتجارية',
        ],
      },
      {
        title: 'صياغة العقود والمراجعة التعاقدية',
        text: [
          'الحد من المخاطر القانونية والتشغيلية',
          'مراجعة شاملة للعقود',
          'صياغة عقود مخصصة للمشاريع الجديدة',
          'استراتيجيات تجنب المطالبات والنزاعات',
          'تقييم المخاطر',
        ],
      },
      {
        title: 'إنقاذ المشاريع المتعثرة',
        text: [
          'إعادة هيكلة واستعادة المشاريع الفاشلة',
          'تحليل الأسباب الجذرية وأسباب التأخير',
          'إعادة الهيكلة التعاقدية والمالية',
          'خطط الإجراءات التصحيحية',
          'إعادة تنظيم العمل في الموقع وتنفيذ الإنجاز',
        ],
      },
    ],
  },

  // ── Portfolio section ──
  portfolio: {
    title: 'معرض مشاريعنا الهندسية',
    filters: ['الكل', 'سكني', 'تجاري', 'داخلي', 'حضري', 'التصميم البيئي'],
  },

  // ── Project detail page ──
  project: {
    notFound: 'المشروع غير موجود',
    backToProjects: 'العودة للمشاريع',
    overview: 'نظرة عامة عن المشروع',
    category: 'الفئة',
    year: 'السنة',
    yearPrefix: 'السنة:',
    cats: {
      luxury: 'فاخر',
      urban: 'حضري',
      commercial: 'تجاري',
    },
  },
};

export const translations: Record<Lang, typeof en> = { en, ar };

