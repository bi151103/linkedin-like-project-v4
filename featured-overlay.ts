function createFeaturedTypesItem(type: "photo" | "document" | "link") {
  const item = document.createElement("li");
  item.className = "*:text-inherit";

  const button = document.createElement("button");
  item.appendChild(button);
  button.className = "flex items-center w-full block";

  const typeImg = document.createElement("img");
  button.appendChild(typeImg);
  typeImg.className = "w-sm-img h-sm-img";

  const text = document.createElement("span");
  button.appendChild(text);
  text.className = "ml-10px";

  switch (type) {
    case "photo":
      button.dataset.action = "add-photo";
      typeImg.src = "./images/icons8-image-100.png";
      text.textContent = "Add a photo";
      break;
    case "document":
      button.dataset.action = "upload-document";
      typeImg.src = "./images/icons8-blank-document-100.png";
      text.textContent = "Upload a document";
      break;
    case "link":
      button.dataset.action = "add-link";
      typeImg.src = "./images/icons8-link-100.png";
      text.textContent = "Add a link";
      button.dataset.link = "./add-link.html";
      break;
    default:
      break;
  }

  return item;
}

export function createFeaturedOverlay() {
  const featuredOverlay = document.createElement("div");
  featuredOverlay.className =
    "hidden h-[240px] w-full bg-white absolute bottom-0 rounded-t-[16px] z-1001";
  featuredOverlay.dataset.id = "add-featured-overlay";

  const headerContainer = document.createElement("div");
  featuredOverlay.appendChild(headerContainer);
  headerContainer.className = "p-15px flex";

  const title = document.createElement("h1");
  headerContainer.appendChild(title);
  title.textContent = "Select a file type";
  title.className = "text-emphasis-tx";

  const closeOverlayBtn = document.createElement("button");
  headerContainer.appendChild(closeOverlayBtn);
  closeOverlayBtn.className = "ml-auto";
  closeOverlayBtn.dataset.action = "close";

  const closeOverlayBtnImg = document.createElement("img");
  closeOverlayBtn.appendChild(closeOverlayBtnImg);
  closeOverlayBtnImg.src = "./images/icons8-close-100.png";
  closeOverlayBtnImg.className = "w-sm-img h-sm-img";

  const typesList = document.createElement("ul");
  featuredOverlay.appendChild(typesList);
  typesList.className =
    "p-15px *:py-15px *:hover:bg-[rgba(0,0,0,0.04)] *:rounded-[24px] *:w-full";

  const addPhotoBtn = createFeaturedTypesItem("photo");
  const uploadDocumentBtn = createFeaturedTypesItem("document");
  const addLinkBtn = createFeaturedTypesItem("link");

  typesList.appendChild(addPhotoBtn);
  typesList.appendChild(uploadDocumentBtn);
  typesList.appendChild(addLinkBtn);

  const photoInput = document.createElement("input");
  featuredOverlay.appendChild(photoInput);
  photoInput.type = "file";
  photoInput.hidden = true;
  photoInput.dataset.id = "featured-image-input";
  photoInput.accept = "image/jpeg,image/jpg,image/png";

  const documentInput = document.createElement("input");
  featuredOverlay.appendChild(documentInput);
  documentInput.type = "file";
  documentInput.hidden = true;
  documentInput.dataset.id = "featured-document-input";
  documentInput.accept = ".doc,.docx,.pdf";

  featuredOverlay.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const addPhotoBtn = target.closest("button[data-action='add-photo']");
    const closeOverlayBtn = target.closest("button[data-action='close']");
    if (closeOverlayBtn) {
      const overlay = closeOverlayBtn.closest(
        "[data-id='overlay']",
      ) as HTMLElement;
      const overlayChildren = overlay.children;
      for (const overlayChild of overlayChildren) {
        overlayChild.classList.add("hidden");
      }
      overlay.classList.add("hidden");
      const bodyEle = document.querySelector("body") as HTMLElement;
      bodyEle.classList.remove("overflow-hidden");
      e.stopPropagation();
      return;
    }
    if (addPhotoBtn) {
      const selectImgInput = document.querySelector(
        "[data-id='featured-image-input']",
      ) as HTMLElement;
      selectImgInput.click();
      e.stopPropagation();
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
      e.stopPropagation();
      return;
    }
    const addLinkBtn = target.closest("button[data-action='add-link']");
    if (addLinkBtn) {
      window.location.href = (addLinkBtn as HTMLElement).dataset.link ?? "#";
      e.stopPropagation();
      return;
    }
    e.stopPropagation();
  });

  return featuredOverlay;
}
