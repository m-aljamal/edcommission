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
import { Progress } from '@/components/ui/progress'
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

// Dreams data
const dreams = [
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
      "يحلم أحمد بأن يصبح طبيباً في المستقبل، خاصة بعد أن شاهد معاناة الناس في قريته التي تفتقر للخدمات الطبية. يقول أحمد: 'أريد أن أعالج المرضى وأساعد الأطفال الذين يعانون مثلما عانيت أنا وعائلتي. أحلم بافتتاح عيادة في قريتي لأن أقرب مستشفى يبعد ساعتين بالسيارة.'",
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
      "تحلم سارة بأن تصبح معلمة في المستقبل لتساعد الأطفال المحرومين من التعليم. تقول سارة: 'أحب المدرسة كثيراً، وأشعر بالحزن عندما أرى أطفالاً لا يستطيعون الذهاب إلى المدرسة. أريد أن أصبح معلمة لأساعد كل طفل على التعلم والنجاح مهما كانت ظروفه.'",
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
      "يحلم محمد بأن يصبح مهندساً في المستقبل ليعيد بناء المنازل والمدارس المدمرة في بلده. يقول محمد: 'عندما أكبر، سأبني بيوتاً جميلة لكل الأطفال الذين فقدوا منازلهم مثلي. سأصمم مدارس كبيرة وآمنة ليتعلم فيها الجميع.'",
    howToHelp:
      'كفالتك لمحمد ستوفر له الفرصة للالتحاق بالمدرسة بانتظام والحصول على التعليم الأساسي اللازم لتحقيق حلمه. كما ستساعد في توفير الاحتياجات المعيشية الأساسية له ولعائلته، وستتيح له المشاركة في الأنشطة التي تنمي مهاراته الهندسية والإبداعية.',
  },
]

export default function OrphansClientPage() {
  // State for dream details dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedDream, setSelectedDream] = useState(null)

  // Function to open dream details
  const openDreamDetails = (dreamId) => {
    const dream = dreams.find((d) => d.id === dreamId)
    setSelectedDream(dream)
    setIsDialogOpen(true)
  }

  return (
    <main className="flex flex-col min-h-screen">
      <div className="relative bg-gradient-to-r from-[#203441] to-[#39576f] py-16 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0   ">
            <Image
              src={`${GOOGLE_URL}1-o0nmtBbv217xlIlb02gkW-LBVqNaxmn`}
              alt="خلفية جودة التعليم"
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
              برنامج كفالة الأيتام
            </h1>
            <p className="text-white/80 text-lg mb-8">
              كل طفل يستحق فرصة للتعلم والنمو، بغض النظر عن ظروفه. معاً نستطيع أن نمنح الأيتام الأمل
              والمستقبل الذي يستحقونه.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#203441] hover:bg-[#39576f] text-white text-lg">
                اكفل يتيماً الآن
                <Heart className="mr-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="     ">
                تعرف على برنامج الكفالة
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Wave Divider */}
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

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#eef2f5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-[#39576f]" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">750+</h3>
              <p className="text-gray-600">يتيم مكفول حالياً</p>
            </div>
            <div className="text-center">
              <div className="bg-[#eef2f5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="h-10 w-10 text-[#39576f]" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">100%</h3>
              <p className="text-gray-600">نسبة استمرار الأيتام في التعليم</p>
            </div>
            <div className="text-center">
              <div className="bg-[#eef2f5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-10 w-10 text-[#39576f]" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">10</h3>
              <p className="text-gray-600">سنوات من العطاء المستمر</p>
            </div>
            <div className="text-center">
              <div className="bg-[#eef2f5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-10 w-10 text-[#39576f]" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">45,000+</h3>
              <p className="text-gray-600">إحتياجات تم توزيعها على الأيتام</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Orphan Sponsorship */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">برنامج كفالة الأيتام</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              تُولي جمعيّة تطوير التعليم رعاية الأطفال الأيتام أولويّة خاصّة، انطلاقًا من إيمانها
              العميق بضرورة تمكينهم تربويًّا ومعيشيًّا، وتوفير بيئة تعليميّة آمنة تُسهم في بناء
              شخصيّاتهم وتعزيز ثقتهم بأنفسهم.
            </p>
          </div>
          {/* حذف صورة الطفل و وضع مكانها صورة تعبيرية */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={`${GOOGLE_URL}1iAhwhbF-P7sCvMEZFEU3vIM_Z5PSKtbF`}
                alt="طفل يتيم يدرس"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">الطفل حمزة</h3>
                  <p className="text-sm">
                    بفضل الكفالة التعليمية يستطيع حمزة إكمال دراسته في مدرسة الشافعي
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-r-4 border-[#203441]">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Heart className="h-6 w-6 text-[#39576f] ml-2" />
                  لماذا كفالة الأيتام مهمة؟
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#39576f] mt-1 ml-2 flex-shrink-0" />
                    <span>توفير الاستقرار العاطفي والاجتماعي للطفل اليتيم</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#39576f] mt-1 ml-2 flex-shrink-0" />
                    <span>ضمان استمراره في التعليم وعدم تسربه من المدرسة</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#39576f] mt-1 ml-2 flex-shrink-0" />
                    <span>تخفيف الأعباء المادية عن أسرته وخاصة الأم</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#39576f] mt-1 ml-2 flex-shrink-0" />
                    <span>بناء جيل واعٍ قادر على المساهمة في بناء المجتمع</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#39576f] mt-1 ml-2 flex-shrink-0" />
                    <span>حماية الأطفال من مخاطر التشرد والاستغلال</span>
                  </li>
                </ul>
              </div>
              {/* تبديل النص بصورة */}
              <div className="bg-[#eef2f5] p-6 rounded-lg border border-[#476c86]/20">
                <p className="text-[#203441] italic">أنا وكافل اليتيم كهاتين</p>
                <p className="text-[#39576f] text-sm mt-2">- حديث شريف</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Types */}
      {/* زر اكفل الان يجب ان يكون على الشكل التالي */}
      {/* 
      قائمة فيها اسماء الاطفال والحالة مكفول او غير مكفول
اذا ضعط على طفل يفتح له استمارة الكفالة  ر 
اسم الكفيل
ومدة الكفالة
        الدفع من صفحة التبرع او احسن
      */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">أنواع الكفالات</h2>
            <p className="text-lg text-gray-700">
              تقدّم الجمعية الكفالات من خلال نوعين رئيسيين، يمكنك اختيار النوع الذي يناسبك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-[#203441] h-2"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-[#eef2f5] rounded-full flex items-center justify-center mb-4">
                  <Home className="h-8 w-8 text-[#39576f]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">الكفالة الحياتيّة</h3>
                <p className="text-gray-700 mb-6">
                  دعم شهريّ منتظم يلبّي احتياجات اليتيم المعيشيّة الأساسيّة، ويساعده على تجاوز
                  التحدّيات اليوميّة الناتجة عن ظروف الحرمان وفقدان المعيل، ممّا يوفّر له الاستقرار
                  العاطفيّ والاجتماعيّ.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">قيمة الكفالة الشهرية:</span>
                    <span className="font-bold text-[#39576f]">40 دولار</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">عدد الأيتام المحتاجين:</span>
                    <span className="font-bold text-[#39576f]">500 يتيم</span>
                  </div>
                </div>
                {/* <Button className="w-full bg-[#203441] hover:bg-[#39576f]">
                  اكفل يتيماً حياتياً
                  <Heart className="mr-2 h-5 w-5" />
                </Button> */}
              </div>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-[#203441] h-2"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-[#eef2f5] rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-[#39576f]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">الكفالة التعليميّة</h3>
                <p className="text-gray-700 mb-6">
                  تغطّي هذه الكفالة جميع متطلّبات التعليم، بدءًا من الرسوم الدراسيّة، ومرورًا
                  بتكاليف التدفئة والتشغيل، وانتهاءً بتأمين المستلزمات المدرسية الكاملة، مع خدمة نقل
                  مجّانيّة وآمنة وتوزيع الحقائب المدرسيّة والألبسة.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">قيمة الكفالة الشهرية:</span>
                    <span className="font-bold text-[#39576f]">30 دولار</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">عدد الأيتام المحتاجين:</span>
                    <span className="font-bold text-[#39576f]">1100 يتيم</span>
                  </div>
                </div>
                {/* <Button className="w-full bg-[#203441] hover:bg-[#39576f]">
                  اكفل يتيماً تعليمياً
                  <BookOpen className="mr-2 h-5 w-5" />
                </Button> */}
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Sponsorship Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">كيف تكفل يتيماً؟</h2>
            <p className="text-lg text-gray-700">
              عملية الكفالة بسيطة وسريعة، اتبع الخطوات التالية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
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
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-lg shadow-md relative">
                {/* يجب تفعيل هذا اللينك للاستمارة */}
                <Link href="/">
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#203441] text-white flex items-center justify-center font-bold">
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

      {/* Current Campaign */}
      {/* TODO: create new current campaing */}
      {/* <section className="py-16 bg-[#eef2f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <Badge className="bg-[#39576f] hover:bg-[#203441] mb-4 text-white">
                  حملة عاجلة
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  حملة كفالة 100 يتيم للعام الدراسي الجديد
                </h2>
                <p className="text-gray-700 mb-6">
                  نسعى لتأمين كفالات لـ 100 يتيم جديد مع بداية العام الدراسي، لضمان حصولهم على فرصة
                  التعليم وتأمين مستلزماتهم المدرسية الكاملة.
                </p>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">الهدف: 100 كفالة</span>
                    <span className="font-bold text-[#39576f]">تم تحقيق: 65 كفالة</span>
                  </div>
                  <Progress
                    value={65}
                    className="h-3 bg-gray-200"
                    indicatorClassName="bg-[#39576f]"
                  />
                </div>

                <div className="bg-[#eef2f5] p-4 rounded-lg mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">المتبقي من الوقت:</span>
                    <span className="font-bold text-[#39576f]">15 يوم</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">المبلغ المطلوب:</span>
                    <span className="font-bold text-[#39576f]">7,500 دولار</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#203441] hover:bg-[#39576f] flex-1">
                    ساهم في الحملة الآن
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#39576f] text-[#39576f] hover:bg-[#eef2f5] flex-1"
                  >
                    شارك الحملة
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Children's Dreams */}
      {/* TODO: create children dreams */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">أحلام الأطفال</h2>
            <p className="text-lg text-gray-700">
              تعرف على أحلام وطموحات الأطفال الأيتام وكيف يمكن لكفالتك أن تساعدهم على تحقيقها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dreams.map((dream) => (
              <Card key={dream.id} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={dream.image || '/placeholder.svg'}
                    alt={`حلم ${dream.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">
                      {dream.name}, {dream.age} سنوات
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
                    اقرأ المزيد عن حلم {dream.name}
                    <ArrowRight className="mr-1 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl">
            {selectedDream && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-2">
                    <DialogTitle className="text-2xl">حلم {selectedDream.name}</DialogTitle>
                    <Badge className="bg-[#eef2f5] text-[#203441]">{selectedDream.category}</Badge>
                  </div>
                  <DialogDescription>
                    {selectedDream.name}، {selectedDream.age} سنوات
                  </DialogDescription>
                </DialogHeader>

                <div className="relative h-64 w-full my-4 rounded-lg overflow-hidden">
                  <Image
                    src={selectedDream.image || '/placeholder.svg'}
                    alt={`حلم ${selectedDream.name}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg mb-2">قصة {selectedDream.name}</h4>
                    <p className="text-gray-700">{selectedDream.story}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">حلم {selectedDream.name}</h4>
                    <p className="text-gray-700">{selectedDream.dream}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">كيف يمكنك المساعدة</h4>
                    <p className="text-gray-700">{selectedDream.howToHelp}</p>
                  </div>
                </div>

                <div className="bg-[#eef2f5] p-4 rounded-lg mt-4">
                  <p className="text-[#203441] text-sm">
                    بكفالتك لـ {selectedDream.name} تساهم في تحقيق حلمه وتوفير مستقبل أفضل له.
                  </p>
                </div>

                <DialogFooter>
                  <Button className="bg-[#203441] hover:bg-[#39576f]">
                    اكفل {selectedDream.name} الآن
                    <Heart className="mr-2 h-4 w-4" />
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">أسئلة شائعة</h2>
            <p className="text-lg text-gray-700">
              إليك إجابات على الأسئلة الأكثر شيوعاً حول برنامج كفالة الأيتام
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full" dir="rtl">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">أسئلة عامة</TabsTrigger>
                <TabsTrigger value="payment">الدفع والتبرع</TabsTrigger>
                <TabsTrigger value="reports">التقارير والمتابعة</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="mt-6">
                <div className="space-y-4">
                  {[
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
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-2">{item.question}</h4>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="payment" className="mt-6">
                <div className="space-y-4">
                  {[
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
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-2">{item.question}</h4>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="reports" className="mt-6">
                <div className="space-y-4">
                  {[
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
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
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

      {/* CTA */}
      <section className="py-16 bg-[#203441] text-white mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">كن سبباً في تغيير حياة طفل يتيم</h2>
            <p className="text-xl mb-8">
              كفالتك اليوم تعني مستقبلاً أفضل لطفل يتيم. ساهم معنا في بناء جيل واعد قادر على صنع
              التغيير.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#203441] hover:bg-gray-100 text-lg">
                اكفل يتيماً الآن
                <Heart className="mr-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className=" text-main-blue text-lg">
                تواصل معنا للاستفسار
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
