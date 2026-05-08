export function createDownloadCTASection() {
  const container = document.createElement("div");
  container.className =
    "h-[60px] w-full px-15px fixed z-999 bottom-50px bg-[#f3f2ee] shadow-[0_0_20px_rgba(0,0,0,0.7)] flex items-center";

  const closeCTABtn = document.createElement("button");
  container.appendChild(closeCTABtn);
  closeCTABtn.className = "min-w-sm-img";
  closeCTABtn.dataset.action = "close";

  const closeCTABtnImg = document.createElement("img");
  closeCTABtn.appendChild(closeCTABtnImg);
  closeCTABtnImg.src = "./images/icons8-close-100.png";
  closeCTABtnImg.className = "w-20px h-20px";

  const mainText = document.createElement("p");
  mainText.textContent = "Try the LinkedIn app";
  container.appendChild(mainText);
  mainText.className = "ml-10px text-small-bold text-emphasis-tx";

  const continueLink = document.createElement("a");
  container.appendChild(continueLink);
  continueLink.href = "https://github.com/bi151103";
  continueLink.target = "_blank";
  continueLink.className =
    "min-w-min leading-[2] text-white bg-primary-bg px-15px rounded-[24px] ml-auto hover:bg-[#004182]";
  continueLink.textContent = "Continue";

  container.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const closeCTABtn = target.closest("button[data-action='close']");
    if (closeCTABtn) {
      const cta = e.currentTarget as HTMLElement;
      cta.classList.add("hidden");
    }
  });

  return container;
}
