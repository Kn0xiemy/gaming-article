import {Link} from 'react-router-dom';

export default function Register() {
  return (
    <div className="form-container">
      <form action="">
      <h1>Register</h1>
        <div className="container">
          <label htmlFor="email">Email</label>
          <input type="email" />

          <label htmlFor="password">Password</label>
          <input type="password" />

          <label htmlFor="password">Repeat Password</label>
          <input type="password" />

          <input type="submit" name="" id="" />
          <p>Already have an account?</p><Link to="/login" className='register-suggestion'>Login</Link>
        </div>
      </form>
    </div>
  );
}
