
import { notFound } from 'next/navigation'
import EventsList from '../_components/events-list'
import { getEvent } from '@/lib/content'
import { Locale } from '@/lib/i18n'
import EventDetail from '../_components/event-detail'

type EventPageParams = {
    params: Promise<{
        id: string,
        lang: Locale
    }>
}

export async function generateMetadata({ params }: EventPageParams) {
    const { id, lang } = await params
    const event = await getEvent(lang, id)

    if (!event) {
        return {
            title: 'الفعالية غير موجودة | هيئة تطوير التعليم',
        }
    }

    return {
        title: `${event.title} | هيئة تطوير التعليم`,
        description: event.shortDescription,
        openGraph: {
            title: 'EDC',
            description: 'EDC Website',
            images: [
                {
                    url: 'https://edcommission.vercel.app/logo.png',
                    width: 1200,
                    height: 630,
                },
            ],
            url: 'https://edcommission.vercel.app',
            type: 'website',
        },
    }
}

export default async function EventPage({ params }: EventPageParams) {
    const { id, lang } = await params
    const event = await getEvent(lang, id)


    if (!event) {
        notFound()
    }

    return <EventDetail event={event} />
}
