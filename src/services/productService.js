import http from "./httpService";

export async function getProductsApi(queries) {
  return http.get(`/search?${queries}`).then(({ data }) => data.data);
}

export async function getOneProductBySlugApi(slug) {
  return http.get(`/products/${slug}`).then(({ data }) => data.data);
}
