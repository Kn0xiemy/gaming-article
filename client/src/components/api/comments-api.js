import requester from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/articles/';

const buildUrl = (articleId) => `${BASE_URL}/${articleId}/comments`;

const create = async (articleId, username, text) => requester.post(buildUrl(articleId), {username, text});


const getAll = async (articleId) => {
  requester.get(buildUrl(articleId));

  const comments = Object.values(result)

  return comments;
}

  const commentsAPI = {
  create,
  getAll,
}

export default commentsAPI;