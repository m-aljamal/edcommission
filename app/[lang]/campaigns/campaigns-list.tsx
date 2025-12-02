
import CampaignCard from './campaign-card'
import { campaignsData } from './campaigns-data'

export default function CampaignsList() {


  return (
    <div>
      <CampaignsGrid campaigns={campaignsData} />
    </div>
  )
}

function CampaignsGrid({ campaigns }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {campaigns.length > 0 ? (
        campaigns.map((campaign) => <CampaignCard key={campaign.id} campaign={campaign} />)
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 text-lg">لا توجد حملات حالياً</p>
        </div>
      )}
    </div>
  )
}
