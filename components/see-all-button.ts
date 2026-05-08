export function createActivitySeeAllButton(): HTMLElement {
  const seeAllBtnLink = document.createElement("a");
  seeAllBtnLink.href = "./profile-activity.html";
  seeAllBtnLink.textContent = "See all";
  seeAllBtnLink.className =
    "block w-full leading-loose bg-white border-t border-separator-line hover:bg-primary-btn-hover-bg text-center";

  return seeAllBtnLink;
}
