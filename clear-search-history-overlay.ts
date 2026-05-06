import { MAX_RECENT_SEARCH_ITEM_SHOWN } from "./constant.js";
import { createEmptyState } from "./empty-state.js";
import { overlay as rootOverlay } from "./overlay.js";

export function createClearSearchHistoryOverlay() {
  const container = document.createElement("div");
  container.className = "w-dvh h-dvh bg-[rgba(0,0,0,0.6)] fixed top-0 z-1002";

  const overlay = document.createElement("div");
  container.append(overlay);
  overlay.className =
    "min-w-[300px] w-[70vw] max-h-[70vh] h-min bg-white rounded-[8px] fixed z-1003 left-0 right-0 top-0 bottom-0 m-auto overflow-y-auto p-24px";
  overlay.dataset.id = "clear-search-history-overlay";

  const title = document.createElement("h1");
  overlay.appendChild(title);
  title.textContent = "Clear history?";
  title.className = "text-emphasis-tx font-medium";

  const mainContent = document.createElement("p");
  overlay.append(mainContent);
  mainContent.textContent =
    "Your search history is only visible to you, and it helps us to show you better results. Are you sure you want to clear it?";
  mainContent.className = "mt-10px text-medium text-emphasis-tx";

  const actionsContainer = document.createElement("div");
  overlay.append(actionsContainer);
  actionsContainer.className =
    "flex justify-end mt-15px *:px-[24px] *:py-[12px] *:h:[48px] *:text-inherit text-medium *:inline-block";

  const cancelBtn = document.createElement("button");
  actionsContainer.append(cancelBtn);
  cancelBtn.textContent = "Cancel";
  cancelBtn.className = "";
  cancelBtn.dataset.action = "cancel";

  const continueBtn = document.createElement("button");
  actionsContainer.append(continueBtn);
  continueBtn.textContent = "Continue";
  continueBtn.className = "";
  continueBtn.dataset.action = "continue";

  container.addEventListener("click", (e) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    const container = e.currentTarget as HTMLElement;
    const cancelBtn = target.closest("button[data-action='cancel']");
    if (cancelBtn) {
      container.classList.add("hidden");
      const searchOverlay = rootOverlay.querySelector(
        "[data-id='search-overlay']",
      ) as HTMLElement;
      searchOverlay.classList.remove("overflow-hidden");
      return;
    }
    const continueBtn = target.closest("button[data-action='continue']");
    if (continueBtn) {
      const srcList = rootOverlay.querySelector(
        "ul[data-id='recent-search-list']",
      ) as HTMLElement;
      const srcListItems = srcList.children;
      for (let i = 0; i < MAX_RECENT_SEARCH_ITEM_SHOWN; i++) {
        srcList.removeChild(srcListItems[srcListItems.length - 1]);
      }

      (
        (container.parentElement as HTMLElement).querySelector(
          "button[data-action='clear-recent-search']",
        ) as HTMLButtonElement
      ).disabled = true;

      const emptyState = createEmptyState();
      const searchOverlay = rootOverlay.querySelector(
        "[data-id='search-overlay']",
      ) as HTMLElement;
      searchOverlay.append(emptyState);
      container.classList.add("hidden");
      return;
    }
    const overlay = target.closest("[data-id='clear-search-history-overlay']");
    if (overlay) {
      e.stopPropagation();
      return;
    }
    container.classList.add("hidden");
  });

  return container;
}
