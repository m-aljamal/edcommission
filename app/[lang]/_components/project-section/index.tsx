import { ArrowRight } from 'lucide-react'

import ProjectCard from './project-card'
import { ButtonIcon } from '../button-icon'
// Sample project data

const projects = [
  {
    id: 1,
    title: 'مشروع مدرسة الشافعيّ لرعاية الطفولة – للبنين',
    description: 'الأطفال الأيتام في مرحلة التعليم الأساسيّ',
    image: '1iuhU3sBUm7AfViYf5Ak1h2x9EdLpkeKQ',
    projectLink: '/formal-education/shaffi',
  },
  {
    id: 2,
    title: 'مشروع مدرسة واجدو الطريق - للبنات',
    description: 'الأطفال الأيتام في مرحلة التعليم الأساسيّ',
    image: '1QeqUCoXEOTK_i8VXQcCEHi5ui3AFwQSI',
    projectLink: '/formal-education/wajido-girls',
  },
  {
    id: 3,
    title: 'مشروع منتدى دابق الثقافيّ',
    description: 'مركز ثقافي يقدم دورات وأنشطة اجتماعية متنوعة للمجتمع المحلي',
    image: '1CN5cy_OYv75H0UKXLiN-o3Q75dzFgQaI',
    projectLink: '/formal-education/dabiq-cultural-center',
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-main-blue">مشاريعنا التعليمية</h2>
          <p className="text-gray-600 mt-2">
            نعمل على تطوير البنية التحتية التعليمية وتحسين جودة التعليم
          </p>
        </div>

        <div className="grid grid-cols-1   md:grid-cols-3 gap-3  ">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <ButtonIcon
            className="bg-first-blue text-white hover:bg-main-blue shadow-md transition-all group cursor-pointer inline-flex items-center"
            icon={ArrowRight}
            iconClassName="transition-transform group-hover:translate-x-1"
            href='/projects'
          >
            جميع المشاريع
          </ButtonIcon>
        </div>
      </div>
    </section>
  )
}
