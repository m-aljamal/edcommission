import { type Locale, getTranslations } from "@/lib/i18n"
import { getProjects } from "@/lib/content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, DollarSign, Users } from "lucide-react"
import Image from "next/image"

export default async function ProjectsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  const projects = await getProjects(lang)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t.nav.projects}</h1>
          <p className="text-lg text-gray-600 mb-12">
            {lang === "ar"
              ? "تعرف على مشاريعنا ومبادراتنا التعليمية المبتكرة"
              : "Explore our innovative educational projects and initiatives"}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/${lang}/projects/${project.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      <Badge variant={project.status === "Active" || project.status === "نشط" ? "default" : "outline"}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3 mb-4">{project.excerpt}</CardDescription>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4" />
                        <span>{new Date(project.startDate).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="size-4" />
                        <span>{project.budget}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="size-4" />
                        <span className="line-clamp-1">{project.beneficiaries}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {lang === "ar" ? "لا توجد مشاريع متاحة حالياً" : "No projects available at the moment"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
