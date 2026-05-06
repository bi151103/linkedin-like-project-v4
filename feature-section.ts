import { overlay } from "./overlay.js";

export function createFeaturedSection(): HTMLElement {
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
  addFeaturedBtn.addEventListener("click", (e) => {
    overlay.classList.remove("hidden");
    const bodyEle = document.body;
    bodyEle.classList.add("overflow-hidden");
    const addFeaturedOverlayEle = document.querySelector(
      "[data-id='overlay'] [data-id='add-featured-overlay']",
    ) as HTMLElement;
    addFeaturedOverlayEle.classList.remove("hidden");
  });

  return featuredSection;
}
