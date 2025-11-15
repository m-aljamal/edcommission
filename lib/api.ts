import { Event } from "@/types";
import path, { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { Locale } from "./i18n";


function getContentDir(lang: Locale) {
  return path.join(process.cwd(), "content","blog", lang);
}

export function getEventSlugs(lang:Locale) {
    const contentDir = getContentDir(lang)
  return fs.readdirSync(contentDir);
}


export function getEventBySlug(slug: string, lang:Locale) {
  const realSlug = slug.replace(/\.md$/, "");
  const contentDir = getContentDir(lang)
  const fullPath = join(contentDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Event;
}

export function getAllEvents(lang:Locale): Event[] {
    const slugs = getEventSlugs(lang)
    const events  = slugs.map((slug)=>getEventBySlug(slug, lang)).sort((event1,event2)=>(event1.date > event2.date ? -1 : 1))
return events
}



