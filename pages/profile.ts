import { createAboutSection } from "../components/about-section.js";
import { createAddAccomplishmentOverlay } from "../components/accomplishment-overlay.js";
import { createAccomplishmentSection } from "../components/accomplishment-section.js";
import { createActivitySection } from "../components/activity-section.js";
import { createAddEducationCTA } from "../components/add-education-cta.js";
import { createBackgroundImageSection } from "../components/background-image-section.js";
import { createContactSection } from "../components/contact-section.js";
import {
  accomplishments,
  contactList,
  educationList,
  otherProfilesList,
  skillsList,
} from "../data.js";
import { createDownloadCTASection } from "../components/download-app-cta-section.js";
import { createEducationSection } from "../components/education-section.js";
import { createExperienceSection } from "../components/experience-section.js";
import { createFeaturedSection } from "../components/feature-section.js";
import { createFeaturedOverlay } from "../components/featured-overlay.js";
import { createFooter } from "../components/footer.js";
import { createHeader } from "../components/header.js";
import { createOtherProfilesSection } from "../components/other-similar-profiles-section.js";
import { overlay } from "../components/overlay.js";
import { createPrivateToYouSection } from "../components/private-to-you-section.js";
import { createProfileActionSection } from "../components/profile-action-section.js";
import { createProfileInfoSection } from "../components/profile-info-section.js";
import { createRecommendationSection } from "../components/recommendation-section.js";
import { createActivitySeeAllButton } from "../components/see-all-button.js";
import { getConnections, getExperiences, getUserInfo } from "../service.js";
import { createSkillSection } from "../components/skill-section.js";
import { createVolunteeringSection } from "../components/volunteering-section.js";

export default async function createProfile() {
  const profile = document.createElement("div");

  const userInfo = await getUserInfo();
  const experiences = ((await getExperiences()) ?? []).sort(
    (a, b) =>
      new Date(b.experiences[0].duration.start).getTime() -
      new Date(a.experiences[0].duration.start).getTime(),
  );
  const lastExperiences = experiences[0];
  const connectionsList = await getConnections();

  const header = createHeader();
  const tryLinkedInAppCTA = createDownloadCTASection();
  const footer = createFooter();
  const backgroundImgSection = createBackgroundImageSection();
  const profileActionSection = createProfileActionSection();
  let profileInfoSection: HTMLElement;
  if (userInfo && lastExperiences && connectionsList) {
    profileInfoSection = createProfileInfoSection(
      userInfo,
      lastExperiences.company,
      connectionsList.count,
    );
  } else {
    throw new Error("Failed to load profile module");
  }
  const aboutSection = createAboutSection();
  const featuredSection = createFeaturedSection();
  const privateToYouSection = createPrivateToYouSection();
  const activitySection = createActivitySection();
  const seeAllBtnLink = createActivitySeeAllButton();
  const experienceSection = createExperienceSection(experiences);
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

  profile.dataset.id = "profile-root";
  profile.className = "py-50px";
  profile.prepend(header);
  profile.append(tryLinkedInAppCTA);
  profile.insertBefore(footer, tryLinkedInAppCTA.nextSibling);
  profile.insertBefore(overlay, footer.nextSibling);

  profile.insertBefore(backgroundImgSection, header.nextSibling);
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
  profile.insertBefore(
    accomplishmentSection,
    recommendationSection.nextSibling,
  );
  profile.insertBefore(contactSection, accomplishmentSection.nextSibling);
  if (otherSimilarProfilesSection) {
    profile.insertBefore(
      otherSimilarProfilesSection,
      contactSection.nextSibling,
    );
  }
  overlay.appendChild(featuredOverlay);
  overlay.appendChild(addAccOverlay);

  return profile;
}
