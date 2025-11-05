interface StatCardProps {
    number: string
    title: string
    description: string
    color: string
}

export function StatCard({ number, title, description, color }: StatCardProps) {
    return (
        <div className="relative overflow-hidden rounded-xl p-6 text-white">
            <div className={`absolute inset-0 ${color}`}></div>
            <div className="relative z-10">
                <p className="text-4xl font-bold mb-2">{number}</p>
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="text-white/80">{description}</p>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/3 translate-x-1/3"></div>
        </div>
    )
}