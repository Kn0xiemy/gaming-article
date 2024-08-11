import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";


const initialValues = {email:'', password:'', 'confirm-password':'' };

export default function Register() {
  const [error, setError] = useState('');
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async (values) => {
    if (values.password !== values["confirm-password"]) {
      return setError("Password fields do not match!");
    }

    if (!values.email) {
      alert('Please fill the email field!');
     
    }

    if (!values.password) {
      alert('Please fill out the password field!')
    }
    
    try {
      await register(values.email, values.password);
      navigate("/");
    } catch (error) {
      setError(error.message)
    }
  };
      const { values, changeHandler, submitHandler } = useForm(
      initialValues,
      registerHandler
    );

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <h1>Register</h1>
        <div className="container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={changeHandler}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={changeHandler}
          />

          <label htmlFor="password">Repeat Password</label>
          <input
            type="password"
            name="confirm-password"
            value={values["confirm-password"]}
            onChange={changeHandler}
          />
          {error && (
            <p style={{marginBottom: 10, color: 'red', fontWeight: 900}}>
              <span>{error}</span>
            </p>
          )}

          <input type="submit"  value="Register"/>

          <p>Already have an account?</p>
          <Link to="/login" className="register-suggestion">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
