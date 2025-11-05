import { psychologicalSupportTranslations } from './_components/psychologicalSupportTranslations'
import { psychologicalSupportData } from './_components/programs'
import { Locale } from '@/lib/i18n'
import { PsychologicalHeroSection } from './_components/PsychologicalHero'
import { IntroSection } from './_components/intro'
 import { StatisticsSection } from './_components/Statistics'
import { ProjectCard } from './_components/project-card'






export default async function PsychologicalSupportPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const t = psychologicalSupportTranslations[lang]

  const programmes = psychologicalSupportData[lang].programs.map((program) => ({
    id: program.id,
    title: program.title,
    description: program.shortDescription,
    image: program.image,
    icon: program.icon,
    color: program.color,
    slug: program.slug,
    projectLink: `/${lang}/psychological-support/${program.id}`
  }))

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Section */}
      <PsychologicalHeroSection t={t.hero} backgroundImage={"https://res.cloudinary.com/dokawmydv/image/upload/v1762079029/996_knreqm.jpg"} />

      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <IntroSection t={t.intro} />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((project) => (
            <ProjectCard key={project.id} project={project} readMoreText={t.readMore} lang={lang} />
          ))}
        </div>

        {/* Statistics Section */}
        <StatisticsSection t={t.statistics} />
      </div>
    </main>
  )
}