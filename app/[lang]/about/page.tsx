import type { Metadata } from 'next'
import { AboutView } from './_components/aboutview'

 
export const metadata: Metadata = {
  title: 'من نحن | جعية تطوير التعليم',
  description: 'تعرف على جعية تطوير التعليم ورسالتنا في تحسين جودة التعليم',
}

export default async function AboutPage() {
  return <AboutView />
}
