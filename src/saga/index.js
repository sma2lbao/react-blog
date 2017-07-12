import {delay} from 'redux-saga'
import {takeEvery, put, call, all, select} from 'redux-saga/effects'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  HEAD_LIST,loginRequest, loginFailure, loginSuccess,
  POST_ARTICLE_REQUEST, POST_ARTICLE_SUCCESS, POST_ARTICLE_FAILURE,
  GET_ARTICLE_REQUEST, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAILURE,
  GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE,
  GET_HOME_ARTICLES_REQUEST, GET_HOME_ARTICLES_SUCCESS, GET_HOME_ARTICLES_FAILURE,
} from '../redux/action/index.js'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:9498/api/blog/';

export function* loginAsync () {
  yield put({type: LOGIN_REQUEST, loading: true})
  yield call(delay, 1000)
  const {loginInfo} = yield select()
  try{
    const json = yield call(axios, {method: 'GET', url: 'user', params: {user: loginInfo.user, pass: loginInfo.pass}})
    if(json.data.msg){
      yield put({type: LOGIN_REQUEST, loading: false})
      yield put({type: LOGIN_SUCCESS, text: json.data.msg})
      yield call(delay, 4000)
      yield put({type: LOGIN_SUCCESS, text: ''})
    }
    else {
      yield put({type: LOGIN_REQUEST, loading: false})
      yield put({type: LOGIN_FAILURE, error: json.data.error})
      yield call(delay, 4000)
      yield put({type: LOGIN_FAILURE, error: ''})
    }
  } catch(error) {
    yield put({type: LOGIN_REQUEST, loading: false})
    yield put({type: LOGIN_FAILURE, error: error.toString()})
    yield call(delay, 4000)
    yield put({type: LOGIN_FAILURE, error: ''})
  }
}
export function* watchLoginAsync() {
  yield takeEvery('LOGIN_ASYNC', loginAsync)
}

export function* getHeadlist() {
  try{
    const json = yield call(axios, {method: 'GET', url: 'heads'})
    yield put({type: HEAD_LIST, list: json.data.data})
  } catch(error) {
    yield put({type: HEAD_LIST, list: []})
  }
}
export function* watchGetHeadList() {
  yield takeEvery('GET_HEADLIST_ASYNC', getHeadlist)
}

export function* postArticle() {
  try{
    yield put({type: POST_ARTICLE_REQUEST, loading: true})
    const {article, headActive} = yield select()
    const json = yield call(axios, {method: 'POST', url: 'article', data: {title: article.title, comt: article.comt, index: headActive}})
    yield call(delay, 1000)
    yield put({type: POST_ARTICLE_REQUEST, loading: false})
    if(json.data.msg) {
      yield put({type: POST_ARTICLE_SUCCESS, msg: json.data.msg})
    }
    else {
      yield put({type: POST_ARTICLE_FAILURE, error: json.data.error})
    }
  } catch(error) {
    yield put({type: POST_ARTICLE_REQUEST, loading: false})
    yield put({type: POST_ARTICLE_FAILURE, error: error.toString()})
  }
}
export function* watchPostArticle() {
  yield takeEvery('POST_ARTICLE', postArticle)
}

export function* getArticleAsync() {
  try{
    yield put({type: GET_ARTICLE_REQUEST, loading: true})
    const { setArticleTarget } = yield select()
    let response = yield call(axios, {method: 'GET', url: 'article', params: {time: setArticleTarget}})
    if(response.data.error) {
      yield put({type: GET_ARTICLE_FAILURE, error: response.data.error})
    }
    else {
      yield put({type: GET_ARTICLE_SUCCESS, json: response.data})
    }
  } catch(error) {
    yield put({type: GET_ARTICLE_FAILURE, error: error.toString()})
  }

}
export function* watchGetArticle() {
  yield takeEvery('GET_ARTICLE_ASYNC', getArticleAsync)
}

export function* getArticlesAsync() {
  const {headActive} = yield select()
  try{
    yield put({type: GET_ARTICLES_REQUEST, loading: true})
    let response = yield call(axios, {method: 'GET', url: 'articles', params: {index: headActive}})
    if(response.data.error) {
      yield put({type: GET_ARTICLES_FAILURE, error: response.data.error})
    }else {
      yield put({type: GET_ARTICLES_SUCCESS, json: response.data})
    }
  }catch(error) {
    yield put({type: GET_ARTICLES_FAILURE, error: error.toString()})
  }
}
export function* watchGetArticles() {
  yield takeEvery('GET_ARTICLES_ASYNC', getArticlesAsync)
}

export function* getHomeArticlesAsync() {
  console.log('join home async');
  try{
    yield put({type: GET_HOME_ARTICLES_REQUEST, loading: true})
    let response = yield call(axios, {method: 'GET', url: 'homeArticles'})
    if(response.data.error) {
      yield put({type: GET_HOME_ARTICLES_FAILURE, error: response.data.error})
    }else {
      yield put({type: GET_HOME_ARTICLES_SUCCESS, json: response.data})
    }
  }
  catch(error) {
    yield put({type: GET_HOME_ARTICLES_FAILURE, error: error.toString()})
  }
}
export function* watchGetHomeArticlesAsync() {
  yield takeEvery('GET_HOME_ARTICLES_ASYNC', getHomeArticlesAsync)
}

export default function* rootSaga() {
  yield all([
    watchLoginAsync(),
    watchGetHeadList(),
    watchPostArticle(),
    watchGetArticle(),
    watchGetArticles(),
    watchGetHomeArticlesAsync(),
  ])
}
