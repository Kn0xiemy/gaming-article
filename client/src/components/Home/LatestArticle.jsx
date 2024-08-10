
import {Link} from 'react-router-dom';

export default function LatestArticle({
  _id,
  title,
  imageUrl,
}) {
  return (
    <div className="game">
      <div className="image-wrap">
        <img src={imageUrl} />
      </div>
      <h3>{title}</h3>
      <div className="data-buttons">
        <Link to={`/articles/${_id}/details`} className="btn details-btn">
          Details
        </Link>
      </div>
    </div>
  );
}
