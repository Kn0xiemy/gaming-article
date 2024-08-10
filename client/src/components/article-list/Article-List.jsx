import ArticleListItem from "./ArticleListItem";
import {useGetAllArticles} from "../../hooks/useArticles";

export default function ArticleList() {

  const [articles] = useGetAllArticles();

  return (
    <>
      {/* /ARTICLES PAGE ASSETS */}
        <h2 className="section-title">Historic Articles <span className="fire-icon">&#128293;</span></h2> 
          {articles.length > 0 
            ? articles.map(article => <ArticleListItem key={article._id}{...article}/>)
            : <h3 className="no-articles">No Articles yet.</h3>
          }
    </>
  );
}
