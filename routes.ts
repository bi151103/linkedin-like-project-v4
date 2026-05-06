import { PROJECT_PATH } from "./constant.js";

export type Route = {
  path: string;
  component: string;
};

export type Routes = Route[];

export const routes: Routes = [
  {
    path: PROJECT_PATH + "/",
    component: PROJECT_PATH + "/profile.js",
  },
];
