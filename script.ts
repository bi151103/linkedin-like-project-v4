import { PROJECT_PATH } from "./constant.js";
import { routes } from "./routes.js";

const app = document.querySelector("#app") as HTMLElement;
app.className = "text-small";

app.addEventListener("click", async (e) => {
  e.stopPropagation();
  const target = e.target as HTMLElement;
  const editProfile = target.closest("a[data-action='edit-profile']");
  if (editProfile) {
    e.preventDefault();

    history.pushState({}, "", `${PROJECT_PATH}/edit-profile`);
    app.innerHTML = "";

    const pathName =
      window.location.pathname +
      (window.location.pathname[window.location.pathname.length - 1] === "/"
        ? ""
        : "/");
    let moduleName = routes.find(
      (v) => v.path === pathName.slice(0, pathName.lastIndexOf("/") + 1),
    )?.component;
    let module;
    if (!moduleName) {
      console.error("Failed to load module");
    } else {
      module = await import(moduleName);
      app.append(module.default);
    }
    return;
  }
});

const pathName =
  window.location.pathname +
  (window.location.pathname[window.location.pathname.length - 1] === "/"
    ? ""
    : "/");
let moduleName = routes.find(
  (v) => v.path === pathName.slice(0, pathName.lastIndexOf("/") + 1),
)?.component;
let module;
if (!moduleName) {
  window.location.href = "/linkedin-like-project-v4/not-found.html";
} else {
  module = await import(moduleName);
  app.append(module.default);
}

window.addEventListener("popstate", async (e) => {
  const pathName =
    window.location.pathname +
    (window.location.pathname[window.location.pathname.length - 1] === "/"
      ? ""
      : "/");
  let moduleName = routes.find(
    (v) => v.path === pathName.slice(0, pathName.lastIndexOf("/") + 1),
  )?.component;
  let module;
  if (!moduleName) {
    window.location.href = "/linkedin-like-project-v4/not-found.html";
  } else {
    module = await import(moduleName);
    app.append(module.default);
  }
});
