import { Locale } from "@/lib/i18n";



function AchievementsHeader({lang}:{lang:Locale}) {

  const text = {
    ar:{
      title: "تقرير الإنجازات منذ 2015",
      subtitle: "إنجازاتنا ومشاريعنا",
      achievmentTitle: `نفخر بما حققناه من إنجازات ونسعى دائماً لتطوير مشاريعنا لتحقيق أقصى
        فائدة للطلاب والمجتمع`
    },
    en:{
title: "Achievements Report Since 2015",
subtitle: "Our Achievements and Projects",
achievmentTitle: `We are proud of what we have achieved and continuously strive to develop our projects to maximize benefits for students and the community`
    }
  }
  return (
    <div className="text-center mb-20">
      <div className="inline-block mb-3 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full">
        <span className="text-white/90 text-sm font-medium">
         {text[lang].title}
        </span>
      </div>
      <h2 className="text-4xl font-bold text-white mb-6">
        {text[lang].subtitle}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-secound-blue to-white mx-auto mb-6"></div>
      <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg">
        {text[lang].achievmentTitle}
      </p>
    </div>
  );
}

export default AchievementsHeader;
