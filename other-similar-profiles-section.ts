import { Profile } from "./model";

export function createOtherProfilesSection(otherProfilesList: Profile[]) {
  if (otherProfilesList.length < 1) return;

  const newSection = document.createElement("section");
  newSection.dataset.id = "other-profiles";
  newSection.className = "p-15px";

  const otherProfileHeader = document.createElement("h2");
  newSection.appendChild(otherProfileHeader);
  otherProfileHeader.textContent = "Other similar profiles";

  const listOfProfiles = document.createElement("ul");
  newSection.appendChild(listOfProfiles);
  listOfProfiles.className = "mt-20px";

  for (let i = 0; i < otherProfilesList.length; i++) {
    const listItem = document.createElement("li");
    listOfProfiles.appendChild(listItem);
    listItem.className =
      "flex items-center *:text-inherit *:font-normal not-first:mt-10px";
    listItem.dataset.id = otherProfilesList[i].id;

    const profileItemLeft = document.createElement("a");
    listItem.appendChild(profileItemLeft);
    profileItemLeft.href = `?id=${otherProfilesList[i].id}`;
    profileItemLeft.className = "min-w-50px";

    const profileImg = document.createElement("img");
    profileItemLeft.appendChild(profileImg);
    profileImg.src = otherProfilesList[i].profileImgUrl ?? "";
    profileImg.className = "w-md-img h-md-img rounded-full";

    const profileItemMiddle = document.createElement("a");
    listItem.appendChild(profileItemMiddle);
    profileItemMiddle.href = `?id=${otherProfilesList[i].id}`;
    profileItemMiddle.className = "ml-10px basis-[calc(100%-50px-50px)]";

    const profileItemMiddleTextContainer = document.createElement("p");
    profileItemMiddle.appendChild(profileItemMiddleTextContainer);

    const profileName = document.createElement("span");
    profileItemMiddleTextContainer.appendChild(profileName);
    profileName.className = "text-medium-bold text-emphasis-tx";
    profileName.textContent = otherProfilesList[i].name;

    const dotSeparatorBtwNameAndConnectionRel = document.createElement("span");
    profileItemMiddleTextContainer.appendChild(
      dotSeparatorBtwNameAndConnectionRel,
    );
    dotSeparatorBtwNameAndConnectionRel.className = "dot";

    const profileConnectionRel = document.createElement("span");
    profileItemMiddleTextContainer.appendChild(profileConnectionRel);
    profileConnectionRel.className = "text-low-emphasis-tx";
    profileConnectionRel.textContent =
      otherProfilesList[i].connection.relationship;

    const profileHeadline = document.createElement("p");
    profileItemMiddle.appendChild(profileHeadline);
    profileHeadline.className = "text-xs-small";
    profileHeadline.textContent = otherProfilesList[i].headline ?? "";

    if (
      otherProfilesList[i].connection.relationship === "1st" ||
      (otherProfilesList[i].connection.relationship !== "1st" &&
        otherProfilesList[i].connection.addConnectionInvitationSent === false)
    ) {
      const profileItemRight = document.createElement("button");
      listItem.appendChild(profileItemRight);
      profileItemRight.className =
        "min-w-40px basis-40px h-40px border border-[#000000bf] rounded-full";

      profileItemRight.dataset.action =
        otherProfilesList[i].connection.relationship === "1st"
          ? "send-message"
          : "add-connection";
      profileItemRight.dataset.link =
        otherProfilesList[i].connection.relationship === "1st"
          ? `./send-message.html?id=${otherProfilesList[i].id}`
          : undefined;

      const profileItemRightImg = document.createElement("img");
      profileItemRight.appendChild(profileItemRightImg);
      profileItemRightImg.src =
        otherProfilesList[i].connection.relationship === "1st"
          ? "./images/icons8-email-send-100.png"
          : "./images/icons8-add-friend-100.png";
      profileItemRightImg.className = "w-sm-img h-sm-img";
    } else {
      const profileItemRight = document.createElement("span");
      listItem.appendChild(profileItemRight);
      profileItemRight.className =
        "min-w-min basis-min text-xs-small text-emphasis-tx text-center";
      profileItemRight.textContent = "Invited";
    }
  }

  newSection.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const sendMsgBtn = target.closest("button[data-action='send-message']");
    if (sendMsgBtn) {
      window.location.href = (sendMsgBtn as HTMLElement).dataset.link ?? "#";
      return;
    }
    const addConnectionBtn = target.closest(
      "button[data-action='add-connection']",
    );
    if (addConnectionBtn) {
      const listItem = (addConnectionBtn as HTMLElement)
        .parentElement as HTMLElement;
      listItem.removeChild(addConnectionBtn);

      const newProfileItemRight = document.createElement("span");
      listItem.appendChild(newProfileItemRight);
      newProfileItemRight.className =
        "min-w-min basis-min text-xs-small text-emphasis-tx text-center";
      newProfileItemRight.textContent = "Invited";
      return;
    }
  });

  return newSection;
}
