import http from "./httpService";

export async function getProductsApi(queries) {
  return http.get(`/search?${queries}`).then(({ data }) => data.data);
}
