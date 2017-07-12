import React, { Component, PropTypes } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from '../container/Login/login.jsx'
import Home from '../container/Home/home.jsx'
import ArticleDetail from '../container/ArticleDetail/articleDetail.jsx'
import ArticleList from '../container/ArticleList/articleList.jsx'
import ArticleWrite from '../container/ArticleWrite/articleWrite.jsx'
import PageError from '../container/PageError/page-error.jsx'

const AppRouter = () => (
  <Router forceRefresh={false}>
    <div style={{width: '100%', height: '100%'}}>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/articleDetail" component={ArticleDetail}></Route>
      <Route path="/articleList"  component={ArticleList}></Route>
      <Route path="/writeArticle" component={ArticleWrite}></Route>
      <Route path="/error" component={PageError}></Route>
    </div>
  </Router>
)

export default AppRouter
