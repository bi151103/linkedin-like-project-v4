import { Company, Connection, ExperienceData, Result, UserInfo } from "./model";

const BASE_API_URL =
  window.location.hostname === "127.0.0.1"
    ? "http://127.0.0.1:3000/api"
    : "https://linkedin-like-project-v4-server.onrender.com/api";

export async function getUserInfo(): Promise<UserInfo | undefined> {
  try {
    const response = await fetch(`${BASE_API_URL}/info`);
    if (!response.ok) {
      throw new Error("Something wrong happened");
    }
    const json = await response.json();
    return json;
  } catch (e) {
    console.error((e as Error).message);
  }
}

export async function updateUserInfo(
  userInfo: UserInfo,
): Promise<Result | undefined> {
  try {
    const request = new Request(`${BASE_API_URL}/info`, {
      body: JSON.stringify(userInfo),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error("Something wrong happened");
    }
    const json = await response.json();
    return json;
  } catch (e) {
    console.error("Something wrong happened");
  }
}

export async function getExperiences(): Promise<ExperienceData[] | undefined> {
  try {
    const response = await fetch(`${BASE_API_URL}/experiences`);
    if (!response.ok) {
      throw new Error("Something wrong happened");
    }
    const json = (await response.json()) as ExperienceData[];
    return json;
  } catch (e) {
    console.error((e as Error).message);
  }
}

export async function getConnections(): Promise<
  | {
      count: number;
      data: Connection[];
    }
  | undefined
> {
  try {
    const response = await fetch(`${BASE_API_URL}/connections`);
    if (!response.ok) {
      throw new Error("Something wrong happened");
    }
    const json = await response.json();
    return json;
  } catch (e) {
    console.error((e as Error).message);
  }
}
