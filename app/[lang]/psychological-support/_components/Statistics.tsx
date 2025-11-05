import { StatCard } from "./stat-card"

interface StatisticsSectionProps {
    t: {
        title: string
        items: Array<{
            number: string
            title: string
            description: string
        }>
    }
}

export function StatisticsSection({ t }: StatisticsSectionProps) {
    const colors = [
        'bg-gradient-to-br from-blue-500 to-indigo-600',
        'bg-gradient-to-br from-emerald-500 to-teal-600',
        'bg-gradient-to-br from-amber-500 to-orange-600',
    ]

    return (
        <div className="mt-20 bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#203441] mb-8 text-center">{t.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.items.map((item, index) => (
                    <StatCard key={index} {...item} color={colors[index]} />
                ))}
            </div>
        </div>
    )
}