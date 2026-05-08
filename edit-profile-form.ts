import { UserInfo } from "./model";

function createEditFormInput(
  field:
    | "firstName"
    | "lastName"
    | "headline"
    | "education"
    | "industry"
    | "location"
    | "country",
  value: string = "",
  required: boolean = false,
) {
  const containerOfBothInputAndErrorMsg = document.createElement("div");
  containerOfBothInputAndErrorMsg.className = "not-first:mt-10px";

  const inputContainer = document.createElement("div");

  containerOfBothInputAndErrorMsg.append(inputContainer);
  inputContainer.className =
    "relative rounded-[4px] border-[1.5px] border-[rgba(0,0,0,0.6)]";

  const input = document.createElement("input");
  inputContainer.append(input);
  input.type = "text";
  input.className =
    "text-emphasis-tx pt-20px pb-10px pl-15px pr-50px text-medium w-full";
  input.name = field;
  input.autocomplete = "off";
  input.value = value;

  const label = document.createElement("label");
  inputContainer.append(label);
  label.className =
    "absolute text-low-emphasis-tx top-5px duration-[0.1s] left-15px";
  if (!input.value) {
    label.classList.add("text-medium", "top-[calc(5px+1.2rem)]");
  } else {
    label.classList.add("text-xs-small");
  }

  const rightBtn = document.createElement("button");
  inputContainer.append(rightBtn);
  rightBtn.className = "absolute right-15px top-0 bottom-0";

  if (field !== "education") {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(
      `<svg class="w-25px aspect-square" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,255.98958,255.98958">
  <g fill="#8c8c8c" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.53,0 -10,4.47 -10,10c0,5.53 4.47,10 10,10c5.53,0 10,-4.47 10,-10c0,-5.53 -4.47,-10 -10,-10zM16.707,15.293c0.391,0.391 0.391,1.023 0,1.414c-0.195,0.195 -0.451,0.293 -0.707,0.293c-0.256,0 -0.512,-0.098 -0.707,-0.293l-3.293,-3.293l-3.293,3.293c-0.195,0.195 -0.451,0.293 -0.707,0.293c-0.256,0 -0.512,-0.098 -0.707,-0.293c-0.391,-0.391 -0.391,-1.023 0,-1.414l3.293,-3.293l-3.293,-3.293c-0.391,-0.391 -0.391,-1.023 0,-1.414c0.391,-0.391 1.023,-0.391 1.414,0l3.293,3.293l3.293,-3.293c0.391,-0.391 1.023,-0.391 1.414,0c0.391,0.391 0.391,1.023 0,1.414l-3.293,3.293z"></path></g></g>
  </svg>`,
      "image/svg+xml",
    );
    const svgElement = svgDoc.documentElement;
    rightBtn.append(svgElement);
    rightBtn.dataset.action = "clear-input";
  } else {
    const sortDownImg = document.createElement("img");
    rightBtn.append(sortDownImg);
    sortDownImg.src = "./images/icons8-sort-down-100.png";
    sortDownImg.className = "h-sm-img aspect-square";
    rightBtn.dataset.action = "drop-down";
  }

  const errorIconPlaceholder = document.createElement("div");
  inputContainer.append(errorIconPlaceholder);
  errorIconPlaceholder.className =
    "absolute right-15px top-0 bottom-0 h-sm-img self-center hidden";

  const forbiddenImg = document.createElement("img");
  rightBtn.append(forbiddenImg);
  forbiddenImg.src = "./images/icons8-forbidden-100.png";
  forbiddenImg.className = "h-sm-img w-sm-img";
  errorIconPlaceholder.append(forbiddenImg);

  const errorMessagePlaceholder = document.createElement("span");
  containerOfBothInputAndErrorMsg.append(errorMessagePlaceholder);
  errorMessagePlaceholder.className = "text-error text-xs-small ml-15px hidden";

  switch (field) {
    case "firstName":
      errorMessagePlaceholder.textContent = "Please enter your first name.";
      label.textContent = "First name";
      break;
    case "lastName":
      errorMessagePlaceholder.textContent = "Please enter your last name.";
      label.textContent = "Last name";
      break;
    case "headline":
      label.textContent = "Headline";
      break;
    case "education":
      label.textContent = "Education";
      break;
    case "country":
      errorMessagePlaceholder.textContent = "Please select a country/region.";
      label.textContent = "Country/Region";
      break;
    case "industry":
      errorMessagePlaceholder.textContent = "Please select your industry.";
      label.textContent = "Industry";
    case "location":
      label.textContent = "Locations in this Country/Region";
    default:
  }

  containerOfBothInputAndErrorMsg.addEventListener("click", (e) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    const rightBtn = target.closest("button[data-action]");
    if (rightBtn) {
      input.value = "";
    }
    input.focus();
    label.classList.remove("text-medium", "top-[calc(5px+1.2rem)]");
    label.classList.add("text-xs-small");
  });

  input.addEventListener("blur", (e) => {
    if (!input.value) {
      label.classList.add("text-medium", "top-[calc(5px+1.2rem)]");
      label.classList.remove("text-xs-small");
      if (required) {
        inputContainer.classList.add("border-error");
        input.classList.add("outline-error");
        errorMessagePlaceholder.classList.remove("hidden");
        errorIconPlaceholder.classList.remove("hidden");
      }
    }
  });

  input.addEventListener("input", (e) => {
    if (input.value) {
      inputContainer.classList.remove("border-error");
      input.classList.remove("outline-error");
      errorMessagePlaceholder.classList.add("hidden");
      errorIconPlaceholder.classList.add("hidden");
    }
  });

  return containerOfBothInputAndErrorMsg;
}

export function createEditProfileForm(userInfo: UserInfo) {
  const form = document.createElement("form");
  form.className = "bg-white px-15px py-10px";

  const firstNameInput = createEditFormInput(
    "firstName",
    userInfo.firstName,
    true,
  );
  const lastNameInput = createEditFormInput(
    "lastName",
    userInfo.lastName,
    true,
  );
  const headlineInput = createEditFormInput(
    "headline",
    userInfo.headline,
    false,
  );
  const educationInput = createEditFormInput(
    "education",
    userInfo.education,
    true,
  );
  const industryInput = createEditFormInput(
    "industry",
    userInfo.industry,
    true,
  );
  const countryInput = createEditFormInput("country", userInfo.country, true);
  const locationInput = createEditFormInput(
    "location",
    userInfo.location,
    false,
  );
  form.append(firstNameInput);
  form.append(lastNameInput);
  form.append(headlineInput);
  form.append(educationInput);
  form.append(industryInput);
  form.append(countryInput);
  form.append(locationInput);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  return form;
}
