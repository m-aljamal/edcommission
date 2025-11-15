// components/PostCard.tsx
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { Locale } from "@/lib/i18n";
 
export default function PostCard({
  post,
  lang,
}: {
  post: PostMeta;
  lang: Locale;
}) {
  const date = new Date(post.date).toLocaleDateString(
    lang === "ar" ? "ar-SY" : "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 hover:border-cyan-500">
      {post.cover && (
        <div className="mb-3 overflow-hidden rounded-lg">
          {/* تقدر تستخدم next/image لو حاب */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.cover}
            alt={post.title}
            className="h-48 w-full object-cover"
          />
        </div>
      )}
      <h2 className="mb-1 text-lg font-semibold">
        <Link href={`/${lang}/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      <p className="mb-2 text-xs text-slate-400">{date}</p>
      {post.excerpt && (
        <p className="text-sm text-slate-200 line-clamp-2">{post.excerpt}</p>
      )}
    </article>
  );
}
