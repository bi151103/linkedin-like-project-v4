import { createEditProfileForm } from "./edit-profile-form.js";
import { createEditProfileHeader } from "./edit-profile-header.js";
import { getUserInfo, updateUserInfo } from "./service.js";

export default async function createEditProfile() {
  const userInfo = await getUserInfo();

  const editProfileHeader = createEditProfileHeader();
  let editProfileForm: HTMLElement;
  if (userInfo) {
    editProfileForm = createEditProfileForm(userInfo);
  } else {
    throw new Error("Failed to load edit profile module");
  }

  const editProfile = document.createElement("div");
  editProfile.className = "pt-50px h-screen bg-white";

  editProfile.append(editProfileHeader);
  editProfile.append(editProfileForm);

  editProfile.addEventListener("input", (e) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    const input = target.closest("input");
    if (input) {
      const saveBtn = document.querySelector(
        "button[data-action='save-profile-changes']",
      ) as HTMLButtonElement;
      saveBtn.disabled = false;
    }
  });

  editProfile.addEventListener("click", async (e) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    const saveBtn = target.closest(
      "button[data-action='save-profile-changes']",
    );
    if (saveBtn) {
      const firstNameInput = editProfile.querySelector(
        "form input[name='firstName']",
      ) as HTMLInputElement;
      const lastNameInput = editProfile.querySelector(
        "form input[name='lastName']",
      ) as HTMLInputElement;
      const headlineInput = editProfile.querySelector(
        "form input[name='headline']",
      ) as HTMLInputElement;
      const educationInput = editProfile.querySelector(
        "form input[name='education']",
      ) as HTMLInputElement;
      const industryInput = editProfile.querySelector(
        "form input[name='industry']",
      ) as HTMLInputElement;
      const countryInput = editProfile.querySelector(
        "form input[name='country']",
      ) as HTMLInputElement;
      const locationInput = editProfile.querySelector(
        "form input[name='location']",
      ) as HTMLInputElement;
      const updateUserInfoResponse = await updateUserInfo({
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        headline: headlineInput.value,
        education: educationInput.value,
        showEducation: false,
        industry: industryInput.value,
        country: countryInput.value,
        location: locationInput.value,
      });
      return;
    }
  });

  return editProfile;
}
