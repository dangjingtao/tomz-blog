class ClientCache {
  cacheType: string;
  constructor({
    cacheType,
  }: { cacheType: string }) {
    this.cacheType = cacheType;
  }
  get(key: string) {
    try {
      const storedValue = sessionStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
      console.error(
        `Error parsing sessionStorage item for key "${key}":`,
        error,
      );
      return null;
    }
  }
  set(key: string, value: string) {
    try {
      const serializedValue = JSON.stringify(value);
      sessionStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(
        `Error storing item in sessionStorage for key "${key}":`,
        error,
      );
    }
  }
}

export default new ClientCache({ cacheType: "sessionStorage" });
