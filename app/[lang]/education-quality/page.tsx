import { Locale } from '@/lib/i18n'
import { CTASection } from './_components/cta'
import { DocumentsSection } from './_components/documents'
import { HeroSection } from './_components/hero'
import { ImpactSection } from './_components/impact'
import { ImportanceSection } from './_components/importance'
import { ProgramsSection } from './_components/programs-section'
import { qualityTranslations } from './_components/text'






export default async function QualityPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    const t = qualityTranslations[lang]
    return (
        <main className="pb-16">
            {/* Hero Section */}
            <HeroSection t={t.hero} />

            {/* Importance Section */}
            <ImportanceSection t={t.importance} stats={t.stats} />

            {/* Programs Section */}
            <ProgramsSection lang={lang} />

            {/* Impact Section */}
            <ImpactSection lang={lang} />

            {/* Documents Section */}
            <DocumentsSection lang={lang} />

            {/* CTA Section */}
            <CTASection lang={lang} />
        </main>
    )
}




