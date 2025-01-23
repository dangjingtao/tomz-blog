import { useEffect, useState } from "preact/hooks";

/**
 * useSessionStorage Hook
 * @param {string} key - The key under which the value is stored in sessionStorage.
 * @param {*} initialValue - The initial value to use if the key does not exist in sessionStorage.
 * @returns {[any, Function]} - Returns the current value and a function to update it.
 */
function useSessionStorage(key: unknown, initialValue: any) {
  // 获取 sessionStorage 中的初始值
  const getStoredValue = () => {
    const storedValue = sessionStorage.getItem(key);
    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }
    return initialValue;
  };

  // 使用 useState 管理存储的值
  const [value, setValue] = useState(getStoredValue);

  // 当 value 变化时，更新 sessionStorage
  useEffect(() => {
    if (value === undefined) {
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}

export default useSessionStorage;
