import { Locale } from "@/lib/i18n";

async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const isArabic = lang === "ar";

  const content = {
    ar: {
      title: "الهدف:",
      description:
        "بناء شخصيّة المتعلّم المتوازنة بجوانبها الوجدانيّة والعلّميّة والفكريّة والاجتماعيّة والنفسيّة والجسديّة عن طريق اكتساب المعارف والمهارات والاتّجاهات والقيم الخلقيّة التي تمكّنه من تطوير نفسه، واستخدام التقنيّات بشكل إيجابيّ، وتوظيفها في المواقف الحياتيّة المختلفة.",
    },
    en: {
      title: "Target:",
      description:
        "Building a well-balanced learner personality in its emotional, academic, intellectual, social, psychological, and physical dimensions through the acquisition of knowledge, skills, attitudes, and moral values that enable learners to develop themselves, use technology positively, and apply it in various life situations.",
    },
  } as const;

  const t = content[lang];

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      <h3 className="text-xl font-bold text-[#203441] mb-6 flex items-center gap-2">
        <span className="w-8 h-1 bg-[#39576f] rounded-full"></span>
        <span>{t.title}</span>
      </h3>
      <p className="text-lg text-main-blue">{t.description}</p>
    </div>
  );
}

export default Page;