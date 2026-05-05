import { ExperienceData } from "./model";
import {
  calculateDuration,
  calculateTotalDuration,
  getDisplayedDuration,
} from "./util";

export function createExperienceSection(
  experiencesList: ExperienceData[],
): HTMLElement {
  const experienceSection = document.createElement("section");
  experienceSection.className = "mt-10px p-15px pr-0 bg-white";

  const title = document.createElement("h2");
  experienceSection.appendChild(title);
  title.textContent = "Experience";

  const addExperienceBtn = document.createElement("button");
  experienceSection.appendChild(addExperienceBtn);
  addExperienceBtn.textContent = "Add experience";
  addExperienceBtn.className = "mt-10px plus-before";
  addExperienceBtn.dataset.action = "add-experience";
  addExperienceBtn.dataset.link = "./add-experience.html";

  const expList = document.createElement("ul");
  experienceSection.appendChild(expList);
  expList.className = "mt-10px";

  for (const experience of experiencesList) {
    if (experience.experiences.length > 1) {
      const item = document.createElement("li");
      expList.appendChild(item);
      // item.dataset.id = experience.id;

      const companyLink = document.createElement("a");
      item.appendChild(companyLink);
      companyLink.href = `./company.html?id=${experience.company.companyId}`;
      companyLink.className =
        "flex text-inherit font-normal items-center pr-15px";

      const companyThumb = document.createElement("img");
      companyLink.appendChild(companyThumb);
      companyThumb.src = experience.company.companyLogoSrc ?? "";
      companyThumb.className = "min-w-md-img w-md-img h-md-img object-cover";

      const companyInfoContainer = document.createElement("div");
      companyLink.appendChild(companyInfoContainer);
      companyInfoContainer.className = "ml-10px";

      const companyName = document.createElement("p");
      companyInfoContainer.appendChild(companyName);
      companyName.textContent = experience.company.companyName;
      companyName.className = "text-medium-bold text-emphasis-tx";

      const duration = document.createElement("p");
      companyInfoContainer.appendChild(duration);
      const totalDurationCalculate = calculateTotalDuration(
        experience.experiences,
      );
      duration.textContent = totalDurationCalculate;

      const subExpList = document.createElement("ul");
      item.appendChild(subExpList);
      subExpList.className = "mt-10px experience-separator-line";
      for (let i = 0; i < experience.experiences.length; i++) {
        const subExpItem = document.createElement("li");
        subExpList.appendChild(subExpItem);
        subExpItem.className = "pr-15px not-first:mt-10px";
        subExpItem.dataset.id = experience.experiences[i].id;

        const subExpItemContainer = document.createElement("div");
        subExpItem.appendChild(subExpItemContainer);
        subExpItemContainer.className = "flex justify-center";

        const subExpLeft = document.createElement("div");
        subExpItemContainer.appendChild(subExpLeft);
        subExpLeft.className =
          "basis-50px text-center self-stretch flex flex-col";

        const mediumDot = document.createElement("span");
        subExpLeft.appendChild(mediumDot);
        mediumDot.className = "medium-dot";

        const verticalProgressBar = document.createElement("span");
        subExpLeft.appendChild(verticalProgressBar);
        verticalProgressBar.className =
          "medium-vertical-progress-line basis-full";
        if (i === experience.experiences.length - 1) {
          verticalProgressBar.classList.add("hidden");
        }

        const subExpRight = document.createElement("div");
        subExpItemContainer.appendChild(subExpRight);
        subExpRight.className = "ml-10px basis-[calc(100%-50px)] relative";

        const position = document.createElement("p");
        subExpRight.appendChild(position);
        position.textContent = experience.experiences[i].position;
        position.className = "text-emphasis-tx text-small-bold";

        const duration = document.createElement("p");
        subExpRight.appendChild(duration);
        duration.textContent = `${getDisplayedDuration(
          experience.experiences[i].duration,
        )} `;

        const dotSeparatorInDuration = document.createElement("span");
        duration.appendChild(dotSeparatorInDuration);
        dotSeparatorInDuration.className = "dot";

        const textNode = document.createTextNode(
          `${calculateDuration(
            experience.experiences[i].duration.start,
            experience.experiences[i].duration.end,
          )}`,
        );
        duration.append(textNode);

        const location = document.createElement("p");
        subExpRight.appendChild(location);
        location.textContent = experience.experiences[i].location;
        location.className = "text-xs-small text-low-emphasis-tx";

        const editBtn = document.createElement("button");
        subExpRight.appendChild(editBtn);
        editBtn.className = "absolute top-0 right-0";
        editBtn.dataset.link = `./edit-experience.html?sub-exp-id=${experience.experiences[i].id}&exp-id=${experience.id}`;
        editBtn.dataset.action = `edit-experience`;

        const editBtnImg = document.createElement("img");
        editBtn.appendChild(editBtnImg);
        editBtnImg.src = "./images/icons8-edit-100.png";
        editBtnImg.className = "w-sm-img h-sm-img";

        const expContent = document.createElement("p");
        subExpRight.appendChild(expContent);
        expContent.innerText = experience.experiences[i].description ?? "";
        expContent.className = "truncated-4 relative text-low-emphasis-tx";

        const moreBtn = document.createElement("button");
        expContent.appendChild(moreBtn);
        moreBtn.textContent = "...more";
        moreBtn.className =
          "bg-white absolute bottom-0 text-inherit text-emphasis-tx right-0 pl-10px z-1";
        moreBtn.dataset.action = "show-more-experience-content";
      }
    } else if (experience.experiences.length === 1) {
      const item = document.createElement("li");
      expList.appendChild(item);
      // item.dataset.id = experience.id;
      item.className = "not-first:mt-10px experience-separator-line";

      const expLink = document.createElement("a");
      item.appendChild(expLink);
      expLink.href = `./company.html?id=${experience.company.companyId}`;
      expLink.className = "flex text-inherit font-normal items-start pr-15px";

      const companyThumb = document.createElement("img");
      expLink.appendChild(companyThumb);
      companyThumb.src = experience.company.companyLogoSrc ?? "";
      companyThumb.className = "w-md-img h-md-img object-cover";

      const expRight = document.createElement("div");
      expLink.appendChild(expRight);
      expRight.className = "relative ml-10px";

      const companyInfoContainer = document.createElement("div");
      expRight.appendChild(companyInfoContainer);

      const position = document.createElement("p");
      companyInfoContainer.appendChild(position);
      position.textContent = experience.experiences[0].position;
      position.className = "text-medium-bold text-emphasis-tx";

      const companyName = document.createElement("p");
      companyInfoContainer.appendChild(companyName);
      companyName.textContent = experience.company.companyName;

      const duration = document.createElement("p");
      companyInfoContainer.appendChild(duration);
      duration.textContent = `${getDisplayedDuration(
        experience.experiences[0].duration,
      )} `;

      const dotSeparatorInDuration = document.createElement("span");
      duration.appendChild(dotSeparatorInDuration);
      dotSeparatorInDuration.className = "dot";

      const textNode = document.createTextNode(
        `${calculateDuration(
          experience.experiences[0].duration.start,
          experience.experiences[0].duration.end,
        )}`,
      );
      duration.append(textNode);

      const location = document.createElement("p");
      companyInfoContainer.appendChild(location);
      location.textContent = experience.experiences[0].location;
      location.className = "text-xs-small-bold";

      const editBtn = document.createElement("button");
      expRight.appendChild(editBtn);
      editBtn.className = "absolute top-0 right-0";
      editBtn.dataset.link = `./edit-experience.html?sub-exp-id=${experience.experiences[0].id}&exp-id=${experience.id}`;
      editBtn.dataset.action = `edit-experience`;

      const editBtnImg = document.createElement("img");
      editBtn.appendChild(editBtnImg);
      editBtnImg.src = "./images/icons8-edit-100.png";
      editBtnImg.className = "w-sm-img h-sm-img";

      const expContent = document.createElement("p");
      expRight.appendChild(expContent);
      expContent.innerText = experience.experiences[0].description ?? "";
      expContent.className =
        "truncated-4 relative cursor-[initial] text-low-emphasis-tx";
      expContent.dataset.id = "experience-content";

      const moreBtn = document.createElement("button");
      expContent.appendChild(moreBtn);
      moreBtn.textContent = "...more";
      moreBtn.className =
        "bg-white absolute bottom-0 text-inherit text-emphasis-tx right-0 pl-10px z-1";
      moreBtn.dataset.action = "show-more-experience-content";
    }
  }

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
      window.location.href = editExperienceLinkAttr ?? "#";

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

  return experienceSection;
}
