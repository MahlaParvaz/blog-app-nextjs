import http from "./httpService";

export async function getCategoryApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}

const categoryApi = {
  getCategoryApi,
};

export default categoryApi;
