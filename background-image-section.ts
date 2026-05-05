export function createBackgroundImageSection(): HTMLElement {
  const backgroundImageSection = document.createElement("section");
  backgroundImageSection.className = "relative";

  const backgroundImg = document.createElement("img");
  backgroundImg.src = "./images/background-image-cut.jpg";
  backgroundImg.className = "w-full bg-white align-middle";
  backgroundImageSection.appendChild(backgroundImg);

  const settingLink = document.createElement("a");
  settingLink.href = "./my-preferences.html";
  backgroundImageSection.appendChild(settingLink);

  const settingLinkImg = document.createElement("img");
  settingLinkImg.src = "./images/icons8-setting-100.png";
  settingLinkImg.className =
    "w-[25px] aspect-square absolute top-0 right-0 mr-[15px] mt-[15px] bg-white rounded-full p-5px";
  settingLink.appendChild(settingLinkImg);

  return backgroundImageSection;
}
