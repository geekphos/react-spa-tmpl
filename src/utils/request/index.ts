import axios from "axios";

axios.defaults.baseURL = "/api";

axios.interceptors.response.use(
  (resp) => {
    return resp;
  },
  (err) => {
    // handle error
    if (err.response) {
      switch (err.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          console.log("token 错误或过期");
          break;
        case 403:
          // 403 无权限
          console.log("无权限");
          break;
        case 404:
          // 404 请求不存在
          console.log("请求不存在");
          break;
        case 500:
          // 500 服务器错误
          console.log("服务器错误");
          break;
        default:
          console.log("未知错误");
      }
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log(err.message);
    }
    return Promise.reject(err);
  }
);

export const request = axios;
