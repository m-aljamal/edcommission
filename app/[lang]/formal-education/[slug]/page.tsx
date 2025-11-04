

import { Locale, translations } from '@/lib/i18n'
import { getProject } from '@/lib/content'
import NotFound from '@/components/not-found'
import ProjectHeader from '@/components/project-header'
import ProjectContent from '@/components/project-content'



export default async function Page({ params }: { params: Promise<{ slug: string, lang: Locale }> }) {
  const { slug, lang } = await params
  const { tabs: { components, importance, media, overview }, formalEducation } = translations[lang]

  const tabs = [
    {
      title: overview,
      value: "overview"
    },
    {
      title: importance,
      value: "importance"
    },
    {
      title: components,
      value: "components"
    },
    {
      title: media,
      value: "media"
    },

  ]

  const project = await getProject(lang, slug)


  if (!project) {
    return (
      <NotFound lang={lang} />
    )
  }

  return (
    <main className="min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-4">

        <ProjectHeader
          lang={lang}
          backLink={{ title: formalEducation.title, url: "/formal-education" }}
          slug={project.slug}
          title={project.title}
        />

        <ProjectContent project={project} tabs={tabs} lang={lang} page='formal-education' />
      </div>
    </main>

  )
}
