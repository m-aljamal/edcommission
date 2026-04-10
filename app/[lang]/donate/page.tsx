import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Heart,
  CreditCard,
  Landmark,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Mail,
  Phone,
  CheckCircle2,
  Users,
  School,
  BookOpen,
  Building,
  AlertCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { GOOGLE_URL } from '@/lib/constant'
import { Locale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'تبرع الآن | جمعية تطوير التعليم',
  description: 'ساهم في دعم مستقبل التعليم من خلال التبرع جمعية تطوير التعليم',
}

export default async function DonatePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const isArabic = lang === 'ar'

  const content = {
    ar: {
      hero: {
        title: 'تبرع الآن وساهم في بناء مستقبل أفضل',
        description:
          'تبرعك يساهم في توفير فرص تعليمية أفضل للطلاب، وبناء مدارس جديدة، وتدريب المعلمين، وتطوير المناهج الدراسية. كل مساهمة، مهما كانت صغيرة، تحدث فرقاً كبيراً في حياة الطلاب.',
        donateNow: 'تبرع الآن',
        contactUs: 'تواصل معنا',
      },
      impact: {
        title: 'أثر تبرعك',
        description:
          'تبرعك يحدث فرقاً حقيقياً في حياة آلاف الطلاب. من خلال دعمك، نستطيع توسيع نطاق عملنا وتحسين جودة التعليم في المناطق المحتاجة.',
        stats: [
          { number: '50,000+', label: 'طالب استفادوا من برامجنا', icon: Users },
          { number: '25+', label: 'مدرسة تم تجهيزها وترميمها', icon: School },
          { number: '5,000+', label: 'معلم تم تدريبهم', icon: BookOpen },
          { number: '6+', label: 'مراكز ثقافية وتعليمية', icon: Building },
        ],
      },
      donationOptions: {
        title: 'طرق التبرع',
        description: 'نوفر لك عدة طرق للتبرع، اختر الطريقة التي تناسبك',
        tabs: {
          bank: 'تحويل بنكي',
          online: 'تبرع أونلاين',
          direct: 'تواصل مباشر',
        },
      },
      bank: {
        title: 'التبرع عبر التحويل البنكي',
        intro: 'يمكنك التبرع مباشرة عبر التحويل البنكي إلى حسابنا:',
        bankName: 'Ziraat Bankası',
        bankAddress: 'عنوان البنك:',
        accountName: 'اسم الحساب:',
        organizationAddress: 'عنوان المنظمة:',
        postalCode: 'الرمز البريدي:',
        swift: 'رمز السويفت (SWIFT):',
        chooseCurrency: 'اختر العملة:',
        try: 'الليرة التركية',
        usd: 'الدولار الأمريكي',
        eur: 'اليورو',
        accountNumber: 'رقم الحساب:',
        iban: 'رقم الآيبان (IBAN):',
        currency: 'العملة:',
        soonTitle: 'قريباً: حساب بنكي في سوريا',
        soonText:
          'بعد الحصول على الترخيص الرسمي للجمعية في سوريا نعمل حالياً على فتح حساب بنكي جديد. سيتم تحديث هذه الصفحة فور توفر المعلومات.',
        noteTitle: 'ملاحظة هامة:',
        noteText:
          'يرجى ذكر تبرع لجمعية تطوير التعليم في تفاصيل التحويل، وإرسال إشعار التحويل إلى البريد الإلكتروني info@edcommission.com لنتمكن من إصدار إيصال التبرع.',
      },
      online: {
        title: 'التبرع أونلاين',
        intro:
          'يمكنك التبرع مباشرة عبر موقع شريكنا AHSIN الذي يوفر منصة آمنة للتبرعات الإلكترونية. يتيح لك الموقع اختيار المشروع الذي ترغب في دعمه وتحديد قيمة التبرع.',
        points: [
          'منصة آمنة ومشفرة للتبرعات',
          'إمكانية التبرع بمختلف العملات',
          'إصدار إيصال التبرع فوراً',
        ],
        button: 'تبرع الآن عبر موقع أحسن',
        platformTitle: 'منصة أحسن للتبرعات',
        platformDescription: 'شريكنا الرسمي لجمع التبرعات الإلكترونية',
        imageAlt: 'منصة أحسن للتبرعات',
      },
      direct: {
        title: 'التواصل المباشر للتبرع',
        intro:
          'إذا كنت ترغب في التبرع بطريقة مخصصة أو لديك استفسارات حول التبرع، يمكنك التواصل معنا مباشرة عبر:',
        phoneTitle: 'اتصل بنا',
        phoneDescription: 'يمكنك الاتصال بنا مباشرة للاستفسار عن طرق التبرع',
        emailTitle: 'راسلنا',
        emailDescription: 'أرسل لنا استفسارك عبر البريد الإلكتروني',
        whatsappTitle: 'واتساب',
        whatsappDescription: 'تواصل معنا مباشرة عبر واتساب',
      },
      projects: {
        title: 'مشاريع التبرع',
        description: 'يمكنك اختيار المشروع الذي ترغب في دعمه من خلال تبرعك',
        items: [
          {
            id: 'education-sponsorship',
            title: 'كفالة طالب',
            amount: '$360',
            period: 'سنوياً',
            description:
              'تغطية تكاليف التعليم لطالب لمدة عام دراسي كامل، بما في ذلك الرسوم الدراسية والكتب والقرطاسية.',
            icon: Users,
          },
          {
            id: 'school-building',
            title: 'بناء فصل دراسي',
            amount: '$5000',
            period: 'مرة واحدة',
            description:
              'المساهمة في بناء فصل دراسي جديد في إحدى المدارس التي نعمل على إنشائها في المناطق المتضررة.',
            icon: School,
          },
          {
            id: 'teacher-training',
            title: 'تدريب المعلمين',
            amount: '$1000',
            period: 'مرة واحدة',
            description: 'تدريب 10 معلمين على أحدث أساليب التدريس وتطوير مهاراتهم التعليمية.',
            icon: BookOpen,
          },
          {
            id: 'education-center',
            title: 'تجهيز مركز تعليمي',
            amount: '$3000',
            period: 'مرة واحدة',
            description:
              'تجهيز مركز تعليمي بالمعدات والأدوات اللازمة لتقديم خدمات تعليمية متميزة.',
            icon: Building,
          },
        ],
      },
      faq: {
        title: 'أسئلة شائعة',
        description: 'إليك إجابات على الأسئلة الشائعة حول التبرع لجمعية تطوير التعليم',
        items: [
          {
            question: 'هل تبرعي معفى من الضرائب؟',
            answer:
              'نعم، جمعية تطوير التعليم هي منظمة غير ربحية معتمدة، وتبرعك مؤهل للإعفاء الضريبي في ألمانيا وتركيا ونعمل حالياً على تحصيل الإعفاء من الدول الأخرى',
          },
          {
            question: 'كيف يتم استخدام تبرعي؟',
            answer:
              'يتم توجيه 93% من التبرعات مباشرة إلى المشاريع التعليمية، بينما يتم استخدام 5% فقط للمصاريف الإدارية والتشغيلية و 2% لأجور الحوالات المالية علماً أنه لا يتم حسم مصاريف إدارية من كفالات الأيتام المادية. نحن نلتزم بالشفافية الكاملة في استخدام التبرعات، ونقوم بنشر تقارير مالية سنوية توضح كيفية إنفاق الأموال.',
          },
          {
            question: 'هل يمكنني تخصيص تبرعي لمشروع معين؟',
            answer:
              'نعم، يمكنك تخصيص تبرعك لمشروع محدد من مشاريعنا المختلفة مثل كفالة طالب، بناء مدرسة، تدريب المعلمين، أو تجهيز مركز تعليمي. يرجى ذكر اسم المشروع في تفاصيل التحويل أو التواصل معنا مباشرة.',
          },
          {
            question: 'هل يمكنني التبرع بشكل شهري؟',
            answer:
              'نعم، نحن نشجع التبرعات الشهرية المنتظمة التي تساعدنا على التخطيط طويل المدى لمشاريعنا.',
          },
          {
            question: 'هل يمكنني زيارة المشاريع التي أتبرع لها؟',
            answer:
              'نعم، نحن نرحب بزيارة المتبرعين لمشاريعنا للاطلاع على أثر تبرعاتهم على أرض الواقع. يمكنك التواصل معنا لترتيب زيارة لأحد مشاريعنا في المناطق المتاحة.',
          },
        ],
      },
      contact: {
        title: 'تواصل معنا',
        description:
          'إذا كان لديك أي استفسار حول التبرع أو ترغب في معرفة المزيد عن مشاريعنا، لا تتردد في التواصل معنا',
        infoTitle: 'معلومات الاتصال',
        email: 'البريد الإلكتروني:',
        phone: 'الهاتف:',
        whatsapp: 'واتساب:',
        formTitle: 'أرسل رسالة',
        name: 'الاسم',
        namePlaceholder: 'أدخل اسمك',
        emailLabel: 'البريد الإلكتروني',
        emailPlaceholder: 'أدخل بريدك الإلكتروني',
        subject: 'الموضوع',
        subjectPlaceholder: 'موضوع الرسالة',
        message: 'الرسالة',
        messagePlaceholder: 'اكتب رسالتك هنا...',
        submit: 'إرسال الرسالة',
      },
      thanks: {
        title: 'شكراً لدعمكم',
        description:
          'نشكركم على دعمكم المستمر لجمعية تطوير التعليم ومساهمتكم في بناء مستقبل أفضل للطلاب. كل تبرع، مهما كان صغيراً، يحدث فرقاً كبيراً في حياة الطلاب.',
        button: 'تبرع الآن',
      },
    },
    en: {
      hero: {
        title: 'Donate Now and Help Build a Better Future',
        description:
          'Your donation helps provide better educational opportunities for students, build new schools, train teachers, and develop curricula. Every contribution, no matter how small, makes a big difference in students’ lives.',
        donateNow: 'Donate Now',
        contactUs: 'Contact Us',
      },
      impact: {
        title: 'Your Impact',
        description:
          'Your donation makes a real difference in the lives of thousands of students. With your support, we can expand our work and improve the quality of education in underserved areas.',
        stats: [
          { number: '50,000+', label: 'Students benefited from our programs', icon: Users },
          { number: '25+', label: 'Schools equipped and renovated', icon: School },
          { number: '5,000+', label: 'Teachers trained', icon: BookOpen },
          { number: '6+', label: 'Cultural and educational centers', icon: Building },
        ],
      },
      donationOptions: {
        title: 'Ways to Donate',
        description: 'We offer several donation methods. Choose the one that suits you best.',
        tabs: {
          bank: 'Bank Transfer',
          online: 'Online Donation',
          direct: 'Direct Contact',
        },
      },
      bank: {
        title: 'Donate via Bank Transfer',
        intro: 'You can donate directly via bank transfer to our account:',
        bankName: 'Ziraat Bankası',
        bankAddress: 'Bank Address:',
        accountName: 'Account Name:',
        organizationAddress: 'Organization Address:',
        postalCode: 'Postal Code:',
        swift: 'SWIFT Code:',
        chooseCurrency: 'Choose Currency:',
        try: 'Turkish Lira',
        usd: 'US Dollar',
        eur: 'Euro',
        accountNumber: 'Account Number:',
        iban: 'IBAN:',
        currency: 'Currency:',
        soonTitle: 'Coming Soon: A Bank Account in Syria',
        soonText:
          'After obtaining the association’s official license in Syria, we are currently working on opening a new bank account. This page will be updated as soon as the information becomes available.',
        noteTitle: 'Important Note:',
        noteText:
          'Please mention “Donation to the Education Development Association” in the transfer details, and send the transfer notification to info@edcommission.com so we can issue a donation receipt.',
      },
      online: {
        title: 'Online Donation',
        intro:
          'You can donate directly through our partner AHSIN, which provides a secure online donation platform. The website allows you to choose the project you want to support and specify the donation amount.',
        points: [
          'Secure and encrypted donation platform',
          'Ability to donate in multiple currencies',
          'Instant donation receipt issuance',
        ],
        button: 'Donate Now via AHSIN',
        platformTitle: 'AHSIN Donation Platform',
        platformDescription: 'Our official partner for collecting online donations',
        imageAlt: 'AHSIN donation platform',
      },
      direct: {
        title: 'Direct Contact for Donations',
        intro:
          'If you would like to make a customized donation or have questions about donating, you can contact us directly via:',
        phoneTitle: 'Call Us',
        phoneDescription: 'You can call us directly to ask about donation methods',
        emailTitle: 'Email Us',
        emailDescription: 'Send us your inquiry by email',
        whatsappTitle: 'WhatsApp',
        whatsappDescription: 'Contact us directly via WhatsApp',
      },
      projects: {
        title: 'Donation Projects',
        description: 'You can choose the project you would like to support with your donation',
        items: [
          {
            id: 'education-sponsorship',
            title: 'Sponsor a Student',
            amount: '$360',
            period: 'yearly',
            description:
              'Cover a student’s education costs for a full academic year, including tuition, books, and stationery.',
            icon: Users,
          },
          {
            id: 'school-building',
            title: 'Build a Classroom',
            amount: '$5000',
            period: 'one-time',
            description:
              'Contribute to building a new classroom in one of the schools we are establishing in affected areas.',
            icon: School,
          },
          {
            id: 'teacher-training',
            title: 'Teacher Training',
            amount: '$1000',
            period: 'one-time',
            description: 'Train 10 teachers in modern teaching methods and educational skills.',
            icon: BookOpen,
          },
          {
            id: 'education-center',
            title: 'Equip an Education Center',
            amount: '$3000',
            period: 'one-time',
            description:
              'Equip an education center with the tools and resources needed to provide excellent educational services.',
            icon: Building,
          },
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        description:
          'Here are answers to common questions about donating to the Education Development Association',
        items: [
          {
            question: 'Is my donation tax-deductible?',
            answer:
              'Yes, the Education Development Association is a recognized non-profit organization, and your donation is tax-deductible in Germany and Turkey. We are currently working to obtain exemptions in other countries as well.',
          },
          {
            question: 'How is my donation used?',
            answer:
              '93% of donations go directly to educational projects, while only 5% is used for administrative and operational expenses, and 2% for transfer fees. No administrative expenses are deducted from orphan sponsorship donations. We are committed to full transparency and publish annual financial reports showing how funds are spent.',
          },
          {
            question: 'Can I direct my donation to a specific project?',
            answer:
              'Yes, you can allocate your donation to a specific project such as sponsoring a student, building a school, training teachers, or equipping an education center. Please mention the project name in the transfer details or contact us directly.',
          },
          {
            question: 'Can I donate monthly?',
            answer:
              'Yes, we encourage regular monthly donations that help us plan our projects for the long term.',
          },
          {
            question: 'Can I visit the projects I donate to?',
            answer:
              'Yes, we welcome donors to visit our projects and see the impact of their support on the ground. You can contact us to arrange a visit to one of our available project sites.',
          },
        ],
      },
      contact: {
        title: 'Contact Us',
        description:
          'If you have any questions about donating or would like to know more about our projects, feel free to contact us',
        infoTitle: 'Contact Information',
        email: 'Email:',
        phone: 'Phone:',
        whatsapp: 'WhatsApp:',
        formTitle: 'Send a Message',
        name: 'Name',
        namePlaceholder: 'Enter your name',
        emailLabel: 'Email',
        emailPlaceholder: 'Enter your email',
        subject: 'Subject',
        subjectPlaceholder: 'Message subject',
        message: 'Message',
        messagePlaceholder: 'Write your message here...',
        submit: 'Send Message',
      },
      thanks: {
        title: 'Thank You for Your Support',
        description:
          'We thank you for your continued support of the Education Development Association and for helping build a better future for students. Every donation, no matter how small, makes a big difference in students’ lives.',
        button: 'Donate Now',
      },
    },
  } as const

  const t = content[lang]

  return (
    <main className="pb-16" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="relative bg-gradient-to-r from-[#203441] to-[#39576f] py-16 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.hero.title}
            </h1>
            <p className="text-white/80 text-lg mb-8">{t.hero.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#donation-options">
                <Button size="lg" className="bg-white text-[#203441] hover:bg-white/90">
                  {t.hero.donateNow}
                  <ArrowRight className={`${isArabic ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                </Button>
              </a>
              <a href="#contact-us">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  {t.hero.contactUs}
                  <MessageCircle className={`${isArabic ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">{t.impact.title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t.impact.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.impact.stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#39576f]/10 mb-4">
                    <Icon className="h-8 w-8 text-[#39576f]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#203441] mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div id="donation-options" className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">
              {t.donationOptions.title}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t.donationOptions.description}</p>
          </div>

          <Tabs defaultValue="bank" className="w-full max-w-4xl mx-auto" dir={isArabic ? 'rtl' : 'ltr'}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger
                value="bank"
                className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
              >
                <Landmark className={`h-5 w-5 ${isArabic ? 'mr-2' : 'ml-2'}`} />
                {t.donationOptions.tabs.bank}
              </TabsTrigger>
              <TabsTrigger
                value="online"
                className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
              >
                <CreditCard className={`h-5 w-5 ${isArabic ? 'mr-2' : 'ml-2'}`} />
                {t.donationOptions.tabs.online}
              </TabsTrigger>
              <TabsTrigger
                value="direct"
                className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
              >
                <MessageCircle className={`h-5 w-5 ${isArabic ? 'mr-2' : 'ml-2'}`} />
                {t.donationOptions.tabs.direct}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bank" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#203441]">{t.bank.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{t.bank.intro}</p>

                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#39576f]/10 p-2 rounded-full">
                          <Landmark className="h-5 w-5 text-[#39576f]" />
                        </div>
                        <h4 className="font-bold text-[#203441]">{t.bank.bankName}</h4>
                      </div>

                      <div className="space-y-3 text-sm mb-6">
                        <div>
                          <p className="text-gray-500">{t.bank.bankAddress}</p>
                          <p className="font-medium">
                            İslambey, Cumhuriyet Cd. No:170, 79001 Merkez/Kilis- Turkey
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">{t.bank.accountName}</p>
                          <p className="font-medium">EĞİTİM GELİŞTİRME DERNEĞİ</p>
                        </div>
                        <div>
                          <p className="text-gray-500">{t.bank.organizationAddress}</p>
                          <p className="font-medium">
                            DOĞAN GÜREŞ PAŞA MAH. MUSTAFA EREN CAD. 4/34 MERKEZ/KİLİS-Turkey
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">{t.bank.postalCode}</p>
                          <p className="font-medium">79000</p>
                        </div>
                        <div>
                          <p className="text-gray-500">{t.bank.swift}</p>
                          <p className="font-medium">TCZBTR2AXXX</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-bold text-[#203441] mb-3">{t.bank.chooseCurrency}</h5>
                        <Tabs defaultValue="try" className="w-full" dir={isArabic ? 'rtl' : 'ltr'}>
                          <TabsList className="grid w-full grid-cols-3 mb-4">
                            <TabsTrigger
                              value="try"
                              className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                            >
                              {t.bank.try}
                            </TabsTrigger>
                            <TabsTrigger
                              value="usd"
                              className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                            >
                              {t.bank.usd}
                            </TabsTrigger>
                            <TabsTrigger
                              value="eur"
                              className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                            >
                              {t.bank.eur}
                            </TabsTrigger>
                          </TabsList>

                          <TabsContent value="try">
                            <Card className="border-2 border-[#39576f]/20">
                              <CardContent className="p-4">
                                <div className="space-y-3">
                                  <div>
                                    <p className="text-gray-500">{t.bank.accountNumber}</p>
                                    <p className="font-medium">77591825-5001</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">{t.bank.iban}</p>
                                    <p className="font-medium font-mono bg-gray-50 p-2 rounded-md text-xs select-all">
                                      TR84 0001 0000 4377 5918 2550 01
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">{t.bank.currency}</p>
                                    <p className="font-medium">{t.bank.try}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </TabsContent>

                          <TabsContent value="usd">
                            <Card className="border-2 border-[#39576f]/20">
                              <CardContent className="p-4">
                                <div className="space-y-3">
                                  <div>
                                    <p className="text-gray-500">{t.bank.accountNumber}</p>
                                    <p className="font-medium">77591825-5002</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">{t.bank.iban}</p>
                                    <p className="font-medium font-mono bg-gray-50 p-2 rounded-md text-xs select-all">
                                      TR57 0001 0000 4377 5918 2550 02
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">{t.bank.currency}</p>
                                    <p className="font-medium">{t.bank.usd}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </TabsContent>

                          <TabsContent value="eur">
                            <Card className="border-2 border-[#39576f]/20">
                              <CardContent className="p-4">
                                <div className="space-y-3">
                                  <div>
                                    <p className="text-gray-500">{t.bank.accountNumber}</p>
                                    <p className="font-medium">77591825-5003</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">{t.bank.iban}</p>
                                    <p className="font-medium font-mono bg-gray-50 p-2 rounded-md text-xs select-all">
                                      TR30 0001 0000 4377 5918 2550 03
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">{t.bank.currency}</p>
                                    <p className="font-medium">{t.bank.eur}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </TabsContent>
                        </Tabs>
                      </div>

                      <div className="mt-6">
                        <Card className="bg-amber-50 border-amber-100">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className="bg-amber-100 p-2 rounded-full mt-1">
                                <AlertCircle className="h-5 w-5 text-amber-600" />
                              </div>
                              <div>
                                <h5 className="font-bold text-amber-800 mb-1">{t.bank.soonTitle}</h5>
                                <p className="text-amber-700 text-sm">{t.bank.soonText}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
                        <p className="text-blue-800 text-sm">
                          <strong>{t.bank.noteTitle}</strong> {t.bank.noteText}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="online" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#203441]">{t.online.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                      <p className="text-gray-600 mb-4">{t.online.intro}</p>
                      <div className="space-y-4">
                        {t.online.points.map((point) => (
                          <div key={point} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                            <p className="text-gray-700">{point}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <Button className="bg-[#39576f] hover:bg-[#203441]" size="lg" asChild>
                          <a
                            href="https://ahsin.de/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            {t.online.button}
                            <ExternalLink className={`${isArabic ? 'mr-2' : 'ml-2'} h-4 w-4`} />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
                      <div className="relative h-48 w-full rounded-md overflow-hidden mb-4">
                        <Image
                          src={`${GOOGLE_URL}1y1ERx3WeRHcCIXx552i6XLgxkpP7f0MG`}
                          alt={t.online.imageAlt}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-[#203441] mb-2">{t.online.platformTitle}</h4>
                        <p className="text-gray-600 text-sm">{t.online.platformDescription}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="direct" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#203441]">{t.direct.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{t.direct.intro}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-[#39576f]/10 p-4 rounded-full mb-4">
                            <Phone className="h-6 w-6 text-[#39576f]" />
                          </div>
                          <h4 className="font-bold text-[#203441] mb-2">{t.direct.phoneTitle}</h4>
                          <p className="text-gray-600 mb-4">{t.direct.phoneDescription}</p>
                          <a
                            href="tel:+905123456789"
                            className="text-[#39576f] font-bold hover:underline"
                            dir="ltr"
                          >
                            +90 531 507 45 47
                          </a>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-[#39576f]/10 p-4 rounded-full mb-4">
                            <Mail className="h-6 w-6 text-[#39576f]" />
                          </div>
                          <h4 className="font-bold text-[#203441] mb-2">{t.direct.emailTitle}</h4>
                          <p className="text-gray-600 mb-4">{t.direct.emailDescription}</p>
                          <a
                            href="mailto:donations@example.com"
                            className="text-[#39576f] font-bold hover:underline"
                          >
                            info@edcommission.com
                          </a>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-[#25D366]/10 p-4 rounded-full mb-4">
                            <svg
                              className="h-6 w-6 text-[#25D366]"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                          </div>
                          <h4 className="font-bold text-[#203441] mb-2">{t.direct.whatsappTitle}</h4>
                          <p className="text-gray-600 mb-4">{t.direct.whatsappDescription}</p>
                          <a
                            href="https://wa.me/905123456789"
                            className="text-[#25D366] font-bold hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            dir="ltr"
                          >
                            +90 531 507 45 47
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">{t.projects.title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t.projects.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.projects.items.map((project) => {
            const Icon = project.icon
            return (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="h-1 bg-gradient-to-r from-[#203441] to-[#39576f]"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#39576f]/10 p-4 rounded-full mb-4">
                      <Icon className="h-6 w-6 text-[#39576f]" />
                    </div>
                    <h3 className="font-bold text-[#203441] text-xl mb-2">{project.title}</h3>
                    <div className="bg-[#39576f]/5 px-4 py-2 rounded-full mb-4">
                      <span className="font-bold text-[#39576f]">{project.amount}</span>
                      <span className="text-gray-500 text-sm"> / {project.period}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">{t.faq.title}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t.faq.description}</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {t.faq.items.map((item) => (
              <Card key={item.question}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#203441] text-lg mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div id="contact-us" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">{t.contact.title}</h2>
            <p className="text-gray-600">{t.contact.description}</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-[#203441] text-xl mb-4">{t.contact.infoTitle}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#39576f]/10 p-2 rounded-full mt-1">
                        <Mail className="h-5 w-5 text-[#39576f]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#203441]">{t.contact.email}</p>
                        <a
                          href="mailto:donations@example.com"
                          className="text-[#39576f] hover:underline"
                        >
                          info@edcommission.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#39576f]/10 p-2 rounded-full mt-1">
                        <Phone className="h-5 w-5 text-[#39576f]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#203441]">{t.contact.phone}</p>
                        <a
                          href="tel:+905123456789"
                          className="text-[#39576f] hover:underline"
                          dir="ltr"
                        >
                          +90 531 507 45 47
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#39576f]/10 p-2 rounded-full mt-1">
                        <svg
                          className="h-5 w-5 text-[#39576f]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#203441]">{t.contact.whatsapp}</p>
                        <a
                          href="https://wa.me/905123456789"
                          className="text-[#39576f] hover:underline"
                          dir="ltr"
                        >
                          +90 531 507 45 47
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-[#203441] text-xl mb-4">{t.contact.formTitle}</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {t.contact.name}
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#39576f] focus:border-transparent"
                          placeholder={t.contact.namePlaceholder}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {t.contact.emailLabel}
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#39576f] focus:border-transparent"
                          placeholder={t.contact.emailPlaceholder}
                          dir="ltr"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {t.contact.subject}
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#39576f] focus:border-transparent"
                          placeholder={t.contact.subjectPlaceholder}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {t.contact.message}
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#39576f] focus:border-transparent"
                          placeholder={t.contact.messagePlaceholder}
                        ></textarea>
                      </div>
                    </div>
                    <Button className="w-full bg-[#39576f] hover:bg-[#203441]" size="lg">
                      {t.contact.submit}
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-[#203441] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.thanks.title}</h2>
          <p className="max-w-2xl mx-auto text-white/80 mb-8">{t.thanks.description}</p>
          <Button className="bg-white text-[#203441] hover:bg-white/90" size="lg" asChild>
            <a href="#donation-options">
              {t.thanks.button}
              <Heart className={`${isArabic ? 'mr-2' : 'ml-2'} h-5 w-5`} />
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}