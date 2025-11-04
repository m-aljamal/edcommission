import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Award,
  BookOpen,
  ClipboardCheck,
  FileText,
  GraduationCap,
  LineChart,
  School,
  Shield,
  Users,
  UserCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { HeroSection } from './_components/hero'
import { qualityTranslations } from './_components/text'
import { Locale } from '@/lib/i18n'
import { ImportanceSection } from './_components/importance'
 

  

 

export default async function QualityPage({params}:{params:Promise<{lang:Locale}>}) {
    const {lang} = await params 
    const t = qualityTranslations[lang]
  return (
    <main className="pb-16">
      {/* Hero Section */}
      <HeroSection t={t.hero} />

      {/* Importance Section */}
      <ImportanceSection t={t.importance} stats={t.stats} />

      {/* Programs Section */}
      {/* <ProgramsSection /> */}

      {/* Impact Section */}
      {/* <ImpactSection /> */}

      {/* Documents Section */}
      {/* <DocumentsSection /> */}

      {/* CTA Section */}
      {/* <CTASection /> */}
    </main>
  )
}

function ProgramsSection() {
  return (
    <div id="programs" className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">
            {t.programs.title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t.programs.description}</p>
        </div>

        <Tabs defaultValue="training" className="w-full" dir="rtl">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger
              value="training"
              className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
            >
              <GraduationCap className="h-5 w-5 mr-2 hidden md:inline" />
              {t.programs.tabs.training}
            </TabsTrigger>
            <TabsTrigger
              value="supervision"
              className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
            >
              <ClipboardCheck className="h-5 w-5 mr-2 hidden md:inline" />
              {t.programs.tabs.supervision}
            </TabsTrigger>
            <TabsTrigger
              value="testing"
              className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
            >
              <LineChart className="h-5 w-5 mr-2 hidden md:inline" />
              {t.programs.tabs.testing}
            </TabsTrigger>
            <TabsTrigger
              value="competitions"
              className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
            >
              <Award className="h-5 w-5 mr-2 hidden md:inline" />
              {t.programs.tabs.competitions}
            </TabsTrigger>
            <TabsTrigger
              value="environment"
              className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
            >
              <School className="h-5 w-5 mr-2 hidden md:inline" />
              {t.programs.tabs.environment}
            </TabsTrigger>
          </TabsList>

          {/* Training Tab */}
          <TabsContent value="training" className="space-y-6">
            <TrainingTab />
          </TabsContent>

          {/* Supervision Tab */}
          <TabsContent value="supervision" className="space-y-6">
            <SupervisionTab />
          </TabsContent>

          {/* Testing Tab */}
          <TabsContent value="testing" className="space-y-6">
            <TestingTab />
          </TabsContent>

          {/* Competitions Tab */}
          <TabsContent value="competitions" className="space-y-6">
            <CompetitionsTab />
          </TabsContent>

          {/* Environment Tab */}
          <TabsContent value="environment" className="space-y-6">
            <EnvironmentTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function TrainingTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-bold text-[#203441] mb-4">{t.training.title}</h3>
        <p className="text-gray-700 mb-6">{t.training.description}</p>
        <div className="space-y-4">
          {t.training.points.map((point, index) => (
            <CheckListItem key={index} text={point} />
          ))}
        </div>
      </div>
      <ProgramImage
        imageId="1Xi60Gc6nmFizPa0JgTL5CSVRli2oCoWD"
        alt={t.training.title}
        badge={t.training.badge}
        caption={t.training.imageCaption}
      />
    </div>
  )
}

function SupervisionTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1">
        <ProgramImage
          imageId="1-o0nmtBbv217xlIlb02gkW-LBVqNaxmn"
          alt={t.supervision.title}
          badge={t.supervision.badge}
          caption={t.supervision.imageCaption}
        />
      </div>
      <div className="order-1 md:order-2">
        <h3 className="text-2xl font-bold text-[#203441] mb-4">{t.supervision.title}</h3>
        <p className="text-gray-700 mb-6">{t.supervision.description}</p>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-bold text-[#203441] mb-2 flex items-center">
              <UserCheck className="h-5 w-5 ml-2 text-[#39576f]" />
              {t.supervision.team.title}
            </h4>
            <ul className="space-y-2 text-gray-700">
              {t.supervision.team.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="text-[#39576f] mt-1">•</div>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-bold text-[#203441] mb-2 flex items-center">
              <ClipboardCheck className="h-5 w-5 ml-2 text-[#39576f]" />
              {t.supervision.mechanisms.title}
            </h4>
            <ul className="space-y-2 text-gray-700">
              {t.supervision.mechanisms.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="text-[#39576f] mt-1">•</div>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function TestingTab() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-2xl font-bold text-[#203441] mb-6">{t.testing.title}</h3>
      <p className="text-gray-700 mb-6">{t.testing.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="font-bold text-[#203441] mb-2 flex items-center">
            <LineChart className="h-5 w-5 ml-2 text-[#39576f]" />
            {t.testing.goalsTitle}
          </h4>
          <div className="space-y-3">
            {t.testing.goals.map((goal, index) => (
              <CheckListItem key={index} text={goal} />
            ))}
          </div>
        </div>
        <ProgramImage
          imageId="1-o0nmtBbv217xlIlb02gkW-LBVqNaxmn"
          alt={t.testing.title}
          badge=""
          caption=""
        />
      </div>
    </div>
  )
}

function CompetitionsTab() {
  const competitionIcons = [BookOpen, FileText, Award, Users]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-bold text-[#203441] mb-4">{t.competitions.title}</h3>
        <p className="text-gray-700 mb-6">{t.competitions.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.competitions.types.map((type, index) => (
            <CompetitionCard
              key={index}
              icon={competitionIcons[index]}
              title={type.title}
              description={type.description}
            />
          ))}
        </div>
      </div>
      <ProgramImage
        imageId="1-o0nmtBbv217xlIlb02gkW-LBVqNaxmn"
        alt={t.competitions.title}
        badge={t.competitions.badge}
        caption={t.competitions.imageCaption}
      />
    </div>
  )
}

function EnvironmentTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1">
        <ProgramImage
          imageId="1-o0nmtBbv217xlIlb02gkW-LBVqNaxmn"
          alt={t.environment.title}
          badge={t.environment.badge}
          caption={t.environment.imageCaption}
        />
      </div>
      <div className="order-1 md:order-2">
        <h3 className="text-2xl font-bold text-[#203441] mb-4">{t.environment.title}</h3>
        <p className="text-gray-700 mb-6">{t.environment.description}</p>
        <div className="space-y-4">
          {t.environment.points.map((point, index) => (
            <CheckListItem key={index} text={point} />
          ))}
        </div>
        <div className="mt-6 p-4 bg-[#39576f]/5 rounded-lg">
          <h4 className="font-bold text-[#203441] mb-3 flex items-center">
            <Shield className="h-5 w-5 ml-2 text-[#39576f]" />
            {t.environment.standardsTitle}
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {t.environment.standards.map((standard, index) => (
              <div key={index} className="bg-white p-3 rounded-lg text-center">
                <p className="text-gray-700 text-sm">{standard}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ImpactSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">{t.impact.title}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">{t.impact.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-2 bg-gradient-to-r from-[#203441] to-[#39576f]"></div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-[#203441] mb-4">{t.impact.results.title}</h3>
            <div className="space-y-4">
              {t.impact.results.points.map((point, index) => (
                <CheckListItem key={index} text={point} />
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-2 bg-gradient-to-r from-[#203441] to-[#39576f]"></div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-[#203441] mb-4">{t.impact.indicators.title}</h3>
            <div className="space-y-6">
              {t.impact.indicators.items.map((item, index) => (
                <ProgressBar key={index} label={item.label} value={item.value} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function DocumentsSection() {
  const documents = [{ title: 't', description: 'fe', type: 't', url: '' }]
  
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
          {documents.map((doc, index) => (
            <DocumentCard key={index} {...doc} downloadButton={t.documents.downloadButton} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-[#39576f] hover:bg-[#203441]" size="lg">
            {t.documents.viewAllButton}
            <FileText className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

function CTASection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-[#203441] to-[#39576f] rounded-xl p-8 md:p-12 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.cta.title}</h2>
        <p className="text-white/80 max-w-3xl mx-auto mb-8">{t.cta.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#203441] hover:bg-white/90">
              {t.cta.contactButton}
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white/10"
            asChild
          >
            <Link href="/donate">{t.cta.donateButton}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}