interface IntroSectionProps {
    t: {
        title: string
        subtitle: string
        description: string
        goals: string[]
        closing: string
    }
}

export function IntroSection({ t }: IntroSectionProps) {
    return (
        <div className="mb-10 p-6 bg-white shadow-md rounded-2xl">
            <div className="relative">
                <h2 className="text-2xl font-bold text-[#203441] mb-2">{t.title}</h2>
                <div className="h-1 w-30 bg-gradient-to-r from-[#476c86] to-[#203441] rounded-full mb-4"></div>
                <p className="text-gray-600 max-w-3xl">{t.subtitle}</p>
                <p className="text-gray-600 max-w-4xl mt-5">{t.description}</p>

                <ul className="mx-10 mt-2 list-disc text-gray-600">
                    {t.goals.map((goal, index) => (
                        <li key={index}>{goal}</li>
                    ))}
                </ul>

                <p className="text-gray-600 max-w-4xl mt-5">{t.closing}</p>
            </div>
        </div>
    )
}
