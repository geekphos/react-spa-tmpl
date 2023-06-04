import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { useInit } from "./hooks/useInit";
import { router } from "./router";
import { SWRConfig } from "swr";
import { fetcher } from "./utils/fetcher";

function App() {
  // 初始化
  useInit();

  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
      }}
    >
      <RouterProvider router={createBrowserRouter(router)}></RouterProvider>
    </SWRConfig>
  );
}

export default App;
