import ArticleListItem from "../components/article-list/ArticleListItem";

export default function MainSection() {
  return (
    <section className="main-container">
      <div className="article-container">
        <div className="welcome-section">
          <h2>Welcome to the latest news in gaming history!</h2>
        </div>
        <h2 className="section-title">Latest Articles &#128293;</h2>
        <ArticleListItem></ArticleListItem>
      </div>
    </section>
  );
}
