import { getEnvVariable } from "@/utils/environment.ts";

const CFG = {
  github: {
    GITHUB_SECRET: getEnvVariable("GITHUB_SECRET"),
    GITHUB_CLIENT_ID: getEnvVariable("GITHUB_CLIENT_ID"),
    GITHUB_ACCESS_TOKEN_URL: "https://github.com/login/oauth/access_token",
    GITHUB_USER_API_URL: "https://api.github.com/user",
  },
};

export default CFG;
