import request from "@/lib/request.ts";
import config from "@/config/index.ts";

const {
  GITHUB_CLIENT_ID,
  GITHUB_ACCESS_TOKEN_URL,
  GITHUB_USER_API_URL,
  GITHUB_SECRET,
} = config.github;

export const auth = async (code: string) => {
  try {
    // Fetch access token
    const { data: githubUserData } = await request({
      method: "POST",
      url: GITHUB_ACCESS_TOKEN_URL,
      headers: {
        Accept: "application/json",
      },
      params: {
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_SECRET,
        code,
      },
    });

    const accessToken = JSON.parse(githubUserData).access_token;

    if (!accessToken) {
      return { status: 401, error: "Access token not found" };
    } else {
      const { data: userProfileData } = await request({
        method: "GET",
        url: GITHUB_USER_API_URL,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return JSON.parse(userProfileData);
    }
  } catch (error) {
    console.error("Error during GitHub authentication:", error);
    throw error;
  }
};
