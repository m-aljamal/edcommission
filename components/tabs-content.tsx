import { TabContentRenderer } from "@/types"
import { Card, CardContent } from "./ui/card"
import { Book, Dot } from "lucide-react"
import ImageCarousel from "./image-carousel"
import CourseTabContent from "./course-tab-content"
import StatisticsTabContent from "./statistics-tab-content"
import { translations } from "@/lib/i18n"

const overview: TabContentRenderer = (page, project, lang) => {
    const t = translations[lang]
    if (page === "formal-education") {
        return (
            <>
                <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold text-main-blue mb-4">{t.tabs.projectOverView}</h2>
                    <div className="prose prose-lg max-w-none text-gray-700">
                        {project.fullDescription.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-4 text-justify">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-main-blue mb-4">{t.tabs.projectGols}</h2>
                    <ul className="space-y-3">
                        {project.objectives.map((objective, index) => (
                            <li key={index} className="flex items-start">
                                <div className="shrink-0 w-6 h-6 rounded-full bg-secound-blue/20 flex items-center justify-center mt-0.5 mx-3">
                                    <span className="text-secound-blue font-medium text-sm">{index + 1}</span>
                                </div>
                                <span className="text-gray-700">{objective}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </>

        )
    }
    return (
        <>
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-main-blue mb-4">{t.tabs.projectOverView}</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                    {project.fullDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-[#203441] mb-4">{t.tabs.importance}</h2>
                <div className="prose prose-lg max-w-none text-gray-700">

                    {project.importanceList?.map((text, index) => (
                        <p key={index} className="mb-4">
                            {text}
                        </p>
                    ))}
                </div>

                {/* Impact Cards */}
                <div>
                    <h2 className="text-2xl font-bold text-[#203441] mt-8  "> {t.tabs.projectComponents} </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
                        {project.components.map((component) => (
                            <Card className="border-0 shadow-sm overflow-hidden" key={component.title}>
                                <div className="bg-gradient-to-br from-[#203441] to-[#39576f] p-1"></div>
                                <CardContent className="p-4">
                                    <div className="flex items-center  gap-1 mb-2">
                                        <Book className="size-5 text-[#476c86]" />
                                        <h3 className="text-lg font-bold text-[#203441]">
                                            {component.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm space-x-2">{component.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-[#203441] mb-4"> {t.tabs.projectGols}  </h2>
                <ul className="space-y-3">
                    {project.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                            <div className="shrink-0 w-6 h-6 rounded-full bg-[#476c86]/20 flex items-center justify-center mt-0.5 mx-3">
                                <span className="text-[#476c86] font-medium text-sm">{index + 1}</span>
                            </div>
                            <span className="text-gray-700">{objective}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const importance: TabContentRenderer = (page, project, lang) => {
    const t = translations[lang]
    return (
        <>
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-main-blue mb-4">     {t.tabs.whyThisProject}</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                    <>
                        {project.importance?.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
                        {project.importanceList.map((item, index) => (
                            <section className="my-2 flex items-start" key={index}>
                                <Dot className="size-7" />
                                <p className="text-gray-700">{item}</p>
                            </section>
                        ))}
                    </>
                </div>
            </div>


        </>

    )

}
const courses: TabContentRenderer = (page, project, lang) => {
    return (

        <CourseTabContent
            project={project}
            lang={lang}
        />

    )
}
const statisticsia: TabContentRenderer = (page, project, lang) => {
    return (

        <StatisticsTabContent
            project={project}
            lang={lang}
        />

    )
}

const components: TabContentRenderer = (page, project) => {


    return (
        <section className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <div className="space-y-6">
                {project.components.map((component) => (
                    <div className="flex items-c gap-4" key={component.title}>
                        <div>
                            <h3 className="text-xl font-bold text-main-blue mb-2  mt-0">
                                {component.title}
                            </h3>
                            <p className="text-gray-700">{component.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

const media: TabContentRenderer = (page, project, lang) => {
    const t = translations[lang]
    
        return (
            <>
                {/* YouTube Video */}
                {/* <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold text-[#203441] mb-4">فيديو المشروع</h2>
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                </div> */}

                {/* Image Carousel */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-main-blue mb-4">{t.tabs.images}</h2>
                    <ImageCarousel
                        gallery={project.gallery}
                        title={project.title}
                    />
                </div>
            </>

        )
   
     
    
}


export const tabsContent: Record<string, TabContentRenderer> = {
    overview,
    importance,
    media,
    components,
    courses,
    statisticsia
} as const

export type AvailableTabKey = keyof typeof tabsContent
