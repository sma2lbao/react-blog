import React, { Component, PropTypes } from 'react'
import GBheader from '../../component/header/GB-header.jsx'
import {connect} from 'react-redux'
import styles from './articleDetail.css'
import cns from 'classnames/bind'
import { setHeadactive, logout } from '../../redux/action/index.js'
let cx = cns.bind(styles)

class GB_Article_detail extends Component{
  static defaultProps = {}
  static propTypes = {
    headLst: PropTypes.array.isRequired,
    headActive: PropTypes.number.isRequired,
    setHeadIndex: PropTypes.func.isRequired,
    getArticle: PropTypes.func,
  }
  constructor(props) {
    super(props)
    props.getHeadlist()
    props.getArticle()
  }

  componentDidUpdate() {
    this.refs.comtWrap.innerHTML = this.props.comt
  }
  handLogin() {
    if(!this.props.isLogin){
      this.props.history.push('/login')
    }
    else{
      this.props.logout()
      alert('操作成功')
    }
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
    const { headLst, headActive, setHeadIndex, title, comt, isLogin} = this.props
    let btnText = "Login"
    if(isLogin) {
      btnText = "Logout"
    }
    return (
      <div className={cx(styles.detailWrap)}>
        <GBheader btnText={btnText} btnClick={this.handLogin.bind(this)} active={null} propList={headLst} itemClick={(value, index) => this.handleClickHead.bind(this, value, index)()} />
        <div className={cx(styles.wrap)}>
          <div className={cx(styles.article)}>
            <h1>{title}</h1>
            <div className={cx(styles.articleComt)} ref="comtWrap">

            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    headLst: state.headList,
    headActive: state.headActive,
    title: state.getArticle.json.title,
    comt: state.getArticle.json.comt,
    isLogin: state.loginStatu.isLogin,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getHeadlist: () => {dispatch({type: 'GET_HEADLIST_ASYNC'})},
    setHeadIndex: (index) => {dispatch(setHeadactive(index))},
    getArticle: () => {dispatch({type: 'GET_ARTICLE_ASYNC'})},
    logout: () => {dispatch(logout())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GB_Article_detail)
