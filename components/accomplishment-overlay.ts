import { AccomplishmentType } from "../model";
import { overlay } from "./overlay.js";

function createAccomplishmentTypeItem(type: AccomplishmentType) {
  const item = document.createElement("li");
  item.className = "py-8px";

  const btn = document.createElement("button");
  item.appendChild(btn);
  btn.className = "flex items-center font-normal text-emphasis-tx w-full biock";

  const typeImg = document.createElement("img");
  btn.appendChild(typeImg);
  typeImg.className = "w-sm-img h-sm-img min-w-sm-img";

  const text = document.createElement("span");
  btn.appendChild(text);
  text.className = "ml-10px";

  switch (type) {
    case "publication":
      btn.dataset.link = "./add-publication.html";
      btn.dataset.action = "add-publication";
      typeImg.src = "./images/icons8-newspaper-100.png";
      text.textContent = "Publications";
      break;
    case "patent":
      btn.dataset.link = "./add-patent.html";
      btn.dataset.action = "add-patent";
      typeImg.src = "./images/icons8-patent-100.png";
      text.textContent = "Patents";
      break;
    case "course":
      btn.dataset.link = "./add-course.html";
      btn.dataset.action = "add-course";
      typeImg.src = "./images/icons8-notebook-100.png";
      text.textContent = "Courses";
      break;
    case "project":
      btn.dataset.link = "./add-project.html";
      btn.dataset.action = "add-project";
      typeImg.src = "./images/icons8-folder-100.png";
      text.textContent = "Projects";
      break;
    case "honor-award":
      btn.dataset.link = "./add-honor-award.html";
      btn.dataset.action = "add-honor-award";
      typeImg.src = "./images/icons8-star-100.png";
      text.textContent = "Honors & Awards";
      break;
    case "test-score":
      btn.dataset.link = "./add-test-score.html";
      btn.dataset.action = "add-test-score";
      typeImg.src = "./images/icons8-inspection-100.png";
      text.textContent = "Test Scores";
      break;
    case "language":
      btn.dataset.link = "./add-language.html";
      btn.dataset.action = "add-language";
      typeImg.src = "./images/icons8-language-skill-100.png";
      text.textContent = "Languages";
      break;
    case "organization":
      btn.dataset.link = "./add-organization.html";
      btn.dataset.action = "add-organization";
      typeImg.src = "./images/icons8-company-100.png";
      text.textContent = "Organizations";
      break;
    case "certification":
      btn.dataset.link = "./add-certification.html";
      btn.dataset.action = "add-certification";
      typeImg.src = "./images/icons8-certificate-100.png";
      text.textContent = "Certifications";
      break;
    default:
      break;
  }

  return item;
}

export function createAddAccomplishmentOverlay() {
  const addAccOverlay = document.createElement("div");
  addAccOverlay.className =
    "hidden min-w-[300px] w-[70vw] max-h-[70vh] h-min bg-white rounded-[8px] fixed z-1001 left-0 right-0 top-0 bottom-0 m-auto overflow-y-auto";
  addAccOverlay.dataset.id = "add-accomplishments-overlay";

  const headerContainer = document.createElement("div");
  addAccOverlay.appendChild(headerContainer);
  headerContainer.className = "p-24px pb-5px flex";

  const title = document.createElement("h2");
  headerContainer.appendChild(title);
  title.textContent = "Add Accomplishments";
  title.className = "text-emphasis-tx text-medium-bold";

  const closeOverlayBtn = document.createElement("button");
  headerContainer.appendChild(closeOverlayBtn);
  closeOverlayBtn.className = "ml-auto";
  closeOverlayBtn.dataset.action = "close";

  const closeOverlayBtnImg = document.createElement("img");
  closeOverlayBtn.appendChild(closeOverlayBtnImg);
  closeOverlayBtnImg.src = "./images/icons8-close-100.png";
  closeOverlayBtnImg.className = "w-sm-img h-sm-img";

  const typesList = document.createElement("ul");
  addAccOverlay.appendChild(typesList);
  typesList.className = "p-24px pt-0";

  const certItem = createAccomplishmentTypeItem("certification");
  const prjItem = createAccomplishmentTypeItem("project");
  const publicationItem = createAccomplishmentTypeItem("publication");
  const patentItem = createAccomplishmentTypeItem("patent");
  const courseItem = createAccomplishmentTypeItem("course");
  const honorAwardItem = createAccomplishmentTypeItem("honor-award");
  const testScoreItem = createAccomplishmentTypeItem("test-score");
  const languageItem = createAccomplishmentTypeItem("language");
  const orgItem = createAccomplishmentTypeItem("organization");

  typesList.appendChild(publicationItem);
  typesList.appendChild(patentItem);
  typesList.appendChild(courseItem);
  typesList.appendChild(prjItem);
  typesList.appendChild(honorAwardItem);
  typesList.appendChild(testScoreItem);
  typesList.appendChild(languageItem);
  typesList.appendChild(orgItem);
  typesList.appendChild(certItem);

  addAccOverlay.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const actionBtn = target.closest("button[data-action]");
    const closeOverlayBtn = target.closest("button[data-action='close']");
    if (closeOverlayBtn) {
      const overlayChildren = overlay.children;
      for (const overlayChild of overlayChildren) {
        overlayChild.classList.add("hidden");
      }
      overlay.classList.add("hidden");
      const bodyEle = document.body;
      bodyEle.classList.remove("overflow-hidden");
      e.stopPropagation();
      return;
    }
    if (actionBtn) {
      window.location.href = (actionBtn as HTMLElement).dataset.link ?? "#";
      e.stopPropagation();
      return;
    }
    e.stopPropagation();
  });
  return addAccOverlay;
}
