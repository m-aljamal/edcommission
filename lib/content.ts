import { Project, ProjectType } from "@/types"
import type { Locale } from "./i18n"
import { promises as fs } from "fs"
import path from "path"
import { EventProps } from "@/app/[lang]/events/_components/text"

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  tags: string[]
}

 

// Get all blog posts for a specific language
export async function getBlogPosts(lang: Locale): Promise<BlogPost[]> {
  const blogsDirectory = path.join(process.cwd(), "content", "blogs", lang)

  try {
    const fileNames = await fs.readdir(blogsDirectory)
    const blogs = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith(".json"))
        .map(async (fileName) => {
          const filePath = path.join(blogsDirectory, fileName)
          const fileContents = await fs.readFile(filePath, "utf8")
          return JSON.parse(fileContents) as BlogPost
        }),
    )

    // Sort by date, newest first
    return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error(`Error reading blog posts for ${lang}:`, error)
    return []
  }
}

// Get a single blog post by slug
export async function getBlogPost(lang: Locale, slug: string): Promise<BlogPost | null> {
  const filePath = path.join(process.cwd(), "content", "blogs", lang, `${slug}.json`)

  try {
    const fileContents = await fs.readFile(filePath, "utf8")
    return JSON.parse(fileContents) as BlogPost
  } catch (error) {
    console.error(`Error reading blog post ${slug} for ${lang}:`, error)
    return null
  }
}

// Get all projects for a specific language
export async function getProjects(lang: Locale, type: ProjectType): Promise<Project[]> {
  const projectsDirectory = path.join(process.cwd(), "content", "projects", lang)

  try {
    const fileNames = await fs.readdir(projectsDirectory)
    const projects = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith(".json"))
        .map(async (fileName) => {
          const filePath = path.join(projectsDirectory, fileName)
          const fileContents = await fs.readFile(filePath, "utf8")
          return JSON.parse(fileContents) as Project
        }),
    )
     

    // Sort by start date, newest first
    const filterdProjects = projects.filter(project=>project.type === type)
    return filterdProjects.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
  } catch (error) {
    console.error(`Error reading projects for ${lang}:`, error)
    return []
  }
}

// Get a single project by slug
export async function getProject(lang: Locale, slug: string): Promise<Project | null> {
  const filePath = path.join(process.cwd(), "content", "projects", lang, `${slug}.json`)

  try {
    const fileContents = await fs.readFile(filePath, "utf8")
    return JSON.parse(fileContents) as Project
  } catch (error) {
    console.error(`Error reading project ${slug} for ${lang}:`, error)
    return null
  }
}


// get events 

export async function getEvents(lang: Locale): Promise<EventProps[]> {
  const eventsDirectory = path.join(process.cwd(), "content", "events", lang)

  try {
    const fileNames = await fs.readdir(eventsDirectory)
    const events = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith(".json"))
        .map(async (fileName) => {
          const filePath = path.join(eventsDirectory, fileName)
          const fileContents = await fs.readFile(filePath, "utf8")
          return JSON.parse(fileContents) as EventProps
        }),
    )

    // Sort by date, newest first
    return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error(`Error reading events for ${lang}:`, error)
    return []
  }
}


export async function getEvent(lang: Locale, id: string): Promise<EventProps | null> {
  const filePath = path.join(process.cwd(), "content", "events", lang, `${id}.json`)

  try {
    const fileContents = await fs.readFile(filePath, "utf8")
    return JSON.parse(fileContents) as EventProps
  } catch (error) {
    console.error(`Error reading event ${id} for ${lang}:`, error)
    return null
  }
}