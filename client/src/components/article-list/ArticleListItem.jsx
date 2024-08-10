import { Link } from "react-router-dom";

export default function ArticleListItem({
  _id,
  title,
  genre,
  imageUrl,
  description,
}) {
  return (
    <div className="article-list">
      <div className="article">
        <img src={imageUrl}/>
        <h3>{title}</h3>
        <h4>{genre}</h4>
        <p>{description}</p>
        <div className="details-button">
          <Link to={`/articles/${_id}/details`} className="details-button">
            Read
          </Link>
        </div>
      </div>
    </div>
  );
}
