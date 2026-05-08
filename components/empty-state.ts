export function createEmptyState() {
  const emptyState = document.createElement("div");
  emptyState.className = "py-20px w-full max-h-[100px] m-auto text-center";

  const emptyStateImg = document.createElement("img");
  emptyState.append(emptyStateImg);
  emptyStateImg.src = "./images/icons8-empty-100.png";
  emptyStateImg.className = "w-md-img h-md-img";

  const emptyStateText = document.createElement("p");
  emptyState.append(emptyStateText);
  emptyStateText.textContent = "Nothing here yet";
  emptyStateText.className = "text-medium-bold text-3xl mt-5px";
  return emptyState;
}
