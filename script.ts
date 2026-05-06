import { createDownloadCTASection } from "./download-app-cta-section.js";
import { createFooter } from "./footer.js";
import { createHeader } from "./header.js";
import { overlay } from "./overlay.js";
import { routes } from "./routes.js";

const header = createHeader();
const tryLinkedInAppCTA = createDownloadCTASection();
const footer = createFooter();

const app = document.querySelector("#app") as HTMLElement;
app.className = "py-50px text-small";
app.prepend(header);
app.append(tryLinkedInAppCTA);
app.insertBefore(footer, tryLinkedInAppCTA.nextSibling);
app.insertBefore(overlay, footer.nextSibling);

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
  app.insertBefore(module.default, header.nextSibling);
}
