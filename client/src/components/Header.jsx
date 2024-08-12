import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";

export default function Header() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <header>
        <nav>
          <h1>Company Name</h1>
          <ul className="nav-links">
            <li>
              <Link to="/articles">Articles</Link>
            </li>

            {isAuthenticated ? (
              <div className="logged-user">
                <li>
                  <Link to="/create-article/create">Create Article</Link>
                </li>
                <li>
                  <Link to="/">Logout</Link>
                </li>
              </div>
            ) : (
              <div className="guest-user">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </div>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
