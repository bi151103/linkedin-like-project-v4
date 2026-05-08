import { Contact } from "../model";

export function createContactSection(contactList: Contact[]) {
  const contactSection = document.createElement("section");
  contactSection.className = "mt-10px p-15px bg-white";

  const headerContainer = document.createElement("div");
  contactSection.appendChild(headerContainer);
  headerContainer.className = "flex";

  const title = document.createElement("h2");
  headerContainer.appendChild(title);
  title.textContent = "Contact";

  const editLink = document.createElement("a");
  headerContainer.appendChild(editLink);
  editLink.href = `./edit-contact.html`;
  editLink.className = "min-w-sm-img ml-auto";

  const editBtnImg = document.createElement("img");
  editLink.appendChild(editBtnImg);
  editBtnImg.src = "./images/icons8-edit-100.png";
  editBtnImg.className = "w-sm-img h-sm-img";

  const contactListEle = document.createElement("ul");
  contactSection.appendChild(contactListEle);
  contactListEle.className = "mt-10px";

  const createContactItem = (
    contactData?: Contact,
  ): HTMLElement | undefined => {
    if (!contactData) return undefined;
    const item = document.createElement("li");
    item.className = "not-first:mt-10px flex";

    const contactThumb = document.createElement("div");
    item.appendChild(contactThumb);
    contactThumb.className = "shrink-0 basis-[40px] text-center";

    const thumbImg = document.createElement("img");
    contactThumb.appendChild(thumbImg);
    thumbImg.className = "w-sm-img h-sm-img";

    const contactRight = document.createElement("div");
    item.appendChild(contactRight);
    contactRight.className = "max-w-[calc(100%-40px)] ml-10px";

    const contactTitle = document.createElement("p");
    contactRight.appendChild(contactTitle);
    contactTitle.className = "text-medium-bold text-emphasis-tx";

    const contactLink = document.createElement("a");
    switch (contactData.type) {
      case "email":
        thumbImg.src = "./images/icons8-email-100.png";
        contactTitle.textContent = "Email";
        contactLink.href = `mailto:${contactData.info}`;
        break;
      case "linkedin":
        thumbImg.src = "./images/icons8-linkedin-100-gray.png";
        contactTitle.textContent = "LinkedIn";
        contactLink.href = `${contactData.info}`;
        break;
      default:
        break;
    }
    contactRight.appendChild(contactLink);
    contactLink.className = "wrap-break-word font-normal";
    contactLink.textContent = contactData.info;

    return item;
  };

  const emailItem = createContactItem(
    contactList.find((v) => v.type === "email"),
  );
  const linkedItem = createContactItem(
    contactList.find((v) => v.type === "linkedin"),
  );
  if (emailItem) {
    contactListEle.appendChild(emailItem);
  }
  if (linkedItem) {
    contactListEle.appendChild(linkedItem);
  }

  return contactSection;
}
