import { MAX_RECENT_SEARCH_ITEM_SHOWN } from "../constant.js";
import { createEmptyState } from "./empty-state.js";
import { overlay } from "./overlay.js";

export function createSearchComboboxOverlay(recentSearch: string[]) {
  const searchOverlay = document.createElement("div");
  searchOverlay.className = "hidden w-full h-full bg-white";
  searchOverlay.dataset.id = "search-overlay";

  const header = document.createElement("div");
  searchOverlay.appendChild(header);
  header.className = "flex items-center h-50px";

  const backArrowBtn = document.createElement("button");
  header.appendChild(backArrowBtn);
  backArrowBtn.dataset.action = "close";
  backArrowBtn.className =
    "min-w-md-img w-md-img h-full flex justify-center items-center";

  const backArrowBtnImg = document.createElement("img");
  backArrowBtn.append(backArrowBtnImg);
  backArrowBtnImg.src = "./images/icons8-left-100.png";
  backArrowBtnImg.className = "w-3/5 aspect-square";

  const searchInput = document.createElement("input");
  header.appendChild(searchInput);
  searchInput.type = "text";
  searchInput.dataset.id = "input-overlay";
  searchInput.placeholder = "Search";
  searchInput.className =
    "basis-[calc(100%-100px)] font-bold pl-20px pr-10px focus:outline-2 rounded-[2px] pt-[4px] text-medium text-emphasis-tx";

  const recentSearchSection = document.createElement("div");
  searchOverlay.append(recentSearchSection);

  const recentSearchHeader = document.createElement("div");
  recentSearchSection.append(recentSearchHeader);
  recentSearchHeader.className = "flex p-15px justify-between";

  const recentSrTitle = document.createElement("h3");
  recentSearchHeader.append(recentSrTitle);
  recentSrTitle.textContent = "Recent search";
  recentSrTitle.className = "text-emphasis-tx font-medium";

  const clearBtn = document.createElement("button");
  recentSearchHeader.append(clearBtn);
  clearBtn.textContent = "Clear";
  clearBtn.className = "px-10px disabled:hidden";
  clearBtn.dataset.action = "clear-recent-search";

  const srcList = document.createElement("ul");
  searchOverlay.append(srcList);
  srcList.className = "mt-10px";
  srcList.dataset.id = "recent-search-list";

  if (recentSearch.length === 0) {
    clearBtn.disabled = true;

    const emptyState = createEmptyState();
    searchOverlay.append(emptyState);
  } else {
    for (
      let i = 0;
      i < Math.min(recentSearch.length, MAX_RECENT_SEARCH_ITEM_SHOWN);
      i++
    ) {
      const item = document.createElement("li");
      srcList.append(item);
      item.className =
        "flex items-center border-b border-separator-line min-h-[56px] py-8px pr-15px w-full";

      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(
        `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,255.98958,255.98958">
  <g fill="#8c8c8c" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M16,4c-6.61719,0 -12,5.38281 -12,12c0,6.61719 5.38281,12 12,12c6.61719,0 12,-5.38281 12,-12c0,-6.61719 -5.38281,-12 -12,-12zM16,6c5.53516,0 10,4.46484 10,10c0,5.53516 -4.46484,10 -10,10c-5.53516,0 -10,-4.46484 -10,-10c0,-5.53516 4.46484,-10 10,-10zM15,8v9h7v-2h-5v-7z"></path></g></g>
  </svg>`,
        "image/svg+xml",
      );
      const svgElement = svgDoc.documentElement;
      item.append(svgElement);
      svgElement.setAttribute("class", "mx-[32px]");

      const srcText = document.createElement("span");
      item.append(srcText);
      srcText.textContent = recentSearch[i];
      srcText.className = "w-full text-medium truncate";
    }
  }

  searchOverlay.addEventListener("click", async (e) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    const backArrowBtn = target.closest("button[data-action='close']");
    if (backArrowBtn) {
      const overlayChildren = overlay.children;
      for (const overlayChild of overlayChildren) {
        overlayChild.classList.add("hidden");
      }
      overlay.classList.add("hidden");
      const bodyEle = document.body;
      bodyEle.classList.remove("overflow-hidden");
      return;
    }
    const clearBtn = target.closest(
      "button[data-action='clear-recent-search']",
    );
    if (clearBtn) {
      const searchOverlay = e.currentTarget as HTMLElement;
      const module = await import("./clear-search-history-overlay.js");
      const searchHistoryOverlay = module.createClearSearchHistoryOverlay();
      overlay.append(searchHistoryOverlay);
      searchOverlay.classList.add("overflow-hidden");
      return;
    }
  });

  return searchOverlay;
}
