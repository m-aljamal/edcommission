export type CampaignTranslation = {
  ar: string
  en: string
}

export type CampaignPartner = {
  name: CampaignTranslation
  logo: string
}

export type CampaignDonationOption = {
  value: number
  description: CampaignTranslation
}

export type CampaignData = {
  id: string
  title: CampaignTranslation
  createdAt: string
  location: CampaignTranslation
  image: string
  category: CampaignTranslation
  shortDescription: CampaignTranslation
  fullDescription: CampaignTranslation
  targetAmount: number
  raisedAmount: number
  beneficiaries: number
  donors: number
  gallery: string[]
  updates: unknown[]
  partners: CampaignPartner[]
  donationOptions: CampaignDonationOption[]
  impactStats: unknown[]
}

export const campaignsData: CampaignData[] = [
  {
    id: 'sarmini-school',
    title: {
      ar: 'مشروع ترميم وتشغيل مدرسة "عامر سرمينيّ" – حلب سيف الدولة',
      en: 'Amer Sarmini School Rehabilitation and Operation Project – Seif al-Dawla, Aleppo',
    },
    createdAt: '20-04-2025',
    location: {
      ar: 'سوريا - حلب',
      en: 'Syria - Aleppo',
    },
    image: '1Q-N-KgOtlgUbA3RdwF5ZOzUmdE2NotXx',
    category: {
      ar: 'مستلزمات مدرسية',
      en: 'School Support',
    },
    shortDescription: {
      ar: 'مدرسة عامر سرميني في حلب بحاجة لترميم وتجهيزات تقنية لضمان استمرار التعليم لأكثر من 1140 طالبًا في المرحلتين الإعدادية والثانوية.',
      en: 'Amer Sarmini School in Aleppo needs rehabilitation and technical equipment to ensure continued education for more than 1,140 students in the preparatory and secondary levels.',
    },
    fullDescription: {
      ar: `
        <p>تُعدّ مدرسة عامر سرميني، الواقعة في حي سيف الدولة بمدينة حلب، واحدة من المدارس العاملة حاليًّا لكنّها بحاجة ماسّة للتدخّل ؛ لتحسين بنيتها التحتية وتجهيزاتها لضمان استمرار تقديم التعليم لـما يزيد عن 1140 طالبًا، خصوصًا أنّ المدرسة تخدم مرحلتين تعليميّتين حيويّتين: المرحلة الإعدادية والثانوية (ذكور).
 رغم أن المدرسة لا تزال تستقبل الطلاب وتؤدّي دورها التعليميّ، إلّا أن غياب أعمال الصيانة لفترات طويلة، ونقص التجهيزات التقنيّة والبنية التحتيّة، قد يُفقدها فاعليّتها قريبًا، ممّا يستدعي تدخّلًا عاجلًا لترميمها وتشغيلها على نحو لائق بطلب مباشر من الحكومة السوريّة الجديدة.</p>
        
        <p>تهدف الحملة إلى:</p>
        <ul>
          <li>رفع كفاءة البنية التحتيّة في المدرسة من خلال الصيانة والترميم.</li>
          <li>توفير بيئة تعليميّة مناسبة وآمنة لأكثر من ألف طالب.</li>
          <li>دعم العمليّة التعليميّة عبر إدخال تجهيزات تكنولوجيّة حديثة.</li>
          <li>دعم العمليّة التعليميّة عبر إدخال تجهيزات تكنولوجيّة حديثة.</li>
          <li>غرس القيم الإنسانيّة والتربويّة لبناء جيل سليم سلوكيًّا ونفسيًّا.</li>
        </ul>
      `,
      en: `
        <p>Amer Sarmini School, located in the Seif al-Dawla district of Aleppo, is one of the schools currently operating but is in urgent need of intervention to improve its infrastructure and equipment in order to ensure the continuation of education for more than 1,140 students. The school serves two vital educational stages: preparatory and secondary education for boys.</p>

        <p>Although the school is still receiving students and carrying out its educational role, the lack of maintenance for long periods, along with insufficient technical equipment and infrastructure, may soon affect its effectiveness. This calls for urgent intervention to rehabilitate and operate it properly, based on a direct request from the new Syrian government.</p>

        <p>The campaign aims to:</p>
        <ul>
          <li>Improve the school’s infrastructure through maintenance and rehabilitation.</li>
          <li>Provide a safe and suitable learning environment for more than one thousand students.</li>
          <li>Support the educational process by introducing modern technological equipment.</li>
          <li>Strengthen the educational process through improved school readiness and functionality.</li>
          <li>Promote humanitarian and educational values to help build a psychologically and behaviorally healthy generation.</li>
        </ul>
      `,
    },
    targetAmount: 134820,
    raisedAmount: 0,
    beneficiaries: 1140,
    donors: 0,
    gallery: [
      '1dLInIh3aTPFGAYGDiCd0_YjcVvsBfAPA',
      '1i_VGI0TIZE40uNceAnYDjCMgr46Wd__n',
    ],
    updates: [],
    partners: [
      {
        name: {
          ar: 'شركة القلم للقرطاسية',
          en: 'Al-Qalam Stationery Company',
        },
        logo: '/placeholder.svg?height=100&width=200',
      },
      {
        name: {
          ar: 'مؤسسة التعليم للجميع',
          en: 'Education for All Foundation',
        },
        logo: '/placeholder.svg?height=100&width=200',
      },
      {
        name: {
          ar: 'بنك الأمل',
          en: 'Hope Bank',
        },
        logo: '/placeholder.svg?height=100&width=200',
      },
      {
        name: {
          ar: 'شركة الحقيبة المدرسية',
          en: 'School Bag Company',
        },
        logo: '/placeholder.svg?height=100&width=200',
      },
    ],
    donationOptions: [
      {
        value: 25,
        description: {
          ar: 'توفير حقيبة مدرسية لطالب واحد',
          en: 'Provide a school bag for one student',
        },
      },
      {
        value: 100,
        description: {
          ar: 'توفير حقائب مدرسية لـ 4 طلاب',
          en: 'Provide school bags for 4 students',
        },
      },
      {
        value: 250,
        description: {
          ar: 'توفير حقائب مدرسية لـ 10 طلاب',
          en: 'Provide school bags for 10 students',
        },
      },
    ],
    impactStats: [],
  },
]