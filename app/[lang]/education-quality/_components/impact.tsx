import { Locale } from "@/lib/i18n";
import { qualityTranslations } from "./text";
import { Card, CardContent } from "@/components/ui/card";
import { CheckListItem } from "./programs-section";


interface ProgressBarProps {
    label: string
    value: number
  }
  
  export function ProgressBar({ label, value }: ProgressBarProps) {
    return (
      <div className="space-y-2">
        <div className="flex justify-between mb-1">
          <span className="text-gray-700">{label}</span>
          <span className="text-[#39576f] font-bold">{value}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-[#39576f] h-2 rounded-full" style={{ width: `${value}%` }}></div>
        </div>
      </div>
    )
  }

export function ImpactSection({lang}:{lang:Locale}) {
    const t = qualityTranslations[lang]
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#203441] mb-4">{t.impact.title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t.impact.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-2 bg-gradient-to-r from-[#203441] to-[#39576f]"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#203441] mb-4">{t.impact.results.title}</h3>
              <div className="space-y-4">
                {t.impact.results.points.map((point, index) => (
                  <CheckListItem key={index} text={point} />
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-2 bg-gradient-to-r from-[#203441] to-[#39576f]"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#203441] mb-4">{t.impact.indicators.title}</h3>
              <div className="space-y-6">
                {t.impact.indicators.items.map((item, index) => (
                  <ProgressBar key={index} label={item.label} value={item.value} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }