import { Project, ProjectType } from "@/types"
import type { Locale } from "./i18n"
import { promises as fs } from "fs"
import path from "path"

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
