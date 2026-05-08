import { Skill } from "../model";

export function createSkillSection(skillsList: Skill[]) {
  const skillSection = document.createElement("section");
  skillSection.className = "mt-10px p-15px bg-white";

  const headerContainer = document.createElement("div");
  skillSection.appendChild(headerContainer);
  headerContainer.className = "flex";

  const title = document.createElement("h2");
  headerContainer.appendChild(title);
  title.textContent = "Skills";

  const editLink = document.createElement("a");
  headerContainer.appendChild(editLink);
  editLink.href = `./edit-skills.html`;
  editLink.className = "min-w-sm-img ml-auto";

  const editBtnImg = document.createElement("img");
  editLink.appendChild(editBtnImg);
  editBtnImg.src = "./images/icons8-edit-100.png";
  editBtnImg.className = "w-sm-img h-sm-img";

  const addSkillsBtn = document.createElement("button");
  skillSection.appendChild(addSkillsBtn);
  addSkillsBtn.textContent = "Add skills";
  addSkillsBtn.className = "mt-10px plus-before";
  addSkillsBtn.dataset.action = "add-skills";
  addSkillsBtn.dataset.link = "./add-skills.html";

  const skillsListEle = document.createElement("ul");
  skillSection.appendChild(skillsListEle);
  skillsListEle.className =
    "mt-10px flex text-small-bold flex-wrap leading-loose text-emphasis-tx";

  for (const skill of skillsList) {
    const item = document.createElement("li");
    skillsListEle.appendChild(item);
    item.className = "not-last:dot";
    item.textContent = skill.skillName;
  }

  addSkillsBtn.addEventListener("click", (e) => {
    window.location.href = (e.target as HTMLElement).dataset.link ?? "#";
  });

  return skillSection;
}
