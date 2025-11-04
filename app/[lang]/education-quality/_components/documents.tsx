import { Locale } from "@/lib/i18n"
import { qualityTranslations } from "./text"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FileDown, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

  
  export function DocumentsSection({lang}:{lang:Locale}) {
    const t = qualityTranslations[lang]

    const documents = [{ title: 't', description: 'fe', type: 't', url: '' }]
    
    return (
      <div id="documents" className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">
              {t.documents.title}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t.documents.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <DocumentCard key={index} {...doc} downloadButton={t.documents.downloadButton} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button className="bg-[#39576f] hover:bg-[#203441]" size="lg">
              {t.documents.viewAllButton}
              <FileText className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    )
  }



  interface DocumentCardProps {
    title: string
    description: string
    type: string
    url: string
    downloadButton: string
  }
  
  export function DocumentCard({ title, description, type, url, downloadButton }: DocumentCardProps) {
    return (
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-bold text-[#203441]">{title}</CardTitle>
          <CardDescription className="text-gray-600 line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Badge variant="outline" className="bg-[#39576f]/5">
              {type}
            </Badge>
            <Separator orientation="vertical" className="h-4" />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <a href={url || ''} download>
              <FileDown className="ml-2 h-4 w-4" />
              {downloadButton}
            </a>
          </Button>
        </CardFooter>
      </Card>
    )
  }