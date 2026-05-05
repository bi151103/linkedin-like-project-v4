import { createAboutSection } from "./about-section.js";
import { createAddAccomplishmentOverlay } from "./accomplishment-overlay.js";
import { createAccomplishmentSection } from "./accomplishment-section.js";
import { createActivitySection } from "./activity-section.js";
import { createAddEducationCTA } from "./add-education-cta.js";
import { createBackgroundImageSection } from "./background-image-section.js";
import { createContactSection } from "./contact-section.js";
import {
  accomplishments,
  contactList,
  educationList,
  experiencesList,
  otherProfilesList,
  skillsList,
} from "./data.js";
import { createDownloadCTASection } from "./download-app-cta-section.js";
import { createEducationSection } from "./education-section.js";
import { createExperienceSection } from "./experience-section.js";
import { createFeaturedSection } from "./feature-section.js";
import { createFeaturedOverlay } from "./featured-overlay.js";
import { createFooter } from "./footer.js";
import { createHeader } from "./header.js";
import { createOtherProfilesSection } from "./other-similar-profiles-section.js";
import { createOverlay } from "./overlay.js";
import { createPrivateToYouSection } from "./private-to-you-section.js";
import { createProfileActionSection } from "./profile-action-section.js";
import { createProfileInfoSection } from "./profile-info-section.js";
import { createRecommendationSection } from "./recommendation-section.js";
import { createActivitySeeAllButton } from "./see-all-button.js";
import { createSkillSection } from "./skill-section.js";
import { createVolunteeringSection } from "./volunteering-section.js";

const header = createHeader();
const backgroundImgSection = createBackgroundImageSection();
const profileActionSection = createProfileActionSection();
const profileInfoSection = createProfileInfoSection();
const aboutSection = createAboutSection();
const featuredSection = createFeaturedSection();
const privateToYouSection = createPrivateToYouSection();
const activitySection = createActivitySection();
const seeAllBtnLink = createActivitySeeAllButton();
const experienceSection = createExperienceSection(experiencesList);
const educationSection = createEducationSection(educationList);
const addEducationCTA = createAddEducationCTA();
const volunteeringSection = createVolunteeringSection();
const skillSection = createSkillSection(skillsList);
const recommendationSection = createRecommendationSection();
const accomplishmentSection = createAccomplishmentSection(accomplishments);
const contactSection = createContactSection(contactList);
const otherSimilarProfilesSection =
  createOtherProfilesSection(otherProfilesList);
const tryLinkedInAppCTA = createDownloadCTASection();
const footer = createFooter();
const overlay = createOverlay();
const featuredOverlay = createFeaturedOverlay();
const addAccOverlay = createAddAccomplishmentOverlay();

const bodyEle = document.querySelector("body") as HTMLElement;
bodyEle.className = "py-50px text-small";
bodyEle.prepend(header);
bodyEle.insertBefore(backgroundImgSection, header.nextSibling);
bodyEle.insertBefore(profileActionSection, backgroundImgSection.nextSibling);
bodyEle.insertBefore(profileInfoSection, profileActionSection.nextSibling);
bodyEle.insertBefore(aboutSection, profileInfoSection.nextSibling);
bodyEle.insertBefore(featuredSection, aboutSection.nextSibling);
bodyEle.insertBefore(privateToYouSection, featuredSection.nextSibling);
bodyEle.insertBefore(activitySection, privateToYouSection.nextSibling);
bodyEle.insertBefore(seeAllBtnLink, activitySection.nextSibling);
bodyEle.insertBefore(experienceSection, seeAllBtnLink.nextSibling);
bodyEle.insertBefore(educationSection, experienceSection.nextSibling);
bodyEle.insertBefore(addEducationCTA, educationSection.nextSibling);
bodyEle.insertBefore(volunteeringSection, addEducationCTA.nextSibling);
bodyEle.insertBefore(skillSection, volunteeringSection.nextSibling);
bodyEle.insertBefore(recommendationSection, skillSection.nextSibling);
bodyEle.insertBefore(accomplishmentSection, recommendationSection.nextSibling);
bodyEle.insertBefore(contactSection, accomplishmentSection.nextSibling);
if (otherSimilarProfilesSection) {
  bodyEle.insertBefore(otherSimilarProfilesSection, contactSection.nextSibling);
}
bodyEle.insertBefore(tryLinkedInAppCTA, contactSection.nextSibling);
bodyEle.insertBefore(footer, tryLinkedInAppCTA.nextSibling);
bodyEle.insertBefore(overlay, footer.nextSibling);
overlay.appendChild(featuredOverlay);
overlay.appendChild(addAccOverlay);
