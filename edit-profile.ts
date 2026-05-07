import { createEditProfileForm } from "./edit-profile-form.js";
import { createEditProfileHeader } from "./edit-profile-header.js";
import { getUserInfo } from "./service.js";

const editProfileHeader = createEditProfileHeader();
const editProfileForm = createEditProfileForm(await getUserInfo());

const editProfile = document.createElement("div");
editProfile.className = "pt-50px h-screen bg-white";
editProfile.append(editProfileHeader);
editProfile.append(editProfileForm);

export default editProfile;
