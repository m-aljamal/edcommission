import { type Locale, getTranslations } from "@/lib/i18n"
import { getProject, getProjects } from "@/lib/content"
import { Badge } from "@/components/ui/badge"
import { Calendar, DollarSign, Users, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const enProjects = await getProjects("en")
  const arProjects = await getProjects("ar")

  return [
    ...enProjects.map((project) => ({ lang: "en" as const, slug: project.slug })),
    ...arProjects.map((project) => ({ lang: "ar" as const, slug: project.slug })),
  ]
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>
}) {
  const { lang, slug } = await params
  const t = getTranslations(lang)
  const project = await getProject(lang, slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      {/* <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link href={`/${lang}/projects`}>
              <ArrowLeft className="size-4 me-2" />
              {lang === "ar" ? "العودة إلى المشاريع" : "Back to Projects"}
            </Link>
          </Button>

          <div className="relative h-96 w-full overflow-hidden rounded-lg mb-8">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{project.category}</Badge>
              <Badge variant={project.status === "Active" || project.status === "نشط" ? "default" : "outline"}>
                {project.status}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{project.title}</h1>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Calendar className="size-6 text-sky-700" />
                <div>
                  <div className="text-sm text-gray-600">{lang === "ar" ? "تاريخ البدء" : "Start Date"}</div>
                  <div className="font-semibold">
                    {new Date(project.startDate).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US")}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <DollarSign className="size-6 text-emerald-600" />
                <div>
                  <div className="text-sm text-gray-600">{lang === "ar" ? "الميزانية" : "Budget"}</div>
                  <div className="font-semibold">{project.budget}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Users className="size-6 text-amber-600" />
                <div>
                  <div className="text-sm text-gray-600">{lang === "ar" ? "المستفيدون" : "Beneficiaries"}</div>
                  <div className="font-semibold text-sm">{project.beneficiaries}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {project.description.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {project.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div> */}
    </div>
  )
}
