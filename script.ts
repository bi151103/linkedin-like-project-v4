import {
  DEFAULT_MAX_ITEM_SHOWN_IN_ACCOMPLISHMENTS_LIST,
  NOT_AVALABLE_CONTENT,
} from "./constant.js";
import type { AccomplishmentModel } from "./model";

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
  const shareProfileBtn = e.currentTarget as unknown as HTMLElement;
  const shareData = {
    //there are 2 ways to access the data-attribute attribute of elements
    // title: shareProfileBtn.getAttribute("data-title"),
    // text: shareProfileBtn.getAttribute("data-text"),
    // url: shareProfileBtn.getAttribute("data-url"),
    title: shareProfileBtn.dataset.title,
    text: shareProfileBtn.dataset.text,
    url: shareProfileBtn.dataset.url,
  };
  console.log(shareData);
  await navigator.share(shareData);
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
  if (!overlayEle.classList.contains("hiddens")) {
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
  window.location.href =
    (e.currentTarget as unknown as HTMLElement).dataset.link ?? "#";
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
    name: "TOEIC 800 LR",
    authority: "ETS",
  },
  {
    name: "Microsoft Office Specialist: Microsoft Excel 2016",
    authority: "Microsoft",
  },
  {
    name: "Microsoft Office Specialist: Microsoft Powerpoint 2016",
    authority: "Microsoft",
  },
  {
    name: "Jira Fundamentals Badge",
    authority: "Atlassian",
  },
  {
    name: "Confluence Fundamentals Badge",
    authority: "Atlassian",
  },
  {
    name: "15 days of Postman - for testers",
    authority: "Canvas Credentials (Badgr)",
  },
  {
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

export {};
