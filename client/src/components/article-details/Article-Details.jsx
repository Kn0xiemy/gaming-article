import { useGetOneArticle } from "../../hooks/useArticles";
import { useParams } from "react-router-dom";
import commentsAPI from "../api/comments-api";
import { useState } from "react";

export default function ArticleDetails() {
  const { articleId } = useParams();
  const [article, setArticle] = useGetOneArticle(articleId);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const commentSubmitHandler = async (e) => {
    e.preventDefault();

    const newComment = await commentsAPI.create(articleId, username, comment);

    setArticle((prevState) => ({
      // To be reworked
      ...prevState,
      comments: {
        ...prevState.comments,
        [newComment._id]: newComment,
      },
    }));

    setUsername("");
    setComment("");
  };

  return (
    <section id="article-details">
      <h1>Article Details</h1>
      <div className="info-section">
        <div className="article-header">
          <img className="article-img" src={article.imageUrl} />
          <h1>{article.title}</h1>
          
          <p className="type">{article.genre}</p>
        </div>

        <p className="text">{article.description}</p>
        <div className="details-comments">
          <h2>Comments:</h2>

          <ul>
            {Object.keys(article.comments || {}).length > 0 ? (
              Object.values(article.comments).map((comment) => (
                <li key={comment._id} className="comment">
                  <p>
                    {comment.username}:{comment.text}
                  </p>
                </li>
              ))
            ) : (
              <p className="no-comment">No comments.</p>
            )}
          </ul>
        </div>

        <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div>
      </div>

      {/* <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={commentSubmitHandler}>
          <input
            type="text"
            placeholder="pesho"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <textarea
            name="comment"
            placeholder="Comment......"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article> */}
    </section>
  );
}
