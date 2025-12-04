import { type Locale } from "@/lib/i18n"
import AchievementsInfographic from "./_components/achievements-infographic"
import ContactNewsletter from "./_components/contact"
import Hero from "./_components/hero/hero"
import ProjectsSection from "./_components/project-section"
import ShortAbout from "./_components/short-about"


export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params

  return (
    <div>
      <Hero />

      <ShortAbout />
      {/* <CampaignCarousel /> */}

      <ProjectsSection />
      <AchievementsInfographic />
      <ContactNewsletter />
    </div>
  )
}
