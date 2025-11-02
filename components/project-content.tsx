import { Project } from "@/lib/content"
import { Locale } from "@/lib/i18n"
import { BarChart3, Calendar, MapPin, Users } from "lucide-react"
import Image from "next/image" 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { tabsConent } from "./tabs-content"
import { ProjectType } from "@/types"


interface Props {
    project: Project
     tabs: {
        title: string;
        value: string;
    }[]
    lang:Locale
    page:ProjectType
}

function ProjectContent({project, tabs, lang, page}:Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden mb-8">
              <Image
                src={project.image }
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Tabs for different content sections */}

            <Tabs defaultValue="overview" className="mb-8" dir={lang === "ar" ? "rtl": "ltr"}>

            <TabsList className="grid w-full grid-cols-4 mb-6">
            {tabs.map((tab)=>(
                <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.title}
                </TabsTrigger>
            ))}

            </TabsList>
            {
                tabs.map((tab)=>(

            <TabsContent value={tab.value} key={tab.value}>
                {tabsConent[tab.value  ](page,project)}

            </TabsContent>
                ))
            }
                </Tabs>






            

            
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Project Details Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6 sticky top-24">
              <h3 className="text-xl font-bold text-[#203441] mb-4">تفاصيل المشروع</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-[#476c86] mt-0.5 ml-3" />
                  <div>
                    <p className="text-gray-500 text-sm">الموقع</p>
                    <p className="font-medium">{project.location}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Users className="w-5 h-5 text-[#476c86] mt-0.5 ml-3" />
                  <div>
                    <p className="text-gray-500 text-sm">المستفيدون</p>
                    <p className="font-medium">{project.beneficiaries.toLocaleString()} مستفيد</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-[#476c86] mt-0.5 ml-3" />
                  <div>
                    <p className="text-gray-500 text-sm">تاريخ البدء</p>
                    {/* <p className="font-medium">{formatDate(project.startDate)}</p> */}
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-[#476c86] mt-0.5 ml-3" />
                  <div>
                    <p className="text-gray-500 text-sm">تاريخ الانتهاء </p>
                    {/* {project.status === 'in-progress' ? (
                      <p>قيد التنفيذ</p>
                    ) : (
                      <p className="font-medium">{formatDate(project.endDate)}</p>
                    )} */}
                  </div>
                </div>
                {project.budget !== 0 && (
                  <div className="flex items-center">
                    <BarChart3 className="w-5 h-5 text-[#476c86] mt-0.5 ml-3" />
                    <div>
                      <p className="text-gray-500 text-sm">الميزانية</p>
                      <p className="font-medium">${project.budget.toLocaleString()}</p>
                    </div>
                  </div>
                )}

                

                {/* Project Proposal Button */}
                {/* <div className="pt-4 border-t border-gray-100">
                  <Button
                    variant="outline"
                    className="w-full border-[#476c86] text-[#476c86] hover:bg-[#476c86]/10 group"
                  >
                    <FileText className="ml-2 h-4 w-4" />
                    <span>عرض مقترح المشروع</span>
                  </Button>
                </div> */}

                {/* Download Proposal Button */}
                {/* <div>
                  <Button
                    variant="outline"
                    className="w-full border-[#476c86] text-[#476c86] hover:bg-[#476c86]/10 group"
                  >
                    <Download className="ml-2 h-4 w-4" />
                    <span>تحميل ملف المشروع (PDF)</span>
                  </Button>
                </div> */}

                {/* todo link the donation with ashin */}

                {/* <div className="pt-4">
                  <Button className="w-full bg-[#203441] hover:bg-[#39576f] group">
                    <span>دعم المشروع</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProjectContent