import { ArrowRight } from 'lucide-react'

import ProjectCard from '@/components/project-card'
import { ButtonIcon } from '../button-icon'
import { Locale } from '@/lib/i18n'
import { getProjects } from '@/lib/content'



export default async function ProjectsSection({lang}:{lang:Locale}) {
  const textContent =  {
    ar:{
      title: "مشاريعنا التعليمية",
      subtitle: "نعمل على تطوير البنية التحتية التعليمية وتحسين جودة التعليم",
      button: "جميع المشاريع"
    },
    en:{
title: "Our Educational Projects",
subtitle: "We work on developing educational infrastructure and improving the quality of education"
    ,  button: "All Projects"
  
}
  }
  
  const formalProjects = (await getProjects(lang, "formal-education")).slice(0, 2)

const nonFormalProjects = (await getProjects(lang, "nonformal-education")).slice(0, 1)
const projects = [...formalProjects, ...nonFormalProjects]
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-main-blue">{textContent[lang].title}</h2>
          <p className="text-gray-600 mt-2">
           {textContent[lang].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1   md:grid-cols-3 gap-3  ">
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

        <div className="text-center mt-12">
          <ButtonIcon
            className="bg-first-blue text-white hover:bg-main-blue shadow-md transition-all group cursor-pointer inline-flex items-center"
            icon={ArrowRight}
            iconClassName="transition-transform group-hover:translate-x-1"
            href={`${lang}/formal-education`}
          >
           {textContent[lang].button}
          </ButtonIcon>
        </div>
      </div>
    </section>
  )
}
