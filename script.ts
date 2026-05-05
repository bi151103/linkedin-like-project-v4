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

const app = document.querySelector("#app") as HTMLElement;
app.className = "py-50px text-small";
app.prepend(header);
app.insertBefore(backgroundImgSection, header.nextSibling);
app.insertBefore(profileActionSection, backgroundImgSection.nextSibling);
app.insertBefore(profileInfoSection, profileActionSection.nextSibling);
app.insertBefore(aboutSection, profileInfoSection.nextSibling);
app.insertBefore(featuredSection, aboutSection.nextSibling);
app.insertBefore(privateToYouSection, featuredSection.nextSibling);
app.insertBefore(activitySection, privateToYouSection.nextSibling);
app.insertBefore(seeAllBtnLink, activitySection.nextSibling);
app.insertBefore(experienceSection, seeAllBtnLink.nextSibling);
app.insertBefore(educationSection, experienceSection.nextSibling);
app.insertBefore(addEducationCTA, educationSection.nextSibling);
app.insertBefore(volunteeringSection, addEducationCTA.nextSibling);
app.insertBefore(skillSection, volunteeringSection.nextSibling);
app.insertBefore(recommendationSection, skillSection.nextSibling);
app.insertBefore(accomplishmentSection, recommendationSection.nextSibling);
app.insertBefore(contactSection, accomplishmentSection.nextSibling);
if (otherSimilarProfilesSection) {
  app.insertBefore(otherSimilarProfilesSection, contactSection.nextSibling);
}
app.insertBefore(tryLinkedInAppCTA, contactSection.nextSibling);
app.insertBefore(footer, tryLinkedInAppCTA.nextSibling);
app.insertBefore(overlay, footer.nextSibling);
overlay.appendChild(featuredOverlay);
overlay.appendChild(addAccOverlay);
