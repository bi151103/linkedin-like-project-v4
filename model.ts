export type Profile = {
  id: string;
  name: string;
  headline?: string;
  connection: {
    relationship: "1st" | "2nd" | "3rd";
    addConnectionInvitationSent: boolean;
  };
  profileImgUrl?: string;
};

export type AccomplishmentType =
  | "publication"
  | "patent"
  | "course"
  | "project"
  | "honor-award"
  | "test-score"
  | "language"
  | "organization"
  | "certification";

export type AccomplishmentData = {
  type: AccomplishmentType;
  id: string;
  name: string;
  duration?: {
    start?: string;
    end?: string;
  };
  authority?: string;
};

export type Accomplishments = {
  publicationsList: AccomplishmentData[];
  patentsList: AccomplishmentData[];
  coursesList: AccomplishmentData[];
  projectsList: AccomplishmentData[];
  honorsAndAwardsList: AccomplishmentData[];
  testScoresList: AccomplishmentData[];
  languagesList: AccomplishmentData[];
  organizationsList: AccomplishmentData[];
  certificationsList: AccomplishmentData[];
};

export type Experience = {
  id: string;
  position: string;
  duration: {
    start: string;
    end?: string;
  };
  location: string;
  description?: string;
};
export type ExperienceData = {
  id: string;
  company: Company;
  experiences: Experience[];
};

export type EducationDegreeType = "bachelor" | "master";
export type Education = {
  id: string;
  institution: {
    id: string;
    educationName: string;
    educationLogoSrc?: string;
  };
  major: string;
  degreeType?: "bachelor" | "master";
  duration: {
    start: string;
    end?: string;
  };
};

export type Skill = {
  id: string;
  skillName: string;
};

export type ContactType =
  | "email"
  | "phone"
  | "linkedin"
  | "instant-message"
  | "website";
export type Contact = {
  type: ContactType;
  info: string;
};
export type PhoneContactType = "fax" | "home" | "mobile" | "pager" | "work";
export interface PhoneContact extends Contact {
  phoneType: PhoneContactType;
}
export type InstantMessageType =
  | "skype"
  | "icq"
  | "google-hangouts"
  | "qq"
  | "wechat";
export interface InstantMessageContact extends Contact {
  instantMessageType: InstantMessageType;
}

export type UserInfo = {
  firstName: string;
  lastName: string;
  headline?: string;
  education: string;
  showEducation: false;
  industry: string;
  country: string;
  location: string;
};

export type Company = {
  companyId: string;
  companyName: string;
  companyLogoSrc?: string;
};

export type Connection = {
  id: string;
  name: string;
  profileUrl: string;
  avatarUrl: string;
  headline: string;
  connectedAt: string;
};
