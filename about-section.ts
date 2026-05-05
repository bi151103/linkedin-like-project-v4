export function createAboutSection(): HTMLElement {
  const aboutSection = document.createElement("section");
  aboutSection.className = "mt-10px p-15px bg-white";

  const headerContainer = document.createElement("div");
  aboutSection.appendChild(headerContainer);
  headerContainer.className = "flex";

  const title = document.createElement("h2");
  headerContainer.appendChild(title);
  title.textContent = "About";

  const editAboutLink = document.createElement("a");
  headerContainer.appendChild(editAboutLink);
  editAboutLink.href = "./edit-about.html";
  editAboutLink.className = "ml-auto";

  const editAboutLinkImg = document.createElement("img");
  editAboutLink.appendChild(editAboutLinkImg);
  editAboutLinkImg.src = "./images/icons8-edit-100.png";
  editAboutLinkImg.className = "h-sm-img w-sm-img";

  const aboutContent = document.createElement("p");
  aboutSection.appendChild(aboutContent);
  aboutContent.textContent = "As early of 2026";
  aboutContent.className = "mt-10px";

  return aboutSection;
}
