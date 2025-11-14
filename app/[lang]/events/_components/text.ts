export const eventsText = {
    ar:{
        title:"الفعاليات والدورات",
        description:`استكشف أحدث الفعاليات والدورات والمشاريع التي تعمل عليها جمعية تطوير التعليم، وكن جزءاً من مستقبل التعليم`
    },
    en:{
title:"",
description:""
    }
}

// For items inside 'sessions' array
export interface Session {
    id: string;
    title: string;
    day: string; // Date string
    time: string; // Time range string
    speaker: string;
    location: string;
    track: string;
    description: string;
  }
  
  // For items inside 'conferenceDays' array
  export interface ConferenceDay {
    date: string; // Date string
    title: string;
    description: string;
  }
  
  // For items inside 'tracks' array
  export interface Track {
    name: string;
    description: string;
  }
  
  // For the 'venue' object
  export interface Venue {
    name: string;
    address: string;
    facilities: string[];
    map: string;
  }
  
  // For items inside 'registrationOptions' array
  export interface RegistrationOption {
    name: string;
    price: string;
    benefits: string[];
    deadline: string;
  }
  
  // For the 'fullDescription' object
  export interface FullDescription {
    title: string;
    subTitle: string;
    list: string[];
  }
  
  // For the 'socialMedia' object
  export interface SocialMedia {
    twitter: string;
    facebook: string;
    instagram: string;
  }



export interface EventProps {
    id: string;
    title: string;
    date: string; // Date range string
    time: string; // Time range string
    location: string;
    image: string;
    category: string;
    shortDescription: string;
    fullDescription: FullDescription; // Uses the nested type
    conferenceDays: ConferenceDay[]; // Uses the nested array type
    sessions: Session[]; // Uses the nested array type
    tracks: Track[]; // Uses the nested array type
    venue: Venue; // Uses the nested type
    registrationOptions: RegistrationOption[]; // Uses the nested array type
    registrationLink: string;
    contactEmail: string;
    socialMedia: SocialMedia; // Uses the nested type
  }