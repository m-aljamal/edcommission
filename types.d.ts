interface LinksPorps {
  name: string
  href: string
  icon: LucideIcon
  color: string
  bg: string
}

export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  image: string
  category: 'course' | 'workshop' | 'project' | 'confirance'
  shortDescription: string
  fullDescription: string
  agenda?: AgendaItem[]
  phases?: Phase[]
  availableSeats?: number
  registrationLink?: string
  donationLink?: string
  volunteerLink?: string
  speakers?: Speaker[]
  coordinator?: Coordinator
  eligibility?: string[]
  applicationDeadline?: string
  applicationLink?: string

  conferenceDays?: any
  sessions?: any
  tracks?: any
  venue?: any
  registrationOptions?: any
  sponsors?: any
}

export interface EventCardProps {
  event: Event
  lang: local
}

export interface EventDetailProps {
  event: Event
}

export interface EventsGridProps {
  events: Event[]
  lang: locale
}

// Training interfaces
export interface Teacher {
  id: string
  name: string
  title: string
  bio: string
  image: string
  cv: string
  specializations: string[]
  experience: string
  education: string
  achievements: string[]
  socialMedia?: {
    linkedin?: string
    twitter?: string
    facebook?: string
  }
}

export interface TrainingModule {
  id: string
  title: string
  description: string
  duration: string
  objectives: string[]
  content: string[]
  prerequisites?: string[]
}

export interface Training {
  id: string
  title: string
  date: string
  time: string
  location: string
  image: string
  category: 'teacher-training' | 'leadership' | 'technology' | 'curriculum' | 'assessment'
  shortDescription: string
  fullDescription: string
  teachers: Teacher[]
  modules: TrainingModule[]
  agenda?: AgendaItem[]
  availableSeats?: number
  registrationLink?: string
  applicationLink?: string
  coordinator?: Coordinator
  eligibility?: string[]
  applicationDeadline?: string
  certification?: {
    name: string
    description: string
    requirements: string[]
  }
  materials?: {
    name: string
    type: 'pdf' | 'video' | 'presentation'
    url: string
  }[]
  venue?: {
    name: string
    address: string
    facilities: string[]
    map: string
  }
  contactEmail?: string
  socialMedia?: {
    twitter?: string
    facebook?: string
    instagram?: string
  }
}

export interface TrainingDetailProps {
  training: Training
}

export interface TrainingCardProps {
  training: Training
  lang: locale
}

export interface TrainingGridProps {
  trainings: Training[]
  lang: locale
}

export type ProjectType =  "formal-education" | "nonformal-education"

export interface TabConfig {
  title: string
  value: string
}

export type TabContentRenderer = (page: ProjectType, project: Project) => ReactNode

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  fullDescription: string
  importance:   string
  importanceList:string[]
  components:{
    title: string
    description:string
  }[]
  image:string 
  gallery:string[]
  videoUrl:string 
  location:string 
  beneficiaries:number 
  status:string 
  startDate:string 
  endDate: string 
  budget: number 
  partners: string[]
  objectives:string[]
  statistics:{
    schoolsRenovated:{
      month: string 
      count: number 
    }[]
    budgetDistribution: {
      name:string 
      value:number 
    }[]
    impactMetrics:{
      enrollmentIncrease:number 
      dropoutReduction:number 
      academicPerformance:number 
      teacherSatisfaction:number
    }
  }
 
}