import React, { Component } from  'react'
import Login from './container/Login/login.jsx'
import Home from './container/Home/home.jsx'
import ArticleDetail from './container/ArticleDetail/articleDetail.jsx'
import ArticleList from './container/ArticleList/articleList.jsx'
import ArticleWrite from './container/ArticleWrite/articleWrite.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ArticleWrite />
    )
  }
}
