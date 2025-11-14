
import { getEvents } from "@/lib/content";
import { Locale } from "@/lib/i18n";
import EventCard from "./event-card";
import NotFound from "@/components/not-found";

export default async function EventsList({ lang }: { lang: Locale }) {

    const events = await getEvents(lang)
    if (events.length < 1) {
        return (
            <NotFound lang={lang} />
        )
    }
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    events.map((event) => (
                        <EventCard key={event.id} event={event} lang={lang} />
                    ))
                }
            </div>
        </div>
    );

}

