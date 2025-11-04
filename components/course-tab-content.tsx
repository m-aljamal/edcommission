"use client"

import { Project } from "@/types"
import { Bookmark, Calendar, Clock, FileText, Star, Target, User, Users } from "lucide-react"
import { useState } from "react"
import { Badge } from "./ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Locale, translations } from "@/lib/i18n"

export default function CourseTabContent({ project, lang }: { project: Project, lang: Locale }) {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
    const t = translations[lang]
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-main-blue mb-4">
                {t.tabs.coursesAndProgramms}
            </h2>
            {/* Course Categories */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {project.courses?.map((course) => {

                    return (
                        <button
                            key={course.id}
                            onClick={() =>
                                setSelectedCourse(course.id === selectedCourse ? null : course.id)
                            }
                            className={`flex flex-col items-center p-4 rounded-xl transition-all ${selectedCourse === course.id
                                ? 'bg-main-blue text-white shadow-md'
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            <course.icon
                                className={`h-8 w-8 mb-2 ${selectedCourse === course.id ? 'text-white' : 'text-secound-blue'}`}
                            />
                            <span className="text-sm font-medium text-center">{course.title}</span>
                        </button>
                    )
                })}
            </div>

            {/* Course Details */}
            {selectedCourse ? (
                (() => {
                    const course = project.courses.find((c) => c.id === selectedCourse)
                    if (!course) return null


                    return (
                        <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-main-blue flex items-center justify-center shrink-0">
                                    <course.icon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-main-blue mb-2">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4">{course.description}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <h4 className="font-semibold text-first-blue mb-2 flex items-center">
                                                <FileText className="w-4 h-4 mx-2" />
                                                {t.tabs.courseDetails}
                                            </h4>
                                            <p className="text-gray-600 text-sm">{course.details}</p>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 text-secound-blue mx-2" />
                                                <div>
                                                    <span className="text-sm font-medium text-main-blue">
                                                        {t.tabs.duration}
                                                    </span>
                                                    <span className="text-sm text-gray-600 mr-2">
                                                        {course.duration}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 text-secound-blue mx-2" />
                                                <div>
                                                    <span className="text-sm font-medium text-main-blue">
                                                        {t.tabs.sessions}
                                                    </span>
                                                    <span className="text-sm text-gray-600 mr-2">
                                                        {course.sessions}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <Users className="w-4 h-4 text-secound-blue mx-2" />
                                                <div>
                                                    <span className="text-sm font-medium text-main-blue">
                                                        {t.tabs.beneficiaries}
                                                    </span>
                                                    <span className="text-sm text-gray-600 mr-2">
                                                        {course.beneficiaries} {t.tabs.beneficiary}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-first-blue mb-2 flex items-center">
                                            <User className="w-4 h-4 mx-2" />
                                            {t.tabs.targetGroups}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {course.ageGroups.map((group, index) => (
                                                <Badge key={index} variant="outline" className="bg-gray-100">
                                                    {group}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-first-blue mb-2 flex items-center">
                                            <Target className="w-4 h-4 mx-2" />
                                            {t.tabs.courseObjectives}
                                        </h4>
                                        <ul className="space-y-1">
                                            {course.goals.map((goal, index) => (
                                                <li key={index} className="flex items-start">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-secound-blue mt-2 mx-2"></div>
                                                    <span className="text-gray-600 text-sm">{goal}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-first-blue mb-2 flex items-center">
                                            <Star className="w-4 h-4 mx-2" />
                                            {t.tabs.outcomes}
                                        </h4>
                                        <p className="text-gray-600 text-sm">{course.outcomes}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })()
            ) : (
                <div className="text-center py-8 bg-gray-50 rounded-xl">
                    <Bookmark className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                    <h3 className="text-lg font-medium text-gray-500 mb-2">
                        {t.tabs.selectCourseToDisplayDetails}
                    </h3>
                    <p className="text-gray-400 text-sm">
                        {t.tabs.click}
                    </p>
                </div>
            )}

            {/* All Courses Accordion */}
            <div className="mt-8">
                <h3 className="text-xl font-bold text-main-blue mb-4">
                    {t.tabs.events}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                    {project?.communityEvents?.map((course) => {
                        return (
                            <AccordionItem key={course.id} value={course.id}>
                                <AccordionTrigger className="hover:no-underline">
                                    <div className="flex items-center">
                                        <course.icon className="w-5 h-5 text-secound-blue mx-2" />
                                        <span>{course.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="p-2">
                                        <p className="text-gray-700 mb-3">{course.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <Badge
                                                variant="outline"
                                                className="bg-main-blue/5 text-main-blue"
                                            >
                                                <Clock className="w-3 h-3 ml-1" />
                                                {course.sessions}
                                            </Badge>
                                            <Badge
                                                variant="outline"
                                                className="bg-main-blue/5 text-main-blue"
                                            >
                                                <Users className="w-3 h-3 ml-1" />
                                                {course.beneficiaries} {t.tabs.beneficiary}
                                            </Badge>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </div>
        </div>
    )
}
