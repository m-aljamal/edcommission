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
const benefits = [
  {
    title: "تحسين جودة التعليم",
    description:
      "رفع مستوى التعليم من خلال تطوير المناهج وأساليب التدريس الحديثة",
    icon: LineChart,
    image: i1,
  },
  {
    title: "بناء قدرات المعلمين",
    description: "تدريب وتأهيل المعلمين لمواكبة أحدث الأساليب التربوية",
    icon: Users,
    image: i2,
  },
  {
    title: "تعزيز المهارات الحياتية",
    description: "تنمية مهارات الطلاب في التفكير النقدي وحل المشكلات",
    icon: CheckCircle,
    image:i3,
  },
  {
    title: "تحقيق رؤية التنمية",
    description: "المساهمة في تحقيق أهداف التنمية المستدامة في مجال التعليم",
    icon: Target,
    image: i4,
  },
];
function AchievementsProjectBenefits() {
  return (
    <div>
      <SectionTitle title="فوائد مشاريعنا" />

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

            {/* Hover indicator */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white/70 flex items-center text-sm">
              <span className="mr-1">المزيد</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementsProjectBenefits;
