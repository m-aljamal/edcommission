import ProjectContent from '@/components/project-content'
import ProjectHeader from '@/components/project-header'
import { Locale } from '@/lib/i18n'
import type { Project } from "@/types"

export default function Project({ project, lang }: { project: Project, lang: Locale }) {

  const tabs = [
    {
      title: "نظرة عامة",
      value: "overview"
    },
    {
      title: "أهمية المشروع",
      value: "importance"
    }


  ]

  return (
    <main className="min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-4">




        {/* Project Header */}
        <ProjectHeader
          lang={lang}
          backLink={{ title: "التعليم الرسمي", url: "/formal-education" }}
          slug={project.slug}
          title={project.title}
        />

        <ProjectContent project={project} tabs={tabs} lang={lang} page='formal-education' />
      </div>

      {/* Scroll to top button */}
      {/* todo add this scroll to website layout */}
      {/* <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-[#203441] text-white p-3 rounded-full shadow-lg hover:bg-[#39576f] transition-colors"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button> */}
    </main>

  )
}


