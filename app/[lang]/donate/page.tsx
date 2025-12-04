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
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { GOOGLE_URL } from '@/lib/constant'

export const metadata: Metadata = {
  title: 'تبرع الآن | جمعية تطوير التعليم',
  description: 'ساهم في دعم مستقبل التعليم من خلال التبرع جمعية تطوير التعليم',
}

const donationProjects = [
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
    description: 'تجهيز مركز تعليمي بالمعدات والأدوات اللازمة لتقديم خدمات تعليمية متميزة.',
    icon: Building,
  },
]

export default function DonatePage() {
  return (
    <main className="pb-16">
      {/* Hero Section */}
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
              تبرع الآن وساهم في بناء مستقبل أفضل
            </h1>
            <p className="text-white/80 text-lg mb-8">
              تبرعك يساهم في توفير فرص تعليمية أفضل للطلاب، وبناء مدارس جديدة، وتدريب المعلمين،
              وتطوير المناهج الدراسية. كل مساهمة، مهما كانت صغيرة، تحدث فرقاً كبيراً في حياة الطلاب.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#donation-options">
                <Button size="lg" className="bg-white text-[#203441] hover:bg-white/90">
                  تبرع الآن
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#contact-us">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  تواصل معنا
                  <MessageCircle className="mr-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">أثر تبرعك</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            تبرعك يحدث فرقاً حقيقياً في حياة آلاف الطلاب. من خلال دعمك، نستطيع توسيع نطاق عملنا
            وتحسين جودة التعليم في المناطق المحتاجة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#39576f]/10 mb-4">
                <Users className="h-8 w-8 text-[#39576f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#203441] mb-2">50,000+</h3>
              <p className="text-gray-600">طالب استفادوا من برامجنا</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#39576f]/10 mb-4">
                <School className="h-8 w-8 text-[#39576f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#203441] mb-2">25+</h3>
              <p className="text-gray-600">مدرسة تم تجهيزها وترميمها</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#39576f]/10 mb-4">
                <BookOpen className="h-8 w-8 text-[#39576f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#203441] mb-2">5,000+</h3>
              <p className="text-gray-600">معلم تم تدريبهم</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#39576f]/10 mb-4">
                <Building className="h-8 w-8 text-[#39576f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#203441] mb-2">6+</h3>
              <p className="text-gray-600">مراكز ثقافية وتعليمية </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Donation Options */}
      <div id="donation-options" className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">طرق التبرع</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              نوفر لك عدة طرق للتبرع، اختر الطريقة التي تناسبك
            </p>
          </div>

          <Tabs defaultValue="bank" className="w-full max-w-4xl mx-auto" dir="rtl">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger
                value="bank"
                className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
              >
                <Landmark className="h-5 w-5 mr-2" />
                تحويل بنكي
              </TabsTrigger>
              <TabsTrigger
                value="online"
                className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
              >
                <CreditCard className="h-5 w-5 mr-2" />
                تبرع أونلاين
              </TabsTrigger>
              <TabsTrigger
                value="direct"
                className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                تواصل مباشر
              </TabsTrigger>
            </TabsList>

            {/* Bank Transfer Tab */}
            {/* <TabsContent value="bank" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#203441]">التبرع عبر التحويل البنكي</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">يمكنك التبرع مباشرة عبر التحويل البنكي إلى أحد حساباتنا التالية:</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bankAccounts.map((account, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="h-1 bg-gradient-to-r from-[#203441] to-[#39576f]"></div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-[#39576f]/10 p-2 rounded-full">
                              <Landmark className="h-5 w-5 text-[#39576f]" />
                            </div>
                            <h4 className="font-bold text-[#203441]">{account.bankName}</h4>
                          </div>

                          <div className="space-y-3 text-sm">
                            <div>
                              <p className="text-gray-500">اسم الحساب:</p>
                              <p className="font-medium">{account.accountName}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">رقم الآيبان (IBAN):</p>
                              <p className="font-medium font-mono bg-gray-50 p-2 rounded-md text-xs">{account.iban}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">رمز السويفت (SWIFT):</p>
                              <p className="font-medium">{account.swift}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">العملة:</p>
                              <p className="font-medium">{account.currency}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">عنوان البنك:</p>
                              <p className="font-medium">{account.address}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
                    <p className="text-blue-800 text-sm">
                      <strong>ملاحظة هامة:</strong> يرجى ذكر "تبرع لهيئة تطوير التعليم" في تفاصيل التحويل، وإرسال إشعار
                      التحويل إلى البريد الإلكتروني donations@example.com لنتمكن من إصدار إيصال التبرع.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent> */}
            <TabsContent value="bank" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#203441]">
                    التبرع عبر التحويل البنكي
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    يمكنك التبرع مباشرة عبر التحويل البنكي إلى حسابنا:
                  </p>

                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#39576f]/10 p-2 rounded-full">
                          <Landmark className="h-5 w-5 text-[#39576f]" />
                        </div>
                        <h4 className="font-bold text-[#203441]">Ziraat Bankası</h4>
                      </div>

                      <div className="space-y-3 text-sm mb-6">
                        <div>
                          <p className="text-gray-500">عنوان البنك:</p>
                          <p className="font-medium">
                            İslambey, Cumhuriyet Cd. No:170, 79001 Merkez/Kilis- Turkey
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">اسم الحساب:</p>
                          <p className="font-medium">EĞİTİM GELİŞTİRME DERNEĞİ</p>
                        </div>
                        <div>
                          <p className="text-gray-500">عنوان المنظمة:</p>
                          <p className="font-medium">
                            DOĞAN GÜREŞ PAŞA MAH. MUSTAFA EREN CAD. 4/34 MERKEZ/KİLİS-Turkey
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">الرمز البريدي:</p>
                          <p className="font-medium">79000</p>
                        </div>
                        <div>
                          <p className="text-gray-500">رمز السويفت (SWIFT):</p>
                          <p className="font-medium">TCZBTR2AXXX</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-bold text-[#203441] mb-3">اختر العملة:</h5>
                        <Tabs defaultValue="try" className="w-full" dir="rtl">
                          <TabsList className="grid w-full grid-cols-3 mb-4">
                            <TabsTrigger
                              value="try"
                              className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                            >
                              الليرة التركية
                            </TabsTrigger>
                            <TabsTrigger
                              value="usd"
                              className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                            >
                              الدولار الأمريكي
                            </TabsTrigger>
                            <TabsTrigger
                              value="eur"
                              className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                            >
                              اليورو
                            </TabsTrigger>
                          </TabsList>

                          <TabsContent value="try">
                            <Card className="border-2 border-[#39576f]/20">
                              <CardContent className="p-4">
                                <div className="space-y-3">
                                  <div>
                                    <p className="text-gray-500">رقم الحساب:</p>
                                    <p className="font-medium">77591825-5001</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">رقم الآيبان (IBAN):</p>
                                    <p className="font-medium font-mono bg-gray-50 p-2 rounded-md text-xs select-all">
                                      TR84 0001 0000 4377 5918 2550 01
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">العملة:</p>
                                    <p className="font-medium">الليرة التركية</p>
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
                                    <p className="text-gray-500">رقم الحساب:</p>
                                    <p className="font-medium">77591825-5002</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">رقم الآيبان (IBAN):</p>
                                    <p className="font-medium font-mono bg-gray-50 p-2 rounded-md text-xs select-all">
                                      TR57 0001 0000 4377 5918 2550 02
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">العملة:</p>
                                    <p className="font-medium">الدولار الأمريكي</p>
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
                                    <p className="text-gray-500">رقم الحساب:</p>
                                    <p className="font-medium">77591825-5003</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">رقم الآيبان (IBAN):</p>
                                    <p className="font-medium font-mono bg-gray-50 p-2 rounded-md text-xs select-all">
                                      TR30 0001 0000 4377 5918 2550 03
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">العملة:</p>
                                    <p className="font-medium">اليورو</p>
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
                                <h5 className="font-bold text-amber-800 mb-1">
                                  قريباً: حساب بنكي في سوريا
                                </h5>
                                <p className="text-amber-700 text-sm">
                                  بعد الحصول على الترخيص الرسمي للجمعية في سوريا نعمل حالياً على فتح
                                  حساب بنكي جديد. سيتم تحديث هذه الصفحة فور توفر المعلومات.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
                        <p className="text-blue-800 text-sm">
                          <strong>ملاحظة هامة:</strong> يرجى ذكر تبرع لجمعية تطوير التعليم في تفاصيل
                          التحويل، وإرسال إشعار التحويل إلى البريد الإلكتروني info@edcommission.com
                          لنتمكن من إصدار إيصال التبرع.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Online Donation Tab */}
            <TabsContent value="online" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#203441]">التبرع أونلاين</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                      <p className="text-gray-600 mb-4">
                        يمكنك التبرع مباشرة عبر موقع شريكنا AHSIN الذي يوفر منصة آمنة للتبرعات
                        الإلكترونية. يتيح لك الموقع اختيار المشروع الذي ترغب في دعمه وتحديد قيمة
                        التبرع.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                          <p className="text-gray-700">منصة آمنة ومشفرة للتبرعات</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                          <p className="text-gray-700">إمكانية التبرع بمختلف العملات</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                          <p className="text-gray-700">إصدار إيصال التبرع فوراً</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button className="bg-[#39576f] hover:bg-[#203441]" size="lg" asChild>
                          <a
                            href="https://ahsin.de/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            تبرع الآن عبر موقع أحسن
                            <ExternalLink className="mr-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
                      <div className="relative h-48 w-full rounded-md overflow-hidden mb-4">
                        <Image
                          src={`${GOOGLE_URL}1y1ERx3WeRHcCIXx552i6XLgxkpP7f0MG`}
                          alt="منصة أحسن للتبرعات"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-[#203441] mb-2">منصة أحسن للتبرعات</h4>
                        <p className="text-gray-600 text-sm">
                          شريكنا الرسمي لجمع التبرعات الإلكترونية
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Direct Contact Tab */}
            <TabsContent value="direct" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#203441]">التواصل المباشر للتبرع</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    إذا كنت ترغب في التبرع بطريقة مخصصة أو لديك استفسارات حول التبرع، يمكنك التواصل
                    معنا مباشرة عبر:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-[#39576f]/10 p-4 rounded-full mb-4">
                            <Phone className="h-6 w-6 text-[#39576f]" />
                          </div>
                          <h4 className="font-bold text-[#203441] mb-2">اتصل بنا</h4>
                          <p className="text-gray-600 mb-4">
                            يمكنك الاتصال بنا مباشرة للاستفسار عن طرق التبرع
                          </p>
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
                          <h4 className="font-bold text-[#203441] mb-2">راسلنا</h4>
                          <p className="text-gray-600 mb-4">
                            أرسل لنا استفسارك عبر البريد الإلكتروني
                          </p>
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
                          <h4 className="font-bold text-[#203441] mb-2">واتساب</h4>
                          <p className="text-gray-600 mb-4">تواصل معنا مباشرة عبر واتساب</p>
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

                  {/* <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mt-6">
                    <p className="text-yellow-800 text-sm">
                      <strong>��لاحظة:</strong> فريق خدمة المتبرعين متاح للرد على استفساراتكم من
                      الأحد إلى الخميس، من الساعة 9 صباحاً حتى 5 مساءً بتوقيت تركيا.
                    </p>
                  </div> */}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Donation Projects */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">مشاريع التبرع</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            يمكنك اختيار المشروع الذي ترغب في دعمه من خلال تبرعك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donationProjects.map((project) => {
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
                {/* <CardFooter>
                  <Button className="w-full bg-[#39576f] hover:bg-[#203441]">تبرع الآن</Button>
                </CardFooter> */}
              </Card>
            )
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">أسئلة شائعة</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              إليك إجابات على الأسئلة الشائعة حول التبرع لجمعية تطوير التعليم
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-[#203441] text-lg mb-2">هل تبرعي معفى من الضرائب؟</h3>
                <p className="text-gray-600">
                  نعم، جمعية تطوير التعليم هي منظمة غير ربحية معتمدة، وتبرعك مؤهل للإعفاء الضريبي في
                  ألمانيا وتركيا ونعمل حالياً على تحصيل الإعفاء من الدول الأخرى
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-[#203441] text-lg mb-2">كيف يتم استخدام تبرعي؟</h3>
                <p className="text-gray-600">
                  يتم توجيه 93% من التبرعات مباشرة إلى المشاريع التعليمية، بينما يتم استخدام 5% فقط
                  للمصاريف الإدارية والتشغيلية و 2% لأجور الحوالات المالية علماً أنه لا يتم حسم
                  مصاريف إدارية من كفالات الأيتام المادية. نحن نلتزم بالشفافية الكاملة في استخدام
                  التبرعات، ونقوم بنشر تقارير مالية سنوية توضح كيفية إنفاق الأموال.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-[#203441] text-lg mb-2">
                  هل يمكنني تخصيص تبرعي لمشروع معين؟
                </h3>
                <p className="text-gray-600">
                  نعم، يمكنك تخصيص تبرعك لمشروع محدد من مشاريعنا المختلفة مثل كفالة طالب، بناء
                  مدرسة، تدريب المعلمين، أو تجهيز مركز تعليمي. يرجى ذكر اسم المشروع في تفاصيل
                  التحويل أو التواصل معنا مباشرة.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-[#203441] text-lg mb-2">
                  هل يمكنني التبرع بشكل شهري؟
                </h3>
                <p className="text-gray-600">
                  نعم، نحن نشجع التبرعات الشهرية المنتظمة التي تساعدنا على التخطيط طويل المدى
                  لمشاريعنا.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-[#203441] text-lg mb-2">
                  هل يمكنني زيارة المشاريع التي أتبرع لها؟
                </h3>
                <p className="text-gray-600">
                  نعم، نحن نرحب بزيارة المتبرعين لمشاريعنا للاطلاع على أثر تبرعاتهم على أرض الواقع.
                  يمكنك التواصل معنا لترتيب زيارة لأحد مشاريعنا في المناطق المتاحة.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact-us" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">تواصل معنا</h2>
            <p className="text-gray-600">
              إذا كان لديك أي استفسار حول التبرع أو ترغب في معرفة المزيد عن مشاريعنا، لا تتردد في
              التواصل معنا
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-[#203441] text-xl mb-4">معلومات الاتصال</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#39576f]/10 p-2 rounded-full mt-1">
                        <Mail className="h-5 w-5 text-[#39576f]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#203441]">البريد الإلكتروني:</p>
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
                        <p className="font-medium text-[#203441]">الهاتف:</p>
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
                        <p className="font-medium text-[#203441]">واتساب:</p>
                        <a
                          href="https://wa.me/905123456789"
                          className="text-[#39576f] hover:underline"
                          dir="ltr"
                        >
                          +90 531 507 45 47
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      {/* <div className="bg-[#39576f]/10 p-2 rounded-full mt-1">
                        <svg
                          className="h-5 w-5 text-[#39576f]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                        </svg>
                      </div> */}
                      {/* <div>
                        <p className="font-medium text-[#203441]">لينكد إن:</p>
                        <a
                          href="https://linkedin.com/company/example"
                          className="text-[#39576f] hover:underline"
                        >
                          هيئة تطوير التعليم
                        </a>
                      </div> */}
                    </div>
                  </div>

                  {/* <div className="mt-8">
                    <h3 className="font-bold text-[#203441] text-xl mb-4">ساعات العمل</h3>
                    <p className="text-gray-600">
                      من الأحد إلى الخميس: 9:00 صباحاً - 5:00 مساءً
                      <br />
                      الجمعة والسبت: مغلق
                    </p>
                  </div> */}
                </div>

                <div>
                  <h3 className="font-bold text-[#203441] text-xl mb-4">أرسل رسالة</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          الاسم
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#39576f] focus:border-transparent"
                          placeholder="أدخل اسمك"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#39576f] focus:border-transparent"
                          placeholder="أدخل بريدك الإلكتروني"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          الموضوع
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#39576f] focus:border-transparent"
                          placeholder="موضوع الرسالة"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          الرسالة
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#39576f] focus:border-transparent"
                          placeholder="اكتب رسالتك هنا..."
                        ></textarea>
                      </div>
                    </div>
                    <Button className="w-full bg-[#39576f] hover:bg-[#203441]" size="lg">
                      إرسال الرسالة
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Thank You Section */}
      <div className="bg-[#203441] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">شكراً لدعمكم</h2>
          <p className="max-w-2xl mx-auto text-white/80 mb-8">
            نشكركم على دعمكم المستمر لجمعية تطوير التعليم ومساهمتكم في بناء مستقبل أفضل للطلاب. كل
            تبرع، مهما كان صغيراً، يحدث فرقاً كبيراً في حياة الطلاب.
          </p>
          <Button className="bg-white text-[#203441] hover:bg-white/90" size="lg" asChild>
            <a href="#donation-options">
              تبرع الآن
              <Heart className="mr-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}
