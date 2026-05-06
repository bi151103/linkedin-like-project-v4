import {
  DEFAULT_MAX_ITEM_SHOWN_IN_ACCOMPLISHMENTS_LIST,
  NOT_AVAILABLE_CONTENT,
} from "./constant.js";
import {
  AccomplishmentData,
  Accomplishments,
  AccomplishmentType,
} from "./model";
import { overlay } from "./overlay.js";
import { getDisplayedDuration } from "./util.js";

function createAccomplishmentItem(listData: AccomplishmentData) {
  const listItem = document.createElement("li");
  listItem.className = "not-first:mt-10px flex items-start";
  listItem.dataset.id = listData.id;

  const listItemLeft = document.createElement("div");
  listItem.appendChild(listItemLeft);
  listItemLeft.className = "basis-[calc(100%-50px)]";

  const accName = document.createElement("p");
  listItemLeft.appendChild(accName);
  accName.className = "text-small-bold text-emphasis-tx";
  accName.textContent = listData.name;

  const accSubtitle = document.createElement("p");
  listItemLeft.appendChild(accSubtitle);
  switch (listData.type) {
    case "certification":
      accSubtitle.textContent = listData.authority ?? NOT_AVAILABLE_CONTENT;
      break;
    case "project":
      accSubtitle.textContent = getDisplayedDuration(listData.duration);
      break;
    default:
      accSubtitle.textContent = NOT_AVAILABLE_CONTENT;
      break;
  }

  const editAccBtn = document.createElement("button");
  listItem.appendChild(editAccBtn);
  editAccBtn.className = "ml-auto";
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
  editAccBtnImg.className = "w-sm-img h-sm-img";

  return listItem;
}

function createAccomplishmentSubsection(
  accomplishmentsList: AccomplishmentData[],
  accomplishmentType: AccomplishmentType,
): HTMLElement | undefined {
  if (accomplishmentsList.length < 1) {
    return;
  }
  const sectionContainer = document.createElement("li");

  sectionContainer.className = "not-first:mt-10px flex";
  sectionContainer.dataset.id = accomplishmentType;

  const numberOfAccEle = document.createElement("div");
  sectionContainer.appendChild(numberOfAccEle);
  numberOfAccEle.className =
    "w-50px h-50px text-[2.4rem] text-emphasis-tx text-right";
  numberOfAccEle.textContent = `${accomplishmentsList.length}`;

  // <div class="ml-10px basis-[calc(100%-50px)]">
  const accRightEle = document.createElement("div");
  sectionContainer.appendChild(accRightEle);
  accRightEle.className = "ml-10px basis-[calc(100%-50px)]";

  // <p class="text-medium-bold text-emphasis-tx">Certifications</p>
  const accTypeEle = document.createElement("p");
  accRightEle.appendChild(accTypeEle);
  accTypeEle.className = "text-medium-bold text-emphasis-tx";
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
  listOfAccsEle.className = "w-full";
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
    const item = createAccomplishmentItem(accomplishmentsList[i]);
    listOfAccsEle.appendChild(item);
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
    seeMoreBtn.className = "mt-10px chevron-down-after";
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
    seeLessBtn.className = "mt-10px chevron-top-after hidden";
    seeLessBtn.dataset.action = "see-less";
    seeLessBtn.textContent = "See less";
  }

  return sectionContainer;
}

export function createAccomplishmentSection(accomplishments: Accomplishments) {
  const accomplishmentSection = document.createElement("section");
  accomplishmentSection.className = "mt-10px p-15px bg-white";

  const accpmSectionHeader = document.createElement("h2");
  accomplishmentSection.appendChild(accpmSectionHeader);
  accpmSectionHeader.textContent = "Accomplishments";

  const addAccpmBtn = document.createElement("button");
  accomplishmentSection.appendChild(addAccpmBtn);
  addAccpmBtn.textContent = "Add accomplishments";
  addAccpmBtn.className = "mt-10px plus-before";
  addAccpmBtn.dataset.action = "add-accomplishments";

  if (!accomplishments) {
    return accomplishmentSection;
  }

  const accListEle = document.createElement("ul");
  accomplishmentSection.appendChild(accListEle);
  accListEle.className = "mt-10px";

  const certSection = createAccomplishmentSubsection(
    accomplishments.certificationsList,
    "certification",
  );
  const prjSection = createAccomplishmentSubsection(
    accomplishments.projectsList,
    "project",
  );
  const publicationSection = createAccomplishmentSubsection(
    accomplishments.publicationsList,
    "publication",
  );
  const patentSection = createAccomplishmentSubsection(
    accomplishments.patentsList,
    "patent",
  );
  const courseSection = createAccomplishmentSubsection(
    accomplishments.coursesList,
    "course",
  );
  const honorAwardSection = createAccomplishmentSubsection(
    accomplishments.honorsAndAwardsList,
    "honor-award",
  );
  const testScoreSection = createAccomplishmentSubsection(
    accomplishments.testScoresList,
    "test-score",
  );
  const languageSection = createAccomplishmentSubsection(
    accomplishments.languagesList,
    "language",
  );
  const orgSection = createAccomplishmentSubsection(
    accomplishments.organizationsList,
    "organization",
  );

  if (certSection) {
    accListEle.appendChild(certSection);
  }
  if (prjSection) {
    accListEle.appendChild(prjSection);
  }
  if (publicationSection) {
    accListEle.appendChild(publicationSection);
  }
  if (patentSection) {
    accListEle.appendChild(patentSection);
  }
  if (courseSection) {
    accListEle.appendChild(courseSection);
  }
  if (honorAwardSection) {
    accListEle.appendChild(honorAwardSection);
  }
  if (testScoreSection) {
    accListEle.appendChild(testScoreSection);
  }
  if (languageSection) {
    accListEle.appendChild(languageSection);
  }
  if (orgSection) {
    accListEle.appendChild(orgSection);
  }

  //add event hanlder for the add accomplishment and edit buttons through event delegation
  accomplishmentSection.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const addAccpmBtn = target.closest(
      "button[data-action='add-accomplishments']",
    );
    if (addAccpmBtn) {
      const addAccomplishmentsOverlayEle = document.querySelector(
        "[data-id='overlay'] [data-id='add-accomplishments-overlay']",
      ) as HTMLElement;
      overlay.classList.remove("hidden");
      addAccomplishmentsOverlayEle.classList.remove("hidden");
      const bodyEle = document.body;
      bodyEle.classList.add("overflow-hidden");
      return;
    }
    const editBtn = target.closest("button[data-action='edit-accomplishment']");
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
        const item = createAccomplishmentItem(accomplishmentsList[i]);
        listOfAccsEle.appendChild(item);
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

  return accomplishmentSection;
}
