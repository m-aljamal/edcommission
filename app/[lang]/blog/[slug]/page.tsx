// import markdownToHtml from "@/components/markdownToHtml"
// import { PostBody } from "@/components/post-body"
// import { getAllEvents, getEventBySlug } from "@/lib/api"
// import { Locale } from "@/lib/i18n"
// import { Metadata } from "next"
// import { notFound } from "next/navigation"

// interface Params  {
//   params: Promise<{
//     slug:string 
//     lang: Locale
//   }>
// }




// export default async function Event({params}:Params){
// const {lang,slug}  = await params
//   const event =  getEventBySlug(slug,lang)
//   if(!event){
//     return notFound()
//   }

//     const content = await markdownToHtml(event.content || "");

//   return(
//     <article>
//         <h2>{event.time}</h2>
//         <h2>{event.title}</h2>
//         <h2>{event.shortDescription}</h2>
//         <PostBody
//         content={content}
//         />
//     </article>
//   )
// }




// export async function generateMetadata(props: Params): Promise<Metadata> {
//   const {lang,slug} = await props.params;
//   const event = getEventBySlug(slug, lang);

//   if (!event) {
//     return notFound();
//   }

//   const title = `${event.title} | EDC Post`;

//   return {
//     title,
//     openGraph: {
//       title,
//       images: [event.ogImage?.url],
//     },
//   };
// }

// export async function generateStaticParams() {

//   const events = getAllEvents("en");
//   return events.map((event) => ({
//     slug: event.slug,
//   }));
// }





import markdownToHtml from "@/components/markdownToHtml";
import { PostBody } from "@/components/post-body";
import { getAllEvents, getEventBySlug } from "@/lib/api";
import { Locale } from "@/lib/i18n";
import { Metadata } from "next";
import { notFound } from 'next/navigation';
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

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

  const content = await markdownToHtml(event.content || "");
  const isArabic = lang === "ar";

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      lang === "ar" ? "ar-SA" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Back Navigation */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4">
          <Link
            href={`/${lang}/blog`}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isArabic ? "العودة للمقالات" : "Back to Articles"}
          </Link>
        </div>
      </div>

      {/* Header Section */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Meta Information */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <time>{formatDate(event.date)}</time>
            </div>
            {event.time && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{event.time}</span>
              </div>
            )}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight text-balance">
          {event.title}
        </h1>

        {/* Short Description */}
        {event.shortDescription && (
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-12 pb-12 border-b border-slate-200 dark:border-slate-800">
            {event.shortDescription}
          </p>
        )}

        {/* Featured Image */}
        {event.cover && (
          <div className="mb-16 rounded-xl overflow-hidden shadow-xl">
            <img
              src={event.cover || "/placeholder.svg"}
              alt={event.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
          <PostBody content={content} />
        </div>

        {/* Event Details Card */}
        {event.time && (
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6">
              {isArabic ? "تفاصيل الفعالية" : "Event Details"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                  {isArabic ? "التاريخ والوقت" : "Date & Time"}
                </h3>
                <p className="text-lg text-slate-900 dark:text-white font-medium">
                  {formatDate(event.date)}
                </p>
                {event.time && (
                  <p className="text-slate-600 dark:text-slate-400">
                    {event.time}
                  </p>
                )}
              </div>
              {event.location && (
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                    {isArabic ? "المكان" : "Location"}
                  </h3>
                  <p className="text-lg text-slate-900 dark:text-white font-medium">
                    {event.location}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </article>

      {/* Related Articles Section */}
      <section className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
              {isArabic ? "مقالات أخرى" : "More Articles"}
            </h2>
            <Link
              href={`/${lang}/blog`}
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
            >
              {isArabic ? "اعرض جميع المقالات" : "View All Articles"}
            </Link>
          </div>
        </div>
      </section>
    </main>
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
