import { Company, Connection, ExperienceData, UserInfo } from "./model";

const BASE_API_URL =
  window.location.hostname === "127.0.0.1"
    ? "http://127.0.0.1:3000/api"
    : "https://linkedin-like-project-v4-server.onrender.com/api";

export async function getUserInfo(): Promise<UserInfo> {
  const response = await fetch(`${BASE_API_URL}/info`);
  const json = await response.json();
  return json;
}

export async function getExperiences(): Promise<ExperienceData[]> {
  const response = await fetch(`${BASE_API_URL}/experiences`);
  const json = (await response.json()) as ExperienceData[];
  return json;
}

export async function getConnections(): Promise<{
  count: number;
  data: Connection[];
}> {
  const response = await fetch(`${BASE_API_URL}/connections`);
  const json = await response.json();
  return json;
}
