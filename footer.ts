function createFooterNavItem(
  nav: "home" | "network" | "post" | "noti" | "job",
) {
  const item = document.createElement("li");
  item.className = "text-center basis-1/5 min-w-1/5 relative";

  const navLink = document.createElement("a");
  item.appendChild(navLink);
  navLink.className =
    "w-full flex flex-col items-center justify-center text-ext-small text-primary-tx";

  const navLinkImg = document.createElement("img");
  navLink.appendChild(navLinkImg);
  navLinkImg.className = "w-sm-img h-sm-img align-middle";

  const navText = document.createElement("p");
  navLink.appendChild(navText);

  let circledBubbleImg;
  switch (nav) {
    case "home":
      navText.textContent = "Home";
      navLinkImg.src = "./images/icons8-home-100.png";
      navLink.href = "./home.html";

      circledBubbleImg = document.createElement("img");
      navLink.appendChild(circledBubbleImg);
      circledBubbleImg.src = "./images/icons8-circle-100.png";
      circledBubbleImg.className =
        "w-sm-noti-bubble h-sm-noti-bubble absolute top-0 right-10px";
      break;
    case "network":
      navText.textContent = "My network";
      navLinkImg.src = "./images/icons8-people-48.png";
      navLink.href = "./connection.html";

      circledBubbleImg = document.createElement("img");
      navLink.appendChild(circledBubbleImg);
      circledBubbleImg.src = "./images/icons8-circled-1-100.png";
      circledBubbleImg.className =
        "w-sm-noti-bubble h-sm-noti-bubble absolute top-0 right-10px";
      break;
    case "post":
      navText.textContent = "Post";
      navLinkImg.src = "./images/icons8-plus-key-100.png";
      navLink.href = "./post.html";
      break;
    case "noti":
      navText.textContent = "Notifications";
      navLinkImg.src = "./images/icons8-doorbell-100.png";
      navLink.href = "./notification.html";

      circledBubbleImg = document.createElement("img");
      navLink.appendChild(circledBubbleImg);
      circledBubbleImg.src = "./images/icons8-circled-5-100.png";
      circledBubbleImg.className =
        "w-sm-noti-bubble h-sm-noti-bubble absolute top-0 right-10px";
      break;
    case "job":
      navText.textContent = "Jobs";
      navLinkImg.src = "./images/icons8-bag-100.png";
      navLink.href = "./job.html";
      break;
    default:
      break;
  }

  return item;
}

export function createFooter() {
  const footer = document.createElement("footer");
  footer.className =
    "fixed z-999 bottom-0 h-50px w-full bg-white border-t border-separator-line";

  const nav = document.createElement("nav");
  footer.appendChild(nav);
  nav.className = "w-full h-full";

  const navList = document.createElement("ul");
  nav.appendChild(navList);
  navList.className = "flex w-full h-full items-center justify-center";

  const homeItem = createFooterNavItem("home");
  const networkItem = createFooterNavItem("network");
  const postItem = createFooterNavItem("post");
  const notiItem = createFooterNavItem("noti");
  const jobItem = createFooterNavItem("job");
  navList.appendChild(homeItem);
  navList.appendChild(networkItem);
  navList.appendChild(postItem);
  navList.appendChild(notiItem);
  navList.appendChild(jobItem);

  return footer;
}
