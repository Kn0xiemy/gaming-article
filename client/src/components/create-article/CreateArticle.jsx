import { useNavigate } from "react-router-dom";
import { useCreateArticle } from "../../hooks/useArticles"
import { useForm } from "../../hooks/useForm"





const initialValues = {
  title:'',
  genre:'',
  imageUrl:'',
  description:'',
}


export default function CreateArticle() {

  const navigate = useNavigate();
  const createArticle = useCreateArticle();

  const createHandler = async (values) => {

    try {
      const {_id: articleId} = await createArticle(values);
      navigate(`/articles/${articleId}/details`)
    } catch (error) {
      console.log(error.message)
    }
  }

  const {
    values,
    changeHandler,
    submitHandler,
  } = useForm(initialValues, createHandler)

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
      <h1>Create Article</h1>
        <div className="container">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={values.title} onChange={changeHandler}/>

          <label htmlFor="genre">Genre</label>
          <input type="text" name="genre" value={values.genre} onChange={changeHandler}/>

          <label htmlFor="article-image">Image URL</label>
          <input type="text" name="imageUrl" value={values.imageUrl} onChange={changeHandler}/>

          <label htmlFor="description">Description</label>
          <textarea name="description" id="" value={values.description} placeholder="Content for article.." onChange={changeHandler}></textarea>

          <input type="submit" id="submit-button" value="Create Article"/>
        </div>
      </form>
    </div>
  )
}