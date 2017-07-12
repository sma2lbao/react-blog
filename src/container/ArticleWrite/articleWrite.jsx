import React, { Component, PropTypes } from 'react'
import styles from './articleWrite.css'
import cns from 'classnames/bind'
import GBheader from '../../component/header/GB-header.jsx'
import GBRicheditor from '../../component/rich-editor/GB-Rich-editor.jsx'
import GBbutton from '../../component/button/GB-button.jsx'
import GBrefresh from '../../component/refresh/GB-refresh.jsx'
import GBpop from '../../component/pop/GB-pop.jsx'
import {connect} from 'react-redux'
import { setHeadactive, setArticleTitle, setArticleComt, postArticleSuccess, postArticleFailure } from '../../redux/action/index.js'

let cx = cns.bind(styles)

class Article_writer extends Component {
  static defaultProps = {}
  static propTypes = {
    headLst: PropTypes.array.isRequired,
    headActive: PropTypes.number.isRequired,
    setHeadIndex: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props)
    props.getHeadlist()
  }
  handleClick() {
    this.props.writeArticle()
  }
  handLogin() {
    this.props.history.push('/login')
  }
  clearInfo() {
    this.props.clearInfo()
  }
  handleClickHead(value, index) {
    this.props.setHeadIndex(index)
    if(0 !== index) {
      this.props.history.push('/articleList')
      this.props.getArticleList()
    }
    else {
      this.props.history.push('/')
    }
  }
  render() {
    const { headLst, headActive, setHeadIndex, setTitle, setComt, isLoading, msg, error} = this.props
    return (
      <div className={cx(styles.detailWrap)}>
        <GBheader btnClick={this.handLogin.bind(this)} active={null} propList={headLst} itemClick={(value, index) => this.handleClickHead.bind(this, value, index)()} />
        <div className={cx(styles.wrap)}>
          <div className={cx(styles.article)}>
            <h1><input ref="title" type="text" placeholder="在这里输入标题..." onInput={(event) => setTitle(event.target.value)} /></h1>
            <div className={cx(styles.articleComt)} ref="article">
              <GBRicheditor onChange={(html) => setComt(html)}  />
            </div>
            <div style={{textAlign: 'center', marginTop: '20px'}}>
              <GBbutton text="提交" onClick={this.handleClick.bind(this)} />
            </div>
          </div>
        </div>
        <div  className={cx(styles.refreshWrap, {hidden: !isLoading})}>
          <div className={styles.refreshBg}></div>
          <div className={styles.refreshPos}>
            <GBrefresh playing={isLoading} />
          </div>
        </div>
        <div>
          <GBpop title="上传信息" statu={msg || error ? true : false}>
            <div>
              {msg}
            </div>
            <div>
              {error}
            </div>
            <div style={{ textAlign: 'center' }}>
              <GBbutton text="确定" onClick={this.clearInfo.bind(this)} />
            </div>
          </GBpop>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    headLst: state.headList,
    headActive: state.headActive,
    isLoading: state.postArticle.isLoading,
    msg: state.postArticle.msg,
    error: state.postArticle.error,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getHeadlist: () => {dispatch({type: 'GET_HEADLIST_ASYNC'})},
    setHeadIndex: (index) => {dispatch(setHeadactive(index))},
    setTitle: (title) => {dispatch(setArticleTitle(title))},
    setComt: (article) => {dispatch(setArticleComt(article))},
    writeArticle: () => {dispatch({type: 'POST_ARTICLE'})},
    clearInfo: () => {
      dispatch(postArticleSuccess(''))
      dispatch(postArticleFailure(''))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Article_writer)
