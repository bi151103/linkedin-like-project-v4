const closeDownloadApp = (e) => {
  const downloadAppCTAEle = document.querySelector("[data-id='download-cta']");
  //there are some ways to adjust the style of an element in js
  // downloadAppCTAEle.setAttribute("style", "display: none;");
  // downloadAppCTAEle.style.display = "none";
  downloadAppCTAEle.classList.toggle("hidden");
};
const shareProfile = async (e) => {
  const shareProfileBtn = e.currentTarget;
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
const showAddFeatureOverlay = (e) => {
  const overlayEle = document.querySelector("[data-id='overlay']");
  overlayEle.classList.toggle("hidden");
  const addFeaturedOverlayEle = document.querySelector(
    "[data-id='overlay'] [data-id='add-featured-overlay']",
  );
  addFeaturedOverlayEle.classList.toggle("hidden");
};
const closeAddFeaturedOverlay = (e) => {
  const overlayEle = document.querySelector("[data-id='overlay']");
  overlayEle.classList.toggle("hidden");
  const addFeaturedOverlayEle = document.querySelector(
    "[data-id='overlay'] [data-id='add-featured-overlay']",
  );
  addFeaturedOverlayEle.classList.toggle("hidden");
};

const closeDownloadAppCTABtn = document.querySelector(
  '[data-id="download-cta"] button[data-action="close"]',
);
closeDownloadAppCTABtn.addEventListener("click", closeDownloadApp);

const shareProfileBtn = document.querySelector(
  '[data-id="profile-action"] button[data-action="share"',
);
shareProfileBtn.addEventListener("click", shareProfile);

const addFeaturedBtn = document.querySelector(
  'button[data-action="add-featured"',
);
addFeaturedBtn.addEventListener("click", showAddFeatureOverlay);

const closeAddFeaturedOverlayBtn = document.querySelector(
  '[data-id="add-featured-overlay"] button[data-action="close"]',
);
closeAddFeaturedOverlayBtn.addEventListener("click", closeAddFeaturedOverlay);
