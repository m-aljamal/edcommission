import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { ChevronLeftIcon, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Activity, PsychologicalSupportData, psychologicalSupportData } from '../_components/programs'
import { psychologicalSupportTranslations } from '../_components/psychologicalSupportTranslations'
import { ActivityCard } from '../_components/activity-card'



export default async function ProjectPage({ params }: { params: Promise<{ slug: string, lang: Locale }> }) {
  const { slug, lang } = await params
  const project = psychologicalSupportData[lang].programs.find((program) => program.slug === slug)

  if (!project) {
    return <NotFoundSection lang={lang} />
  }

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Section */}
      <ProjectHeroSection project={project} />

      <div className="container mx-auto px-4 -mt-12">
        {/* Breadcrumb */}
        <ProjectBreadcrumb projectTitle={project.title} lang={lang} />

        {/* Activities Section */}
        <ActivitiesSection activities={project.activities} lang={lang} />
      </div>
    </main>
  )
}

function NotFoundSection({ lang }: { lang: Locale }) {
  const t = psychologicalSupportTranslations[lang]

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#203441] mb-4">
          {t.projectPage.notFound.title}
        </h1>
        <p className="text-gray-600 mb-6">{t.projectPage.notFound.description}</p>
        <Button asChild>
          <Link href="/psychological-support">{t.projectPage.notFound.backButton}</Link>
        </Button>
      </div>
    </div>
  )
}

function ProjectHeroSection({ project }: { project: PsychologicalSupportData }) {
  return (
    <div className={cn('relative overflow-hidden bg-gradient-to-br text-white mb-16', project.color)}>
      <div className="absolute inset-0">
        <Image
          src={"https://res.cloudinary.com/dokawmydv/image/upload/v1762079046/WhatsApp_Image_2025-04-23_at_2.51.40_PM_zrzs6i.jpg"}
          alt={project.slug}
          className="object-cover object-center opacity-10"
          fill
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-3 bg-white/10 rounded-full backdrop-blur-sm mb-6">
            <project.icon className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>

          <div className="h-1 w-32 bg-white/50 rounded-full mb-6"></div>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">{project.fullDescription}</p>
        </div>
      </div>

      <div className="absolute -bottom-1 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            fill="#f9fafb"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

function ProjectBreadcrumb({ projectTitle, lang }: { projectTitle: string, lang: Locale }) {
  const t = psychologicalSupportTranslations[lang]

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/${lang}`} className="text-[#476c86]">
              <Home className="h-4 w-4" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <ChevronLeftIcon className="h-4 w-4" />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/${lang}/psychological-support`} className="text-gray-600">
              {t.projectPage.breadcrumb.support}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <ChevronLeftIcon className="h-4 w-4" />
        <BreadcrumbItem>
          <BreadcrumbLink className="text-gray-400">{projectTitle}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

function ActivitiesSection({ activities, lang }: { activities: Activity[], lang: Locale }) {
  const t = psychologicalSupportTranslations[lang]

  return (
    <section className="mt-10">
      <h3 className="text-xl font-medium text-[#203441] flex items-center gap-2">
        <span className="w-8 h-1 bg-[#39576f] rounded-full"></span>
        <span>{t.projectPage.activitiesTitle}</span>
      </h3>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            projectImage={activity.image}
            importanceLabel={t.projectPage.importance}
            goalLabel={t.projectPage.goal}
          />
        ))}
      </div>
    </section>
  )
}