import { type Locale, getTranslations } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const t = getTranslations(lang)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-700 via-sky-600 to-cyan-600 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-4 text-sky-50 font-medium">{t.hero.subtitle}</p>
            <p className="text-base md:text-lg mb-8 text-sky-100 max-w-3xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
            <Button asChild size="lg" className="bg-white text-sky-700 hover:bg-sky-50 font-semibold text-lg px-8 py-6">
              <Link href={`/${lang}/about`}>{t.hero.cta}</Link>
            </Button>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-sky-700 mb-2">250+</div>
              <div className="text-gray-600 text-sm md:text-base">{t.stats.institutions}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">5,000+</div>
              <div className="text-gray-600 text-sm md:text-base">{t.stats.teachers}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">50,000+</div>
              <div className="text-gray-600 text-sm md:text-base">{t.stats.students}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">120+</div>
              <div className="text-gray-600 text-sm md:text-base">{t.stats.programs}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">{t.about.title}</h2>
            <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
              {t.about.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-t-4 border-t-sky-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sky-700">
                    <Award className="size-6" />
                    {t.about.mission}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{t.about.missionText}</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-cyan-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyan-600">
                    <TrendingUp className="size-6" />
                    {t.about.vision}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{t.about.visionText}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">{t.services.title}</h2>
            <p className="text-lg text-gray-600 text-center mb-12">{t.services.subtitle}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="size-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="size-6 text-cyan-700" />
                  </div>
                  <CardTitle className="text-xl">{t.services.service1.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {t.services.service1.description}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="size-12 bg-stone-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="size-6 text-stone-600" />
                  </div>
                  <CardTitle className="text-xl">{t.services.service2.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {t.services.service2.description}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="size-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="size-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">{t.services.service3.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {t.services.service3.description}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="size-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="size-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">{t.services.service4.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {t.services.service4.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
