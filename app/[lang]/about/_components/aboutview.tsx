import Sectiontitle from '@/components/section-title'
import { Locale } from '@/lib/i18n'

export async function AboutView({ lang }: { lang: Locale }) {
  const content = {
    ar: {
      title: 'من نحن',
      description:
        'جمعيّة تطوير التعليم هي منظّمة غير حكوميّة وغير ربحيّة، تأسّست عام 2015 في تركيا، وتعمل بشكل مستقل ضمن قطاع التعليم في منظّمة الأمم المتّحدة (الأوتشا) وفق مبادئ العمل الإنسانيّ في سوريّة والجنوب التركيّ، وتسعى إلى تقديم برامج وخدمات تعليميّة وتنمويّة، مع تركيز خاصّ على دعم الفئات الأكثر ضعفًا. تتبنّى الجمعيّة رؤية شاملة لتطوير التعليم، حيث تتعاون بشكل وثيق مع خبراء عرب ودوليّين في مجالات التعليم وتطوير المناهج، بهدف توفير تعليم عالي الجودة يراعي الاحتياجات المتنوّعة للمتعلّمين ويسهم في بناء مستقبل أفضل للمجتمعات المستهدفة.',
    },
    en: {
      title: 'About Us',
      description:
        'The Education Development Association is a non-governmental, non-profit organization founded in 2015 in Turkey. It operates independently within the education sector under the United Nations humanitarian framework (OCHA), in accordance with humanitarian principles in Syria and southern Turkey. The association seeks to provide educational and developmental programs and services, with a special focus on supporting the most vulnerable groups. It adopts a comprehensive vision for education development and works closely with Arab and international experts in education and curriculum development to provide high-quality education that responds to the diverse needs of learners and contributes to building a better future for the targeted communities.',
    },
  } as const

  const t = content[lang]

  return (
    <div className="space-y-6" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Sectiontitle>{t.title}</Sectiontitle>

      <p className="text-main-blue leading-relaxed">{t.description}</p>
    </div>
  )
}