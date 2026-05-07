import { NOT_AVAILABLE_CONTENT } from "./constant.js";
import { Company, UserInfo } from "./model";

export function createProfileInfoSection(
  userInfo: UserInfo,
  company: Company,
  connectionCount: number,
): HTMLElement {
  const profileInfoSection = document.createElement("section");
  profileInfoSection.className = "py-[25px] px-15px bg-white";

  const profileName = document.createElement("h1");
  profileInfoSection.appendChild(profileName);
  profileName.textContent =
    userInfo.firstName && userInfo.lastName
      ? `${userInfo.firstName} ${userInfo.lastName}`
      : userInfo.firstName
        ? userInfo.firstName
        : userInfo.lastName
          ? userInfo.lastName
          : NOT_AVAILABLE_CONTENT;
  profileName.className = "text-emphasis-tx";

  const profileHeadline = document.createElement("p");
  profileInfoSection.appendChild(profileHeadline);
  profileHeadline.textContent = userInfo.headline ?? "";

  const profileCompany = document.createElement("p");
  profileInfoSection.appendChild(profileCompany);
  profileCompany.textContent = company.companyName;

  const profileLocationAndConnectionContainer = document.createElement("p");
  profileInfoSection.appendChild(profileLocationAndConnectionContainer);
  profileLocationAndConnectionContainer.textContent = userInfo.country;

  const dotSeparatorBtwNameAndNumberOfConnection =
    document.createElement("span");
  profileLocationAndConnectionContainer.appendChild(
    dotSeparatorBtwNameAndNumberOfConnection,
  );
  dotSeparatorBtwNameAndNumberOfConnection.className = "dot";

  const connections = document.createElement("a");
  profileLocationAndConnectionContainer.appendChild(connections);
  connections.href = "./connection.html";
  connections.textContent =
    `${connectionCount} ` +
    (connectionCount === 1 ? "Connection" : "Connections");

  return profileInfoSection;
}
