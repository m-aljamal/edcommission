

import { Locale } from '@/lib/i18n'
import { getProject } from '@/lib/content'
import NotFound from '@/components/not-found'
import Project from '../_components/project-page'


export default async function Page({ params }: { params: Promise<{ slug: string, lang: Locale }> }) {
  const { slug, lang } = await params

  const project = await getProject(lang, slug)


  if (!project) {
    return (
      <NotFound lang={lang} />
    )
  }

  return (
    <Project project={project} lang={lang} />

  )
}
