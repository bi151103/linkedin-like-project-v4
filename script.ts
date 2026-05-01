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
  }
  e.stopPropagation();
};
const showAddFeatureOverlay = (e: Event) => {
  overlayEle?.classList.toggle("hidden");
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
  e.preventDefault();
  e.stopPropagation();
});
overlayEle.addEventListener("click", closeOverlay);

export {};
