import { Locale } from "@/lib/i18n";
import { Eye, Mail } from "lucide-react";

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const isArabic = lang === "ar";

  const content = {
    ar: {
      pageTitle: "الرؤية والرسالة:",
      visionTitle: "الرؤية:",
      visionText:
        "تعليم شامل وعالي الجودة لجميع الطلاب دون تمييز، يعزّز القيم الإنسانيّة ويُنمّي القدرات لمواجهة التحديات بروح من الإبداع والتميّز.",
      visionToActionTitle: "نقل الرؤية إلى حيّز العمل:",
      visionToActionText: `ترجمت جمعيّة تطوير التعليم رؤيتها نحو جودة التعليم إلى خطوات عمليّة ممنهجة، حيث اعتمدت مفهوم الجودة الشاملة كمرتكز أساسيّ في تطوير العمليّة التعليميّة. وانطلقت في ذلك من رفع كفاءة العاملين، وتحسين مخرجات التعليم، وتحديث معايير التقييم، وابتكار برامج تعليميّة وتدريبيّة تستجيب لحاجات المستفيدين المختلفة، وتراعي تنوّع قدراتهم وسماتهم. ولضمان فعاليّة التطبيق وتحقيق الأثر، أولت الجمعيّة اهتمامًا خاصًّا بالمتابعة والتقييم المستمرّ، ليس فقط لقياس جودة التعليم، بل للتأكّد من قدرة الفرق التعليميّة والإداريّة على ربط الأهداف التعليميّة باحتياجات المتعلّمين. ومن هنا شكّلت الجمعيّة فرقًا ميدانيّة لمتابعة الجودة في المدارس ومراكز التدريب، تتكوّن من مشرف تربويّ مقيم، ومرشد نفسيّ وتربويّ، يتلقّون توجيهاتهم من مكتب الإشراف التربويّ في إدارة الجمعيّة. وتتمثّل مهامهم في المتابعة اليوميّة، والرصد، وتقديم الدعم والتدريب المستمرّ، وتقييم الأنشطة والبرامج والمستفيدين باستخدام أدوات ومعايير دقيقة تضمن التحسين المستمرّ والارتقاء بالأداء التربويّ والتعليميّ.`,
      missionTitle: "الرسالة:",
      missionText:
        "توفير مناخ تعليميّ متّزن من حيث الوسائل التعليميّة والأدوات اللازمة للطلّاب؛ لتنمية مهاراتهم العلّميّة والذهنيّة والاجتماعيّة والبدنيّة وعلى يد كفاءات بكافّة التخصّصات حسب المناهج المعتمدة.",
    },
    en: {
      pageTitle: "Vision and Mission",
      visionTitle: "Vision:",
      visionText:
        "Providing inclusive, high-quality education for all students without discrimination, fostering human values and developing capabilities to مواجهة challenges with creativity and excellence.",
      visionToActionTitle: "Translating Vision into Action:",
      visionToActionText: `The Education Development Association has translated its vision of quality education into structured and practical steps, adopting the concept of total quality as a fundamental pillar in developing the educational process. This approach includes enhancing staff competencies, improving educational outcomes, updating evaluation standards, and designing innovative educational and training programs that respond to diverse beneficiary needs and abilities. To ensure effective implementation and impact, the association places strong emphasis on continuous monitoring and evaluation—not only to measure education quality, but also to ensure that educational and administrative teams align learning objectives with students’ needs. To achieve this, the association has established field teams to monitor quality in schools and training centers, consisting of resident educational supervisors and psychological and educational counselors, guided by the educational supervision office. Their responsibilities include daily follow-up, monitoring, continuous support and training, and evaluating activities, programs, and beneficiaries using precise tools and standards that ensure continuous improvement and advancement in educational performance.`,
      missionTitle: "Mission:",
      missionText:
        "Providing a balanced educational environment in terms of learning tools and resources to develop students’ academic, intellectual, social, and physical skills, delivered by qualified professionals across various specializations in accordance with approved curricula.",
    },
  } as const;

  const t = content[lang];

  return (
    <div className="space-y-6" dir={isArabic ? "rtl" : "ltr"}>
      <h3 className="text-xl font-bold text-[#203441] mb-6 flex items-center gap-2">
        <span className="w-8 h-1 bg-[#39576f] rounded-full"></span>
        <span>{t.pageTitle}</span>
      </h3>

      {/* Vision */}
      <div className="mt-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-[#39576f] p-3 rounded-full text-white">
            <Eye className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-[#203441]">{t.visionTitle}</h3>
        </div>

        <p className="text-lg text-main-blue">{t.visionText}</p>

        <div>
          <div className="flex items-center gap-2 mt-10 mb-10">
            <h3 className="text-xl font-bold text-[#203441]">
              {t.visionToActionTitle}
            </h3>
            <div className="h-0.5 flex-1 bg-gray-200"></div>
          </div>

          <p className="text-lg text-main-blue">{t.visionToActionText}</p>
        </div>
      </div>

      {/* Mission */}
      <div className="mt-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-[#39576f] p-3 rounded-full text-white">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-[#203441]">
            {t.missionTitle}
          </h3>
        </div>

        <p className="text-lg text-main-blue">{t.missionText}</p>
      </div>
    </div>
  );
}