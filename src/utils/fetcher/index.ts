import { request } from "../request";

export const fetcher = async (url: string) => {
  return request.get(url).then((res) => res.data);
};
