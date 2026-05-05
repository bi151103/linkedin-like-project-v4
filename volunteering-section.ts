export function createVolunteeringSection() {
  const volunteertingSection = document.createElement("section");
  volunteertingSection.className = "mt-10px p-15px bg-white";

  const title = document.createElement("h2");
  volunteertingSection.appendChild(title);
  title.textContent = "Volunteer Experience";

  const addVolunteeringBtn = document.createElement("button");
  volunteertingSection.appendChild(addVolunteeringBtn);
  addVolunteeringBtn.textContent = "Add volunteering";
  addVolunteeringBtn.className = "mt-10px plus-before";
  addVolunteeringBtn.dataset.action = "add-volunteering";
  addVolunteeringBtn.dataset.link = "./add-volunteering.html";

  addVolunteeringBtn.addEventListener("click", (e) => {
    window.location.href = (e.target as HTMLElement).dataset.link ?? "#";
  });

  return volunteertingSection;
}
