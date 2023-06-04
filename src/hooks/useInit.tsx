import localforage from "localforage";
import { useEffect } from "react";
import pkg from "../../package.json";

export const useInit = () => {
  // 初始化本地存储
  useEffect(() => {
    localforage.config({
      name: pkg.name,
    });
  }, []);

  // 初始化主题，支持自动切换主题
  useEffect(() => {
    (async () => {
      try {
        const theme = await localforage.getItem<string>("theme");
        if (
          theme === "dark" ||
          (theme == null &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches)
        ) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
};
