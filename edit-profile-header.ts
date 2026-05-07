export function createEditProfileHeader() {
  const header = document.createElement("div");
  header.className =
    "fixed top-0 w-full bg-white flex items-center h-50px border-b border-separator-line";

  const backArrowBtn = document.createElement("button");
  header.appendChild(backArrowBtn);
  backArrowBtn.dataset.action = "back";
  backArrowBtn.className =
    "min-w-md-img w-md-img h-full flex justify-center items-center";

  const backArrowBtnImg = document.createElement("img");
  backArrowBtn.append(backArrowBtnImg);
  backArrowBtnImg.src = "./images/icons8-left-100.png";
  backArrowBtnImg.className = "w-3/5 aspect-square";

  const title = document.createElement("h1");
  header.append(title);
  title.textContent = "Edit Intro";
  title.className = "text-emphasis-tx px-15px";

  const saveBtn = document.createElement("button");
  header.append(saveBtn);
  saveBtn.textContent = "Clear";
  saveBtn.className = "min-w-50px ml-auto px-15px disabled:hidden text-inherit";
  saveBtn.dataset.action = "clear-recent-search";

  header.addEventListener("click", (e) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    const backArrowBtn = target.closest("button[data-action='back']");
    if (backArrowBtn) {
      history.back();
      (document.querySelector("#app") as HTMLElement).innerHTML = "";
      return;
    }
  });

  return header;
}
