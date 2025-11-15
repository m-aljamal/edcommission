import markdownToHtml from "@/components/markdownToHtml";
import { PostBody } from "@/components/post-body";
import { getAllEvents, getEventBySlug } from "@/lib/api";
import { Locale } from "@/lib/i18n";
import { Metadata } from "next";
import { notFound } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, MapPin, Share2, Heart, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
    // <div className="pb-16">
    //   <div className="relative">
    //     {/* Main Image */}
    //     <div className="relative min-h-[600px] md:h-[450px] lg:h-[550px]">
    //       {event.cover && (
    //         <Image
    //           src={event.cover || '/placeholder.svg'}
    //           alt={event.title}
    //           fill
    //           className="object-cover"
    //           priority
    //         />
    //       )}
    //       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>

    //       {/* Decorative elements */}
    //       <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#39576f]/20 blur-3xl"></div>
    //       <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#203441]/20 blur-3xl"></div>
    //     </div>

    //     {/* Back Button */}
    //     <div className="absolute top-6 right-6 z-10">
    //       <Link href={`/${lang}/blog`}>
    //         <Button
    //           variant="outline"
    //           className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 rounded-full group"
    //         >
    //           {isArabic ? (
    //             <>
    //               <span>{isArabic ? "العودة للمقالات" : "Back to Articles"}</span>
    //               <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
    //             </>
    //           ) : (
    //             <>
    //               <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
    //               <span>{isArabic ? "العودة للمقالات" : "Back to Articles"}</span>
    //             </>
    //           )}
    //         </Button>
    //       </Link>
    //     </div>

    //     {/* Article Title and Basic Info */}
    //     <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
    //       <div className="container mx-auto">
    //         <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
    //           {event.title}
    //         </h1>

    //         <div className="flex flex-wrap gap-6 text-white/90">
    //           <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
    //             <Calendar className="h-5 w-5 text-white/80" />
    //             <span>{formatDate(event.date)}</span>
    //           </div>

    //           {event.time && (
    //             <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
    //               <Clock className="h-5 w-5 text-white/80" />
    //               <span>{event.time}</span>
    //             </div>
    //           )}

    //           {event.location && (
    //             <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
    //               <MapPin className="h-5 w-5 text-white/80" />
    //               <span>{event.location}</span>
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="container mx-auto px-4 py-10">
    //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
    //       {/* Left Column - Main Content */}
    //       <div className="lg:col-span-2">
    //         {/* Short Description */}
    //         {event.shortDescription && (
    //           <div className="mb-8 pb-8 border-b border-gray-200">
    //             <p className="text-xl text-gray-700 leading-relaxed">
    //               {event.shortDescription}
    //             </p>
    //           </div>
    //         )}

    //         {/* Main Content */}
    //         <div className="prose prose-lg max-w-none space-y-4">
    //           <PostBody content={content} />
    //         </div>
    //       </div>

    //       {/* Right Column - Action Card */}
    //       <div>
    //         <div className="sticky top-24">
    //           <Card className="overflow-hidden">
    //             <div className="h-2 bg-gradient-to-r from-[#203441] to-[#39576f]"></div>
    //             <CardContent className="p-6">
    //               <h3 className="text-xl font-bold text-[#203441] mb-4">
    //                 {isArabic ? "معلومات المقالة" : "Article Info"}
    //               </h3>

    //               <div className="space-y-4">
    //                 <Button
    //                   variant="outline"
    //                   className="w-full text-[#476c86] hover:text-[#476c86] hover:bg-[#476c86]/10 group" 
    //                 >
    //                   <Share2 className="mx-2 h-4 w-4" />
    //                   {isArabic ? "مشاركة" : "Share"}
    //                 </Button>
    //               </div>

    //               {/* Metadata */}
    //               <Separator className="my-6" />
    //               <div dir={isArabic ? "rtl" : "ltr"}>
    //                 <h4 className="font-medium text-[#203441] mb-4">
    //                   {isArabic ? "التفاصيل" : "Details"}
    //                 </h4>
    //                 <div className="space-y-3 text-sm">
    //                   <div>
    //                     <p className="text-gray-500 mb-1">{isArabic ? "التاريخ" : "Date"}</p>
    //                     <p className="font-medium text-[#203441]">{formatDate(event.date)}</p>
    //                   </div>
    //                   {event.time && (
    //                     <div>
    //                       <p className="text-gray-500 mb-1">{isArabic ? "الوقت" : "Time"}</p>
    //                       <p className="font-medium text-[#203441]">{event.time}</p>
    //                     </div>
    //                   )}
    //                   {event.location && (
    //                     <div>
    //                       <p className="text-gray-500 mb-1">{isArabic ? "المكان" : "Location"}</p>
    //                       <p className="font-medium text-[#203441]">{event.location}</p>
    //                     </div>
    //                   )}
    //                 </div>
    //               </div>
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>



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
