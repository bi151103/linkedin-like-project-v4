export function createPrivateToYouSection(): HTMLElement {
  const privateToYouSection = document.createElement("section");
  privateToYouSection.className = "mt-10px p-15px bg-white";

  const title = document.createElement("h2");
  privateToYouSection.appendChild(title);
  title.textContent = "Private to you";
  title.className = "italic";

  const statisticContainer = document.createElement("div");
  privateToYouSection.appendChild(statisticContainer);
  statisticContainer.className = "flex mt-10px";

  const profileViewedContainer = document.createElement("div");
  statisticContainer.appendChild(profileViewedContainer);
  profileViewedContainer.className = "pt-10px pr-10px";

  const profileViewedLink = document.createElement("a");
  profileViewedContainer.appendChild(profileViewedLink);
  profileViewedLink.href = "./profile-views.html";

  const numberOfViews = document.createElement("p");
  profileViewedLink.appendChild(numberOfViews);
  numberOfViews.textContent = "32";
  numberOfViews.className = "text-[1.8rem] font-medium";

  const profileViewedText = document.createElement("p");
  profileViewedLink.appendChild(profileViewedText);
  profileViewedText.textContent = "Who viewed your profile";
  profileViewedText.className = "text-xs-small text-primary-tx";

  const searchAppearancesContainer = document.createElement("div");
  statisticContainer.appendChild(searchAppearancesContainer);
  searchAppearancesContainer.className =
    "pt-10px pl-10px border-separator-line border-l";

  const searchAppearancesLink = document.createElement("a");
  searchAppearancesContainer.appendChild(searchAppearancesLink);
  searchAppearancesLink.href = "./search-appearances.html";

  const numberOfSearchAppearances = document.createElement("p");
  searchAppearancesLink.appendChild(numberOfSearchAppearances);
  numberOfSearchAppearances.textContent = "4";
  numberOfSearchAppearances.className = "text-[1.8rem] font-medium";

  const searchAppearancesText = document.createElement("p");
  searchAppearancesLink.appendChild(searchAppearancesText);
  searchAppearancesText.textContent = "Search appearances";
  searchAppearancesText.className = "text-xs-small text-primary-tx";

  return privateToYouSection;
}
