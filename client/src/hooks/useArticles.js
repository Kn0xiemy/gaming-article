import { useState, useEffect } from "react";

import articlesAPI, { getAll, getOne } from "../components/api/articles-api";

export function useGetAllArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await articlesAPI.getAll();
      setArticles(result);
    })();

  }, [])
  return [articles, setArticles];
}

export function useGetOneArticle(articleId) {

  const [article, setArticle] = useState({});

  useEffect(() => {
    (async () => {
        const result = await articlesAPI.getOne(articleId)
        setArticle(result);
    })()
  }, [articleId])
  
  return [
    article, 
    setArticle,
  ]
}

export function useCreateArticle() {
  const articleCreateHandler = async (articleData) => articlesAPI.create(articleData)

  return articleCreateHandler;
}