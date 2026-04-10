import {
  LineChart,
  Users,
  CheckCircle,
  Target,
  ChevronRight,
} from "lucide-react";
 
import SectionTitle from "./section-title";
import Image from "next/image";
import { i1, i2, i3, i4 } from "@/lib/constant";
import { Locale } from "@/lib/i18n";

function AchievementsProjectBenefits({lang}:{lang:Locale}) {
  const benefits = [
  {
    title: lang === 'ar' ? "تحسين جودة التعليم" : "Improving Education Quality",
    description:
      lang === 'ar' ? "رفع مستوى التعليم من خلال تطوير المناهج وأساليب التدريس الحديثة" : "Raising the level of education through curriculum development and modern teaching methods",
    icon: LineChart,
    image: i1,
  },
  {
    title: lang === 'ar' ? "بناء قدرات المعلمين" : "Building Teachers' Capacities",
    description: lang === 'ar' ? "تدريب وتأهيل المعلمين لمواكبة أحدث الأساليب التربوية" : "Training and qualifying teachers to keep up with the latest educational methods",
    icon: Users,
    image: i2,
  },
  {
    title: lang === 'ar' ? "تعزيز المهارات الحياتية" : "Enhancing Life Skills",
    description: lang === 'ar' ? "تنمية مهارات الطلاب في التفكير النقدي وحل المشكلات" : "Developing students' skills in critical thinking and problem-solving",
    icon: CheckCircle,
    image:i3,
  },
  {
    title: lang === 'ar' ? "تحقيق رؤية التنمية" : "Achieving Development Vision",
    description: lang === 'ar' ? "المساهمة في تحقيق أهداف التنمية المستدامة في مجال التعليم" : "Contributing to achieving the goals of sustainable development in the field of education",
    icon: Target,
    image: i4,
  },
];
  return (
    <div>
      <SectionTitle title={lang === 'ar' ? "فوائد مشاريعنا" : "Benefits of Our Projects"} />

      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="relative flex bg-white/10 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Background Image with gradient */}
            <div className="absolute inset-0 z-0">
              <Image
                src={benefit.image || "/placeholder.svg"}
                alt={benefit.title}
                fill
                className="object-cover opacity-15 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-main-blue/80 to-secound-blue/70"></div>
            </div>

            {/* Left color bar with icon (in front of background) */}
            <div className="w-24 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white relative z-10 transition-all duration-500 group-hover:w-28">
              <benefit.icon className="w-10 h-10 transition-transform duration-500 group-hover:scale-110" />
            </div>

            {/* Content (in front of background) */}
            <div className="p-6 relative z-10">
              <h4 className="text-2xl font-bold text-white mb-3">
                {benefit.title}
              </h4>
              <p className="text-white/90 text-lg">{benefit.description}</p>
            </div>

             
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementsProjectBenefits;
