
import type { ReactNode } from 'react'
import AboutSidebar from './_components/AboutSidebar'

interface AboutLayoutProps {
  children: ReactNode
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <main className=" pb-16">
      <div className="bg-gradient-to-r from-[#203441] to-[#39576f] py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">جمعية تطوير التعليم</h1>
            <p className="text-white/80 max-w-3xl">
              تعرف على جمعية تطوير التعليم، رسالتنا، رؤيتنا، وكيف يمكنك المساهمة في دعم مستقبل
              التعليم
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          <AboutSidebar />
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">{children}</div>
        </div>
      </div>
    </main>
  )
}
