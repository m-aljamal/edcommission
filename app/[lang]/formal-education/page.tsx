import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'
import { ChevronLeftIcon, Home } from 'lucide-react'
import { getTranslations, Locale } from '@/lib/i18n'
import { getProjects } from '@/lib/content'
import ProjectCard from '@/components/project-card'


export default async function formalEducation({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  const projects = await getProjects(lang, "formal-education")


  return (
    <main className="min-h-screen  pt-8 bg-gray-100/50">
      <div className="container mx-auto px-4">
        <div className="mb-10 p-6 shadow-xl rounded-2xl">
          <div className="relative ">
            <h1 className="text-2xl font-bold text-main-blue mb-2">{t.formalEducation.title}</h1>
            <div className="h-1 w-30 bg-linear-to-r from-secound-blue to-main-blue rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-3xl">
              {t.formalEducation.subTitle}
            </p>
          </div>

          <Breadcrumb className="mt-5">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/`} className="text-secound-blue">
                    <Home />
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <ChevronLeftIcon />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/${lang}/formal-education`} className="text-gray-600">
                    {t.formalEducation.title}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
           
              lang={lang}
              key={project.id}
              project={{
                ...project,
                projectLink: `/${lang}/formal-education/${project.slug}`,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
