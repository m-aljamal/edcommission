// lib/posts.ts
import fs from "fs";
import path, { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Locale } from "./i18n";

export type PostMeta = {
  slug: string;
  lang: Locale;
  title: string;
  excerpt: string;
  date: string;
  cover?: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

const contentDir = path.join(process.cwd(), "content","blog");

function getLangDir(lang: Locale) {
  return path.join(contentDir, lang);
}

export function getPostSlugs(lang: Locale): string[] {
  const dir = getLangDir(lang);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getPostFile(lang: Locale, slug: string) {
  
  const fullPath = path.join(process.cwd(), "content","blog",lang, `${slug}.md`);
  
  return fs.readFileSync(fullPath, "utf8");
}

export async function getPostBySlug(lang: Locale, slug: string) {
    const postDirectory = join(process.cwd(), "content","blog",lang)
    const realSlug = slug.replace(/\.md$/,"")
    const fullPath = join(postDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const {data, content} = matter(fileContents)
    return {...data, slug: realSlug, content} 



//   const fileContents = getPostFile(lang, slug);
//   const { data, content } = matter(fileContents);

//   const processedContent = await remark().use(html).process(content);
//   const contentHtml = processedContent.toString();

//   return {
//     slug,
//     lang,
//     title: data.title ?? slug,
//     excerpt: data.excerpt ?? "",
//     date: data.date ?? new Date().toISOString(),
//     cover: data.cover ?? undefined,
//     contentHtml,
//   };
}

export async function getAllPosts(lang: Locale): Promise<PostMeta[]> {
    
  const slugs = getPostSlugs(lang);

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const fileContents = getPostFile(lang, slug);
      const { data } = matter(fileContents);
console.log({fileContents,data});

      return {
        slug,
        lang,
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        date: data.date ?? new Date().toISOString(),
        cover: data.cover ?? undefined,
      } as PostMeta;
    })
  );

  // ترتيب من الأحدث للأقدم
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
