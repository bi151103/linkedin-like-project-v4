export function createAddEducationCTA() {
  const addEducationCTA = document.createElement("div");
  addEducationCTA.className = "p-15px bg-white text-center relative";

  const mainImg = document.createElement("img");
  addEducationCTA.appendChild(mainImg);
  mainImg.src = "./images/icons8-education-100.png";
  mainImg.className = "w-md-img h-md-img";

  const mainText = document.createElement("p");
  addEducationCTA.appendChild(mainText);
  mainText.textContent = "Have more education?";
  mainText.className = "text-medium text-emphasis-tx";

  const subText = document.createElement("p");
  addEducationCTA.appendChild(subText);
  subText.textContent =
    "Add your degree and college, get 11x more profile views. Connect with your college mates";
  subText.className = "px-10px";

  const addEducationBtn = document.createElement("button");
  addEducationCTA.appendChild(addEducationBtn);
  addEducationBtn.className =
    "mt-10px leading-[3] w-full border border-primary-bg rounded-[24px] hover:bg-primary-btn-hover-bg";
  addEducationBtn.dataset.link = `./add-education.html`;
  addEducationBtn.dataset.action = "add-education";
  addEducationBtn.textContent = "Add education";

  const closeCTABtn = document.createElement("button");
  addEducationCTA.appendChild(closeCTABtn);
  closeCTABtn.className = "absolute top-0 right-0 m-15px mt-10px";
  closeCTABtn.dataset.action = "close-add-education-cta";

  const closeCTABtnImg = document.createElement("img");
  closeCTABtn.appendChild(closeCTABtnImg);
  closeCTABtnImg.src = "./images/icons8-close-100.png";
  closeCTABtnImg.className = "w-sm-img h-sm-img";

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
    const addEducationBtn = target.closest(
      "button[data-action='add-education']",
    );
    if (addEducationBtn) {
      window.location.href =
        (addEducationBtn as HTMLElement).dataset.link ?? "#";
      return;
    }
  });

  return addEducationCTA;
}
