import { getCookies, setCookie } from "$cookie";
class Cookie {
  static isServer() {
    return typeof window === "undefined";
  }
  // 设置 Cookie
  static set(
    name: string,
    value: string,
    days: number = 365,
    path: string = "/",
    response?: Response, // 服务端设置 Cookie 时需要传入 response 对象
  ): void {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    const cookieStr = encodeURIComponent(name) + "=" +
      encodeURIComponent(value) + ";" + expires + ";path=" + path;

    if (this.isServer() && response) {
      response.headers.set(
        "Set-Cookie",
        `${name}=${value}; ${expires}; Path=${path}`,
      );
    } else {
      if (globalThis.document) {
        globalThis.document.cookie = cookieStr;
      }
    }
  }

  // 获取 Cookie
  static get(name: string, request?: Request): string | null {
    const nameEQ = encodeURIComponent(name) + "=";
    let cookies = "";

    if (this.isServer() && request) {
      // 服务端环境
      cookies = request.headers.get("cookie") || "";
    } else {
      // 客户端环境
      cookies = globalThis.document?.cookie || "";
    }

    const ca = cookies.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
    }
    return null;
  }

  // 删除 Cookie
  static delete(name: string, path: string = "/", response?: Response): void {
    const cookieStr = encodeURIComponent(name) +
      "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=" + path;

    if (this.isServer() && response) {
      // 服务端环境
      response.headers.set("Set-Cookie", cookieStr);
    } else {
      // 客户端环境
      document.cookie = cookieStr;
    }
  }
}

export default Cookie;
