
"use client"


import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FileDown, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"
import { Locale } from "@/lib/i18n"
import { qualityTranslations } from "./text"


export function DocumentsSection({ lang }: { lang: Locale }) {
  const [showAll, setShowAll] = React.useState(false)
  const t = qualityTranslations[lang]
  // Sample documents - replace with your actual data
  const documents = {
    ar: [
      { title: "استمارة التقييم الذاتي", description: "استمارة التقييم الذاتي للاستخدام في تقييم أداء المدارس في سوريا", type: '', url: 'https://drive.google.com/file/d/17T1Zzh9ObusYZxyQb43SM-skATKAmcmh/view?usp=sharing' },

      { title: 'دليل تقييم أداء المدارس', description: 'دليل تقييم أداء المدارس لاستخدامه في تقييم أداء المدارس في سوريا', type: ' ', url: 'https://drive.google.com/file/d/17XHR0Ua9pxTa7kZGSUpKG1XBXg8U285B/view?usp=sharing' },
      { title: 'حقيبة النماذج', description: 'تقويم العام الدراسي', type: 'دراسة', url: 'https://drive.google.com/file/d/1fyfxC_rXZuO0HiuoiTVaJZBFA1abgG14/view?usp=sharing' },
      { title: 'حقيبة النماذج', description: 'فهرس الحقائب', type: 'برنامج', url: 'https://drive.google.com/file/d/1313VAhxgzQG_xMdrpEKjWhJC7lgHFC7-/view?usp=sharing' },

      { title: 'حقيبة المدير والمدرس', description: 'الخطة الأسبوعية', type: '', url: 'https://drive.google.com/file/d/1Drx0yoIHQLsURRcLkC9LpP-6bsP1zRgt/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'تنمية المهارات والمواهب  ', type: '', url: 'https://drive.google.com/file/d/1SYmKrKzf7LvgPerWLga4P73-IQ5iDlzN/view?usp=sharing' },

      { title: 'حقيبة المدير والمدرس', description: 'جدول مواصفات بناء الاختبار', type: '', url: 'https://drive.google.com/file/d/1LdgVnNnhb_YNmx-njX7q1OW9ABlUdQ9D/view?usp=sharing' },

      { title: 'حقيبة المدير والمدرس', description: 'خطة توزيع المنهج للفصل الدراسي', type: '', url: 'https://drive.google.com/file/d/1ux6Ildz8JeMxBjEP3lCkmM_VuHLhF6Ml/view?usp=sharing' },

      { title: 'حقيبة المدير والمدرس', description: 'ملاحظات عامة حول أسئلة وتصحيح اختبارات', type: '', url: 'https://drive.google.com/file/d/1ok6VRqbt7ea0x-SCEogJwFMhP4fnfVyn/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'محضر إجتماع ', type: '', url: 'https://drive.google.com/file/d/1bfItv7zWyfllSuZSwBNaiR-o9OlJbjF-/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'مجمل اجتماعات المعلم الأول', type: '', url: 'https://drive.google.com/file/d/1DxoPgKWs2TdlV134cjQjmfCfn9QFP58w/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'إذن بالانصراف', type: '', url: 'https://drive.google.com/file/d/1cp6JWmpFDVoSAwbTvHQ7pyzF5aGxgJIi/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'استمارة تقويم أداء المعلم', type: '', url: 'https://drive.google.com/file/d/1ik4WLB2GGWX530zIJCHQUJkIeEOSNfBF/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'الخطة التشغيلية لقسم', type: '', url: 'https://drive.google.com/file/d/1NqVXPAYBAp0LZwZ7j46ydgx1Bh_tPuVz/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'تحليل نتائج الاختبارات', type: '', url: 'https://drive.google.com/file/d/18uD_p84wYW4u21QrRGA-k1UujnOcb1TN/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'تعهد ولي أمر', type: '', url: 'https://drive.google.com/file/d/1pFITKDIEZMQuXm0upqPdbnH2L3GNbYoc/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'تقرير الإنجازات التربوية والأنشطة المدرسية', type: '', url: 'https://drive.google.com/file/d/1dREsDRAx1kpMUIdhVPiLbDkj_WM9k1NS/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'تنبيه للمعلم كتابي', type: '', url: 'https://drive.google.com/file/d/1EuKw71aXlaDn2XddxB4MCNhhgezoBqBY/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'إقالة موظف', type: '', url: 'https://drive.google.com/file/d/1cHB8wYgrX8QcXGcFtUl7Orn_d6vfENxL/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'خطة توزيع الحصص والصفوف', type: '', url: 'https://drive.google.com/file/d/1O6MY1Ahyhy_BrP30ypsHuc__pSKzG0hR/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'خلاصة متابعة دفاتر التحضير', type: '', url: 'https://drive.google.com/file/d/1h2V5V82VhZd8cu_MHKQQFq7Qi1D0Ef7K/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'سجل تسجيل الطلاب الجدد', type: '', url: 'https://drive.google.com/file/d/1erhRIIYvMR4ivwpf-huioYQpq2-EELha/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'قرار فصل طالب', type: '', url: 'https://drive.google.com/file/d/1Pkq-Vg9q80vtN8ooRacB0yjjqVYHXWTg/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'متابعة ملفات المعلمـات', type: '', url: 'https://drive.google.com/file/d/1ZVuBAUaMj8focI0EaYBPP6dZ7acCMOPn/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'مجمل الزيارات الصفية لمعلمي قسم', type: '', url: 'https://drive.google.com/file/d/1nMMG5zjL1XNiRGZ0-jy34WiIBMPLXaGi/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'مكافات خاصة', type: '', url: 'https://drive.google.com/file/d/17Lp12oxhNcEMy_qoA6z3w6LcTRZc4LmO/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'نموذج خطة استراتيجية', type: '', url: 'https://drive.google.com/file/d/1-rQh5dUicB3gqskpj2CvgRtwJok-4-xh/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'الخطة الأسبوعية للمعلم', type: '', url: 'https://drive.google.com/file/d/1DKnmlPT2siwzlYUycqMnM9NjFElZyJ6w/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'استئذان موظف', type: '', url: 'https://drive.google.com/file/d/1V9jTJEa68baupivIfwGEohXWL_c5FOyZ/view?usp=sharing' },
      { title: 'حقيبة المدير والمدرس', description: 'استجواب', type: '', url: 'https://drive.google.com/file/d/17gECYuGxcsewHvNqS6PXHkKRa0msbD2V/view?usp=sharing' },
    ],
    en: [
      { title: "Self-Assessment Form", description: "Self-assessment form for use in evaluating school performance in Syria", type: '', url: 'https://drive.google.com/file/d/17T1Zzh9ObusYZxyQb43SM-skATKAmcmh/view?usp=sharing' },

      { title: 'School Performance Evaluation Guide', description: 'School performance evaluation guide for use in evaluating school performance in Syria', type: ' ', url: 'https://drive.google.com/file/d/17XHR0Ua9pxTa7kZGSUpKG1XBXg8U285B/view?usp=sharing' },
      { title: 'Forms Kit', description: 'Academic Year Calendar', type: 'Study', url: 'https://drive.google.com/file/d/1fyfxC_rXZuO0HiuoiTVaJZBFA1abgG14/view?usp=sharing' },
      { title: 'Forms Kit', description: 'Kit Index', type: 'Program', url: 'https://drive.google.com/file/d/1313VAhxgzQG_xMdrpEKjWhJC7lgHFC7-/view?usp=sharing' },

      { title: 'Principal and Teacher Kit', description: 'Weekly Plan', type: '', url: 'https://drive.google.com/file/d/1Drx0yoIHQLsURRcLkC9LpP-6bsP1zRgt/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Skills and Talent Development', type: '', url: 'https://drive.google.com/file/d/1SYmKrKzf7LvgPerWLga4P73-IQ5iDlzN/view?usp=sharing' },

      { title: 'Principal and Teacher Kit', description: 'Test Construction Specification Table', type: '', url: 'https://drive.google.com/file/d/1LdgVnNnhb_YNmx-njX7q1OW9ABlUdQ9D/view?usp=sharing' },

      { title: 'Principal and Teacher Kit', description: 'Curriculum Distribution Plan for the Semester', type: '', url: 'https://drive.google.com/file/d/1ux6Ildz8JeMxBjEP3lCkmM_VuHLhF6Ml/view?usp=sharing' },

      { title: 'Principal and Teacher Kit', description: 'General Notes on Exam Questions and Grading', type: '', url: 'https://drive.google.com/file/d/1ok6VRqbt7ea0x-SCEogJwFMhP4fnfVyn/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Meeting Minutes', type: '', url: 'https://drive.google.com/file/d/1bfItv7zWyfllSuZSwBNaiR-o9OlJbjF-/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Summary of Lead Teacher Meetings', type: '', url: 'https://drive.google.com/file/d/1DxoPgKWs2TdlV134cjQjmfCfn9QFP58w/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Permission to Leave / Exit Permit', type: '', url: 'https://drive.google.com/file/d/1cp6JWmpFDVoSAwbTvHQ7pyzF5aGxgJIi/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Teacher Performance Evaluation Form', type: '', url: 'https://drive.google.com/file/d/1ik4WLB2GGWX530zIJCHQUJkIeEOSNfBF/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Department Operational Plan', type: '', url: 'https://drive.google.com/file/d/1NqVXPAYBAp0LZwZ7j46ydgx1Bh_tPuVz/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Exam Results Analysis', type: '', url: 'https://drive.google.com/file/d/18uD_p84wYW4u21QrRGA-k1UujnOcb1TN/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Parent/Guardian Undertaking', type: '', url: 'https://drive.google.com/file/d/1pFITKDIEZMQuXm0upqPdbnH2L3GNbYoc/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Report on Educational Achievements and School Activities', type: '', url: 'https://drive.google.com/file/d/1dREsDRAx1kpMUIdhVPiLbDkj_WM9k1NS/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Written Warning to Teacher', type: '', url: 'https://drive.google.com/file/d/1EuKw71aXlaDn2XddxB4MCNhhgezoBqBY/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Employee Dismissal / Staff Termination', type: '', url: 'https://drive.google.com/file/d/1cHB8wYgrX8QcXGcFtUl7Orn_d6vfENxL/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Class and Lesson Distribution Plan', type: '', url: 'https://drive.google.com/file/d/1O6MY1Ahyhy_BrP30ypsHuc__pSKzG0hR/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Summary of Lesson Plan Book Monitoring', type: '', url: 'https://drive.google.com/file/d/1h2V5V82VhZd8cu_MHKQQFq7Qi1D0Ef7K/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'New Student Registration Record', type: '', url: 'https://drive.google.com/file/d/1erhRIIYvMR4ivwpf-huioYQpq2-EELha/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Student Expulsion Decision', type: '', url: 'https://drive.google.com/file/d/1Pkq-Vg9q80vtN8ooRacB0yjjqVYHXWTg/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Follow-up on Female Teachers\' Files', type: '', url: 'https://drive.google.com/file/d/1ZVuBAUaMj8focI0EaYBPP6dZ7acCMOPn/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Summary of Classroom Visits for Department Teachers', type: '', url: 'https://drive.google.com/file/d/1nMMG5zjL1XNiRGZ0-jy34WiIBMPLXaGi/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Special Rewards / Special Bonuses', type: '', url: 'https://drive.google.com/file/d/17Lp12oxhNcEMy_qoA6z3w6LcTRZc4LmO/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Strategic Plan Template', type: '', url: 'https://drive.google.com/file/d/1-rQh5dUicB3gqskpj2CvgRtwJok-4-xh/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Teacher\'s Weekly Plan', type: '', url: 'https://drive.google.com/file/d/1DKnmlPT2siwzlYUycqMnM9NjFElZyJ6w/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Employee Leave Request', type: '', url: 'https://drive.google.com/file/d/1V9jTJEa68baupivIfwGEohXWL_c5FOyZ/view?usp=sharing' },
      { title: 'Principal and Teacher Kit', description: 'Inquiry / Questioning', type: '', url: 'https://drive.google.com/file/d/17gECYuGxcsewHvNqS6PXHkKRa0msbD2V/view?usp=sharing' },
    ],
  }


  const displayedDocuments = showAll ? documents[lang] : documents[lang].slice(0, 6)

  return (
    <div id="documents" className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">
            {t.documents.title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t.documents.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedDocuments.map((doc, index) => (
            <DocumentCard key={index} {...doc} downloadButton={t.documents.downloadButton} />
          ))}
        </div>
        {documents[lang].length > 6 && (
          <div className="mt-12 text-center">
            <Button
              className="bg-[#39576f] hover:bg-[#203441]"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? t.documents.viewLess : t.documents.viewAllButton}
              <FileText className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}



interface DocumentCardProps {
  title: string
  description: string
  type: string
  url: string
  downloadButton: string
}

export function DocumentCard({ title, description, type, url, downloadButton }: DocumentCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-[#203441]">{title}</CardTitle>
        <CardDescription className="text-gray-600 line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href={url || ''} download target="_blank">
            <FileDown className="ml-2 h-4 w-4" />
            {downloadButton}
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}