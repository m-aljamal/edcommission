import { Project } from "@/lib/content"
import { ProjectType } from "@/types"

 const overview = (page: ProjectType, project:Project) =>{
    if (page === "formal-education") {
        return (
            <>
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-[#203441] mb-4">نبذة عن المشروع</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-[#203441] mb-4">أهداف المشروع</h2>
              <ul className="space-y-3">
                {project.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#476c86]/20 flex items-center justify-center mt-0.5 ml-3">
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
}

export const tabsConent = {
    overview
}