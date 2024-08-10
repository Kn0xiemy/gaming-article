export default function CreateArticle() {
  return (
    <div className="form-container">
      <form action="">
      <h1>Create Article</h1>
        <div className="container">
          <label htmlFor="title">Title</label>
          <input type="text" name="title"/>

          <label htmlFor="genre">Genre</label>
          <input type="text" />

          <label htmlFor="article-image">Image URL</label>
          <input type="text" />

          <label htmlFor="description">Description</label>
          <textarea name="description" id="" placeholder="Content for article.."></textarea>

          <input type="submit" name="" id="submit-button" />
        </div>
      </form>
    </div>
  )
}