import React, { Component, PropTypes } from 'react'
import cns from 'classnames/bind'
import styles from './articleList.css'
import fa from 'font-awesome/css/font-awesome.css'
import GBheader from '../../component/header/GB-header.jsx'
import GBpaging from '../../component/paging/GB-paging.jsx'
import {connect} from 'react-redux'
import { setHeadactive, setArticleTarget, logout } from '../../redux/action/index.js'
import defImg from '../../images/def.jpg'
let cx = cns.bind(styles)

class ArticleList extends Component {
  static defaultProps = {}
  static propTypes = {
    headLst: PropTypes.array.isRequired,
    headActive: PropTypes.number.isRequired,
    setHeadIndex: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    props.getHeadlist()
    props.getArticleList()
  }
  handleClickTitle(time) {
    // console.log(time);
    this.props.setArticleTarget(time)
    this.props.history.push('/articleDetail')
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

  handLogin() {
    if(!this.props.isLogin){
      this.props.history.push('/login')
    }
    else{
      this.props.logout()
      alert('操作成功')
    }
  }

  handleClickEdit() {
    this.props.history.push('/writeArticle')
  }
  render() {
    const { headLst, headActive, setHeadIndex, articles, isLogin} = this.props
    let btnText = "Login"
    if(isLogin) {
      btnText = "Logout"
    }
    return (
      <div style={{ backgroundColor: '#f5f8fa', minHeight: '100%', paddingBottom: '20px', boxSizing: 'border-box' }}>
        <GBheader btnText={btnText} btnClick={this.handLogin.bind(this)} active={headActive} propList={headLst} itemClick={(value, index) => this.handleClickHead.bind(this, value, index)()} />
        <div className={cx(styles.comtWrap)}>
          <div className={cx(styles.listWrap)}>
            <ul>
              {
                articles.map((value, index) => {
                  return(
                    <li key={index} className={cx(styles.listItem)}>
                      <div className={cx(styles.itemLeft)}>
                        <img src={defImg} alt="" />
                      </div>
                      <div className={cx(styles.itemRight)}>
                        <h4 onClick={this.handleClickTitle.bind(this, value.time)} className={cx(styles.itemTitle)}>{value.title}</h4>
                        <div className={cx(styles.itemComt)}>
                          {value.comt.replace(/<[^>]+>/g,"").replace('&nbsp;', "").replace(/&nbsp;/ig, "")}
                        </div>
                        <div className={cx(styles.itemTool)}>
                          <span><i className={cx(fa['fa'], fa['fa-eye'])}></i> 333</span>
                          <span><i className={cx(fa['fa'], fa['fa-comment'])}></i> 333</span>
                          <span><i className={cx(fa['fa'], fa['fa-heart'])}></i> 333</span>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
            {/* <div style={{borderTop: '1px solid #ddd', padding: '20px 5px 50px 5px', textAlign: 'right'}}>
              <GBpaging size={10} total={articles.length}  />
            </div> */}
          </div>
        </div>

        <div className={cx(styles.editWrap, {hidden: !isLogin})} onClick={this.handleClickEdit.bind(this)} >
          <i style={{ verticalAlign: 'sub' }} className={cx(fa['fa'], fa['fa-pencil'],  fa['fa-2x'])}></i>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    headLst: state.headList,
    headActive: state.headActive,
    articles: state.getArticles.json,
    isLogin: state.loginStatu.isLogin,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getHeadlist: () => {dispatch({type: 'GET_HEADLIST_ASYNC'})},
    setHeadIndex: (index) => {dispatch(setHeadactive(index))},
    getArticleList: () => {dispatch({type: 'GET_ARTICLES_ASYNC'})},
    setArticleTarget: (time) => {dispatch(setArticleTarget(time))},
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)
