import http from './httpService';

export async function getAllPostsApi(queries, options = {}) {
  return http
    .get(`/post/list?${queries}`, options)
    .then(({ data }) => data.data);
}

export async function getPostById(id) {
  return http.get(`/post/${id}`).then(({ data }) => data);
}

export async function createPostApi(data) {
  return http.post(`/post/create`, data).then(({ data }) => data.data);
}

export async function editPostApi({ id, data }) {
  return http.patch(`/post/update/${id}`, data).then(({ data }) => data.data);
}

export async function deletePostApi(id, options) {
  return http
    .delete(`/post/remove/${id}`, options)
    .then(({ data }) => data.data);
}

export async function likePostApi(id) {
  return http.post(`/post/like/${id}`).then(({ data }) => data.data);
}

export async function bookmarkPostApi(id) {
  return http.post(`/post/bookmark/${id}`).then(({ data }) => data.data);
}

const postApi = {
  getAllPostsApi,
  getPostById,
  createPostApi,
  editPostApi,
  deletePostApi,
  likePostApi,
  bookmarkPostApi,
};

export default postApi;
