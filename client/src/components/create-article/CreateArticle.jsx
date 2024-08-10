export default function CreateArticle() {
  return (
    <div className="form-container">
      <form action="">
      <h1>Create Article</h1>
        <div className="container">
          <label htmlFor="title">Title</label>
          <input type="text" name="title"/>

          <label htmlFor="password">Password</label>
          <input type="password" />

          <input type="submit" name="" id="submit-button" />
          <p>Don't have an account yet?</p><Link to="/register" className='register-suggestion'>Register</Link>
        </div>
      </form>
    </div>
  )
}