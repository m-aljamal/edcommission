export const locales = ["en", "ar"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const translations = {
  en: {
    nav: {
      home: "Home",
      donate: "Ways to Donate",
      about: "About Us",
      aboutCommission: "About the Commission",
      team: "About the Team",
      visionMessage: "Vision and Message",
      target: "Target",
      annualReports: "Annual Reports",
      formalEducation: "Formal Education",
      nonformalEducation: "Non-Formal Education",
      educationQuality: "Education Quality",
      psychologicalSupport: "Psychological Support",
      events: "Events",
      campaigns: "Education Support Campaigns",
      orphanSponsorship: "Orphan Support and Sponsorship",
    },
    hero: {
      title: "Education Commission",
      subtitle: "Empowering Education, Building the Future",
      description:
        "We are committed to developing educational systems and providing innovative solutions that contribute to improving the quality of education and achieving sustainable development goals.",
      cta: "Learn More",
    },
    about: {
      title: "About the Commission",
      description:
        "The Education Commission is a leading institution dedicated to advancing educational standards and fostering innovation in learning environments. We work closely with educational institutions, policymakers, and communities to create impactful educational programs.",
      mission: "Our Mission",
      missionText:
        "To transform education through innovative approaches, ensuring quality learning opportunities for all.",
      vision: "Our Vision",
      visionText:
        "A world where every individual has access to quality education that empowers them to reach their full potential.",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive educational solutions for sustainable development",
      service1: {
        title: "Educational Consulting",
        description:
          "Expert guidance on curriculum development, teaching methodologies, and educational policy implementation.",
      },
      service2: {
        title: "Teacher Training",
        description:
          "Comprehensive professional development programs designed to enhance teaching skills and pedagogical approaches.",
      },
      service3: {
        title: "Research & Development",
        description:
          "Conducting cutting-edge research to identify best practices and innovative solutions in education.",
      },
      service4: {
        title: "Quality Assurance",
        description:
          "Implementing standards and evaluation frameworks to ensure educational excellence across institutions.",
      },
    },
    stats: {
      institutions: "Educational Institutions",
      teachers: "Trained Teachers",
      students: "Students Impacted",
      programs: "Active Programs",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      donate: "طرق التبرع",
      about: "من نحن",
      aboutCommission: "عن الجمعية",
      team: "نبذة عن الفريق",
      visionMessage: "الرؤية والرسالة",
      target: "الهدف",
      annualReports: "التقارير السنوية",
      formalEducation: "التعليم الرسمي",
      nonformalEducation: "التعليم غير الرسمي",
      educationQuality: "جودة التعليم",
      psychologicalSupport: "الدعم النفسي",
      events: "الفعاليات",
      campaigns: "حملات دعم التعليم",
      orphanSponsorship: "دعم وكفالات الأيتام",
    },
    hero: {
      title: "هيئة التعليم",
      subtitle: "تمكين التعليم، بناء المستقبل",
      description:
        "نحن ملتزمون بتطوير الأنظمة التعليمية وتقديم حلول مبتكرة تساهم في تحسين جودة التعليم وتحقيق أهداف التنمية المستدامة.",
      cta: "اعرف المزيد",
    },
    about: {
      title: "عن الهيئة",
      description:
        "هيئة التعليم هي مؤسسة رائدة مكرسة للنهوض بالمعايير التعليمية وتعزيز الابتكار في بيئات التعلم. نعمل بشكل وثيق مع المؤسسات التعليمية وصانعي السياسات والمجتمعات لإنشاء برامج تعليمية مؤثرة.",
      mission: "مهمتنا",
      missionText: "تحويل التعليم من خلال أساليب مبتكرة، وضمان فرص تعلم عالية الجودة للجميع.",
      vision: "رؤيتنا",
      visionText: "عالم يتمتع فيه كل فرد بإمكانية الوصول إلى تعليم عالي الجودة يمكّنه من الوصول إلى إمكاناته الكاملة.",
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول تعليمية شاملة للتنمية المستدامة",
      service1: {
        title: "الاستشارات التعليمية",
        description: "إرشادات الخبراء حول تطوير المناهج وطرق التدريس وتنفيذ السياسات التعليمية.",
      },
      service2: {
        title: "تدريب المعلمين",
        description: "برامج تطوير مهني شاملة مصممة لتعزيز مهارات التدريس والأساليب التربوية.",
      },
      service3: {
        title: "البحث والتطوير",
        description: "إجراء أبحاث متطورة لتحديد أفضل الممارسات والحلول المبتكرة في التعليم.",
      },
      service4: {
        title: "ضمان الجودة",
        description: "تنفيذ المعايير وأطر التقييم لضمان التميز التعليمي عبر المؤسسات.",
      },
    },
    stats: {
      institutions: "مؤسسة تعليمية",
      teachers: "معلم مدرب",
      students: "طالب مستفيد",
      programs: "برنامج نشط",
    },
  },
}

export function getTranslations(locale: Locale) {
  return translations[locale]
}
