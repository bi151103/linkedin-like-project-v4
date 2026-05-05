export function createHeader(): HTMLElement {
  /** <header
      class="w-full h-50px flex items-center bg-white border-b border-separator-line fixed top-0 z-999"
    > */
  const header = document.createElement("header");
  header.className =
    "w-full h-50px flex items-center bg-white border-b border-separator-line fixed top-0 z-999";

  /**<div class="h-3/5 w-50px">
        <a href="./" class="w-full h-full flex justify-center">
          <img
            class="h-full aspect-square"
            src="./images/icons8-profile-100.png"
          />
        </a>
      </div> */
  const profileLinkContainer = document.createElement("div");
  header.appendChild(profileLinkContainer);
  profileLinkContainer.className = "h-3/5 min-w-50px basis-50px";

  const profileLink = document.createElement("a");
  profileLinkContainer.appendChild(profileLink);
  profileLink.className = "w-full h-full flex justify-center";
  profileLink.href = "./";

  const profileLinkImg = document.createElement("img");
  profileLink.appendChild(profileLinkImg);
  profileLinkImg.src = "./images/icons8-profile-100.png";
  profileLinkImg.className = "h-full aspect-square";

  /**<div
        class="basis-[calc(100%-100px)] h-3/5 bg-[#edf3f8] flex items-center"
      >
        <img
          class="h-3/5 aspect-square ml-10px"
          src="./images/icons8-search-100.png"
        />
        <input
          type="text"
          name="search"
          class="font-bold pl-5px pr-10px outline-none pt-[4px] text-medium"
          placeholder="Search"
        />
      </div> */
  const searchContainer = document.createElement("div");
  header.appendChild(searchContainer);
  searchContainer.className =
    "basis-[calc(100%-100px)] h-3/5 bg-[#edf3f8] flex items-center";

  const searchIconImg = document.createElement("img");
  searchContainer.appendChild(searchIconImg);
  searchIconImg.src = "./images/icons8-search-100.png";
  searchIconImg.className = "h-3/5 aspect-square ml-10px";

  const searchInput = document.createElement("input");
  searchContainer.appendChild(searchInput);
  searchInput.type = "text";
  searchInput.dataset.id = "search";
  searchInput.placeholder = "Search";
  searchInput.className =
    "font-bold pl-5px pr-10px outline-none pt-[4px] text-medium";

  /**<div class="h-3/5 w-50px">
        <a
          href="./message.html"
          class="relative w-full h-full flex justify-center"
        >
          <img
            class="h-full aspect-square"
            src="./images/icons8-chat-bubble-100.png"
          />
          <img
            src="./images/icons8-circled-1-100.png"
            class="w-sm-noti-bubble h-sm-noti-bubble border border-double rounded-full border-white absolute top-0 right-[2px]"
          />
        </a>
      </div> */
  const messageNotiContainer = document.createElement("div");
  header.appendChild(messageNotiContainer);
  messageNotiContainer.className = "h-3/5 min-w-50px basis-50px";

  const messageLink = document.createElement("a");
  messageNotiContainer.appendChild(messageLink);
  messageLink.href = "./message.html";
  messageLink.className = "relative w-full h-full flex justify-center";

  const messageLinkImg = document.createElement("img");
  messageLink.appendChild(messageLinkImg);
  messageLinkImg.src = "./images/icons8-chat-bubble-100.png";
  messageLinkImg.className = "h-full aspect-square";

  const messessCircledBubble = document.createElement("img");
  messageLink.appendChild(messessCircledBubble);
  messessCircledBubble.src = "./images/icons8-circled-1-100.png";
  messessCircledBubble.className =
    "w-sm-noti-bubble h-sm-noti-bubble border border-double rounded-full border-white absolute top-0 right-[2px]";
  return header;
}
