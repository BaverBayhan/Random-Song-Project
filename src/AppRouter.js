import './App.css';
import { BrowserRouter,Switch,Route } from "react-router-dom"
import AboutUs from "./components/AboutUs.js"
import Blog from "./components/Blog.js"
import Header from "./components/Header.js"
import SupportUs from "./components/SupportUs"
import React from 'react'
import HomePage from './components/HomePage';
import Blogpost101 from "./components/Blogposts/Blogpost101.js"
import "./firebase/Firebaseconfig"
import Blogpost102 from "./components/Blogposts/Blogpost102"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <Header/>
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/About" component={AboutUs} exact></Route>
          <Route path="/Blog" component={Blog} exact></Route>
          <Route path="/Blog/8ea43787-8414-4e0d-b89f-736f08200c03" exact>{Blogpost101}</Route>
          <Route path="/Blog/78347a07-2ab3-4870-bf0a-0e8e4b9d5434" exact>{Blogpost102}</Route>
          <Route path="/Support" component={SupportUs} exact></Route>
        </Switch>
      </>
    </BrowserRouter> 
  )
}

export default AppRouter;
