import { getAllEvents, getEventBySlug } from "@/lib/api";
import { Locale } from "@/lib/i18n";
import { Metadata } from "next";
import { notFound } from 'next/navigation';
import EventDetail from "../../events/_components/event-detail";

interface Params {
  params: Promise<{
    slug: string;
    lang: Locale;
  }>;
}

export default async function Event({ params }: Params) {
  const { lang, slug } = await params;
  const event = getEventBySlug(slug, lang);

  if (!event) {
    return notFound();
  }

  return (
    <EventDetail
      event={event}
    />
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const { lang, slug } = await props.params;
  const event = getEventBySlug(slug, lang);

  if (!event) {
    return notFound();
  }


  const title = `${event.title}`;

  return {
    title,
    description: event.shortDescription,
    openGraph: {
      title,
      description: event.shortDescription,
      images: [event.cover || "/placeholder.svg?height=600&width=1200"],
    },
  };
}

export async function generateStaticParams() {
  const events = getAllEvents("en");
  return events.map((event) => ({
    slug: event.slug,
  }));
}
