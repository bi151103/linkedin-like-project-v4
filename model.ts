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
  company: {
    companyId: string;
    companyName: string;
    companyLogoSrc?: string;
  };
  experiences: Experience[];
};
