import { type Locale, getTranslations } from "@/lib/i18n"
import Hero from "./_components/hero/hero"
import ShortAbout from "./_components/short-about"
import ProjectsSection from "./_components/project-section"
import AchievementsInfographic from "./_components/achievements-infographic"


export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params

  return (
    <div>
      <Hero />

      <ShortAbout />
      {/* <CampaignCarousel /> */}

      <ProjectsSection />
      <AchievementsInfographic />
      {/* <ContactNewsletter /> */}
    </div>
  )
}
