import {
  DEFAULT_MAX_ITEM_SHOWN_IN_ACCOMPLISHMENTS_LIST,
  NOT_AVALABLE_CONTENT,
} from "./constant.js";
import type { AccomplishmentModel, Profile } from "./model";

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
  //stop propagation when clicking on the dialog to prevent the dialog from closing
  e.stopPropagation();
});

overlayEle.addEventListener("click", closeOverlay);

const selectImage = (e: Event) => {
  const selectImgInput = document.querySelector(
    "[data-id='featured-image-input'",
  ) as HTMLElement;
  selectImgInput.click();
};
const addPhotoBtn = document.querySelector(
  "[data-action='add-photo'",
) as HTMLElement;
addPhotoBtn.addEventListener("click", selectImage);

const selectDocument = (e: Event) => {
  const selectDocumentInput = document.querySelector(
    "[data-id='featured-document-input'",
  ) as HTMLElement;
  selectDocumentInput.click();
};
const uploadDocumentBtn = document.querySelector(
  "[data-action='upload-document'",
) as HTMLElement;
uploadDocumentBtn.addEventListener("click", selectDocument);

const addExperienceBtn = document.querySelector(
  "button[data-action='add-experience']",
) as HTMLElement;
addExperienceBtn.addEventListener("click", (e: Event) => {
  window.location.href = (e.currentTarget as HTMLElement).dataset.link ?? "#";
});

const editExperienceBtns = document.querySelectorAll(
  "button[data-action='edit-experience']",
);
for (const editExperienceBtn of editExperienceBtns) {
  editExperienceBtn.addEventListener("click", (e) => {
    const editExperienceLinkAttr = (e.currentTarget as HTMLElement).dataset
      .link;
    window.location.href = editExperienceLinkAttr
      ? `${editExperienceLinkAttr}?id=${(e.currentTarget as HTMLElement).dataset.id}`
      : "#";

    e.preventDefault();
  });
}

const showMoreExpContentBtns = document.querySelectorAll(
  "button[data-action='show-more-experience-content']",
);
for (const showMoreExpContentBtn of showMoreExpContentBtns) {
  showMoreExpContentBtn.addEventListener("click", (e) => {
    const expContentParagraphEle = (e.currentTarget as HTMLElement)
      .parentElement as HTMLElement;
    if (expContentParagraphEle.classList.contains("truncated-4")) {
      expContentParagraphEle.classList.remove("truncated-4");

      (e.currentTarget as HTMLElement).textContent = "See less";
    } else {
      expContentParagraphEle.classList.add("truncated-4");

      (e.currentTarget as HTMLElement).textContent = "...more";
    }

    e.preventDefault();
  });
}

const expContents = document.querySelectorAll(
  "p[data-id='experience-content']",
);
for (const expContent of expContents) {
  expContent.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

const editEducationBtns = document.querySelectorAll(
  "button[data-action='edit-education']",
);
for (const editEducationBtn of editEducationBtns) {
  editEducationBtn.addEventListener("click", (e) => {
    window.location.href = `${(e.currentTarget as HTMLElement).dataset.link}?${(e.currentTarget as HTMLElement).dataset.id}`;
    e.preventDefault();
  });
}

const closeAddEducationCTABtn = document.querySelector(
  "button[data-action='close-add-education-cta']",
) as HTMLElement;
closeAddEducationCTABtn.addEventListener("click", (e) => {
  const addEducationCTAELe = document.querySelector(
    "[data-id='add-education-cta']",
  ) as HTMLElement;
  if (!addEducationCTAELe.classList.contains("hidden")) {
    addEducationCTAELe.classList.add("hidden");
  }
});

const addEducationBtn = document.querySelector(
  "button[data-action='add-education']",
) as HTMLElement;
addEducationBtn.addEventListener("click", (e) => {
  window.location.href = (e.currentTarget as HTMLElement).dataset.link ?? "#";
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

const addAccomplishmentsBtn = document.querySelector(
  "button[data-action='add-accomplishments']",
) as HTMLElement;
const addAccomplishmentsOverlayEle = document.querySelector(
  "[data-id='overlay'] [data-id='add-accomplishments-overlay']",
) as HTMLElement;
addAccomplishmentsBtn.addEventListener("click", (e) => {
  if (overlayEle.classList.contains("hidden")) {
    overlayEle.classList.remove("hidden");
  }
  bodyEle.classList.toggle("overflow-hidden");
  if (addAccomplishmentsOverlayEle.classList.contains("hidden")) {
    addAccomplishmentsOverlayEle.classList.remove("hidden");
  }
});

const addAccomplishmentBtns = document.querySelectorAll(
  "[data-id='add-accomplishments-overlay'] [data-id='accomplishment-types-list'] button",
);
for (const addAccomplishmentBtn of addAccomplishmentBtns) {
  addAccomplishmentBtn.addEventListener("click", (e) => {
    const currentBtnEle = e.currentTarget as HTMLElement;
    window.location.href = `${currentBtnEle.dataset.link}`;
  });
}

const certificationList: AccomplishmentModel[] = [
  {
    id: "cert-0",
    name: "TOEIC 800 LR",
    authority: "ETS",
  },
  {
    id: "cert-1",
    name: "Microsoft Office Specialist: Microsoft Excel 2016",
    authority: "Microsoft",
  },
  {
    id: "cert-2",
    name: "Microsoft Office Specialist: Microsoft Powerpoint 2016",
    authority: "Microsoft",
  },
  {
    id: "cert-3",
    name: "Jira Fundamentals Badge",
    authority: "Atlassian",
  },
  {
    id: "cert-4",
    name: "Confluence Fundamentals Badge",
    authority: "Atlassian",
  },
  {
    id: "cert-5",
    name: "15 days of Postman - for testers",
    authority: "Canvas Credentials (Badgr)",
  },
  {
    id: "cert-6",
    name: "Fit for Scrum Course",
    authority: "Axon Active - Agile Software Development Company",
  },
];

function createAccomplishmentCertificationSection() {
  if (certificationList.length < 1) {
    return;
  }
  const sectionContainer = document.createElement("div");
  const projectsSection = document.querySelector(
    "[data-id='accomplishments'] [data-id='projects']",
  ) as HTMLElement;
  projectsSection.before(sectionContainer);
  sectionContainer.classList = "mt-10px flex";
  sectionContainer.dataset.id = "certifications";

  const numberOfCertificationEle = document.createElement("div");
  sectionContainer.appendChild(numberOfCertificationEle);
  numberOfCertificationEle.classList =
    "w-50px h-50px text-[2.4rem] text-emphasis-tx text-right";
  numberOfCertificationEle.textContent = `${certificationList.length}`;

  // <div class="ml-10px basis-[calc(100%-50px)]">
  const certificationRightEle = document.createElement("div");
  sectionContainer.appendChild(certificationRightEle);
  certificationRightEle.classList = "ml-10px basis-[calc(100%-50px)]";

  // <p class="text-medium-bold text-emphasis-tx">Certifications</p>
  const certificationTypeEle = document.createElement("p");
  certificationRightEle.appendChild(certificationTypeEle);
  certificationTypeEle.classList = "text-medium-bold text-emphasis-tx";
  certificationTypeEle.textContent = "Certifications";

  // <ul class="w-full" data-id="certifications-list">
  const listOfCertificationsEle = document.createElement("ul");
  certificationRightEle.appendChild(listOfCertificationsEle);
  listOfCertificationsEle.classList = "w-full";
  listOfCertificationsEle.dataset.id = "certifications-list";

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
      certificationList.length,
    );
    i++
  ) {
    const listItem = document.createElement("li");
    listOfCertificationsEle.appendChild(listItem);
    listItem.classList = "not-first:mt-10px flex items-start";
    listItem.dataset.id = certificationList[i].id;

    const listItemLeft = document.createElement("div");
    listItem.appendChild(listItemLeft);
    listItemLeft.classList = "basis-[calc(100%-50px)]";

    const certNameEle = document.createElement("p");
    listItemLeft.appendChild(certNameEle);
    certNameEle.classList = "text-small-bold text-emphasis-tx";
    certNameEle.textContent = certificationList[i].name;

    const certNameAuth = document.createElement("p");
    listItemLeft.appendChild(certNameAuth);
    certNameAuth.textContent =
      certificationList[i].authority ?? NOT_AVALABLE_CONTENT;

    const editCertBtn = document.createElement("button");
    listItem.appendChild(editCertBtn);
    editCertBtn.classList = "ml-auto";
    editCertBtn.dataset.link = `./edit-certification.html?id=${certificationList[i].id}`;
    editCertBtn.addEventListener("click", (e) => {
      window.location.href = editCertBtn.dataset.link ?? "#";
    });

    const editCertBtnImg = document.createElement("img");
    editCertBtn.appendChild(editCertBtnImg);
    editCertBtnImg.src = "./images/icons8-edit-100.png";
    editCertBtnImg.classList = "w-sm-img h-sm-img";
  }

  //create see more button and see less button
  if (
    certificationList.length > DEFAULT_MAX_ITEM_SHOWN_IN_ACCOMPLISHMENTS_LIST
  ) {
    /**
     *  <button class="mt-10px chevron-down-after" data-action="see-more">
          See more
        </button>
     */
    const seeMoreBtn = document.createElement("button");
    certificationRightEle.appendChild(seeMoreBtn);
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
    certificationRightEle.appendChild(seeLessBtn);
    seeLessBtn.classList = "mt-10px chevron-top-after hidden";
    seeLessBtn.dataset.action = "see-less";
    seeLessBtn.textContent = "See less";

    seeMoreBtn.addEventListener("click", (e) => {
      for (
        let i = DEFAULT_MAX_ITEM_SHOWN_IN_ACCOMPLISHMENTS_LIST;
        i < certificationList.length;
        i++
      ) {
        const listItem = document.createElement("li");
        listOfCertificationsEle.appendChild(listItem);
        listItem.classList = "not-first:mt-10px flex items-start";
        listItem.dataset.id = certificationList[i].id;

        const listItemLeft = document.createElement("div");
        listItem.appendChild(listItemLeft);
        listItemLeft.classList = "basis-[calc(100%-50px)]";

        const certNameEle = document.createElement("p");
        listItemLeft.appendChild(certNameEle);
        certNameEle.classList = "text-small-bold text-emphasis-tx";
        certNameEle.textContent = certificationList[i].name;

        const certNameAuth = document.createElement("p");
        listItemLeft.appendChild(certNameAuth);
        certNameAuth.textContent =
          certificationList[i].authority ?? NOT_AVALABLE_CONTENT;

        const editCertBtn = document.createElement("button");
        listItem.appendChild(editCertBtn);
        editCertBtn.classList = "ml-auto";
        editCertBtn.dataset.link = `./edit-certification.html?id=${certificationList[i].id}`;
        editCertBtn.addEventListener("click", (e) => {
          window.location.href = editCertBtn.dataset.link ?? "#";
        });

        const editCertBtnImg = document.createElement("img");
        editCertBtn.appendChild(editCertBtnImg);
        editCertBtnImg.src = "./images/icons8-edit-100.png";
        editCertBtnImg.classList = "w-sm-img h-sm-img";
      }

      seeMoreBtn.classList.add("hidden");
      seeLessBtn.classList.remove("hidden");
    });

    seeLessBtn.addEventListener("click", (e) => {
      const certificationsListEle = document.querySelector(
        "[data-id='certifications-list']",
      ) as HTMLElement;
      const childrentOfCertList = certificationsListEle.children;
      for (
        let i = DEFAULT_MAX_ITEM_SHOWN_IN_ACCOMPLISHMENTS_LIST;
        i < certificationList.length;
        i++
      ) {
        certificationsListEle.removeChild(
          childrentOfCertList[DEFAULT_MAX_ITEM_SHOWN_IN_ACCOMPLISHMENTS_LIST],
        );
      }

      seeLessBtn.classList.add("hidden");
      seeMoreBtn.classList.remove("hidden");
    });
  }
}

createAccomplishmentCertificationSection();

const projectList = document.querySelector(
  "ul[data-id='projects-list']",
) as HTMLElement;
projectList.addEventListener("click", (e) => {
  const clickedEle = e.target as HTMLElement;
  //check if clickedEle is the edit project button under the list item
  const clickedEleClosestBtn = clickedEle.closest(
    "button[data-action='edit-project']",
  ) as HTMLElement;
  if (clickedEleClosestBtn) {
    const correspondingListItem = clickedEleClosestBtn.closest(
      "li[data-id]",
    ) as HTMLElement;
    window.location.href = `${clickedEleClosestBtn.dataset.link}?id=${correspondingListItem.dataset.id}`;
  }
});

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
