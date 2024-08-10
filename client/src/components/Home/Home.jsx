import MainSection from "../../Main-section/Main-section"
import { useEffect, useState } from "react";
import articlesAPI from "../api/articles-api";
import LatestArticle from "./LatestArticle";

export default function Home() {
  const [latestArticles, setLatestArticles] = useState([]);

    useEffect(() => {
        (async() => { 
            const result = await articlesAPI.getAll();
            setLatestArticles(result.reverse().slice(0, 3));
        })();
    }, [])
  return (
    <>
        <MainSection></MainSection>
        {latestArticles.length > 0
                ? latestArticles.map(article => <LatestArticle key={article._id}{...article}/>)
                : <p className="no-articles">No articles yet</p>
            }
    </>
  )
}