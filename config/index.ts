import { getEnvVariable } from "@/utils/environment.ts";

const CFG = {
  global: {
    siteName: "Tomz.io",
    siteDescription: "新时代中国特色经济危机下的个人开发者博客",
    siteKeywords:
      "AI,blog,博客,人工智能,机器学习,深度学习,前端,后端,全栈,技术,编程,程序员,开发者,developer,programmer,fullstack,frontend,backend,web,webdev",
    siteUrl: getEnvVariable("SITE_URL"),
    siteImage: getEnvVariable("SITE_IMAGE"),
  },
  github: {
    GITHUB_SECRET: getEnvVariable("GITHUB_SECRET"),
    GITHUB_CLIENT_ID: getEnvVariable("GITHUB_CLIENT_ID"),
    GITHUB_ACCESS_TOKEN_URL: "https://github.com/login/oauth/access_token",
    GITHUB_USER_API_URL: "https://api.github.com/user",
  },
};

export default CFG;
