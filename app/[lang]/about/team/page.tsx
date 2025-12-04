import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { GOOGLE_URL, olabiImage } from '@/lib/constant'
export const metadata: Metadata = {
  title: 'فريق العمل | جعية تطوير التعليم',
  description: 'تعرف على فريق العمل في جعية تطوير التعليم',
}

interface TeamMember {
  id: string
  name: string
  position: string
  image: string
  email: string

  bio?: string
}
const currentDirector = {
  id: 'safia-alabi',
  name: 'د. صفية العلبي',
  position: 'المدير العام',
  image: `${GOOGLE_URL}1fVw2sxmMYJW3dPzZ0lsuA-GaCmt3IM2J`,
  email: 'director@edcommission.com',

  bio: `من مؤسسي جمعية تطوير التعليم. أسست العديد من المشاريع التعليمية والإنسانية منذ بداية الثورة لدعم الأطفال  الأيتام والنازحين والمنقطعين عن التعليم في سوريا، مثل برنامج "عقل" للمنقطعين عن التعليم وبرنامج "جودة التعليم" . 
منذ عام 2021 وحتى الآن، ترأس جمعية تطوير التعليم وتشرف على مشاريعها.
بالإضافة إلى عملها في المجال الإنساني، تقود أبحاثًا علمية في مركز هيلمهولتز ميونيخ في ألمانيا، مع تركيز على دراسات السرطان والشيخوخة، وتطوير أدوات علاجية متقدمة مُشخَّصة حسب التكوين الجيني للمريض. لديها العديد من المقالات العلمية المنشورة والمشاريع العلمية القائمة.`,
}
const teamMembers: TeamMember[] = [
  {
    id: 'yaman',
    name: 'أ. يمان جيلاني',
    position: 'المدير التنفيذي',
    image: `${GOOGLE_URL}17HtRMgHEdLnWWFTzi0Dr4D3vTJ7HY12M`,
    email: 'y.jelani@edcommission.com',
  },
  {
    id: 'mustafa',
    name: 'أ. مصطفى عطري',
    position: 'مدير البرامج',
   
    image: `${GOOGLE_URL}1CPzR_WriiZk095s6bsosyYDNhHN6GxMr`,
    email: 'm.otri@edcommission.com',
  },
  {
    id: 'jamal',
    name: 'م. محمد الجمل',
    position: 'المسؤول المالي والتقني',
    image: `${GOOGLE_URL}1KSqCCWLmhB0egx6DeDTfYDcXk1IW0fe-`,
    email: 'm.jamal@edcommission.com',
  },
  {
    id: 'halabi',
    name: 'أ. عبد الغفور حلبي  ',
    position: 'مسؤول المراقبة والتقييم',
     
    image: `${GOOGLE_URL}1L6vfxDctUK5xWzqPBkdnBEqGECFM-hYs`,
    email: 'a.halabi@edcommission.com',
  },
]

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-[#203441] mb-6 flex items-center gap-2">
        <span className="w-8 h-1 bg-[#39576f] rounded-full"></span>
        <span>فريق العمل: </span>
      </h3>

      {/* Founder Section */}
      <div className="bg-gradient-to-r from-[#203441]/5 to-[#39576f]/5 rounded-xl p-6 mb-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
              <Image
                src={olabiImage}
                alt="المهندس عبد الملك العلبيّ"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-[#203441] mb-2">مؤسّس جمعيّة تطوير التعليم</h3>
            <h4 className="text-lg font-semibold text-[#39576f] mb-4">
              المهندس عبد الملك العلبيّ <span className="text-gray-500 text-sm">رحمه الله</span>
            </h4>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-justify">
                كان يرى -رحمه الله- في التربية والتعليم السبيل الوحيد لنهضة الأمّة، فافتتح عدّة
                مدارس للاجئين السوريّين في مخيّمات النازحين داخل سوريّة والجنوب التركيّ، وقام بكفالة
                ورعاية مئات الأطفال الأيتام، ثمّ أسّس عام 2015م جمعيّة تطوير التعليم في تركيا، التي
                عملت بالتعاون مع خبراء على تأليف وثائق مناهج سوريّة لصالح الطلّاب السوريّين
                المنقطعين عن التعليم، وأطلق مشروع عقل لإعادتهم إلى مقاعد الدراسة، فأسّس مدرستين في
                تركيا وعدّة مدارس ومراكز تدريب في الداخل السوريّ، وقام برعايتها من نفقته الخاصّة.
                ويتابع فريقه الآن مسيرته ويشرف على 4 مدارس معظم طلّابها من الأطفال الأيتام، و3 مراكز
                للتدريب والتأهيل والتطوير المجتمعيّ بجودة وكفاءة عالية، ويهدف إلى توسيع نطاق العمل
                سنويًّا للوصول إلى شريحة أكبر من المستفيدين.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-12">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold text-[#203441]">المدير العام</h3>
          <div className="h-0.5 flex-1 bg-gray-200"></div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <DirectorCard member={currentDirector} />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold text-[#203441]">فريق الإدارة</h3>
        <div className="h-0.5 flex-1 bg-gray-200"></div>
      </div>

      <p className="text-lg text-gray-700 mb-8">
        يضم فريق عمل جعية تطوير التعليم نخبة من الخبراء والمتخصصين في مجالات التعليم المختلفة،
        يعملون معاً بشغف وتفانٍ لتحقيق رسالة الجعية ورؤيتها ومواصلة مسيرة المؤسس.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-6">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>

      {/* Staff and Volunteers Count Section */}
      <div className="mt-16 mb-8">
        <div className="bg-gradient-to-r from-[#203441]/10 to-[#39576f]/10 rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#203441] mb-8 text-center">فريق العمل بالأرقام</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Employees Count */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-[#203441] to-[#39576f] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#203441] mb-2">120</div>
              <div className="text-xl text-[#39576f]">موظّفًا</div>
              <div className="mt-3 text-gray-600">يعملون بتفانٍ لتحقيق رسالة الجمعية</div>
            </div>

            {/* Volunteers Count */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-[#39576f] to-[#476c86] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#203441] mb-2">72</div>
              <div className="text-xl text-[#39576f]">متطوّعًا</div>
              <div className="mt-3 text-gray-600">يساهمون في دعم برامج ومبادرات الجمعية</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="overflow-hidden relative hover:shadow-md transition-shadow">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#203441] to-[#39576f]"></div>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center mb-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
            <Image
              src={member.image || '/placeholder.svg'}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-[#203441]">{member.name}</h3>
          <p className="text-[#39576f] font-medium">{member.position}</p>
        </div>

        <div className="space-y-2 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-gray-700">
            <Mail className="h-4 w-4 text-[#39576f]" />
            <a
              href={`mailto:${member.email}`}
              className="text-sm hover:text-[#39576f] transition-colors"
            >
              {member.email}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function DirectorCard({ member }: { member: TeamMember }) {
  return (
    <Card className="overflow-hidden relative hover:shadow-md transition-shadow">
      <div className="h-3 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#39576f] to-[#476c86]"></div>
      <CardContent className="p-6">
        <div className="flex flex-col   gap-6 items-center  ">
          <div className="relative w-40 h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
            <Image
              src={member.image || '/placeholder.svg'}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="text-center  mb-4">
              <h3 className="text-2xl font-bold text-[#203441]">{member.name}</h3>
              <p className="text-[#39576f] font-medium text-lg">{member.position}</p>
            </div>

            <p className="text-gray-700 mb-4">{member.bio}</p>

            <div className="space-y-2 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="h-4 w-4 text-[#39576f]" />
                <a
                  href={`mailto:${member.email}`}
                  className="hover:text-[#39576f] transition-colors"
                >
                  {member.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
