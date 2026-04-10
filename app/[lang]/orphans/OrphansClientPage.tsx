'use client'

import Image from 'next/image'
import {
  Heart,
  BookOpen,
  Home,
  Calendar,
  ArrowRight,
  CheckCircle,
  Users,
  School,
  Gift,
  Megaphone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { GOOGLE_URL } from '@/lib/constant'
import Link from 'next/link'
import { Locale } from '@/lib/i18n'

type Dream = {
  id: number
  name: string
  age: number
  category: string
  image: string
  shortDescription: string
  story: string
  dream: string
  howToHelp: string
}

export default function OrphansClientPage({ lang }: { lang: Locale }) {
  const isArabic = lang === 'ar'

  const t = {
    ar: {
      heroTitle: 'برنامج كفالة الأيتام',
      heroDescription:
        'كل طفل يستحق فرصة للتعلم والنمو، بغض النظر عن ظروفه. معاً نستطيع أن نمنح الأيتام الأمل والمستقبل الذي يستحقونه.',
      sponsorNow: 'اكفل يتيماً الآن',
      learnMore: 'تعرف على برنامج الكفالة',

      impactStats: [
        { value: '750+', label: 'يتيم مكفول حالياً', icon: Users },
        { value: '100%', label: 'نسبة استمرار الأيتام في التعليم', icon: School },
        { value: '10', label: 'سنوات من العطاء المستمر', icon: Calendar },
        { value: '45,000+', label: 'إحتياجات تم توزيعها على الأيتام', icon: Gift },
      ],

      aboutTitle: 'برنامج كفالة الأيتام',
      aboutDescription:
        'تُولي جمعيّة تطوير التعليم رعاية الأطفال الأيتام أولويّة خاصّة، انطلاقًا من إيمانها العميق بضرورة تمكينهم تربويًّا ومعيشيًّا، وتوفير بيئة تعليميّة آمنة تُسهم في بناء شخصيّاتهم وتعزيز ثقتهم بأنفسهم.',
      childImageAlt: 'طفل يتيم يدرس',
      childName: 'الطفل حمزة',
      childCaption: 'بفضل الكفالة التعليمية يستطيع حمزة إكمال دراسته في مدرسة الشافعي',
      whyTitle: 'لماذا كفالة الأيتام مهمة؟',
      whyPoints: [
        'توفير الاستقرار العاطفي والاجتماعي للطفل اليتيم',
        'ضمان استمراره في التعليم وعدم تسربه من المدرسة',
        'تخفيف الأعباء المادية عن أسرته وخاصة الأم',
        'بناء جيل واعٍ قادر على المساهمة في بناء المجتمع',
        'حماية الأطفال من مخاطر التشرد والاستغلال',
      ],
      quote: 'أنا وكافل اليتيم كهاتين',
      quoteSource: '- حديث شريف',

      sponsorshipTypesTitle: 'أنواع الكفالات',
      sponsorshipTypesDescription:
        'تقدّم الجمعية الكفالات من خلال نوعين رئيسيين، يمكنك اختيار النوع الذي يناسبك',
      lifeTitle: 'الكفالة الحياتيّة',
      lifeDescription:
        'دعم شهريّ منتظم يلبّي احتياجات اليتيم المعيشيّة الأساسيّة، ويساعده على تجاوز التحدّيات اليوميّة الناتجة عن ظروف الحرمان وفقدان المعيل، ممّا يوفّر له الاستقرار العاطفيّ والاجتماعيّ.',
      educationTitle: 'الكفالة التعليميّة',
      educationDescription:
        'تغطّي هذه الكفالة جميع متطلّبات التعليم، بدءًا من الرسوم الدراسيّة، ومرورًا بتكاليف التدفئة والتشغيل، وانتهاءً بتأمين المستلزمات المدرسية الكاملة، مع خدمة نقل مجّانيّة وآمنة وتوزيع الحقائب المدرسيّة والألبسة.',
      monthlyValue: 'قيمة الكفالة الشهرية:',
      neededCount: 'عدد الأيتام المحتاجين:',
      lifeValue: '40 دولار',
      lifeNeeded: '500 يتيم',
      educationValue: '30 دولار',
      educationNeeded: '1100 يتيم',

      processTitle: 'كيف تكفل يتيماً؟',
      processDescription: 'عملية الكفالة بسيطة وسريعة، اتبع الخطوات التالية',
      processSteps: [
        {
          step: 1,
          title: 'اختر نوع الكفالة',
          description: 'حدد نوع الكفالة التي ترغب بها (حياتية أو تعليمية) وفقاً لإمكانياتك.',
        },
        {
          step: 2,
          title: 'أكمل نموذج الكفالة',
          description: 'قم بتعبئة النموذج الإلكتروني بمعلوماتك الشخصية وطريقة الدفع المفضلة.',
        },
        {
          step: 3,
          title: 'استلم تقارير دورية',
          description: 'ستصلك تقارير دورية عن اليتيم المكفول وتطوره الدراسي والحياتي.',
        },
      ],

      dreamsTitle: 'أحلام الأطفال',
      dreamsDescription:
        'تعرف على أحلام وطموحات الأطفال الأيتام وكيف يمكن لكفالتك أن تساعدهم على تحقيقها',
      readMore: 'اقرأ المزيد عن حلم',
      yearsOld: 'سنوات',
      dreamOf: 'حلم',
      storyOf: 'قصة',
      howYouCanHelp: 'كيف يمكنك المساعدة',
      youContribute: 'بكفالتك لـ',
      youContribute2: 'تساهم في تحقيق حلمه وتوفير مستقبل أفضل له.',

      faqTitle: 'أسئلة شائعة',
      faqDescription: 'إليك إجابات على الأسئلة الأكثر شيوعاً حول برنامج كفالة الأيتام',
      faqTabs: {
        general: 'أسئلة عامة',
        payment: 'الدفع والتبرع',
        reports: 'التقارير والمتابعة',
      },
      faq: {
        general: [
          {
            question: 'ما هي شروط كفالة اليتيم؟',
            answer:
              'لا توجد شروط محددة للكفالة، يمكن لأي شخص أو مؤسسة المساهمة في كفالة يتيم أو أكثر حسب القدرة المادية.',
          },
          {
            question: 'هل يمكنني التواصل مع اليتيم الذي أكفله؟',
            answer:
              'نعم، يمكن التواصل مع اليتيم من خلال الجمعية وفق ضوابط محددة تراعي الخصوصية والجوانب النفسية للطفل.',
          },
          {
            question: 'كم مدة الكفالة؟',
            answer:
              'الكفالة مستمرة طالما رغب الكافل بذلك، ويفضل الالتزام لمدة عام على الأقل لضمان استقرار وضع اليتيم.',
          },
        ],
        payment: [
          {
            question: 'ما هي طرق الدفع المتاحة؟',
            answer:
              'يمكن الدفع عبر التحويل البنكي، بطاقات الائتمان، أو من خلال شركات التحويل المالي المعتمدة.',
          },
          {
            question: 'هل يمكنني دفع مبلغ الكفالة سنوياً بدلاً من شهرياً؟',
            answer:
              'نعم، يمكن دفع المبلغ بشكل سنوي أو نصف سنوي أو ربع سنوي حسب ما يناسبك.',
          },
          {
            question: 'هل يمكن لمجموعة من الأشخاص المشاركة في كفالة يتيم واحد؟',
            answer:
              'نعم، يمكن لعدة أشخاص المشاركة في كفالة يتيم واحد من خلال تقسيم المبلغ فيما بينهم.',
          },
        ],
        reports: [
          {
            question: 'كيف يمكنني متابعة تطور اليتيم الذي أكفله؟',
            answer:
              'ترسل الجمعية تقارير دورية (كل 3-6 أشهر) تتضمن معلومات عن الوضع الدراسي والصحي والنفسي لليتيم.',
          },
          {
            question: 'هل يمكنني الحصول على صور لليتيم؟',
            answer:
              'نعم، مع مراعاة خصوصية الطفل وموافقة الوصي القانوني، يمكن إرسال صور دورية تظهر تطور اليتيم.',
          },
          {
            question: 'ماذا يحدث إذا توقفت عن الكفالة؟',
            answer:
              'في حال توقف الكفالة، تسعى الجمعية لإيجاد كافل بديل لليتيم لضمان استمرار الدعم المقدم له.',
          },
        ],
      },

      ctaTitle: 'كن سبباً في تغيير حياة طفل يتيم',
      ctaDescription:
        'كفالتك اليوم تعني مستقبلاً أفضل لطفل يتيم. ساهم معنا في بناء جيل واعد قادر على صنع التغيير.',
      ctaContact: 'تواصل معنا للاستفسار',
    },

    en: {
      heroTitle: 'Orphan Sponsorship Program',
      heroDescription:
        'Every child deserves a chance to learn and grow, regardless of their circumstances. Together, we can give orphans the hope and future they deserve.',
      sponsorNow: 'Sponsor an Orphan Now',
      learnMore: 'Learn About the Sponsorship Program',

      impactStats: [
        { value: '750+', label: 'Orphans currently sponsored', icon: Users },
        { value: '100%', label: 'School continuation rate among sponsored orphans', icon: School },
        { value: '10', label: 'Years of continuous giving', icon: Calendar },
        { value: '45,000+', label: 'Items distributed to orphans', icon: Gift },
      ],

      aboutTitle: 'Orphan Sponsorship Program',
      aboutDescription:
        'The Education Development Association gives special priority to caring for orphaned children, based on its deep belief in the importance of empowering them educationally and in daily life, while providing a safe learning environment that helps build their character and strengthen their self-confidence.',
      childImageAlt: 'An orphan child studying',
      childName: 'Child Hamza',
      childCaption: 'Thanks to educational sponsorship, Hamza can continue his studies at Al-Shafi’i School.',
      whyTitle: 'Why Is Orphan Sponsorship Important?',
      whyPoints: [
        'Providing emotional and social stability for the orphaned child',
        'Ensuring the child continues education and does not drop out of school',
        'Reducing the financial burden on the family, especially the mother',
        'Building an aware generation capable of contributing to society',
        'Protecting children from homelessness and exploitation',
      ],
      quote: 'I and the sponsor of an orphan will be like these two',
      quoteSource: '- Prophetic Hadith',

      sponsorshipTypesTitle: 'Types of Sponsorship',
      sponsorshipTypesDescription:
        'The association offers sponsorship through two main types. You can choose the one that suits you best.',
      lifeTitle: 'Living Support Sponsorship',
      lifeDescription:
        'A regular monthly support that meets the orphan’s basic living needs and helps them overcome daily challenges caused by deprivation and loss of support, providing emotional and social stability.',
      educationTitle: 'Educational Sponsorship',
      educationDescription:
        'This sponsorship covers all educational requirements, from tuition fees to heating and operational costs, in addition to full school supplies, safe free transportation, and distribution of school bags and clothing.',
      monthlyValue: 'Monthly sponsorship value:',
      neededCount: 'Number of orphans in need:',
      lifeValue: '40 USD',
      lifeNeeded: '500 orphans',
      educationValue: '30 USD',
      educationNeeded: '1100 orphans',

      processTitle: 'How Do You Sponsor an Orphan?',
      processDescription: 'The sponsorship process is simple and quick. Follow these steps.',
      processSteps: [
        {
          step: 1,
          title: 'Choose the Sponsorship Type',
          description:
            'Select the type of sponsorship you would like to provide (living or educational) according to your ability.',
        },
        {
          step: 2,
          title: 'Complete the Sponsorship Form',
          description:
            'Fill out the online form with your personal information and preferred payment method.',
        },
        {
          step: 3,
          title: 'Receive Periodic Reports',
          description:
            'You will receive regular reports about the sponsored child and their educational and life progress.',
        },
      ],

      dreamsTitle: 'Children’s Dreams',
      dreamsDescription:
        'Learn about the dreams and aspirations of orphaned children and how your sponsorship can help make them come true.',
      readMore: 'Read more about',
      yearsOld: 'years old',
      dreamOf: 'Dream of',
      storyOf: 'Story of',
      howYouCanHelp: 'How You Can Help',
      youContribute: 'By sponsoring',
      youContribute2: 'you contribute to making their dream come true and providing a better future.',

      faqTitle: 'Frequently Asked Questions',
      faqDescription:
        'Here are answers to the most common questions about the orphan sponsorship program.',
      faqTabs: {
        general: 'General',
        payment: 'Payment & Donation',
        reports: 'Reports & Follow-up',
      },
      faq: {
        general: [
          {
            question: 'What are the requirements for sponsoring an orphan?',
            answer:
              'There are no specific requirements. Any individual or organization can contribute to sponsoring one or more orphans according to their financial ability.',
          },
          {
            question: 'Can I communicate with the orphan I sponsor?',
            answer:
              'Yes, communication can take place through the association under specific guidelines that respect the child’s privacy and psychological well-being.',
          },
          {
            question: 'How long does the sponsorship last?',
            answer:
              'Sponsorship continues as long as the sponsor wishes. A commitment of at least one year is preferred to ensure the child’s stability.',
          },
        ],
        payment: [
          {
            question: 'What payment methods are available?',
            answer:
              'Payment can be made through bank transfer, credit cards, or approved money transfer companies.',
          },
          {
            question: 'Can I pay the sponsorship amount yearly instead of monthly?',
            answer:
              'Yes, you can pay annually, semi-annually, or quarterly, depending on what suits you.',
          },
          {
            question: 'Can a group of people share the sponsorship of one orphan?',
            answer:
              'Yes, several people can participate in sponsoring one orphan by dividing the amount among themselves.',
          },
        ],
        reports: [
          {
            question: 'How can I follow the progress of the orphan I sponsor?',
            answer:
              'The association sends regular reports every 3–6 months that include information about the child’s educational, health, and psychological status.',
          },
          {
            question: 'Can I receive photos of the orphan?',
            answer:
              'Yes, while respecting the child’s privacy and with the legal guardian’s approval, periodic photos can be shared to show the child’s development.',
          },
          {
            question: 'What happens if I stop the sponsorship?',
            answer:
              'If the sponsorship stops, the association seeks to find an alternative sponsor to ensure continued support for the child.',
          },
        ],
      },

      ctaTitle: 'Be the Reason a Child’s Life Changes',
      ctaDescription:
        'Your sponsorship today means a better future for an orphaned child. Join us in building a promising generation capable of making change.',
      ctaContact: 'Contact Us for Inquiries',
    },
  }[lang]

  const dreams: Dream[] = isArabic
    ? [
        {
          id: 1,
          name: 'أحمد',
          age: 10,
          category: 'طب',
          image: '/placeholder.svg?height=200&width=400&text=أحمد',
          shortDescription:
            'يحلم أحمد بأن يصبح طبيباً ليعالج المرضى في قريته التي تفتقر للخدمات الطبية. فقد أحمد والده في الحرب وهو يعيش مع والدته وإخوته الثلاثة.',
          story:
            'فقد أحمد والده في إحدى غارات القصف على مدينته قبل ثلاث سنوات. يعيش الآن مع والدته وإخوته الثلاثة في ظروف معيشية صعبة. بالرغم من صغر سنه، يحمل أحمد على عاتقه مسؤولية كبيرة تجاه عائلته، ويحاول مساعدة والدته قدر المستطاع.',
          dream:
            'يحلم أحمد بأن يصبح طبيباً في المستقبل، خاصة بعد أن شاهد معاناة الناس في قريته التي تفتقر للخدمات الطبية. يقول أحمد: "أريد أن أعالج المرضى وأساعد الأطفال الذين يعانون مثلما عانيت أنا وعائلتي. أحلم بافتتاح عيادة في قريتي لأن أقرب مستشفى يبعد ساعتين بالسيارة."',
          howToHelp:
            'كفالتك التعليمية لأحمد ستساعده على الاستمرار في دراسته والتفوق فيها، وستوفر له الكتب والأدوات اللازمة لتنمية مهاراته العلمية. كما ستخفف الكفالة الحياتية العبء عن كاهل والدته وتسمح له بالتركيز على دراسته بدلاً من البحث عن عمل لمساعدة أسرته.',
        },
        {
          id: 2,
          name: 'سارة',
          age: 12,
          category: 'تعليم',
          image: '/placeholder.svg?height=200&width=400&text=سارة',
          shortDescription:
            'تحلم سارة بأن تصبح معلمة لتساعد الأطفال المحرومين من التعليم. فقدت سارة والديها في الحرب وتعيش مع جدتها المسنة.',
          story:
            'فقدت سارة والديها في انفجار استهدف السوق المركزي في مدينتها قبل أربع سنوات. تعيش الآن مع جدتها المسنة التي تكافح لتوفير احتياجاتها الأساسية. بالرغم من الظروف الصعبة، تتميز سارة بذكائها وحبها للقراءة والتعلم.',
          dream:
            'تحلم سارة بأن تصبح معلمة في المستقبل لتساعد الأطفال المحرومين من التعليم. تقول سارة: "أحب المدرسة كثيراً، وأشعر بالحزن عندما أرى أطفالاً لا يستطيعون الذهاب إلى المدرسة. أريد أن أصبح معلمة لأساعد كل طفل على التعلم والنجاح مهما كانت ظروفه."',
          howToHelp:
            'كفالتك لسارة ستمكنها من الاستمرار في دراستها وتطوير مهاراتها التعليمية. ستوفر لها الكتب والأدوات اللازمة، وستساعد في تخفيف العبء عن جدتها المسنة. كما ستتيح لها المشاركة في الأنشطة المدرسية التي تنمي مهاراتها القيادية والتعليمية.',
        },
        {
          id: 3,
          name: 'محمد',
          age: 9,
          category: 'هندسة',
          image: '/placeholder.svg?height=200&width=400&text=محمد',
          shortDescription:
            'يحلم محمد بأن يصبح مهندساً ليعيد بناء المنازل والمدارس المدمرة في بلده. فقد محمد والده في حادث أثناء نزوحهم من منطقة الحرب.',
          story:
            'فقد محمد والده في حادث مأساوي أثناء نزوح العائلة من منطقة الحرب. يعيش الآن مع والدته وأخته الصغيرة في مخيم للنازحين. يتميز محمد بحبه للبناء والتركيب، ويقضي معظم وقت فراغه في صنع مجسمات من المواد البسيطة المتوفرة حوله.',
          dream:
            'يحلم محمد بأن يصبح مهندساً في المستقبل ليعيد بناء المنازل والمدارس المدمرة في بلده. يقول محمد: "عندما أكبر، سأبني بيوتاً جميلة لكل الأطفال الذين فقدوا منازلهم مثلي. سأصمم مدارس كبيرة وآمنة ليتعلم فيها الجميع."',
          howToHelp:
            'كفالتك لمحمد ستوفر له الفرصة للالتحاق بالمدرسة بانتظام والحصول على التعليم الأساسي اللازم لتحقيق حلمه. كما ستساعد في توفير الاحتياجات المعيشية الأساسية له ولعائلته، وستتيح له المشاركة في الأنشطة التي تنمي مهاراته الهندسية والإبداعية.',
        },
      ]
    : [
        {
          id: 1,
          name: 'Ahmed',
          age: 10,
          category: 'Medicine',
          image: '/placeholder.svg?height=200&width=400&text=Ahmed',
          shortDescription:
            'Ahmed dreams of becoming a doctor to treat patients in his village, which lacks medical services. He lost his father in the war and lives with his mother and three siblings.',
          story:
            'Ahmed lost his father in an airstrike on his city three years ago. He now lives with his mother and three siblings in difficult living conditions. Despite his young age, Ahmed carries a great sense of responsibility toward his family and tries to help his mother as much as he can.',
          dream:
            'Ahmed dreams of becoming a doctor in the future, especially after witnessing the suffering of people in his village, which lacks medical services. Ahmed says: "I want to treat the sick and help children who suffer the way my family and I did. I dream of opening a clinic in my village because the nearest hospital is two hours away by car."',
          howToHelp:
            'Your educational sponsorship for Ahmed will help him continue and excel in his studies, while providing him with the books and tools he needs to develop his academic skills. Living support sponsorship would also reduce the burden on his mother and allow him to focus on his studies instead of looking for work to help support his family.',
        },
        {
          id: 2,
          name: 'Sara',
          age: 12,
          category: 'Education',
          image: '/placeholder.svg?height=200&width=400&text=Sara',
          shortDescription:
            'Sara dreams of becoming a teacher to help children deprived of education. She lost both parents in the war and lives with her elderly grandmother.',
          story:
            'Sara lost both of her parents in an explosion that targeted the central market in her city four years ago. She now lives with her elderly grandmother, who struggles to provide for basic needs. Despite the hardship, Sara stands out for her intelligence and love of reading and learning.',
          dream:
            'Sara dreams of becoming a teacher in the future to help children deprived of education. She says: "I love school very much, and I feel sad when I see children who cannot go to school. I want to become a teacher to help every child learn and succeed no matter what their circumstances are."',
          howToHelp:
            'Your sponsorship for Sara will enable her to continue her studies and develop her educational skills. It will provide her with books and supplies, reduce the burden on her elderly grandmother, and allow her to participate in school activities that build her leadership and learning abilities.',
        },
        {
          id: 3,
          name: 'Mohammad',
          age: 9,
          category: 'Engineering',
          image: '/placeholder.svg?height=200&width=400&text=Mohammad',
          shortDescription:
            'Mohammad dreams of becoming an engineer to rebuild the homes and schools destroyed in his country. He lost his father in an accident while the family was fleeing the war zone.',
          story:
            'Mohammad lost his father in a tragic accident while the family was fleeing a war zone. He now lives with his mother and younger sister in a displacement camp. Mohammad is known for his love of building and assembling things, and he spends most of his free time making models from simple materials available around him.',
          dream:
            'Mohammad dreams of becoming an engineer in the future to rebuild the homes and schools destroyed in his country. He says: "When I grow up, I will build beautiful houses for all the children who lost their homes like me. I will design big and safe schools so everyone can study there."',
          howToHelp:
            'Your sponsorship for Mohammad will give him the opportunity to attend school regularly and receive the basic education needed to achieve his dream. It will also help provide essential living needs for him and his family, while allowing him to participate in activities that develop his engineering and creative skills.',
        },
      ]

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedDream, setSelectedDream] = useState<Dream | null>(null)

  const openDreamDetails = (dreamId: number) => {
    const dream = dreams.find((d) => d.id === dreamId) || null
    setSelectedDream(dream)
    setIsDialogOpen(true)
  }

  return (
    <main className="flex flex-col min-h-screen" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="relative bg-gradient-to-r from-[#203441] to-[#39576f] py-16 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={`${GOOGLE_URL}1-o0nmtBbv217xlIlb02gkW-LBVqNaxmn`}
              alt={t.heroTitle}
              fill
              priority
              className="object-cover object-center opacity-10"
            />
          </div>
        </div>

        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Megaphone className="h-10 w-10 text-white" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.heroTitle}
            </h1>

            <p className="text-white/80 text-lg mb-8">{t.heroDescription}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${lang}/donate`}>
                <Button size="lg" className="bg-[#203441] hover:bg-[#39576f] text-white text-lg">
                  {t.sponsorNow}
                  <Heart className={isArabic ? 'mr-2 h-5 w-5' : 'ml-2 h-5 w-5'} />
                </Button>
              </Link>

              <Link href={`/${lang}#contact-us`}>
                <Button size="lg" variant="outline">
                  {t.learnMore}
                  <ArrowRight
                    className={
                      isArabic ? 'mr-2 h-5 w-5' : 'ml-2 h-5 w-5 rotate-180'
                    }
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,69.3C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.impactStats.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="text-center">
                  <div className="bg-[#eef2f5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-10 w-10 text-[#39576f]" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">{item.value}</h3>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.aboutTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.aboutDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={`${GOOGLE_URL}1iAhwhbF-P7sCvMEZFEU3vIM_Z5PSKtbF`}
                alt={t.childImageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{t.childName}</h3>
                  <p className="text-sm">{t.childCaption}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-r-4 border-[#203441]">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Heart className={isArabic ? 'h-6 w-6 text-[#39576f] ml-2' : 'h-6 w-6 text-[#39576f] mr-2'} />
                  {t.whyTitle}
                </h3>
                <ul className="space-y-3">
                  {t.whyPoints.map((point) => (
                    <li key={point} className="flex items-start">
                      <CheckCircle
                        className={
                          isArabic
                            ? 'h-5 w-5 text-[#39576f] mt-1 ml-2 flex-shrink-0'
                            : 'h-5 w-5 text-[#39576f] mt-1 mr-2 flex-shrink-0'
                        }
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#eef2f5] p-6 rounded-lg border border-[#476c86]/20">
                <p className="text-[#203441] italic">{t.quote}</p>
                <p className="text-[#39576f] text-sm mt-2">{t.quoteSource}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.sponsorshipTypesTitle}</h2>
            <p className="text-lg text-gray-700">{t.sponsorshipTypesDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-[#203441] h-2"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-[#eef2f5] rounded-full flex items-center justify-center mb-4">
                  <Home className="h-8 w-8 text-[#39576f]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.lifeTitle}</h3>
                <p className="text-gray-700 mb-6">{t.lifeDescription}</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{t.monthlyValue}</span>
                    <span className="font-bold text-[#39576f]">{t.lifeValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{t.neededCount}</span>
                    <span className="font-bold text-[#39576f]">{t.lifeNeeded}</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-[#203441] h-2"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-[#eef2f5] rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-[#39576f]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.educationTitle}</h3>
                <p className="text-gray-700 mb-6">{t.educationDescription}</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{t.monthlyValue}</span>
                    <span className="font-bold text-[#39576f]">{t.educationValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{t.neededCount}</span>
                    <span className="font-bold text-[#39576f]">{t.educationNeeded}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.processTitle}</h2>
            <p className="text-lg text-gray-700">{t.processDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.processSteps.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-lg shadow-md relative">
                <Link href={`/${lang}/donate`}>
                  <div
                    className={`absolute top-4 w-8 h-8 rounded-full bg-[#203441] text-white flex items-center justify-center font-bold ${
                      isArabic ? 'right-4' : 'left-4'
                    }`}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 mt-10">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.dreamsTitle}</h2>
            <p className="text-lg text-gray-700">{t.dreamsDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dreams.map((dream) => (
              <Card key={dream.id} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={dream.image || '/placeholder.svg'}
                    alt={`${t.dreamOf} ${dream.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">
                      {dream.name}, {dream.age} {t.yearsOld}
                    </h3>
                    <Badge className="bg-[#eef2f5] text-[#203441] hover:bg-[#dce5ed]">
                      {dream.category}
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-3">{dream.shortDescription}</p>
                  <Button
                    variant="ghost"
                    className="text-[#39576f] hover:text-[#203441] hover:bg-[#eef2f5] p-0 h-auto font-medium flex items-center"
                    onClick={() => openDreamDetails(dream.id)}
                  >
                    {t.readMore} {dream.name}
                    <ArrowRight
                      className={
                        isArabic ? 'mr-1 h-4 w-4' : 'ml-1 h-4 w-4 rotate-180'
                      }
                    />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl" dir={isArabic ? 'rtl' : 'ltr'}>
            {selectedDream && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-2">
                    <DialogTitle className="text-2xl">
                      {t.dreamOf} {selectedDream.name}
                    </DialogTitle>
                    <Badge className="bg-[#eef2f5] text-[#203441]">{selectedDream.category}</Badge>
                  </div>
                  <DialogDescription>
                    {selectedDream.name}، {selectedDream.age} {t.yearsOld}
                  </DialogDescription>
                </DialogHeader>

                <div className="relative h-64 w-full my-4 rounded-lg overflow-hidden">
                  <Image
                    src={selectedDream.image || '/placeholder.svg'}
                    alt={`${t.dreamOf} ${selectedDream.name}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      {t.storyOf} {selectedDream.name}
                    </h4>
                    <p className="text-gray-700">{selectedDream.story}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      {t.dreamOf} {selectedDream.name}
                    </h4>
                    <p className="text-gray-700">{selectedDream.dream}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">{t.howYouCanHelp}</h4>
                    <p className="text-gray-700">{selectedDream.howToHelp}</p>
                  </div>
                </div>

                <div className="bg-[#eef2f5] p-4 rounded-lg mt-4">
                  <p className="text-[#203441] text-sm">
                    {t.youContribute} {selectedDream.name} {t.youContribute2}
                  </p>
                </div>

                <DialogFooter>
                  <Link href={`/${lang}/donate`}>
                    <Button className="bg-[#203441] hover:bg-[#39576f]">
                      {t.sponsorNow.replace(' الآن', '').replace(' Now', '')} {selectedDream.name}
                      <Heart className={isArabic ? 'mr-2 h-4 w-4' : 'ml-2 h-4 w-4'} />
                    </Button>
                  </Link>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.faqTitle}</h2>
            <p className="text-lg text-gray-700">{t.faqDescription}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full" dir={isArabic ? 'rtl' : 'ltr'}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">{t.faqTabs.general}</TabsTrigger>
                <TabsTrigger value="payment">{t.faqTabs.payment}</TabsTrigger>
                <TabsTrigger value="reports">{t.faqTabs.reports}</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="mt-6">
                <div className="space-y-4">
                  {t.faq.general.map((item) => (
                    <div key={item.question} className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-2">{item.question}</h4>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="payment" className="mt-6">
                <div className="space-y-4">
                  {t.faq.payment.map((item) => (
                    <div key={item.question} className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-2">{item.question}</h4>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reports" className="mt-6">
                <div className="space-y-4">
                  {t.faq.reports.map((item) => (
                    <div key={item.question} className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-2">{item.question}</h4>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#203441] text-white mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ctaTitle}</h2>
            <p className="text-xl mb-8">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${lang}/donate`}>
                <Button size="lg" className="bg-white text-[#203441] hover:bg-gray-100 text-lg">
                  {t.sponsorNow}
                  <Heart className={isArabic ? 'mr-2 h-5 w-5' : 'ml-2 h-5 w-5'} />
                </Button>
              </Link>

              <Link href={`/${lang}/contact`}>
                <Button size="lg" variant="outline" className="text-main-blue text-lg">
                  {t.ctaContact}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}