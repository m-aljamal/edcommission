'use client'

import { useState } from 'react'
import CampaignCard from './campaign-card'
import { campaignsData } from './campaigns-data'

export default function CampaignsList() {
  const [category, setCategory] = useState('all')

  const filteredCampaigns =
    category === 'all'
      ? campaignsData
      : campaignsData.filter((campaign) => campaign.category === category)

  // Get unique categories
  const categories = Array.from(new Set(campaignsData.map((campaign) => campaign.category)))

  return (
    <div>
      <CampaignsGrid campaigns={filteredCampaigns} />
      {/* <Tabs defaultValue="all" className="mb-10" onValueChange={setCategory} dir="rtl">
        <div className="flex justify-center">
          <TabsList className="bg-gray-100">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white">
              الكل
            </TabsTrigger>
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        
        <TabsContent value="all" className="mt-8">
          <CampaignsGrid campaigns={filteredCampaigns} />
        </TabsContent>
        {categories.map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-8">
            <CampaignsGrid campaigns={filteredCampaigns} />
          </TabsContent>
        ))}
      </Tabs> */}
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
          <p className="text-gray-500 text-lg">لا توجد حملات في هذه الفئة حالياً</p>
        </div>
      )}
    </div>
  )
}
