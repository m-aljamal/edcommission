import { Locale } from "@/lib/i18n"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb'
import Link from "next/link"
import { ChevronLeftIcon, Home } from "lucide-react"

interface ProjectHeadertype  {
  lang: Locale,
  slug:string ,
  title:string,
  backLink:{
    title:string 
    url:string 
  }
}

function ProjectHeader({lang,slug,title,backLink}:ProjectHeadertype) {
  return (
    <div>
 <Breadcrumb className="mt-5">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href={`/${lang}`} className="text-secound-blue">
            <Home />
          </Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <ChevronLeftIcon />
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href={`/${lang}/${backLink.url}`} className="text-gray-600">
           {backLink.title}
          </Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <ChevronLeftIcon />
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href={`/${lang}/formal-education/${slug}`} className="text-gray-600">
            {title}
          </Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>

<div className="my-8">
        <h1 className="text-2xl  font-bold text-[#203441] mb-2">{title}</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-[#476c86] to-[#203441] rounded-full mb-4"></div>
      </div>
    </div>
   
  )
}

export default ProjectHeader