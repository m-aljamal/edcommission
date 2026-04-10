import { Locale } from "@/lib/i18n"
import CampaignDetail from "../campaign-detail"
import { campaignsData } from "../campaigns-data"
 
type PageParams = {
    params: Promise<{
        id: string,
        lang: Locale
    }>
}

export default async function CampaignPage({ params }:PageParams) {
      const { id } = await params

  const campaign = campaignsData.find((c) => c.id === id)
  if (!campaign) {
    return <div> Campaign not found {id} </div>
  }

  return <CampaignDetail campaign={campaign} />
}
