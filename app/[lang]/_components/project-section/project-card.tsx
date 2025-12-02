import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

 export const GOOGLE_URL='https://drive.google.com/uc?export=download&id='

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    projectLink: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.projectLink} className="block h-full">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1 group">
        {/* Image container with effects */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={`${GOOGLE_URL}${project.image}`}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-main-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
            <ExternalLink className="text-white w-6 h-6" />
          </div>

          {/* Decorative element */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secound-blue to-mainfrom-main-blue"></div>
        </div>

        {/* Content below image */}
        <div className="p-5 text-right">
          <h3 className="text-xl font-bold text-mainfrom-main-blue mb-2 group-hover:text-secound-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm">{project.description}</p>
        </div>
      </div>
    </Link>
  )
}
