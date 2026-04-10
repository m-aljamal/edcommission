import Link from 'next/link'
import {
    Award,
    BookOpen,
    ClipboardCheck,
    FileText,
    GraduationCap,
    LineChart,
    School,
    Shield,
    Users,
    UserCheck,
    LucideIcon,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Locale } from '@/lib/i18n'
import { qualityTranslations } from './text'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface CheckListItemProps {
    text: string
}

export function CheckListItem({ text }: CheckListItemProps) {
    return (
        <div className="flex items-start gap-3">
            <div className="bg-[#39576f]/10 p-2 rounded-full mt-1">
                <CheckCircle className="h-5 w-5 text-[#39576f]" />
            </div>
            <div>
                <p className="text-gray-700">{text}</p>
            </div>
        </div>
    )
}

interface ProgramImageProps {
    imageUrl: string
    alt: string
    badge: string
    caption: string
}

export function ProgramImage({ imageUrl, alt, badge, caption }: ProgramImageProps) {
    return (
        <div className="relative h-52 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image src={imageUrl} alt={alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                {badge && (
                    <Badge className="bg-white/20 text-white backdrop-blur-sm mb-2">{badge}</Badge>
                )}
                {caption && (
                    <h4 className="text-white text-base md:text-xl font-bold">{caption}</h4>
                )}
            </div>
        </div>
    )
}

export function ProgramsSection({ lang }: { lang: Locale }) {
    const t = qualityTranslations[lang]
    return (
        <div id="programs" className="bg-gray-50 py-16 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">
                        {t.programs.title}
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">{t.programs.description}</p>
                </div>

                <Tabs defaultValue="training" className="w-full" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                    {/* 
                        Mobile fix: 
                        - Use a scrollable flex row so all 5 tabs stay on one line
                        - Each trigger shows icon + short label stacked vertically
                        - flex-1 makes them share available width evenly
                        - overflow-x-auto allows horizontal scroll if screen is very narrow
                    */}
                    <TabsList className="flex w-full overflow-x-auto h-auto p-1 gap-1 mb-8 bg-gray-100 rounded-lg">
                        <TabsTrigger
                            value="training"
                            className="flex flex-col items-center gap-1 flex-1 min-w-0 py-2 px-1
                                text-[11px] leading-tight whitespace-nowrap
                                data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                        >
                            <GraduationCap className="h-4 w-4 shrink-0" />
                            <span className="truncate w-full text-center">{t.programs.tabs.training}</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="supervision"
                            className="flex flex-col items-center gap-1 flex-1 min-w-0 py-2 px-1
                                text-[11px] leading-tight whitespace-nowrap
                                data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                        >
                            <ClipboardCheck className="h-4 w-4 shrink-0" />
                            <span className="truncate w-full text-center">{t.programs.tabs.supervision}</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="testing"
                            className="flex flex-col items-center gap-1 flex-1 min-w-0 py-2 px-1
                                text-[11px] leading-tight whitespace-nowrap
                                data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                        >
                            <LineChart className="h-4 w-4 shrink-0" />
                            <span className="truncate w-full text-center">{t.programs.tabs.testing}</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="competitions"
                            className="flex flex-col items-center gap-1 flex-1 min-w-0 py-2 px-1
                                text-[11px] leading-tight whitespace-nowrap
                                data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                        >
                            <Award className="h-4 w-4 shrink-0" />
                            <span className="truncate w-full text-center">{t.programs.tabs.competitions}</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="environment"
                            className="flex flex-col items-center gap-1 flex-1 min-w-0 py-2 px-1
                                text-[11px] leading-tight whitespace-nowrap
                                data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                        >
                            <School className="h-4 w-4 shrink-0" />
                            <span className="truncate w-full text-center">{t.programs.tabs.environment}</span>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="training" className="space-y-6">
                        <TrainingTab lang={lang} />
                    </TabsContent>

                    <TabsContent value="supervision" className="space-y-6">
                        <SupervisionTab lang={lang} />
                    </TabsContent>

                    <TabsContent value="testing" className="space-y-6">
                        <TestingTab lang={lang} />
                    </TabsContent>

                    <TabsContent value="competitions" className="space-y-6">
                        <CompetitionsTab lang={lang} />
                    </TabsContent>

                    <TabsContent value="environment" className="space-y-6">
                        <EnvironmentTab lang={lang} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

function TrainingTab({ lang }: { lang: Locale }) {
    const t = qualityTranslations[lang]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
                <h3 className="text-2xl font-bold text-[#203441] mb-4">{t.training.title}</h3>
                <p className="text-gray-700 mb-6">{t.training.description}</p>
                <div className="space-y-4">
                    {t.training.points.map((point, index) => (
                        <CheckListItem key={index} text={point} />
                    ))}
                </div>
            </div>
            <ProgramImage
                imageUrl="https://res.cloudinary.com/dokawmydv/image/upload/v1762079057/WhatsApp_Image_2025-05-07_at_11.06.58_AM_dr9e9n.jpg"
                alt={t.training.title}
                badge={t.training.badge}
                caption={t.training.imageCaption}
            />
        </div>
    )
}

function SupervisionTab({ lang }: { lang: Locale }) {
    const t = qualityTranslations[lang]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Image comes second on mobile (order-2), first on desktop (md:order-1) */}
            <div className="order-2 md:order-1">
                <ProgramImage
                    imageUrl="https://res.cloudinary.com/dokawmydv/image/upload/v1762079030/d16f98b9-0be2-4476-9889-19744be21e3a_fvlq4g.jpg"
                    alt={t.supervision.title}
                    badge={t.supervision.badge}
                    caption={t.supervision.imageCaption}
                />
            </div>
            <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-[#203441] mb-4">{t.supervision.title}</h3>
                <p className="text-gray-700 mb-6">{t.supervision.description}</p>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-bold text-[#203441] mb-2 flex items-center gap-2">
                            <UserCheck className="h-5 w-5 text-[#39576f] shrink-0" />
                            {t.supervision.team.title}
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                            {t.supervision.team.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <div className="text-[#39576f] mt-1">•</div>
                                    <p>{point}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-bold text-[#203441] mb-2 flex items-center gap-2">
                            <ClipboardCheck className="h-5 w-5 text-[#39576f] shrink-0" />
                            {t.supervision.mechanisms.title}
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                            {t.supervision.mechanisms.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <div className="text-[#39576f] mt-1">•</div>
                                    <p>{point}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function TestingTab({ lang }: { lang: Locale }) {
    const t = qualityTranslations[lang]
    return (
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-[#203441] mb-4">{t.testing.title}</h3>
            <p className="text-gray-700 mb-6">{t.testing.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4">
                    <h4 className="font-bold text-[#203441] mb-2 flex items-center gap-2">
                        <LineChart className="h-5 w-5 text-[#39576f] shrink-0" />
                        {t.testing.goalsTitle}
                    </h4>
                    <div className="space-y-3">
                        {t.testing.goals.map((goal, index) => (
                            <CheckListItem key={index} text={goal} />
                        ))}
                    </div>
                </div>
                <ProgramImage
                    imageUrl="https://res.cloudinary.com/dokawmydv/image/upload/v1762079057/WhatsApp_Image_2025-05-07_at_11.07.51_AM_qfnznc.jpg"
                    alt={t.testing.title}
                    badge=""
                    caption=""
                />
            </div>
        </div>
    )
}

interface CompetitionCardProps {
    icon: LucideIcon
    title: string
    description: string
}

export function CompetitionCard({ icon: Icon, title, description }: CompetitionCardProps) {
    return (
        <Card className="bg-[#39576f]/5 border-0">
            <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#39576f]/20 p-2 rounded-full shrink-0">
                        <Icon className="h-5 w-5 text-[#39576f]" />
                    </div>
                    <h4 className="font-bold text-[#203441]">{title}</h4>
                </div>
                <p className="text-gray-700 text-sm">{description}</p>
            </CardContent>
        </Card>
    )
}

function CompetitionsTab({ lang }: { lang: Locale }) {
    const competitionIcons = [BookOpen, FileText, Award, Users]
    const t = qualityTranslations[lang]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
                <h3 className="text-2xl font-bold text-[#203441] mb-4">{t.competitions.title}</h3>
                <p className="text-gray-700 mb-6">{t.competitions.description}</p>
                {/* 2 columns on all screen sizes — cards are small enough */}
                <div className="grid grid-cols-2 gap-3">
                    {t.competitions.types.map((type, index) => (
                        <CompetitionCard
                            key={index}
                            icon={competitionIcons[index]}
                            title={type.title}
                            description={type.description}
                        />
                    ))}
                </div>
            </div>
            <ProgramImage
                imageUrl="https://res.cloudinary.com/dokawmydv/image/upload/v1762079058/WhatsApp_Image_2025-05-07_at_11.08.16_AM_twfbi5.jpg"
                alt={t.competitions.title}
                badge={t.competitions.badge}
                caption={t.competitions.imageCaption}
            />
        </div>
    )
}

function EnvironmentTab({ lang }: { lang: Locale }) {
    const t = qualityTranslations[lang]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Image second on mobile, first on desktop */}
            <div className="order-2 md:order-1">
                <ProgramImage
                    imageUrl="https://res.cloudinary.com/dokawmydv/image/upload/v1762079058/WhatsApp_Image_2025-04-23_at_2.51.42_PM_gsuzr7.jpg"
                    alt={t.environment.title}
                    badge={t.environment.badge}
                    caption={t.environment.imageCaption}
                />
            </div>
            <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-[#203441] mb-4">{t.environment.title}</h3>
                <p className="text-gray-700 mb-6">{t.environment.description}</p>
                <div className="space-y-4">
                    {t.environment.points.map((point, index) => (
                        <CheckListItem key={index} text={point} />
                    ))}
                </div>
                <div className="mt-6 p-4 bg-[#39576f]/5 rounded-lg">
                    <h4 className="font-bold text-[#203441] mb-3 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-[#39576f] shrink-0" />
                        {t.environment.standardsTitle}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                        {t.environment.standards.map((standard, index) => (
                            <div key={index} className="bg-white p-3 rounded-lg text-center">
                                <p className="text-gray-700 text-sm">{standard}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
