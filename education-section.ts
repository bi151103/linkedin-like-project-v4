import { Education } from "./model";
import { getDisplayedDuration } from "./util.js";

export function createEducationSection(educationList: Education[]) {
  const educationSection = document.createElement("section");
  educationSection.className =
    "mt-10px p-15px bg-white border-b border-separator-line";

  const title = document.createElement("h2");
  educationSection.appendChild(title);
  title.textContent = "Education";

  const eduList = document.createElement("ul");
  educationSection.appendChild(eduList);
  eduList.className = "mt-10px";

  for (const edu of educationList) {
    const item = document.createElement("li");
    eduList.appendChild(item);
    item.className = "not-first:mt-10px";

    const eduLink = document.createElement("a");
    item.appendChild(eduLink);
    eduLink.href = `./school.html?id=${edu.institution.id}`;
    eduLink.className = "flex items-start";

    const eduThumb = document.createElement("img");
    eduLink.appendChild(eduThumb);
    eduThumb.src = edu.institution.educationLogoSrc ?? "";
    eduThumb.className = "min-w-md-img w-md-img h-md-img object-cover";

    const eduInfoContainer = document.createElement("div");
    eduLink.appendChild(eduInfoContainer);
    eduInfoContainer.className = "ml-10px";

    const educationName = document.createElement("p");
    eduInfoContainer.appendChild(educationName);
    educationName.textContent = edu.institution.educationName;
    educationName.className = "text-medium-bold text-emphasis-tx";

    const educationMajor = document.createElement("p");
    eduInfoContainer.appendChild(educationMajor);
    educationMajor.textContent = ` ${edu.major}`;
    educationMajor.className = "text-emphasis-tx font-normal";
    let degreeType;
    const dot = document.createElement("span");
    dot.className = "dot";
    switch (edu.degreeType) {
      case "bachelor":
        degreeType = document.createTextNode("Bachelor's degree ");
        educationMajor.prepend(degreeType);
        educationMajor.insertBefore(dot, degreeType.nextSibling);
        break;
      case "master":
        degreeType = document.createTextNode("Master's degree");
        educationMajor.prepend(degreeType);
        educationMajor.insertBefore(dot, degreeType);
        break;
      default:
        break;
    }

    const duration = document.createElement("p");
    eduInfoContainer.appendChild(duration);
    const durationCalculate = getDisplayedDuration(edu.duration);
    duration.textContent = durationCalculate;
    duration.className = "text-low-emphasis-tx font-normal";

    const editBtn = document.createElement("button");
    eduLink.appendChild(editBtn);
    editBtn.className = "ml-auto basis-50px";
    editBtn.dataset.link = `./edit-education.html?id=${edu.id}`;
    editBtn.dataset.action = "edit-education";

    const editBtnImg = document.createElement("img");
    editBtn.appendChild(editBtnImg);
    editBtnImg.src = "./images/icons8-edit-100.png";
    editBtnImg.className = "w-sm-img h-sm-img";
  }

  educationSection.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const editEducationBTn = target.closest(
      "button[data-action='edit-education']",
    );
    if (editEducationBTn) {
      window.location.href = `${(editEducationBTn as HTMLElement).dataset.link}`;
      e.preventDefault();
      return;
    }
  });
  return educationSection;
}
