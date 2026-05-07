import {
  AccomplishmentData,
  Contact,
  Education,
  PhoneContact,
  Profile,
  Skill,
} from "./model";

export const certificationsList: AccomplishmentData[] = [
  {
    id: "cert-0",
    name: "TOEIC 800 LR",
    authority: "ETS",
    type: "certification",
  },
  {
    id: "cert-1",
    name: "Microsoft Office Specialist: Microsoft Excel 2016",
    authority: "Microsoft",
    type: "certification",
  },
  {
    id: "cert-2",
    name: "Microsoft Office Specialist: Microsoft Powerpoint 2016",
    authority: "Microsoft",
    type: "certification",
  },
  {
    id: "cert-3",
    name: "Jira Fundamentals Badge",
    authority: "Atlassian",
    type: "certification",
  },
  {
    id: "cert-4",
    name: "Confluence Fundamentals Badge",
    authority: "Atlassian",
    type: "certification",
  },
  {
    id: "cert-5",
    name: "15 days of Postman - for testers",
    authority: "Canvas Credentials (Badgr)",
    type: "certification",
  },
  {
    id: "cert-6",
    name: "Fit for Scrum Course",
    authority: "Axon Active - Agile Software Development Company",
    type: "certification",
  },
];

export const projectsList: AccomplishmentData[] = [
  {
    id: "project-3",
    name: "LinkedIn Like Project",
    duration: {
      start: "04/01/2026",
      end: "05/01/2026",
    },
    type: "project",
  },
  {
    id: "project-0",
    name: "Online Sale Website",
    duration: {
      start: "03/01/2024",
      end: "04/01/2024",
    },
    type: "project",
  },
  {
    id: "project-1",
    name: "Website for managing a chain of coffee shops",
    duration: {
      start: "10/01/2023",
      end: "12/01/2023",
    },
    type: "project",
  },
  {
    id: "project-2",
    name: "Web Testing | Change Password - OrangeHRM",
    duration: {
      end: "05/01/2024",
    },
    type: "project",
  },
];

export const educationList: Education[] = [
  {
    id: "education-0",
    institution: {
      id: "institution-0",
      educationName: "Ho Chi Minh City University of Technology",
      educationLogoSrc: "./images/bach-khoa-hcm.avif",
    },
    major: "Computer Science",
    degreeType: "bachelor",
    duration: {
      start: "09/01/2021",
      end: "09/01/2025",
    },
  },
];

export const skillsList: Skill[] = [
  {
    id: "skill-0",
    skillName: "Self-Organized",
  },
  {
    id: "skill-1",
    skillName: "Attention to Detail",
  },
  {
    id: "skill-2",
    skillName: "Software Development",
  },
  {
    id: "skill-3",
    skillName: "Software Testing",
  },
  {
    id: "skill-4",
    skillName: "Outsourcing",
  },
  {
    id: "skill-5",
    skillName: "Requirement Analysis",
  },
  {
    id: "skill-6",
    skillName: "Programming",
  },
];

export const contactList: Contact[] = [
  {
    type: "linkedin",
    info: "https://www.linkedin.com/in/dang-phan-minh-phuc",
  },
  {
    type: "email",
    info: "dangphanminhphuctbag@gmail.com",
  },
  {
    type: "phone",
    info: "+84 782 844 906",
    phoneType: "mobile",
  } as PhoneContact,
  {
    type: "website",
    info: "https://github.com/bi151103",
  },
];

export const accomplishments = {
  publicationsList: [],
  patentsList: [],
  coursesList: [],
  projectsList: projectsList,
  honorsAndAwardsList: [],
  testScoresList: [],
  languagesList: [],
  organizationsList: [],
  certificationsList: certificationsList,
};

export const otherProfilesList: Profile[] = [
  {
    id: "profile-0",
    name: "Kien Tran",
    headline: "QE at Code Leap",
    connection: {
      relationship: "1st",
      addConnectionInvitationSent: false,
    },
    profileImgUrl:
      "./images/3d-illustration-human-avatar-profile_23-2150671142.avif",
  },
  {
    id: "profile-1",
    name: "Dat Doan",
    headline: "Software Engineer @ CODE LEAP",
    connection: {
      relationship: "1st",
      addConnectionInvitationSent: false,
    },
    profileImgUrl: "./images/smiling-young-man-illustration_1308-174669.avif",
  },
  {
    id: "profile-2",
    name: "Thùy Nguyễn",
    headline: "QA Tester | ISTQB CTFL Certified",
    connection: {
      relationship: "1st",
      addConnectionInvitationSent: false,
    },
    profileImgUrl: "./images/woman-floral-traditional-costume_1308-176159.avif",
  },
  {
    id: "profile-3",
    name: "Tran Thuy Linh (Tracy Tran)",
    headline: "Data Labeling Team Lead/Ainavio/Code Leap",
    connection: {
      relationship: "2nd",
      addConnectionInvitationSent: false,
    },
    profileImgUrl:
      "./images/business-people-icon-character-illustration-vector-flat-style_40876-4152.avif",
  },
  {
    id: "profile-4",
    name: "Hien (Hazel) Nguyen",
    headline:
      "CODE LEAP is hiring: Senior Python; Senior ReactJS, Tech lead (Open for expat)",
    connection: {
      relationship: "1st",
      addConnectionInvitationSent: false,
    },
    profileImgUrl:
      "./images/charming-cartoon-style-avatar-girl-fun-creative-illustration_1186924-4629.avif",
  },
  {
    id: "profile-5",
    name: "Toan Le",
    headline: "Senior Software Engineer at Code Leap",
    connection: {
      relationship: "2nd",
      addConnectionInvitationSent: true,
    },
    profileImgUrl: "./images/person-avatar-design_24877-38137.avif",
  },
];

export const recentSearch = [
  "abc",
  "xyz",
  "abc xyz",
  "abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz",
  "abcxyzabcxyzabcxyzabcxyzabcxyzabcxyzabcxyzabcxyzabcxyz",
  "abcxyzabcxyzabcxyzabcxyzabcxyzabcxyzabcxyzabcxyzabcxyz",
  "abcxyzabcxyzabcxyzabcxyzabcxyzabcxyzabcxyzabcxyzabcxyz",
];
