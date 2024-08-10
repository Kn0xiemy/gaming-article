import {Link} from 'react-router-dom';


export default function Login() {
  return (
    <div className="form-container">
      <form action="">
      <h1>Login</h1>
        <div className="container">
          <label htmlFor="email">Email</label>
          <input type="email" />

          <label htmlFor="password">Password</label>
          <input type="password" />

          <input type="submit" name="" id="submit-button" />
          <p>Don't have an account yet?</p><Link to="/register" className='register-suggestion'>Register</Link>
        </div>
      </form>
    </div>
  );
}
