import { Locale } from "@/lib/i18n"
import AnnualReportsClientPage from "./AnnualReportsClientPage"

 
export const metadata = {
  title: "التقارير السنوية | جمعية تطوير التعليم",
  description: "استعرض التقارير السنوية لجمعية تطوير التعليم واطلع على الأداء المالي والإنجازات",
}

export default async function AnnualReportsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
   
  return <AnnualReportsClientPage lang={lang} />
  }
