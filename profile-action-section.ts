export function createProfileActionSection(): HTMLElement {
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
  shareBtn.addEventListener("click", async (e: Event) => {
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
  });

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
