import { PRESENT_CONTENT } from "./constant.js";
import {
  DEFAULT_MAX_ITEM_SHOWN_IN_ACCOMPLISHMENTS_LIST,
  NOT_AVALABLE_CONTENT,
} from "./constant.js";
import type {
  AccomplishmentData,
  Profile,
  Accomplishments,
  AccomplishmentType,
  ExperienceData,
  Education,
  Skill,
  Contact,
  PhoneContact,
} from "./model";
import {
  calculateDuration,
  calculateTotalDuration,
  getDisplayedDuration,
} from "./util.js";

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
  const shareProfileBtn = (e.target as HTMLElement).closest(
    "button[data-action='share']",
  );
  if (!shareProfileBtn) {
    return;
  }

  const shareData = {
    //there are 2 ways to access the data-attribute attribute of elements
    // title: shareProfileBtn.getAttribute("data-title"),
    // text: shareProfileBtn.getAttribute("data-text"),
    // url: shareProfileBtn.getAttribute("data-url"),
    title: (shareProfileBtn as HTMLElement).dataset.title,
    text: (shareProfileBtn as HTMLElement).dataset.text,
    url: (shareProfileBtn as HTMLElement).dataset.url,
  };
  // console.log(shareData);
  try {
    await navigator.share(shareData);
  } catch (e) {
    console.error("The browser does not support the sharing with navigator");
  }
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

function createHeader(): HTMLElement {
  /** <header
      class="w-full h-50px flex items-center bg-white border-b border-separator-line fixed top-0 z-999"
    > */
  const header = document.createElement("header");
  header.className =
    "w-full h-50px flex items-center bg-white border-b border-separator-line fixed top-0 z-999";

  /**<div class="h-3/5 w-50px">
        <a href="./" class="w-full h-full flex justify-center">
          <img
            class="h-full aspect-square"
            src="./images/icons8-profile-100.png"
          />
        </a>
      </div> */
  const profileLinkContainer = document.createElement("div");
  header.appendChild(profileLinkContainer);
  profileLinkContainer.className = "h-3/5 min-w-50px basis-50px";

  const profileLink = document.createElement("a");
  profileLinkContainer.appendChild(profileLink);
  profileLink.className = "w-full h-full flex justify-center";
  profileLink.href = "./";

  const profileLinkImg = document.createElement("img");
  profileLink.appendChild(profileLinkImg);
  profileLinkImg.src = "./images/icons8-profile-100.png";
  profileLinkImg.className = "h-full aspect-square";

  /**<div
        class="basis-[calc(100%-100px)] h-3/5 bg-[#edf3f8] flex items-center"
      >
        <img
          class="h-3/5 aspect-square ml-10px"
          src="./images/icons8-search-100.png"
        />
        <input
          type="text"
          name="search"
          class="font-bold pl-5px pr-10px outline-none pt-[4px] text-medium"
          placeholder="Search"
        />
      </div> */
  const searchContainer = document.createElement("div");
  header.appendChild(searchContainer);
  searchContainer.className =
    "basis-[calc(100%-100px)] h-3/5 bg-[#edf3f8] flex items-center";

  const searchIconImg = document.createElement("img");
  searchContainer.appendChild(searchIconImg);
  searchIconImg.src = "./images/icons8-search-100.png";
  searchIconImg.className = "h-3/5 aspect-square ml-10px";

  const searchInput = document.createElement("input");
  searchContainer.appendChild(searchInput);
  searchInput.type = "text";
  searchInput.dataset.id = "search";
  searchInput.placeholder = "Search";
  searchInput.className =
    "font-bold pl-5px pr-10px outline-none pt-[4px] text-medium";

  /**<div class="h-3/5 w-50px">
        <a
          href="./message.html"
          class="relative w-full h-full flex justify-center"
        >
          <img
            class="h-full aspect-square"
            src="./images/icons8-chat-bubble-100.png"
          />
          <img
            src="./images/icons8-circled-1-100.png"
            class="w-sm-noti-bubble h-sm-noti-bubble border border-double rounded-full border-white absolute top-0 right-[2px]"
          />
        </a>
      </div> */
  const messageNotiContainer = document.createElement("div");
  header.appendChild(messageNotiContainer);
  messageNotiContainer.className = "h-3/5 min-w-50px basis-50px";

  const messageLink = document.createElement("a");
  messageNotiContainer.appendChild(messageLink);
  messageLink.href = "./message.html";
  messageLink.className = "relative w-full h-full flex justify-center";

  const messageLinkImg = document.createElement("img");
  messageLink.appendChild(messageLinkImg);
  messageLinkImg.src = "./images/icons8-chat-bubble-100.png";
  messageLinkImg.className = "h-full aspect-square";

  const messessCircledBubble = document.createElement("img");
  messageLink.appendChild(messessCircledBubble);
  messessCircledBubble.src = "./images/icons8-circled-1-100.png";
  messessCircledBubble.className =
    "w-sm-noti-bubble h-sm-noti-bubble border border-double rounded-full border-white absolute top-0 right-[2px]";
  return header;
}

function createBackgroundImageSection(): HTMLElement {
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

function createProfileActionSection(): HTMLElement {
  const profileActionSection = document.createElement("section");
  profileActionSection.className = "h-[40px] w-100% bg-white flex";

  const profileImgAddPhotoLink = document.createElement("a");
  profileActionSection.appendChild(profileImgAddPhotoLink);
  profileImgAddPhotoLink.href = "./add-profile-photo.html";
  profileImgAddPhotoLink.className = "w-min";

  const profileImgContainer = document.createElement("div");
  profileImgAddPhotoLink.appendChild(profileImgContainer);
  profileImgContainer.className = "w-[120px] h-full ml-[15px] relative";

  const addPhotoContainer = document.createElement("div");
  profileImgContainer.appendChild(addPhotoContainer);
  addPhotoContainer.className =
    "absolute bottom-0 w-full h-3/1 bg-white rounded-full border-2 border-double border-primary-tx flex flex-col items-center justify-center";

  const addPhotoImg = document.createElement("img");
  addPhotoContainer.appendChild(addPhotoImg);
  addPhotoImg.src = "./images/icons8-camera-100.png";
  addPhotoImg.className = "w-50px";

  const addPhotoText = document.createElement("div");
  addPhotoContainer.appendChild(addPhotoText);
  addPhotoText.textContent = "Add Photo";
  addPhotoText.className = "text-[0.8em]";

  const rightActionContainer = document.createElement("div");
  profileActionSection.appendChild(rightActionContainer);
  rightActionContainer.className =
    "w-[90px] h-full ml-auto flex items-end justify-around";

  const shareBtn = document.createElement("button");
  rightActionContainer.appendChild(shareBtn);
  shareBtn.dataset.action = "share";
  shareBtn.dataset.title = "LinkedIn: Profile of Phuc Dang";
  shareBtn.dataset.text = "Check out Phuc Dang's profile on LinkedIn";
  shareBtn.dataset.url = "https://vn.linkedin.com/in/dang-phan-minh-phuc";
  shareBtn.addEventListener("click", shareProfile);

  const shareBtnImg = document.createElement("img");
  shareBtn.appendChild(shareBtnImg);
  shareBtnImg.src = "./images/icons8-share-100.png";
  shareBtnImg.className = "w-[25px] aspect-square";

  const editLink = document.createElement("a");
  rightActionContainer.appendChild(editLink);
  editLink.href = "./edit-profile.html";

  const editLinkImg = document.createElement("img");
  editLink.appendChild(editLinkImg);
  editLinkImg.src = "./images/icons8-edit-100.png";
  editLinkImg.className = "w-[25px] aspect-square";

  return profileActionSection;
}

function createProfileInfoSection(): HTMLElement {
  const profileInfoSection = document.createElement("section");
  profileInfoSection.className = "py-[25px] px-15px bg-white";

  const profileName = document.createElement("h1");
  profileInfoSection.appendChild(profileName);
  profileName.textContent = "Phuc Dang";
  profileName.className = "text-emphasis-tx";

  const profileHeadline = document.createElement("p");
  profileInfoSection.appendChild(profileHeadline);
  profileHeadline.textContent = "Tester";

  const profileCompany = document.createElement("p");
  profileInfoSection.appendChild(profileCompany);
  profileCompany.textContent = "CODE LEAP";

  const profileLocationAndConnectionContainer = document.createElement("p");
  profileInfoSection.appendChild(profileLocationAndConnectionContainer);
  profileLocationAndConnectionContainer.textContent = "Viet Nam";

  const dotSeparatorBtwNameAndNumberOfConnection =
    document.createElement("span");
  profileLocationAndConnectionContainer.appendChild(
    dotSeparatorBtwNameAndNumberOfConnection,
  );
  dotSeparatorBtwNameAndNumberOfConnection.className = "dot";

  const connections = document.createElement("a");
  profileLocationAndConnectionContainer.appendChild(connections);
  connections.href = "./connection.html";
  connections.textContent = "74 Connections";

  return profileInfoSection;
}

function createAboutSection(): HTMLElement {
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
  editAboutLink.href = "./connection.html";
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

function createFeaturedSection(): HTMLElement {
  const featuredSection = document.createElement("section");
  featuredSection.className = "mt-10px p-15px bg-white";

  const title = document.createElement("h2");
  featuredSection.appendChild(title);
  title.textContent = "Featured";

  const featuredContent = document.createElement("p");
  featuredSection.appendChild(featuredContent);
  featuredContent.textContent =
    "Some content is only available on desktop or in the LinkedIn App. ";
  featuredContent.className = "mt-10px";

  const openInAppLink = document.createElement("a");
  featuredContent.appendChild(openInAppLink);
  openInAppLink.href = "https://github.com/bi151103";
  openInAppLink.target = "_blank";
  openInAppLink.textContent = " Open in app";

  const addFeaturedBtn = document.createElement("button");
  featuredSection.appendChild(addFeaturedBtn);
  addFeaturedBtn.textContent = "Add featured";
  addFeaturedBtn.className = "mt-10px plus-before";
  addFeaturedBtn.addEventListener("click", showAddFeatureOverlay);

  return featuredSection;
}

function createPrivateToYouSection(): HTMLElement {
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

function creataActivitySection(): HTMLElement {
  const activitySection = document.createElement("section");
  activitySection.className = "mt-10px p-15px bg-white";

  const title = document.createElement("h2");
  activitySection.appendChild(title);
  title.textContent = "Activity";

  const follower = document.createElement("p");
  activitySection.appendChild(follower);
  follower.textContent = "74 followers";
  follower.className = "text-xs-small";

  const activityLink = document.createElement("a");
  activitySection.appendChild(activityLink);
  activityLink.href = "./feed-activity.html";
  activityLink.className = "w-full flex mt-10px text-inherit";

  const activityThumb = document.createElement("img");
  activityLink.appendChild(activityThumb);
  activityThumb.src = "./images/liverpool.jpg";
  activityThumb.className = "h-md-img w-md-img object-cover";

  const activityRight = document.createElement("div");
  activityLink.appendChild(activityRight);
  activityRight.className = "pl-10px";

  const activityContent = document.createElement("p");
  activityRight.appendChild(activityContent);
  activityContent.textContent = `LFC and adidas have unveiled their new Bringback range, with a
            collection inspired by the club's legendary 1995/96 away kit. At the
            heart of the Bringback range is a reissue of the club's iconic
            1995/96 away shirt, reconnecting supporters with one of the most
            recognisable designs in the club's history. The collection is
            supported by a full archive-inspired training wear offering,
            including classic silhouettes such as shorts, a sweatshirt, drill
            top, drill pants and T-shirt. Each piece returns in the unmistakable
            green, black and white colour palette synonymous with the era, while
            heritage details including the original Liverpool FC crest from the
            1995/96 season, Carlsberg sponsor and bold adidas branding complete
            the authentic 90s aesthetic.`;
  activityContent.className = "text-emphasis-tx line-clamp-2";

  const activityReactHistory = document.createElement("p");
  activityRight.appendChild(activityReactHistory);
  activityReactHistory.textContent = "You liked this";
  activityReactHistory.className = "text-xs-small";

  return activitySection;
}

function createActivitySeeAllButton(): HTMLElement {
  const seeAllBtnLink = document.createElement("a");
  seeAllBtnLink.href = "./profile-activity.html";
  seeAllBtnLink.textContent = "See all";
  seeAllBtnLink.className =
    "block w-full leading-loose bg-white border-t border-separator-line hover:bg-primary-btn-hover-bg text-center";

  return seeAllBtnLink;
}

function createExperienceSection(
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

function createEducationSection(educationList: Education[]) {
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
    editBtn.dataset.link = `./edit-education.html?${edu.id}`;
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

function createAddEducationCTA() {
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

function createVolunteeringSection() {
  const volunteertingSection = document.createElement("section");
  volunteertingSection.className = "mt-10px p-15px bg-white";

  const title = document.createElement("h2");
  volunteertingSection.appendChild(title);
  title.textContent = "Volunteer Experience";

  const addVolunteeringBtn = document.createElement("button");
  volunteertingSection.appendChild(addVolunteeringBtn);
  addVolunteeringBtn.textContent = "Add volunteering";
  addVolunteeringBtn.className = "mt-10px plus-before";
  addVolunteeringBtn.dataset.action = "add-volunteering";
  addVolunteeringBtn.dataset.link = "./add-volunteering.html";

  addVolunteeringBtn.addEventListener("click", (e) => {
    window.location.href = (e.target as HTMLElement).dataset.link ?? "#";
  });

  return volunteertingSection;
}

function createSkillSection(skillsList: Skill[]) {
  const skillSection = document.createElement("section");
  skillSection.className = "mt-10px p-15px bg-white";

  const headerContainer = document.createElement("div");
  skillSection.appendChild(headerContainer);
  headerContainer.className = "flex";

  const title = document.createElement("h2");
  headerContainer.appendChild(title);
  title.textContent = "Skills";

  const editLink = document.createElement("a");
  headerContainer.appendChild(editLink);
  editLink.href = `./edit-skills.html`;
  editLink.className = "min-w-sm-img ml-auto";

  const editBtnImg = document.createElement("img");
  editLink.appendChild(editBtnImg);
  editBtnImg.src = "./images/icons8-edit-100.png";
  editBtnImg.className = "w-sm-img h-sm-img";

  const addSkillsBtn = document.createElement("button");
  skillSection.appendChild(addSkillsBtn);
  addSkillsBtn.textContent = "Add skills";
  addSkillsBtn.className = "mt-10px plus-before";
  addSkillsBtn.dataset.action = "add-skills";
  addSkillsBtn.dataset.link = "./add-skills.html";

  const skillsListEle = document.createElement("ul");
  skillSection.appendChild(skillsListEle);
  skillsListEle.className =
    "mt-10px flex text-small-bold flex-wrap leading-loose text-emphasis-tx";

  for (const skill of skillsList) {
    const item = document.createElement("li");
    skillsListEle.appendChild(item);
    item.className = "not-last:dot";
    item.textContent = skill.skillName;
  }

  addSkillsBtn.addEventListener("click", (e) => {
    window.location.href = (e.target as HTMLElement).dataset.link ?? "#";
  });

  return skillSection;
}

function createRecommendationSection() {
  const recommendationSection = document.createElement("section");
  recommendationSection.className = "mt-10px p-15px bg-white";

  const title = document.createElement("h2");
  recommendationSection.appendChild(title);
  title.textContent = "Recommendations";

  const askRecommendationBtn = document.createElement("a");
  recommendationSection.appendChild(askRecommendationBtn);
  askRecommendationBtn.textContent = "Ask to be recommended";
  askRecommendationBtn.className = "mt-10px plus-before inline-block";
  askRecommendationBtn.href = "./ask-recommendation.html";

  return recommendationSection;
}

function createContactSection(contactList: Contact[]) {
  const contactSection = document.createElement("section");
  contactSection.className = "mt-10px p-15px bg-white";

  const headerContainer = document.createElement("div");
  contactSection.appendChild(headerContainer);
  headerContainer.className = "flex";

  const title = document.createElement("h2");
  headerContainer.appendChild(title);
  title.textContent = "Contact";

  const editLink = document.createElement("a");
  headerContainer.appendChild(editLink);
  editLink.href = `./edit-contact.html`;
  editLink.className = "min-w-sm-img ml-auto";

  const editBtnImg = document.createElement("img");
  editLink.appendChild(editBtnImg);
  editBtnImg.src = "./images/icons8-edit-100.png";
  editBtnImg.className = "w-sm-img h-sm-img";

  const contactListEle = document.createElement("ul");
  contactSection.appendChild(contactListEle);
  contactListEle.className = "mt-10px";

  const createContactItem = (
    contactData?: Contact,
  ): HTMLElement | undefined => {
    if (!contactData) return undefined;
    const item = document.createElement("li");
    item.className = "not-first:mt-10px flex";

    const contactThumb = document.createElement("div");
    item.appendChild(contactThumb);
    contactThumb.className = "shrink-0 basis-[40px] text-center";

    const thumbImg = document.createElement("img");
    contactThumb.appendChild(thumbImg);
    thumbImg.className = "w-sm-img h-sm-img";

    const contactRight = document.createElement("div");
    item.appendChild(contactRight);
    contactRight.className = "max-w-[calc(100%-40px)] ml-10px";

    const contactTitle = document.createElement("p");
    contactRight.appendChild(contactTitle);
    contactTitle.className = "text-medium-bold text-emphasis-tx";

    const contactLink = document.createElement("a");
    switch (contactData.type) {
      case "email":
        thumbImg.src = "./images/icons8-email-100.png";
        contactTitle.textContent = "Email";
        contactLink.href = `mailto:${contactData.info}`;
        break;
      case "linkedin":
        thumbImg.src = "./images/icons8-linkedin-100-gray.png";
        contactTitle.textContent = "LinkedIn";
        contactLink.href = `${contactData.info}`;
        break;
      default:
        break;
    }
    contactRight.appendChild(contactLink);
    contactLink.className = "wrap-break-word font-normal";
    contactLink.textContent = contactData.info;

    return item;
  };

  const emailItem = createContactItem(
    contactList.find((v) => v.type === "email"),
  );
  const linkedItem = createContactItem(
    contactList.find((v) => v.type === "linkedin"),
  );
  if (emailItem) {
    contactListEle.appendChild(emailItem);
  }
  if (linkedItem) {
    contactListEle.appendChild(linkedItem);
  }

  return contactSection;
}

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
      accSubtitle.textContent = listData.authority ?? NOT_AVALABLE_CONTENT;
      break;
    case "project":
      accSubtitle.textContent = getDisplayedDuration(listData.duration);
      break;
    default:
      accSubtitle.textContent = NOT_AVALABLE_CONTENT;
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

function createAccomplishmentSection(accomplishments: Accomplishments) {
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
      overlayEle.classList.remove("hidden");
      addAccomplishmentsOverlayEle.classList.remove("hidden");
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

const certificationsList: AccomplishmentData[] = [
  {
    id: "cert-0",
    name: "TOEIC 800 LR",
    authority: "ETS",
    type: "certification",
  },
  {
    id: "cert-1",
    name: "Microsoft Office Specialist: Microsoft Excel 2016",
    authority: "Microsoft",
    type: "certification",
  },
  {
    id: "cert-2",
    name: "Microsoft Office Specialist: Microsoft Powerpoint 2016",
    authority: "Microsoft",
    type: "certification",
  },
  {
    id: "cert-3",
    name: "Jira Fundamentals Badge",
    authority: "Atlassian",
    type: "certification",
  },
  {
    id: "cert-4",
    name: "Confluence Fundamentals Badge",
    authority: "Atlassian",
    type: "certification",
  },
  {
    id: "cert-5",
    name: "15 days of Postman - for testers",
    authority: "Canvas Credentials (Badgr)",
    type: "certification",
  },
  {
    id: "cert-6",
    name: "Fit for Scrum Course",
    authority: "Axon Active - Agile Software Development Company",
    type: "certification",
  },
];

const projectsList: AccomplishmentData[] = [
  {
    id: "project-3",
    name: "LinkedIn Like Project",
    duration: {
      start: "04/01/2026",
      end: "05/01/2026",
    },
    type: "project",
  },
  {
    id: "project-0",
    name: "Online Sale Website",
    duration: {
      start: "03/01/2024",
      end: "04/01/2024",
    },
    type: "project",
  },
  {
    id: "project-1",
    name: "Website for managing a chain of coffee shops",
    duration: {
      start: "10/01/2023",
      end: "12/01/2023",
    },
    type: "project",
  },
  {
    id: "project-2",
    name: "Web Testing | Change Password - OrangeHRM",
    duration: {
      end: "05/01/2024",
    },
    type: "project",
  },
];

const experiencesList: ExperienceData[] = [
  {
    id: "exp-0",
    company: {
      companyId: "company-0",
      companyName: "CODE LEAP",
      companyLogoSrc: "./images/someone-leap.avif",
    },
    experiences: [
      {
        id: "exp-0-stage-0",
        position: "Quality Engineer",
        duration: {
          start: "08/01/2025",
          end: "03/01/2026",
        },
        location: "Ho Chi Minh City, Vietnam",
        description: `Main responsibilities:
                      - Worked in client projects in an Agile environment, attended Sprint events to align with development goals.
                      - Clarified unclear points of requirements during Refinement meetings.
                      - Executed test on UI/API to validate and verified new features and bug fixes of the product.
                      - Logged and tracked defects of the product.
                      - Developed and maintained UI test scripts integrated into the CI/CD pipeline. Supported some internal tasks and attended company's bonding activities.`,
      },
      {
        id: "exp-0-stage-1",
        position: "QA Engineer Intern",
        duration: {
          start: "02/01/2025",
          end: "07/01/2025",
        },
        location: "Ho Chi Minh City, Vietnam",
        description: `- Familiarized myself in working in a process of software development.
                      - Practiced on software testing by performing tasks of on-going company's projects.
                      - Collaborated with stakeholders in the development team to complete tasks and to complete the goal of the projects.`,
      },
    ],
  },
  {
    id: "exp-1",
    company: {
      companyId: "company-1",
      companyName: "Vietlink",
      companyLogoSrc: "./images/link.avif",
    },
    experiences: [
      {
        id: "exp-1-stage-0",
        position: "QC Intern",
        duration: {
          start: "06/01/2024",
          end: "08/01/2024",
        },
        location: "Ho Chi Minh City, Vietnam",
        description: `- Studied software testing fundamentals, practiced on analyzing requirements of on-going company's projects under the guidance of the mentor.
                      - Reviewed existing on-going company's test suites to understand components of a test case, then designed and executed a test suite to test a website.
                      - Participated in testing applications of on-going company's project alongside a QC team member.
                      - Practiced on logging bug for issues found when performing testing.
                      - Learned basic API Testing concepts and practiced using Postman to verify endpoints of a CMS app.`,
      },
    ],
  },
  {
    id: "exp-2",
    company: {
      companyId: "company-2",
      companyName: "TESTINGVN",
      companyLogoSrc: "./images/fresher.avif",
    },
    experiences: [
      {
        id: "exp-2-stage-0",
        position: "Fresher Tester Course",
        duration: {
          start: "2024",
          end: "2024",
        },
        location: "Ho Chi Minh City, Vietnam",
        description: `Training Scope:
                    - Studied fundamentals in Software Testing, SDLC, Testing Levels/Types, and Defect Management.
                    - Learned formal Test Design Techniques (BVA, EP, Decision Table) and practiced writing bug reports and test cases for Web/Mobile/Windows apps under trainer supervision.
                    - PET PROJECT: OrangeHRM - Password Change Feature:
                    + Description: A practical exercise from the course requiring exploration and testing of the OrangeHRM application (live demo version).
                    + Outcome: Defined a test suite covering about 60 cases and found 10 issues in the feature.`,
      },
    ],
  },
];

const educationList: Education[] = [
  {
    id: "education-0",
    institution: {
      id: "institution-0",
      educationName: "Ho Chi Minh City University of Technology",
      educationLogoSrc: "./images/bach-khoa-hcm.avif",
    },
    major: "Computer Science",
    degreeType: "bachelor",
    duration: {
      start: "09/01/2021",
      end: "09/01/2025",
    },
  },
];

const skillsList: Skill[] = [
  {
    id: "skill-0",
    skillName: "Self-Organized",
  },
  {
    id: "skill-1",
    skillName: "Attention to Detail",
  },
  {
    id: "skill-2",
    skillName: "Software Development",
  },
  {
    id: "skill-3",
    skillName: "Software Testing",
  },
  {
    id: "skill-4",
    skillName: "Outsourcing",
  },
  {
    id: "skill-5",
    skillName: "Requirement Analysis",
  },
  {
    id: "skill-6",
    skillName: "Programming",
  },
];

const contactList: Contact[] = [
  {
    type: "linkedin",
    info: "https://www.linkedin.com/in/dang-phan-minh-phuc",
  },
  {
    type: "email",
    info: "dangphanminhphuctbag@gmail.com",
  },
  {
    type: "phone",
    info: "+84 782 844 906",
    phoneType: "mobile",
  } as PhoneContact,
  {
    type: "website",
    info: "https://github.com/bi151103",
  },
];

const accomplishments = {
  publicationsList: [],
  patentsList: [],
  coursesList: [],
  projectsList: projectsList,
  honorsAndAwardsList: [],
  testScoresList: [],
  languagesList: [],
  organizationsList: [],
  certificationsList: certificationsList,
};

const otherProfilesList: Profile[] = [
  {
    id: "profile-0",
    name: "Kien Tran",
    headline: "QE at Code Leap",
    connection: {
      relationship: "1st",
      addConnectionInvitationSent: false,
    },
    profileImgUrl:
      "./images/3d-illustration-human-avatar-profile_23-2150671142.avif",
  },
  {
    id: "profile-1",
    name: "Dat Doan",
    headline: "Software Engineer @ CODE LEAP",
    connection: {
      relationship: "1st",
      addConnectionInvitationSent: false,
    },
    profileImgUrl: "./images/smiling-young-man-illustration_1308-174669.avif",
  },
  {
    id: "profile-2",
    name: "Thùy Nguyễn",
    headline: "QA Tester | ISTQB CTFL Certified",
    connection: {
      relationship: "1st",
      addConnectionInvitationSent: false,
    },
    profileImgUrl: "./images/woman-floral-traditional-costume_1308-176159.avif",
  },
  {
    id: "profile-3",
    name: "Tran Thuy Linh (Tracy Tran)",
    headline: "Data Labeling Team Lead/Ainavio/Code Leap",
    connection: {
      relationship: "2nd",
      addConnectionInvitationSent: false,
    },
    profileImgUrl:
      "./images/business-people-icon-character-illustration-vector-flat-style_40876-4152.avif",
  },
  {
    id: "profile-4",
    name: "Hien (Hazel) Nguyen",
    headline:
      "CODE LEAP is hiring: Senior Python; Senior ReactJS, Tech lead (Open for expat)",
    connection: {
      relationship: "1st",
      addConnectionInvitationSent: false,
    },
    profileImgUrl:
      "./images/charming-cartoon-style-avatar-girl-fun-creative-illustration_1186924-4629.avif",
  },
  {
    id: "profile-5",
    name: "Toan Le",
    headline: "Senior Software Engineer at Code Leap",
    connection: {
      relationship: "2nd",
      addConnectionInvitationSent: true,
    },
    profileImgUrl: "./images/person-avatar-design_24877-38137.avif",
  },
];

const header = createHeader();
const backgroundImgSection = createBackgroundImageSection();
const profileActionSection = createProfileActionSection();
const profileInfoSection = createProfileInfoSection();
const aboutSection = createAboutSection();
const featuredSection = createFeaturedSection();
const privateToYouSection = createPrivateToYouSection();
const activitySection = creataActivitySection();
const seeAllBtnLink = createActivitySeeAllButton();
const experienceSection = createExperienceSection(experiencesList);
const educationSection = createEducationSection(educationList);
const addEducationCTA = createAddEducationCTA();
const volunteeringSection = createVolunteeringSection();
const skillSection = createSkillSection(skillsList);
const recommendationSection = createRecommendationSection();
const contactSection = createContactSection(contactList);
const accomplishmentSection = createAccomplishmentSection(accomplishments);

const bodyEle = document.querySelector("body") as HTMLElement;
bodyEle.className = "py-50px text-small";
bodyEle.prepend(header);
bodyEle.insertBefore(backgroundImgSection, header.nextSibling);
bodyEle.insertBefore(profileActionSection, backgroundImgSection.nextSibling);
bodyEle.insertBefore(profileInfoSection, profileActionSection.nextSibling);
bodyEle.insertBefore(aboutSection, profileInfoSection.nextSibling);
bodyEle.insertBefore(featuredSection, aboutSection.nextSibling);
bodyEle.insertBefore(privateToYouSection, featuredSection.nextSibling);
bodyEle.insertBefore(activitySection, privateToYouSection.nextSibling);
bodyEle.insertBefore(seeAllBtnLink, activitySection.nextSibling);
bodyEle.insertBefore(experienceSection, seeAllBtnLink.nextSibling);
bodyEle.insertBefore(educationSection, experienceSection.nextSibling);
bodyEle.insertBefore(addEducationCTA, educationSection.nextSibling);
bodyEle.insertBefore(volunteeringSection, addEducationCTA.nextSibling);
bodyEle.insertBefore(skillSection, volunteeringSection.nextSibling);
bodyEle.insertBefore(recommendationSection, skillSection.nextSibling);
bodyEle.insertBefore(accomplishmentSection, recommendationSection.nextSibling);
bodyEle.insertBefore(contactSection, accomplishmentSection.nextSibling);

const overlayEle = document.querySelector("[data-id='overlay']") as HTMLElement;
const addFeaturedOverlayEle = document.querySelector(
  "[data-id='overlay'] [data-id='add-featured-overlay']",
) as HTMLElement;

const closeOverlay = (e: Event) => {
  const overlayChildrenEles = document.querySelectorAll(
    "[data-id='overlay'] > *",
  );
  for (const overlayEle of overlayChildrenEles) {
    if (!overlayEle.classList.contains("hidden")) {
      overlayEle.classList.add("hidden");
    }
  }
  if (!overlayEle.classList.contains("hidden")) {
    overlayEle.classList.add("hidden");
    bodyEle.classList.remove("overflow-hidden");
  }
  e.stopPropagation();
};

const closeDownloadAppCTABtn = document.querySelector(
  '[data-id="download-cta"] button[data-action="close"]',
) as HTMLElement;
closeDownloadAppCTABtn.addEventListener("click", closeDownloadApp);

const closeOverlayBtn = document.querySelector(
  '[data-id="overlay"] button[data-action="close"]',
) as HTMLElement;
closeOverlayBtn.addEventListener("click", closeOverlay);

addFeaturedOverlayEle.addEventListener("click", (e) => {
  //stop propagation when clicking on the dialog area to prevent the dialog from closing
  e.stopPropagation();
});

overlayEle.addEventListener("click", closeOverlay);

const addFeaturedTypesList = document.querySelector(
  "ul[data-id='add-featured-types-list']",
) as HTMLElement;
addFeaturedTypesList.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const addPhotoBtn = target.closest("button[data-action='add-photo']");
  if (addPhotoBtn) {
    const selectImgInput = document.querySelector(
      "[data-id='featured-image-input']",
    ) as HTMLElement;
    selectImgInput.click();
    return;
  }
  const uploadDocumentBtn = target.closest(
    "button[data-action='upload-document']",
  );
  if (uploadDocumentBtn) {
    const selectDocumentInput = document.querySelector(
      "[data-id='featured-document-input']",
    ) as HTMLElement;
    selectDocumentInput.click();
  }
});

function createOtherProfilesSection() {
  if (otherProfilesList.length < 1) return;

  const newSection = document.createElement("section");
  contactSection.after(newSection);
  newSection.dataset.id = "other-profiles";
  newSection.className = "p-15px";

  const otherProfileHeader = document.createElement("h2");
  newSection.appendChild(otherProfileHeader);
  otherProfileHeader.textContent = "Other similar profiles";

  const listOfProfiles = document.createElement("ul");
  newSection.appendChild(listOfProfiles);
  listOfProfiles.className = "mt-20px";

  for (let i = 0; i < otherProfilesList.length; i++) {
    const listItem = document.createElement("li");
    listOfProfiles.appendChild(listItem);
    listItem.className =
      "flex items-center *:text-inherit *:font-normal not-first:mt-10px";
    listItem.dataset.id = otherProfilesList[i].id;

    const profileItemLeft = document.createElement("a");
    listItem.appendChild(profileItemLeft);
    profileItemLeft.href = `?id=${otherProfilesList[i].id}`;
    profileItemLeft.className = "min-w-50px";

    const profileImg = document.createElement("img");
    profileItemLeft.appendChild(profileImg);
    profileImg.src = otherProfilesList[i].profileImgUrl ?? "";
    profileImg.className = "w-md-img h-md-img rounded-full";

    const profileItemMiddle = document.createElement("a");
    listItem.appendChild(profileItemMiddle);
    profileItemMiddle.href = `?id=${otherProfilesList[i].id}`;
    profileItemMiddle.className = "ml-10px basis-[calc(100%-50px-50px)]";

    const profileItemMiddleTextContainer = document.createElement("p");
    profileItemMiddle.appendChild(profileItemMiddleTextContainer);

    const profileName = document.createElement("span");
    profileItemMiddleTextContainer.appendChild(profileName);
    profileName.className = "text-medium-bold text-emphasis-tx";
    profileName.textContent = otherProfilesList[i].name;

    const dotSeparatorBtwNameAndConnectionRel = document.createElement("span");
    profileItemMiddleTextContainer.appendChild(
      dotSeparatorBtwNameAndConnectionRel,
    );
    dotSeparatorBtwNameAndConnectionRel.className = "dot";

    const profileConnectionRel = document.createElement("span");
    profileItemMiddleTextContainer.appendChild(profileConnectionRel);
    profileConnectionRel.className = "text-low-emphasis-tx";
    profileConnectionRel.textContent =
      otherProfilesList[i].connection.relationship;

    const profileHeadline = document.createElement("p");
    profileItemMiddle.appendChild(profileHeadline);
    profileHeadline.className = "text-xs-small";
    profileHeadline.textContent = otherProfilesList[i].headline ?? "";

    if (
      otherProfilesList[i].connection.relationship === "1st" ||
      (otherProfilesList[i].connection.relationship !== "1st" &&
        otherProfilesList[i].connection.addConnectionInvitationSent === false)
    ) {
      const profileItemRight = document.createElement("button");
      listItem.appendChild(profileItemRight);
      profileItemRight.className =
        "min-w-40px basis-40px h-40px border border-[#000000bf] rounded-full";

      profileItemRight.dataset.action =
        otherProfilesList[i].connection.relationship === "1st"
          ? "send-message"
          : "add-connection";
      profileItemRight.dataset.link =
        otherProfilesList[i].connection.relationship === "1st"
          ? `./send-message.html?id=${otherProfilesList[i].id}`
          : undefined;

      const profileItemRightImg = document.createElement("img");
      profileItemRight.appendChild(profileItemRightImg);
      profileItemRightImg.src =
        otherProfilesList[i].connection.relationship === "1st"
          ? "./images/icons8-email-send-100.png"
          : "./images/icons8-add-friend-100.png";
      profileItemRightImg.className = "w-sm-img h-sm-img";

      if (otherProfilesList[i].connection.relationship === "1st") {
        profileItemRight.addEventListener("click", (e) => {
          window.location.href = profileItemRight.dataset.link ?? "#";
        });
      } else {
        profileItemRight.addEventListener("click", (e) => {
          otherProfilesList[i].connection.addConnectionInvitationSent = true;
          profileItemRight.remove();

          const newProfileItemRight = document.createElement("span");
          listItem.appendChild(newProfileItemRight);
          newProfileItemRight.className =
            "min-w-min basis-min text-xs-small text-emphasis-tx text-center";
          newProfileItemRight.textContent = "Invited";
        });
      }
    } else {
      const profileItemRight = document.createElement("span");
      listItem.appendChild(profileItemRight);
      profileItemRight.className =
        "min-w-min basis-min text-xs-small text-emphasis-tx text-center";
      profileItemRight.textContent = "Invited";
    }
  }
}

createOtherProfilesSection();
