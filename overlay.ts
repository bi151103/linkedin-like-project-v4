function createOverlay() {
  const overlay = document.createElement("div");
  overlay.className =
    "hidden w-dvw h-dvh bg-[rgba(0,0,0,0.6)] fixed top-0 z-1000";
  overlay.dataset.id = "overlay";

  overlay.addEventListener("click", (e) => {
    const overlay = e.currentTarget as HTMLElement;

    const overlayChildrenEles = overlay.children;
    for (const overlayEle of overlayChildrenEles) {
      overlayEle.classList.add("hidden");
    }
    overlay.classList.add("hidden");
    const bodyEle = document.body;
    bodyEle.classList.remove("overflow-hidden");
  });
  return overlay;
}

export const overlay = createOverlay();
