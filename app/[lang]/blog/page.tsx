//  import { Locale } from "@/lib/i18n";
// import { getAllEvents } from "@/lib/api";
// import Link from "next/link";
 
// export default async function BlogPage({
//   params,
// }: {
//   params: Promise<{lang: Locale}> ;
// }) {
//   const { lang } = await params;
//   const posts =  getAllEvents(lang);

//   return (
//     <>
//       <h1 className="mb-6 text-3xl font-bold">
//         {lang === "ar" ? "كل المقالات" : "All Posts"}
//       </h1>
//       <section className="grid gap-4 md:grid-cols-2">
//        {posts.map((post)=>
//         <div  key={post.slug}>
// <h2>{post.title}</h2>
//        <p>{post.excerpt}</p>
//        <Link href={`/${lang}/blog/${post.slug}`}>Read more</Link>
//         </div>
       
//        )}
//       </section>
//     </>
//   );
// }






import { Locale } from "@/lib/i18n";
import { getAllEvents } from "@/lib/api";
import Link from "next/link";
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const posts = getAllEvents(lang);

  const isArabic = lang === "ar";

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header Section */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
              {isArabic ? "مجلة الأخبار" : "INSIGHTS & STORIES"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
            {isArabic ? "مقالاتنا وأخبارنا" : "Articles & Events"}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {isArabic
              ? "استكشف أحدث المقالات والأحداث التعليمية والمؤتمرات التي تشكل مستقبل التعليم"
              : "Explore our latest articles, educational events, and conferences shaping the future of learning"}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              {isArabic ? "لا توجد مقالات حالياً" : "No articles yet"}
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${lang}/blog/${post.slug}`}
                className="group h-full"
              >
                <article className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700">
                  {/* Image */}
                  {post.cover && (
                    <div className="relative h-48 md:h-56 overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <img
                        src={post.cover || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6 md:p-8">
                    {/* Meta */}
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <time className="text-sm text-slate-500 dark:text-slate-400">
                        {new Date(post.date).toLocaleDateString(
                          lang === "ar" ? "ar-SA" : "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all">
                      <span>{isArabic ? "اقرأ المزيد" : "Read More"}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Footer CTA */}
      <section className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
            {isArabic ? "هل تريد البقاء على اطلاع؟" : "Stay Updated"}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            {isArabic
              ? "تابعنا للحصول على آخر الأخبار والمقالات"
              : "Follow us for the latest news and updates"}
          </p>
        </div>
      </section>
    </main>
  );
}
