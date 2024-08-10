import React from "react";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Register from "./components/register/Register.jsx";
import CreateArticle from "./components/create-article/CreateArticle.jsx";
import ArticleList from "./components/article-list/Article-List.jsx";

function App() {
  return (
    <>
      <div id="global-container">
        <Header></Header>
        <Routes>
          <Route path="/articles" element={<ArticleList></ArticleList>} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-article/create" element={<CreateArticle />} />
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
