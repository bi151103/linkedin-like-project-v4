import { PRESENT_CONTENT } from "./constant.js";
import {
  DEFAULT_MAX_ITEM_SHOWN_IN_ACCOMPLISHMENTS_LIST,
  NOT_AVALABLE_CONTENT,
} from "./constant.js";
import type {
  AccomplishmentData,
  Profile,
  Accomplishments,
  AccomplishmentType,
} from "./model";

const closeDownloadApp = (e: Event) => {
  const downloadAppCTAEle = document.querySelector(
    "[data-id='download-cta']",
  ) as HTMLElement;
  //there are some ways to adjust the style of an element in js
  // downloadAppCTAEle.setAttribute("style", "display: none;");
  // downloadAppCTAEle.style.display = "none";
  downloadAppCTAEle.classList.toggle("hidden");
};
const shareProfile = async (e: Event) => {
  const shareProfileBtn = e.currentTarget as HTMLElement;
  const shareData = {
    //there are 2 ways to access the data-attribute attribute of elements
    // title: shareProfileBtn.getAttribute("data-title"),
    // text: shareProfileBtn.getAttribute("data-text"),
    // url: shareProfileBtn.getAttribute("data-url"),
    title: shareProfileBtn.dataset.title,
    text: shareProfileBtn.dataset.text,
    url: shareProfileBtn.dataset.url,
  };
  // console.log(shareData);
  try {
    await navigator.share(shareData);
  } catch (e) {
    console.error("The browser does not support the sharing with navigator");
  }
};
const overlayEle = document.querySelector("[data-id='overlay']") as HTMLElement;
const addFeaturedOverlayEle = document.querySelector(
  "[data-id='overlay'] [data-id='add-featured-overlay']",
) as HTMLElement;
const bodyEle = document.querySelector("body") as HTMLElement;

const closeOverlay = (e: Event) => {
  const overlayChildrenEles = document.querySelectorAll(
    "[data-id='overlay'] > *",
  );
  for (const overlayEle of overlayChildrenEles) {
    if (!overlayEle.classList.contains("hidden")) {
      overlayEle.classList.add("hidden");
    }
  }
  if (!overlayEle.classList.contains("hidden")) {
    overlayEle.classList.add("hidden");
    bodyEle.classList.remove("overflow-hidden");
  }
  e.stopPropagation();
};
const showAddFeatureOverlay = (e: Event) => {
  if (overlayEle.classList.contains("hidden")) {
    overlayEle.classList.toggle("hidden");
  }
  bodyEle.classList.toggle("overflow-hidden");
  if (addFeaturedOverlayEle.classList.contains("hidden")) {
    addFeaturedOverlayEle.classList.remove("hidden");
  }
};

const closeDownloadAppCTABtn = document.querySelector(
  '[data-id="download-cta"] button[data-action="close"]',
) as HTMLElement;
closeDownloadAppCTABtn.addEventListener("click", closeDownloadApp);

const shareProfileBtn = document.querySelector(
  '[data-id="profile-action"] button[data-action="share"',
) as HTMLElement;
shareProfileBtn.addEventListener("click", shareProfile);

const addFeaturedBtn = document.querySelector(
  'button[data-action="add-featured"',
) as HTMLElement;
addFeaturedBtn.addEventListener("click", showAddFeatureOverlay);

const closeOverlayBtn = document.querySelector(
  '[data-id="overlay"] button[data-action="close"]',
) as HTMLElement;
closeOverlayBtn.addEventListener("click", closeOverlay);

addFeaturedOverlayEle.addEventListener("click", (e) => {
  //stop propagation when clicking on the dialog area to prevent the dialog from closing
  e.stopPropagation();
});

overlayEle.addEventListener("click", closeOverlay);

const addFeaturedTypesList = document.querySelector(
  "ul[data-id='add-featured-types-list']",
) as HTMLElement;
addFeaturedTypesList.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const addPhotoBtn = target.closest("button[data-action='add-photo']");
  if (addPhotoBtn) {
    const selectImgInput = document.querySelector(
      "[data-id='featured-image-input']",
    ) as HTMLElement;
    selectImgInput.click();
    return;
  }
  const uploadDocumentBtn = target.closest(
    "button[data-action='upload-document']",
  );
  if (uploadDocumentBtn) {
    const selectDocumentInput = document.querySelector(
      "[data-id='featured-document-input']",
    ) as HTMLElement;
    selectDocumentInput.click();
  }
});

const experienceSection = document.querySelector(
  "section[data-id='experience']",
) as HTMLElement;
experienceSection.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const addExperienceBtn = target.closest(
    "button[data-action='add-experience']",
  );
  if (addExperienceBtn) {
    window.location.href =
      (addExperienceBtn as HTMLElement).dataset.link ?? "#";
    return;
  }
  const editExperienceBtn = target.closest(
    "button[data-action='edit-experience']",
  );
  if (editExperienceBtn) {
    const editExperienceLinkAttr = (editExperienceBtn as HTMLElement).dataset
      .link;
    window.location.href = editExperienceLinkAttr
      ? `${editExperienceLinkAttr}?id=${(editExperienceBtn as HTMLElement).dataset.id}`
      : "#";

    //add preventDefault to prevent the functionality in the a element which is the ascendant of the edit experience button
    e.preventDefault();
    return;
  }
  const showMoreExpContentBtn = target.closest(
    "button[data-action='show-more-experience-content']",
  );
  if (showMoreExpContentBtn) {
    const expContentParagraphEle =
      showMoreExpContentBtn.parentElement as HTMLElement;
    if (expContentParagraphEle.classList.contains("truncated-4")) {
      expContentParagraphEle.classList.remove("truncated-4");

      showMoreExpContentBtn.textContent = "See less";
    } else {
      expContentParagraphEle.classList.add("truncated-4");

      showMoreExpContentBtn.textContent = "...more";
    }

    //add preventDefault to prevent the functionality in the a element which is the ascendant of the show more experience content button
    e.preventDefault();
    return;
  }
  const expContents = target.closest("p[data-id='experience-content']");
  if (expContents) {
    e.preventDefault();
    return;
  }
});

const educationSection = document.querySelector(
  "[data-id='education']",
) as HTMLElement;
educationSection.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const editEducationBTn = target.closest(
    "button[data-action='edit-education']",
  );
  if (editEducationBTn) {
    window.location.href = `${(editEducationBTn as HTMLElement).dataset.link}?id=${(editEducationBTn as HTMLElement).dataset.id}`;
    e.preventDefault();
    return;
  }
});

const addEducationCTA = document.querySelector(
  "[data-id='add-education-cta']",
) as HTMLElement;
addEducationCTA.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const closeCTABtn = target.closest(
    "button[data-action='close-add-education-cta']",
  );
  if (closeCTABtn) {
    if (!addEducationCTA.classList.contains("hidden")) {
      addEducationCTA.classList.add("hidden");
    }
    return;
  }
  const addEducationBtn = target.closest("button[data-action='add-education']");
  if (addEducationBtn) {
    window.location.href = (addEducationBtn as HTMLElement).dataset.link ?? "#";
    return;
  }
});

const addVolunteeringBtn = document.querySelector(
  "button[data-action='add-volunteering']",
) as HTMLElement;
addVolunteeringBtn.addEventListener("click", (e) => {
  window.location.href = (e.currentTarget as HTMLElement).dataset.link ?? "#";
});

const addSkillsBtn = document.querySelector(
  "button[data-action='add-skills']",
) as HTMLElement;
addSkillsBtn.addEventListener("click", (e) => {
  window.location.href = (e.currentTarget as HTMLElement).dataset.link ?? "#";
});

const certificationsList: AccomplishmentData[] = [
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

const projectsList: AccomplishmentData[] = [
  {
    id: "project-3",
    name: "LinkedIn Like Project",
    duration: {
      start: "04/01/2024",
      end: "05/01/2024",
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

const accomplishments = {
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

const createAccomplishmentItem = (
  listEle: HTMLElement,
  listData: AccomplishmentData,
) => {
  const listItem = document.createElement("li");
  listEle.appendChild(listItem);
  listItem.classList = "not-first:mt-10px flex items-start";
  listItem.dataset.id = listData.id;

  const listItemLeft = document.createElement("div");
  listItem.appendChild(listItemLeft);
  listItemLeft.classList = "basis-[calc(100%-50px)]";

  const accName = document.createElement("p");
  listItemLeft.appendChild(accName);
  accName.classList = "text-small-bold text-emphasis-tx";
  accName.textContent = listData.name;

  const accSubtitle = document.createElement("p");
  listItemLeft.appendChild(accSubtitle);
  switch (listData.type) {
    case "certification":
      accSubtitle.textContent = listData.authority ?? NOT_AVALABLE_CONTENT;
      break;
    case "project":
      const duration = listData.duration;
      if (duration) {
        let startDate;
        let endDate;
        if (duration.start && duration.end) {
          startDate = new Date(duration.start);
          const displayedStartDate = `${new Intl.DateTimeFormat("en-US", {
            month: "short",
          }).format(startDate)} ${new Intl.DateTimeFormat("en-US", {
            year: "numeric",
          }).format(startDate)}`;
          endDate = new Date(duration.end);
          const displayedEndDate = `${new Intl.DateTimeFormat("en-US", {
            month: "short",
          }).format(endDate)} ${new Intl.DateTimeFormat("en-US", {
            year: "numeric",
          }).format(endDate)}`;
          accSubtitle.textContent = `${displayedStartDate} - ${displayedEndDate}`;
        } else if (duration.start) {
          startDate = new Date(duration.start);
          const displayedStartDate = `${new Intl.DateTimeFormat("en-US", {
            month: "short",
          }).format(startDate)} ${new Intl.DateTimeFormat("en-US", {
            year: "numeric",
          }).format(startDate)}`;
          accSubtitle.textContent = `${displayedStartDate} - ${PRESENT_CONTENT}`;
        } else if (duration.end) {
          endDate = new Date(duration.end);
          const displayedEndDate = `${new Intl.DateTimeFormat("en-US", {
            month: "short",
          }).format(endDate)} ${new Intl.DateTimeFormat("en-US", {
            year: "numeric",
          }).format(endDate)}`;
          accSubtitle.textContent = `${displayedEndDate}`;
        } else {
          accSubtitle.textContent = NOT_AVALABLE_CONTENT;
        }
      } else {
        accSubtitle.textContent = NOT_AVALABLE_CONTENT;
      }
      break;
    default:
      accSubtitle.textContent = NOT_AVALABLE_CONTENT;
      break;
  }

  const editAccBtn = document.createElement("button");
  listItem.appendChild(editAccBtn);
  editAccBtn.classList = "ml-auto";
  editAccBtn.dataset.action = "edit-accomplishment";
  switch (listData.type) {
    case "certification":
      editAccBtn.dataset.link = `./edit-certification.html?id=${listData.id}`;
      break;
    case "project":
      editAccBtn.dataset.link = `./edit-project.html?id=${listData.id}`;
      break;
    default:
      editAccBtn.dataset.link = `#`;
      break;
  }

  const editAccBtnImg = document.createElement("img");
  editAccBtn.appendChild(editAccBtnImg);
  editAccBtnImg.src = "./images/icons8-edit-100.png";
  editAccBtnImg.classList = "w-sm-img h-sm-img";
};

function createAccomplishmentSection(accomplishments: Accomplishments) {
  if (!accomplishments) {
    return;
  }

  //add event hanlder for the add accomplishment and edit buttons through event delegation
  const addEventListenerToAccomplishmentSection = (
    accomplishmentSection: HTMLElement,
  ) => {
    accomplishmentSection.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const addAccpmBtn = target.closest(
        "button[data-action='add-accomplishments']",
      );
      if (addAccpmBtn) {
        const addAccomplishmentsOverlayEle = document.querySelector(
          "[data-id='overlay'] [data-id='add-accomplishments-overlay']",
        ) as HTMLElement;
        overlayEle.classList.remove("hidden");
        addAccomplishmentsOverlayEle.classList.remove("hidden");
        bodyEle.classList.add("overflow-hidden");
        return;
      }
      const editBtn = target.closest(
        "button[data-action='edit-accomplishment']",
      );
      if (editBtn) {
        window.location.href = (editBtn as HTMLElement).dataset.link ?? "#";
        return;
      }

      let accomplishmentsList: AccomplishmentData[] = [];
      const seeMoreBtn = target.closest("button[data-action='see-more']");
      if (seeMoreBtn) {
        const listOfAccsEle = (
          seeMoreBtn.parentElement as HTMLElement
        ).querySelector(`ul[data-id]`) as HTMLElement;
        switch (listOfAccsEle.dataset.id) {
          case "certification":
            accomplishmentsList = accomplishments.certificationsList;
            break;
          case "project":
            accomplishmentsList = accomplishments.projectsList;
            break;
          default:
            break;
        }
        for (
          let i = DEFAULT_MAX_ITEM_SHOWN_IN_ACCOMPLISHMENTS_LIST;
          i < accomplishmentsList.length;
          i++
        ) {
          createAccomplishmentItem(listOfAccsEle, accomplishmentsList[i]);
        }

        seeMoreBtn.classList.add("hidden");
        const seeLessBtn = (
          seeMoreBtn.parentElement as HTMLElement
        ).querySelector("button[data-action='see-less']") as HTMLElement;
        seeLessBtn.classList.remove("hidden");
        return;
      }

      const seeLessBtn = target.closest("button[data-action='see-less']");
      if (seeLessBtn) {
        const listOfAccsEle = (
          seeLessBtn.parentElement as HTMLElement
        ).querySelector(`ul[data-id]`) as HTMLElement;
        switch (listOfAccsEle.dataset.id) {
          case "certification":
            accomplishmentsList = accomplishments.certificationsList;
            break;
          case "project":
            accomplishmentsList = accomplishments.projectsList;
            break;
          default:
            break;
        }
        const accChildren = listOfAccsEle.children;
        for (
          let i = DEFAULT_MAX_ITEM_SHOWN_IN_ACCOMPLISHMENTS_LIST;
          i < accomplishmentsList.length;
          i++
        ) {
          listOfAccsEle.removeChild(accChildren[accChildren.length - 1]);
        }

        seeLessBtn.classList.add("hidden");
        const seeMoreBtn = (
          seeLessBtn.parentElement as HTMLElement
        ).querySelector("button[data-action='see-more']") as HTMLElement;
        seeMoreBtn.classList.remove("hidden");
        return;
      }
    });
  };

  const accomplishmentSection = document.createElement("section");
  const recommendationSection = document.querySelector(
    "[data-id='recommendation']",
  ) as HTMLElement;
  recommendationSection.after(accomplishmentSection);
  accomplishmentSection.dataset.id = "acccomplishment";
  accomplishmentSection.classList = "mt-10px p-15px bg-white";

  const accpmSectionHeader = document.createElement("h2");
  accomplishmentSection.appendChild(accpmSectionHeader);
  accpmSectionHeader.textContent = "Accomplishments";

  const addAccpmBtn = document.createElement("button");
  accomplishmentSection.appendChild(addAccpmBtn);
  addAccpmBtn.textContent = "Add accomplishments";
  addAccpmBtn.classList = "mt-10px plus-before";
  addAccpmBtn.dataset.action = "add-accomplishments";

  createAccomplishmentSubsection(
    accomplishmentSection,
    accomplishments.certificationsList,
    "certification",
  );
  createAccomplishmentSubsection(
    accomplishmentSection,
    accomplishments.projectsList,
    "project",
  );
  createAccomplishmentSubsection(
    accomplishmentSection,
    accomplishments.publicationsList,
    "publication",
  );
  createAccomplishmentSubsection(
    accomplishmentSection,
    accomplishments.patentsList,
    "patent",
  );
  createAccomplishmentSubsection(
    accomplishmentSection,
    accomplishments.coursesList,
    "course",
  );
  createAccomplishmentSubsection(
    accomplishmentSection,
    accomplishments.honorsAndAwardsList,
    "honor-award",
  );
  createAccomplishmentSubsection(
    accomplishmentSection,
    accomplishments.testScoresList,
    "test-score",
  );
  createAccomplishmentSubsection(
    accomplishmentSection,
    accomplishments.languagesList,
    "language",
  );
  createAccomplishmentSubsection(
    accomplishmentSection,
    accomplishments.organizationsList,
    "organization",
  );

  addEventListenerToAccomplishmentSection(accomplishmentSection);
}

function createAccomplishmentSubsection(
  accomplishmentSection: HTMLElement,
  accomplishmentsList: AccomplishmentData[],
  accomplishmentType: AccomplishmentType,
) {
  if (accomplishmentsList.length < 1) {
    return;
  }
  const sectionContainer = document.createElement("div");
  accomplishmentSection.appendChild(sectionContainer);

  sectionContainer.classList = "mt-10px flex";
  sectionContainer.dataset.id = accomplishmentType;

  const numberOfAccEle = document.createElement("div");
  sectionContainer.appendChild(numberOfAccEle);
  numberOfAccEle.classList =
    "w-50px h-50px text-[2.4rem] text-emphasis-tx text-right";
  numberOfAccEle.textContent = `${accomplishmentsList.length}`;

  // <div class="ml-10px basis-[calc(100%-50px)]">
  const accRightEle = document.createElement("div");
  sectionContainer.appendChild(accRightEle);
  accRightEle.classList = "ml-10px basis-[calc(100%-50px)]";

  // <p class="text-medium-bold text-emphasis-tx">Certifications</p>
  const accTypeEle = document.createElement("p");
  accRightEle.appendChild(accTypeEle);
  accTypeEle.classList = "text-medium-bold text-emphasis-tx";
  switch (accomplishmentType) {
    case "certification":
      accTypeEle.textContent = "Certifications";
      break;
    case "project":
      accTypeEle.textContent = "Projects";
      break;
    default:
      break;
  }

  // <ul class="w-full" data-id="certifications-list">
  const listOfAccsEle = document.createElement("ul");
  accRightEle.appendChild(listOfAccsEle);
  listOfAccsEle.classList = "w-full";
  listOfAccsEle.dataset.id = accomplishmentType;

  /**
   *  <li class="not-first:mt-10px flex items-start">
        <div class="basis-[calc(100%-50px)]">
          <p class="text-small-bold text-emphasis-tx">TOEIC 800 LR</p>
          <p>ETS</p>
        </div>
        <button class="ml-auto">
          <img
            src="./images/icons8-edit-100.png"
            class="w-sm-img h-sm-img"
          />
        </button>
      </li>
   */

  for (
    let i = 0;
    i <
    Math.min(
      DEFAULT_MAX_ITEM_SHOWN_IN_ACCOMPLISHMENTS_LIST,
      accomplishmentsList.length,
    );
    i++
  ) {
    createAccomplishmentItem(listOfAccsEle, accomplishmentsList[i]);
  }

  //create see more button and see less button
  if (
    accomplishmentsList.length > DEFAULT_MAX_ITEM_SHOWN_IN_ACCOMPLISHMENTS_LIST
  ) {
    /**
     *  <button class="mt-10px chevron-down-after" data-action="see-more">
          See more
        </button>
     */
    const seeMoreBtn = document.createElement("button");
    accRightEle.appendChild(seeMoreBtn);
    seeMoreBtn.classList = "mt-10px chevron-down-after";
    seeMoreBtn.dataset.action = "see-more";
    seeMoreBtn.textContent = "See more";

    /**
     * <button
        class="mt-10px chevron-down-after block"
        data-action="see-less"
      >
        See less
      </button>
     */
    const seeLessBtn = document.createElement("button");
    accRightEle.appendChild(seeLessBtn);
    seeLessBtn.classList = "mt-10px chevron-top-after hidden";
    seeLessBtn.dataset.action = "see-less";
    seeLessBtn.textContent = "See less";
  }
}

createAccomplishmentSection(accomplishments);

// const projectList = document.querySelector(
//   "ul[data-id='projects-list']",
// ) as HTMLElement;
// projectList.addEventListener("click", (e) => {
//   const target = e.target as HTMLElement;
//   //check if target is the edit project button under the list item
//   const clickedEleClosestBtn = target.closest(
//     "button[data-action='edit-project']",
//   ) as HTMLElement;
//   if (clickedEleClosestBtn) {
//     const correspondingListItem = clickedEleClosestBtn.closest(
//       "li[data-id]",
//     ) as HTMLElement;
//     window.location.href = `${clickedEleClosestBtn.dataset.link}?id=${correspondingListItem.dataset.id}`;
//   }
// });

const otherProfilesList: Profile[] = [
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

function createOtherProfilesSection() {
  if (otherProfilesList.length < 1) return;

  const newSection = document.createElement("section");
  const contactSection = document.querySelector(
    "section[data-id='contact']",
  ) as HTMLElement;
  contactSection.after(newSection);
  newSection.dataset.id = "other-profiles";
  newSection.classList = "p-15px";

  const otherProfileHeader = document.createElement("h2");
  newSection.appendChild(otherProfileHeader);
  otherProfileHeader.textContent = "Other similar profiles";

  const listOfProfiles = document.createElement("ul");
  newSection.appendChild(listOfProfiles);
  listOfProfiles.classList = "mt-20px";

  for (let i = 0; i < otherProfilesList.length; i++) {
    const listItem = document.createElement("li");
    listOfProfiles.appendChild(listItem);
    listItem.classList =
      "flex items-center *:text-inherit *:font-normal not-first:mt-10px";
    listItem.dataset.id = otherProfilesList[i].id;

    const profileItemLeft = document.createElement("a");
    listItem.appendChild(profileItemLeft);
    profileItemLeft.href = `?id=${otherProfilesList[i].id}`;
    profileItemLeft.classList = "min-w-50px";

    const profileImg = document.createElement("img");
    profileItemLeft.appendChild(profileImg);
    profileImg.src = otherProfilesList[i].profileImgUrl ?? "";
    profileImg.classList = "w-md-img h-md-img rounded-full";

    const profileItemMiddle = document.createElement("a");
    listItem.appendChild(profileItemMiddle);
    profileItemMiddle.href = `?id=${otherProfilesList[i].id}`;
    profileItemMiddle.classList = "ml-10px basis-[calc(100%-50px-50px)]";

    const profileItemMiddleTextContainer = document.createElement("p");
    profileItemMiddle.appendChild(profileItemMiddleTextContainer);

    const profileName = document.createElement("span");
    profileItemMiddleTextContainer.appendChild(profileName);
    profileName.classList = "text-medium-bold text-emphasis-tx";
    profileName.textContent = otherProfilesList[i].name;

    const dotSeparatorBtwNameAndConnectionRel = document.createElement("span");
    profileItemMiddleTextContainer.appendChild(
      dotSeparatorBtwNameAndConnectionRel,
    );
    dotSeparatorBtwNameAndConnectionRel.classList = "dot";

    const profileConnectionRel = document.createElement("span");
    profileItemMiddleTextContainer.appendChild(profileConnectionRel);
    profileConnectionRel.classList = "text-low-emphasis-tx";
    profileConnectionRel.textContent =
      otherProfilesList[i].connection.relationship;

    const profileHeadline = document.createElement("p");
    profileItemMiddle.appendChild(profileHeadline);
    profileHeadline.classList = "text-xs-small";
    profileHeadline.textContent = otherProfilesList[i].headline ?? "";

    if (
      otherProfilesList[i].connection.relationship === "1st" ||
      (otherProfilesList[i].connection.relationship !== "1st" &&
        otherProfilesList[i].connection.addConnectionInvitationSent === false)
    ) {
      const profileItemRight = document.createElement("button");
      listItem.appendChild(profileItemRight);
      profileItemRight.classList =
        "min-w-40px basis-40px h-40px border border-[#000000bf] rounded-full";

      profileItemRight.dataset.action =
        otherProfilesList[i].connection.relationship === "1st"
          ? "send-message"
          : "add-connection";
      profileItemRight.dataset.link =
        otherProfilesList[i].connection.relationship === "1st"
          ? `./send-message.html?id=${otherProfilesList[i].id}`
          : undefined;

      const profileItemRightImg = document.createElement("img");
      profileItemRight.appendChild(profileItemRightImg);
      profileItemRightImg.src =
        otherProfilesList[i].connection.relationship === "1st"
          ? "./images/icons8-email-send-100.png"
          : "./images/icons8-add-friend-100.png";
      profileItemRightImg.classList = "w-sm-img h-sm-img";

      if (otherProfilesList[i].connection.relationship === "1st") {
        profileItemRight.addEventListener("click", (e) => {
          window.location.href = profileItemRight.dataset.link ?? "#";
        });
      } else {
        profileItemRight.addEventListener("click", (e) => {
          otherProfilesList[i].connection.addConnectionInvitationSent = true;
          profileItemRight.remove();

          const newProfileItemRight = document.createElement("span");
          listItem.appendChild(newProfileItemRight);
          newProfileItemRight.classList =
            "min-w-min basis-min text-xs-small text-emphasis-tx text-center";
          newProfileItemRight.textContent = "Invited";
        });
      }
    } else {
      const profileItemRight = document.createElement("span");
      listItem.appendChild(profileItemRight);
      profileItemRight.classList =
        "min-w-min basis-min text-xs-small text-emphasis-tx text-center";
      profileItemRight.textContent = "Invited";
    }
  }
}

createOtherProfilesSection();
