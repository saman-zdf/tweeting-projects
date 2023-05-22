import { User } from "../types";

// Local storages helper functions
export const localStorageGetItem = (key: string): any => {
  if (key) {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        return item;
      }
    } catch (error) {
      // Handle the error if necessary
    }
  }
  return null;
};

export const localStorageSetItem = (key: string, value: User) => {
  if (key) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      return null;
    }
  }
};

export const localStorageRemoveItem = (key: string): void | null => {
  if (key) {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      return null;
    }
  }
};

// Session storages helper functions
export const sessionStorageGetItem = (key: string): string | null => {
  if (key) {
    try {
      return window.sessionStorage.getItem(key);
    } catch (error) {}
  }
  return null;
};

export const sessionStorageSetItem = (
  key: string,
  value: string
): void | null => {
  if (key) {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {}
  }
  return null;
};

export const sessionStorageRemoveItem = (key: string): string | null => {
  if (key) {
    try {
      window.sessionStorage.removeItem(key);
    } catch (error) {}
  }
  return null;
};
