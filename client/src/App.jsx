import React from "react";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Register from "./components/register/Register.jsx";
import CreateArticle from "./components/create-article/CreateArticle.jsx";
import ArticleList from "./components/article-list/Article-List.jsx";
import { useState } from "react";
import { AuthContext } from './contexts/AuthContext.js';
import ArticleDetails from "./components/article-details/Article-Details.jsx";

function App() {

  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    //fix by implementing persisted authState
    localStorage.setItem('accessToken', state.accessToken)
    setAuthState(state);
  }

  const contextData = { 
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  }

  return (
    <AuthContext.Provider value={contextData}>
    <>
      <div id="global-container">
        <Header></Header>
        <Routes>
          <Route path="/articles" element={<ArticleList></ArticleList>} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/articles/:gameId/details" element={<ArticleDetails />} />
          <Route path="/create-article/create" element={<CreateArticle />} />
        </Routes>
        <Footer></Footer>
      </div>
    </>
    </AuthContext.Provider>
  );
}

export default App;
