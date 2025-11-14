import { Locale } from "@/lib/i18n";
import EventsHeader from "./_components/events-header";
import EventsList from "./_components/events-list";


export default async function EventsPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    return (
        <main className="pb-16">
            <EventsHeader lang={lang} />
            <EventsList lang={lang} />
        </main>
    );
}
