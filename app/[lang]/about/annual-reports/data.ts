import { GOOGLE_URL } from '@/lib/constant'

export type AnnualReport = {
  id: string
  year: number
  title: string
  description: string
  thumbnailUrl: string
  pdfUrl: string
}

export const annualReports: AnnualReport[] = [
  {
    id: '2021',
    year: 2021,
    title: 'التقرير السنوي 2021',
    description: 'تفاصيل البرامج المقدمة خلال عام 2021',
    thumbnailUrl: `${GOOGLE_URL}1PuuC5NLf3d1qybtN9WGLYm24opg8eFba`,
    pdfUrl: '10oBrN6XA_JrXHI4NTyL9Z9oEEJ4p5AT9',
  },
  {
    id: '2022',
    year: 2022,
    title: 'التقرير السنوي 2022',
    description: 'تفاصيل البرامج المقدمة خلال عام 2022',
    thumbnailUrl: `${GOOGLE_URL}160NL4SferWXkKbj2P5fpbYEMmLYb9Xzw`,
    pdfUrl: '1sPj9s5Q-TbMN6V0nuOpyshucXmJ1Z4rR',
  },
  {
    id: '2023',
    year: 2023,
    title: 'التقرير السنوي 2023',
    description: 'تفاصيل البرامج المقدمة خلال عام 2023',
    thumbnailUrl: `${GOOGLE_URL}1KvEZyL3nmDIR6acoMkEbjIMec_f_7QU6`,
    pdfUrl: '1xf_eH60hY8lvynNEjqZ8jkxar70D2Emv',
  },
  {
    id: '2024',
    year: 2024,
    title: 'التقرير السنوي 2024',
    description: 'تفاصيل البرامج المقدمة خلال عام 2024',
    thumbnailUrl: `${GOOGLE_URL}1zbN_GPNI3ke7Ra2hECbWBBDPVrpqStJD`,
    pdfUrl: '1ohrJEk5bJReBwM5rqkYR20YEjMqWo5-3',
  },
]
