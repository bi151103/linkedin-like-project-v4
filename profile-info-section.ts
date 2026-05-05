export function createProfileInfoSection(): HTMLElement {
  const profileInfoSection = document.createElement("section");
  profileInfoSection.className = "py-[25px] px-15px bg-white";

  const profileName = document.createElement("h1");
  profileInfoSection.appendChild(profileName);
  profileName.textContent = "Phuc Dang";
  profileName.className = "text-emphasis-tx";

  const profileHeadline = document.createElement("p");
  profileInfoSection.appendChild(profileHeadline);
  profileHeadline.textContent = "Tester";

  const profileCompany = document.createElement("p");
  profileInfoSection.appendChild(profileCompany);
  profileCompany.textContent = "CODE LEAP";

  const profileLocationAndConnectionContainer = document.createElement("p");
  profileInfoSection.appendChild(profileLocationAndConnectionContainer);
  profileLocationAndConnectionContainer.textContent = "Viet Nam";

  const dotSeparatorBtwNameAndNumberOfConnection =
    document.createElement("span");
  profileLocationAndConnectionContainer.appendChild(
    dotSeparatorBtwNameAndNumberOfConnection,
  );
  dotSeparatorBtwNameAndNumberOfConnection.className = "dot";

  const connections = document.createElement("a");
  profileLocationAndConnectionContainer.appendChild(connections);
  connections.href = "./connection.html";
  connections.textContent = "74 Connections";

  return profileInfoSection;
}
