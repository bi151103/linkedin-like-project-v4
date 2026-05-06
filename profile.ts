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
import { createEducationSection } from "./education-section.js";
import { createExperienceSection } from "./experience-section.js";
import { createFeaturedSection } from "./feature-section.js";
import { createFeaturedOverlay } from "./featured-overlay.js";
import { createOtherProfilesSection } from "./other-similar-profiles-section.js";
import { overlay } from "./overlay.js";
import { createPrivateToYouSection } from "./private-to-you-section.js";
import { createProfileActionSection } from "./profile-action-section.js";
import { createProfileInfoSection } from "./profile-info-section.js";
import { createRecommendationSection } from "./recommendation-section.js";
import { createActivitySeeAllButton } from "./see-all-button.js";
import { createSkillSection } from "./skill-section.js";
import { createVolunteeringSection } from "./volunteering-section.js";

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
const featuredOverlay = createFeaturedOverlay();
const addAccOverlay = createAddAccomplishmentOverlay();

const profile = document.createElement("div");
profile.prepend(backgroundImgSection);
profile.insertBefore(profileActionSection, backgroundImgSection.nextSibling);
profile.insertBefore(profileInfoSection, profileActionSection.nextSibling);
profile.insertBefore(aboutSection, profileInfoSection.nextSibling);
profile.insertBefore(featuredSection, aboutSection.nextSibling);
profile.insertBefore(privateToYouSection, featuredSection.nextSibling);
profile.insertBefore(activitySection, privateToYouSection.nextSibling);
profile.insertBefore(seeAllBtnLink, activitySection.nextSibling);
profile.insertBefore(experienceSection, seeAllBtnLink.nextSibling);
profile.insertBefore(educationSection, experienceSection.nextSibling);
profile.insertBefore(addEducationCTA, educationSection.nextSibling);
profile.insertBefore(volunteeringSection, addEducationCTA.nextSibling);
profile.insertBefore(skillSection, volunteeringSection.nextSibling);
profile.insertBefore(recommendationSection, skillSection.nextSibling);
profile.insertBefore(accomplishmentSection, recommendationSection.nextSibling);
profile.insertBefore(contactSection, accomplishmentSection.nextSibling);
if (otherSimilarProfilesSection) {
  profile.insertBefore(otherSimilarProfilesSection, contactSection.nextSibling);
}
overlay.appendChild(featuredOverlay);
overlay.appendChild(addAccOverlay);

export default profile;
