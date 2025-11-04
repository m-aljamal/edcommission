import { Locale } from "@/lib/i18n";
import { qualityTranslations } from "./text";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export function CTASection({ lang }: { lang: Locale }) {
    const t = qualityTranslations[lang]
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-[#203441] to-[#39576f] rounded-xl p-8 md:p-12 text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.cta.title}</h2>
                <p className="text-white/80 max-w-3xl mx-auto mb-8">{t.cta.description}</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/contact">
                        <Button size="lg" className="bg-white text-[#203441] hover:bg-white/90">
                            {t.cta.contactButton}
                        </Button>
                    </Link>
                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent text-white border-white hover:bg-white/10"
                        asChild
                    >
                        <Link href="/donate">{t.cta.donateButton}</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

