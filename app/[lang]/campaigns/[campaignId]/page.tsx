import type { Metadata } from "next"
import { notFound } from "next/navigation"
import CampaignDetail from "../campaign-detail"
import { campaignsData } from "../campaigns-data"
 

export async function generateMetadata({ params }): Promise<Metadata> {
  const campaign = campaignsData.find((c) => c.id === params.campaignId)

  if (!campaign) {
    return {
      title: "الحملة غير موجودة | هيئة تطوير التعليم",
    }
  }

  return {
    title: `${campaign.title} | هيئة تطوير التعليم`,
    description: campaign.shortDescription,
  }
}

export default function CampaignPage({ params }) {
  const campaign = campaignsData.find((c) => c.id === params.campaignId)

  if (!campaign) {
    notFound()
  }

  return <CampaignDetail campaign={campaign} />
}
