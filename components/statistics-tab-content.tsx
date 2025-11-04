"use client"

import { Project } from "@/types"
import { Award, PieChart, TrendingUp, Users } from "lucide-react"
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Pie,
    PieChart as RechartsPieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import { Card, CardContent } from "./ui/card"
import { Locale, translations } from "@/lib/i18n"

const COLORS = ['#203441', '#39576f', '#476c86', '#5d8ba3', '#7ba7bd', '#99c2d7']
const GENDER_COLORS = ['#e83e8c', '#476c86']

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#203441]/90 text-white p-3 rounded-lg shadow-lg border border-white/10">
                <p className="font-bold">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <p key={index}>{`${entry.name}: ${entry.value}`}</p>
                ))}
            </div>
        )
    }
    return null
}

export default function StatisticsTabContent({ project, lang }: { project: Project, lang: Locale }) {
    const t = translations[lang]
    return (

        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-main-blue mb-4">{t.tabs.centerStatistics}</h2>

            {/* Participants Growth Chart */}
            <div className="mb-24">
                <h3 className="text-lg font-semibold text-main-blue mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 mx-2 text-[#476c86]" />
                    {t.tabs.growth}
                </h3>
                <div className="h-80 w-full" dir="ltr">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={project.statistics.participantsGrowth}
                            margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                        >
                            <defs>
                                <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#476c86" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#476c86" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                            <Area
                                type="monotone"
                                dataKey="count"
                                name={t.tabs.beneficiaries}
                                stroke="#476c86"
                                fillOpacity={1}
                                fill="url(#colorCount)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Course Distribution Pie Chart */}
            <div className="mb-24">
                <h3 className="text-lg font-semibold text-main-blue mb-3 flex items-center">
                    <PieChart className="w-5 h-5 mx-2 text-[#476c86]" />
                    {t.tabs.distribution}
                </h3>
                <div className="h-80 w-full" dir="ltr">
                    <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                            <Pie
                                data={project.statistics.courseDistribution}
                                cx="50%"
                                cy="50%"
                                labelLine={true}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                                nameKey="name"
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            >
                                {project.statistics.courseDistribution.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                        </RechartsPieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Demographics Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                {/* Age Distribution */}
                <div>
                    <h3 className="text-lg font-semibold text-main-blue mb-3 flex items-center">
                        <Users className="w-5 h-5 mx-2 text-[#476c86]" />
                        {t.tabs.ageGroup}
                    </h3>
                    <div className="h-64 w-full" dir="ltr">
                        <ResponsiveContainer width="100%" height="100%">
                            <RechartsPieChart>
                                <Pie
                                    data={project.statistics.ageDistribution}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    nameKey="name"
                                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                                >
                                    {project.statistics.ageDistribution.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                            </RechartsPieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Gender Distribution */}
                <div>
                    <h3 className="text-lg font-semibold text-main-blue mb-3 flex items-center">
                        <Users className="w-5 h-5 mx-2 text-[#476c86]" />
                        {t.tabs.genderDistribution}
                    </h3>
                    <div className="h-64 w-full" dir="ltr">
                        <ResponsiveContainer width="100%" height="100%">
                            <RechartsPieChart>
                                <Pie
                                    data={project.statistics.genderDistribution}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    nameKey="name"
                                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                                >
                                    {project.statistics.genderDistribution.map(
                                        (entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={GENDER_COLORS[index % GENDER_COLORS.length]}
                                            />
                                        ),
                                    )}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                            </RechartsPieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Employment Impact */}
            <div className="mb-24">
                <h3 className="text-lg font-semibold text-main-blue mb-3 flex items-center">
                    <Award className="w-5 h-5 mx-2 text-[#476c86]" />
                    {t.tabs.impact}
                </h3>
                <div className="h-80 w-full" dir="ltr">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={project.statistics.employmentImpact}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                            <Bar dataKey="percentage" name={t.tabs.percentage} fill="#476c86" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Impact Metrics */}
            <div>
                <h3 className="text-lg font-semibold text-main-blue mb-4">{t.tabs.impactIndicators}</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                        <CardContent className="p-4 text-center">
                            <p className="text-blue-600 text-3xl font-bold">
                                {project.statistics.impactMetrics.skillImprovement}%
                            </p>
                            <p className="text-blue-800 text-sm mt-1">{t.tabs.skillsImprovement}</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                        <CardContent className="p-4 text-center">
                            <p className="text-green-600 text-3xl font-bold">
                                {project.statistics.impactMetrics.communityEngagement}%
                            </p>
                            <p className="text-green-800 text-sm mt-1">{t.tabs.communityEngagement}</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
                        <CardContent className="p-4 text-center">
                            <p className="text-amber-600 text-3xl font-bold">
                                {project.statistics.impactMetrics.employmentRate}%
                            </p>
                            <p className="text-amber-800 text-sm mt-1">{t.tabs.employmentRate}</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                        <CardContent className="p-4 text-center">
                            <p className="text-purple-600 text-3xl font-bold">
                                {project.statistics.impactMetrics.continuedEducation}%
                            </p>
                            <p className="text-purple-800 text-sm mt-1">{t.tabs.continuedEducation}</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
                        <CardContent className="p-4 text-center">
                            <p className="text-pink-600 text-3xl font-bold">
                                {project.statistics.impactMetrics.psychologicalWellbeing}%
                            </p>
                            <p className="text-pink-800 text-sm mt-1">{t.tabs.psychologicalWellbeing}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>

    )
}
