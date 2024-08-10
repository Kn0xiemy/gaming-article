import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/articles'

export const getAll = async () => {
  const result = await request.get(BASE_URL);

  const articles = Object.values(result);

  return articles;
}