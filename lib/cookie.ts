class Cookie {
  // 设置 Cookie
  static set(
    name: string,
    value: string,
    days: number = 365,
    path: string = "/",
  ): void {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = encodeURIComponent(name) + "=" +
      encodeURIComponent(value) + ";" + expires + ";path=" + path;
  }

  // 获取 Cookie
  static get(name: string): string | null {
    const nameEQ = encodeURIComponent(name) + "=";
    const ca = document.cookie.split(";");
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
  static delete(name: string, path: string = "/"): void {
    document.cookie = encodeURIComponent(name) +
      "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=" + path;
  }
}

export default Cookie;
