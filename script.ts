const closeDownloadApp = (e: Event) => {
  const downloadAppCTAEle = document.querySelector("[data-id='download-cta']");
  //there are some ways to adjust the style of an element in js
  // downloadAppCTAEle.setAttribute("style", "display: none;");
  // downloadAppCTAEle.style.display = "none";
  downloadAppCTAEle?.classList.toggle("hidden");
};
const shareProfile = async (e: Event) => {
  const shareProfileBtn = e.currentTarget as unknown as HTMLElement;
  const shareData = {
    //there are 2 ways to access the data-attribute attribute of elements
    // title: shareProfileBtn.getAttribute("data-title"),
    // text: shareProfileBtn.getAttribute("data-text"),
    // url: shareProfileBtn.getAttribute("data-url"),
    title: shareProfileBtn.dataset.title,
    text: shareProfileBtn.dataset.text,
    url: shareProfileBtn.dataset.url,
  };
  console.log(shareData);
  await navigator.share(shareData);
};
const overlayEle = document.querySelector("[data-id='overlay']") as HTMLElement;
const addFeaturedOverlayEle = document.querySelector(
  "[data-id='overlay'] [data-id='add-featured-overlay']",
) as HTMLElement;

const closeOverlay = (e: Event) => {
  if (!overlayEle?.classList.contains("hiddens")) {
    overlayEle?.classList.add("hidden");
    (document.querySelector("body") as HTMLElement).classList.remove(
      "overflow-hidden",
    );
  }
  e.stopPropagation();
};
const showAddFeatureOverlay = (e: Event) => {
  overlayEle?.classList.toggle("hidden");
  (document.querySelector("body") as HTMLElement).classList.toggle(
    "overflow-hidden",
  );
  if (addFeaturedOverlayEle?.classList.contains("hidden")) {
    addFeaturedOverlayEle?.classList.remove("hidden");
  }
};

const closeDownloadAppCTABtn = document.querySelector(
  '[data-id="download-cta"] button[data-action="close"]',
) as HTMLElement;
closeDownloadAppCTABtn.addEventListener("click", closeDownloadApp);

const shareProfileBtn = document.querySelector(
  '[data-id="profile-action"] button[data-action="share"',
) as HTMLElement;
shareProfileBtn.addEventListener("click", shareProfile);

const addFeaturedBtn = document.querySelector(
  'button[data-action="add-featured"',
) as HTMLElement;
addFeaturedBtn.addEventListener("click", showAddFeatureOverlay);

const closeOverlayBtn = document.querySelector(
  '[data-id="overlay"] button[data-action="close"]',
) as HTMLElement;
closeOverlayBtn.addEventListener("click", closeOverlay);

addFeaturedOverlayEle.addEventListener("click", (e) => {
  //stop propagation when clicking on the dialog to prevent the dialog from closing
  e.stopPropagation();
});

overlayEle.addEventListener("click", closeOverlay);

const selectImage = (e: Event) => {
  const selectImgInput = document.querySelector(
    "[data-id='featured-image-input'",
  ) as HTMLElement;
  selectImgInput.click();
};
const addPhotoBtn = document.querySelector(
  "[data-action='add-photo'",
) as HTMLElement;
addPhotoBtn.addEventListener("click", selectImage);

const selectDocument = (e: Event) => {
  const selectDocumentInput = document.querySelector(
    "[data-id='featured-document-input'",
  ) as HTMLElement;
  selectDocumentInput.click();
};
const uploadDocumentBtn = document.querySelector(
  "[data-action='upload-document'",
) as HTMLElement;
uploadDocumentBtn.addEventListener("click", selectDocument);

const addExperienceBtn = document.querySelector(
  "button[data-action='add-experience']",
) as HTMLElement;
addExperienceBtn.addEventListener("click", (e: Event) => {
  window.location.href =
    (e.currentTarget as unknown as HTMLElement).dataset.link ?? "#";
});

const editExperienceBtns = document.querySelectorAll(
  "button[data-action='edit-experience']",
);
for (let i = 0; i < editExperienceBtns.length; i++) {
  const editExperienceBtn = editExperienceBtns.item(i) as HTMLElement;
  editExperienceBtn.addEventListener("click", (e) => {
    const editExperienceLinkAttr = (e.currentTarget as HTMLElement).dataset
      .link;
    window.location.href = editExperienceLinkAttr
      ? `${editExperienceLinkAttr}?id=${i}`
      : "#";
  });
}

export {};
