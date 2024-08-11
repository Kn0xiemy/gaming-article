import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const initialValues = {email: '', password:''}

export default function Login() {
  const login = useLogin();
  const navigate = useNavigate();

  const loginHandler = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate("/");
      console.log('Successfully Logged In!')
    } catch (error) {
      console.log(error.message);
    }
  };
  const {values, changeHandler, submitHandler} = useForm(initialValues, loginHandler);

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <h1>Login</h1>
        <div className="container">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={values.email} onChange={changeHandler}/>

          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={values.password} onChange={changeHandler}/>

          <input type="submit" name="" id="submit-button" value="Login"/>
          <p>Don't have an account yet?</p>
          <Link to="/register" className="register-suggestion">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
