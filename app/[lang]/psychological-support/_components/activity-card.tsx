import { CircleAlert, Target } from 'lucide-react'
import Image from 'next/image'


interface ActivityCardProps {
    activity: {
        id: string
        title: string
        importance: string
        goal: string
    }
    projectImage: string
    projectTitle: string
    importanceLabel: string
    goalLabel: string
}

export function ActivityCard({
    activity,
    projectImage,
    projectTitle,
    importanceLabel,
    goalLabel,
}: ActivityCardProps) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1 group">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={projectImage}
                    alt={projectTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#476c86] to-[#203441]"></div>
            </div>

            <div className="p-5 text-right">
                <h3 className="font-bold text-[#203441] mb-2 group-hover:text-[#476c86] transition-colors">
                    {activity.title}
                </h3>
                <div className="text-sm space-y-4 mt-5">
                    <div className="flex gap-2 items-start">
                        <CircleAlert className="size-4 text-[#203441] shrink-0" />
                        <p>
                            <span className="ml-2 font-semibold">{importanceLabel}</span>
                            {activity.importance}
                        </p>
                    </div>
                    <div className="flex gap-2 items-start">
                        <Target className="size-4 text-[#203441] shrink-0" />
                        <p>
                            <span className="ml-2 font-semibold">{goalLabel}</span>
                            {activity.goal}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}