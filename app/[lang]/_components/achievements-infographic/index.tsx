// import {
//   Award,
//   BookOpen,
//   Building,
//   GraduationCap,
//   LineChart,
//   Users,
//   CheckCircle,
//   Target,
// } from "lucide-react";
// import Image from "next/image";

// export default function AchievementsInfographic() {
//   // Key achievements data
//   const achievements = [
//     {
//       icon: GraduationCap,
//       title: "50,000+",
//       description: "طالب مستفيد",
//       color: "bg-[#203441]",
//       image: "/placeholder.svg?height=400&width=600", // Replace with actual image
//     },
//     {
//       icon: Building,
//       title: "120+",
//       description: "مدرسة تم تطويرها",
//       color: "bg-[#39576f]",
//       image: "/placeholder.svg?height=400&width=600", // Replace with actual image
//     },
//     {
//       icon: BookOpen,
//       title: "35+",
//       description: "برنامج تعليمي",
//       color: "bg-[#476c86]",
//       image: "/placeholder.svg?height=400&width=600", // Replace with actual image
//     },
//     {
//       icon: Award,
//       title: "15+",
//       description: "جائزة تميز",
//       color: "bg-[#606060]",
//       image: "/placeholder.svg?height=400&width=600", // Replace with actual image
//     },
//   ];

//   // Project benefits data
//   const benefits = [
//     {
//       title: "تحسين جودة التعليم",
//       description:
//         "رفع مستوى التعليم من خلال تطوير المناهج وأساليب التدريس الحديثة",
//       icon: LineChart,
//       image: "/placeholder.svg?height=300&width=800", // Replace with actual image
//     },
//     {
//       title: "بناء قدرات المعلمين",
//       description: "تدريب وتأهيل المعلمين لمواكبة أحدث الأساليب التربوية",
//       icon: Users,
//       image: "/placeholder.svg?height=300&width=800", // Replace with actual image
//     },
//     {
//       title: "تعزيز المهارات الحياتية",
//       description: "تنمية مهارات الطلاب في التفكير النقدي وحل المشكلات",
//       icon: CheckCircle,
//       image: "/placeholder.svg?height=300&width=800", // Replace with actual image
//     },
//     {
//       title: "تحقيق رؤية التنمية",
//       description: "المساهمة في تحقيق أهداف التنمية المستدامة في مجال التعليم",
//       icon: Target,
//       image: "/placeholder.svg?height=300&width=800", // Replace with actual image
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-16" >
//           <h2 className="text-3xl font-bold text-[#203441] mb-4">
//             إنجازاتنا ومشاريعنا
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#476c86] to-[#203441] mx-auto"></div>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             نفخر بما حققناه من إنجازات ونسعى دائماً لتطوير مشاريعنا لتحقيق أقصى
//             فائدة للطلاب والمجتمع
//           </p>
//         </div>

//         {/* Key Achievements Section */}
//         <div className="mb-20">
//           <h3
//             className="text-xl font-bold text-center text-[#39576f] mb-10"
//
//           >
//             أبرز الإنجازات
//           </h3>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//             {achievements.map((item, index) => (
//               <div key={index} className="relative group">
//                 {/* Card with background image */}
//                 <div className="relative bg-white rounded-lg shadow-md p-6 text-center h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg border border-gray-100 overflow-hidden">
//                   {/* Background Image */}
//                   <div className="absolute inset-0 z-0">
//                     <Image
//                       src={item.image || "/placeholder.svg"}
//                       alt={item.description}
//                       fill
//                       className="object-cover opacity-20"
//                     />
//                     <div className="absolute inset-0 bg-white/70"></div>
//                   </div>

//                   {/* Content (in front of background) */}
//                   <div className="relative z-10">
//                     {/* Icon circle with background */}
//                     <div
//                       className={`w-16 h-16 ${item.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white`}
//                     >
//                       <item.icon className="w-8 h-8" />
//                     </div>

//                     {/* Achievement number */}
//                     <h4 className="text-3xl font-bold text-[#203441] mb-2">
//                       {item.title}
//                     </h4>

//                     {/* Description */}
//                     <p className="text-gray-600" >
//                       {item.description}
//                     </p>
//                   </div>

//                   {/* Decorative element */}
//                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#476c86]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Project Benefits Section */}
//         <div>
//           <h3
//             className="text-xl font-bold text-center text-[#39576f] mb-10"
//
//           >
//             فوائد مشاريعنا
//           </h3>

//           <div className="grid md:grid-cols-2 gap-8" >
//             {benefits.map((benefit, index) => (
//               <div
//                 key={index}
//                 className="relative flex bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
//               >
//                 {/* Background Image */}
//                 <div className="absolute inset-0 z-0">
//                   <Image
//                     src={benefit.image || "/placeholder.svg"}
//                     alt={benefit.title}
//                     fill
//                     className="object-cover opacity-15"
//                   />
//                   <div className="absolute inset-0 bg-white/80"></div>
//                 </div>

//                 {/* Left color bar with icon (in front of background) */}
//                 <div className="w-20 bg-gradient-to-b from-[#203441] to-[#476c86] flex items-center justify-center text-white relative z-10">
//                   <benefit.icon className="w-8 h-8" />
//                 </div>

//                 {/* Content (in front of background) */}
//                 <div className="p-6 relative z-10">
//                   <h4 className="text-xl font-bold text-[#203441] mb-2">
//                     {benefit.title}
//                   </h4>
//                   <p className="text-gray-600">{benefit.description}</p>
//                 </div>

//                 {/* Number indicator */}
//                 <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-[#39576f]/10 flex items-center justify-center text-[#39576f] font-bold text-sm z-10">
//                   {index + 1}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import {
//   Award,
//   BookOpen,
//   Building,
//   GraduationCap,
//   LineChart,
//   Users,
//   CheckCircle,
//   Target,
//   ChevronLeft,
// } from "lucide-react";
// import Image from "next/image";
// import image1 from "@/public/one.jpg";
// import image2 from "@/public/stat.jpg";
// import image3 from "@/public/three.jpg";
// import image4 from "@/public/twoo.jpg";
// export default function AchievementsInfographic() {
//   // Key achievements data
//   const achievements = [
//     {
//       icon: GraduationCap,
//       title: "50,000+",
//       description: "طالب مستفيد",
//       color: "bg-[#203441]",
//       shadowColor: "shadow-[#203441]/20",
//       image: image1.src,
//     },
//     {
//       icon: Building,
//       title: "120+",
//       description: "مدرسة تم تطويرها",
//       color: "bg-[#39576f]",
//       shadowColor: "shadow-[#39576f]/20",
//       image: image2.src,
//     },
//     {
//       icon: BookOpen,
//       title: "35+",
//       description: "برنامج تعليمي",
//       color: "bg-[#476c86]",
//       shadowColor: "shadow-[#476c86]/20",
//       image: image3.src,
//     },
//     {
//       icon: Award,
//       title: "15+",
//       description: "جائزة تميز",
//       color: "bg-[#606060]",
//       shadowColor: "shadow-[#606060]/20",
//       image: image4.src,
//     },
//   ];

//   // Project benefits data
//   const benefits = [
//     {
//       title: "تحسين جودة التعليم",
//       description:
//         "رفع مستوى التعليم من خلال تطوير المناهج وأساليب التدريس الحديثة",
//       icon: LineChart,
//       image: image1.src,
//     },
//     {
//       title: "بناء قدرات المعلمين",
//       description: "تدريب وتأهيل المعلمين لمواكبة أحدث الأساليب التربوية",
//       icon: Users,
//       image: image2.src,
//     },
//     {
//       title: "تعزيز المهارات الحياتية",
//       description: "تنمية مهارات الطلاب في التفكير النقدي وحل المشكلات",
//       icon: CheckCircle,
//       image: image3.src,
//     },
//     {
//       title: "تحقيق رؤية التنمية",
//       description: "المساهمة في تحقيق أهداف التنمية المستدامة في مجال التعليم",
//       icon: Target,
//       image: image4.src,
//     },
//   ];

//   return (
//     <section className="py-20 relative overflow-hidden">
//       {/* Background Image for entire section */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={image1.src}
//           alt="Background"
//           fill
//           className="object-cover object-center"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#203441]/95 to-[#476c86]/90"></div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/10 to-transparent"></div>
//       <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
//       <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-[#203441]/30 blur-3xl"></div>
//       <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-[#476c86]/30 blur-3xl"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="inline-block mb-3 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full">
//             <span className="text-white/90 text-sm font-medium">
//               تقرير الإنجازات منذ 2015
//             </span>
//           </div>
//           <h2 className="text-4xl font-bold text-white mb-6">
//             إنجازاتنا ومشاريعنا
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#476c86] to-white mx-auto mb-6"></div>
//           <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg">
//             نفخر بما حققناه من إنجازات ونسعى دائماً لتطوير مشاريعنا لتحقيق أقصى
//             فائدة للطلاب والمجتمع
//           </p>
//         </div>

//         {/* Key Achievements Section */}
//         <div className="mb-24">
//           <h3
//             className="text-xl font-bold text-center text-white mb-12"
//
//           >
//             <span className="relative inline-block">
//               أبرز الإنجازات
//               <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></span>
//             </span>
//           </h3>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//             {achievements.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative group"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 {/* Card with background image */}
//                 <div
//                   className={`relative bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-6 text-center h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl border border-white/20 overflow-hidden ${item.shadowColor}`}
//                 >
//                   {/* Background Image with gradient */}
//                   <div className="absolute inset-0 z-0">
//                     <Image
//                       src={item.image || "/placeholder.svg"}
//                       alt={item.description}
//                       fill
//                       className="object-cover opacity-20"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-b from-[#203441]/50 to-[#476c86]/50"></div>
//                   </div>

//                   {/* Content (in front of background) */}
//                   <div className="relative z-10">
//                     {/* Icon circle with background and glow effect */}
//                     <div
//                       className={`w-20 h-20 ${item.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white transform transition-transform duration-500 group-hover:scale-110 shadow-lg`}
//                     >
//                       <div className="absolute inset-0 rounded-full bg-white/20 blur-md"></div>
//                       <item.icon className="w-10 h-10 relative z-10" />
//                     </div>

//                     {/* Achievement number with animated counting effect */}
//                     <h4 className="text-4xl font-bold text-white mb-3 tracking-tight">
//                       {item.title}
//                     </h4>

//                     {/* Description */}
//                     <p className="text-white/90 text-lg" >
//                       {item.description}
//                     </p>
//                   </div>

//                   {/* Decorative elements */}
//                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
//                   <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/5 rounded-full transform rotate-45"></div>
//                   <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white/5 rounded-full"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Project Benefits Section */}
//         <div>
//           <h3
//             className="text-xl font-bold text-center text-white mb-12"
//
//           >
//             <span className="relative inline-block">
//               فوائد مشاريعنا
//               <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></span>
//             </span>
//           </h3>

//           <div className="grid md:grid-cols-2 gap-8" >
//             {benefits.map((benefit, index) => (
//               <div
//                 key={index}
//                 className="relative flex bg-white/10 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
//                 style={{ animationDelay: `${index * 150}ms` }}
//               >
//                 {/* Background Image with gradient */}
//                 <div className="absolute inset-0 z-0">
//                   <Image
//                     src={benefit.image || "/placeholder.svg"}
//                     alt={benefit.title}
//                     fill
//                     className="object-cover opacity-15 transition-transform duration-700 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#203441]/80 to-[#476c86]/70"></div>
//                 </div>

//                 {/* Left color bar with icon (in front of background) */}
//                 <div className="w-24 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white relative z-10 transition-all duration-500 group-hover:w-28">
//                   <benefit.icon className="w-10 h-10 transition-transform duration-500 group-hover:scale-110" />
//                 </div>

//                 {/* Content (in front of background) */}
//                 <div className="p-6 relative z-10">
//                   <h4 className="text-2xl font-bold text-white mb-3">
//                     {benefit.title}
//                   </h4>
//                   <p className="text-white/90 text-lg">{benefit.description}</p>
//                 </div>

//                 {/* Number indicator with glow effect */}
//                 <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg">
//                   <div className="absolute inset-0 rounded-full bg-white/10 blur-sm"></div>
//                   <span className="relative z-10">{index + 1}</span>
//                 </div>

//                 {/* Hover indicator */}
//                 <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white/70 flex items-center text-sm">
//                   <span className="mr-1">المزيد</span>
//                   <ChevronLeft className="w-4 h-4" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

 
import AchievementsHeader from "./achievements-header";
import AchievementsList from "./achievements-list";
import AchievementsProjectBenefits from "./achievements-project-benefits";
import { i1 } from "@/lib/constant";
 export default function AchievementsInfographic() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={i1}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-main-blue/80 to-secound-blue/90"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-main-blue/30 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-secound-blue/30 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AchievementsHeader />

        <AchievementsList />

        <AchievementsProjectBenefits />
      </div>
    </section>
  );
}
