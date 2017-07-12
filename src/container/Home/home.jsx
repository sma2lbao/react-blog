import React, {Component, PropTypes} from 'react'
import cns from 'classnames/bind'
import styles from './home.css'
import fa from 'font-awesome/css/font-awesome.css'
import { connect } from 'react-redux'
import GBheader from '../../component/header/GB-header.jsx'
import GBcarousel from '../../component/carousel/GB-carousel.jsx'
import { setHeadactive } from '../../redux/action/index.js'
import defImg from '../../images/def.jpg'

let cx = cns.bind(styles)

class Home extends Component {
  static defaultProps = {
  }
  static propTypes = {
    headLst: PropTypes.array.isRequired,
    headActive: PropTypes.number.isRequired,
    setHeadIndex: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {

    }
    props.getHeadlist()
    props.getHomeArticles()
  }
  handleClickHead(value, index) {
    this.props.setHeadIndex(index)
    if(0 !== index) {
      this.props.history.push('/articleList')
    }
    else {
      this.props.history.push('/')
    }
  }
  handleClickTitle(time) {
    console.log(time);
    this.props.history.push('/articleDetail')
  }
  handLogin() {
    this.props.history.push('/login')
  }
  render() {
    const { headLst, headActive, setHeadIndex, json, error, isLoading} = this.props
    return (
      <div style={{ backgroundColor: '#f5f8fa', minHeight: '100%', paddingBottom: '20px', boxSizing: 'border-box' }}>
        <GBheader btnClick={this.handLogin.bind(this)} active={headActive} propList={headLst} itemClick={(value, index) => this.handleClickHead.bind(this, value, index)()} />
        <GBcarousel />
        <div className={cx(styles.comtWrap)}>
          <div className={cx(styles.listWrap)}>
            <ul>
              {
                json.map((value, index) => {
                  return(
                    <li className={cx(styles.listItem)}>
                      <div className={cx(styles.itemLeft)}>
                        <img src={defImg} alt="" />
                      </div>
                      <div className={cx(styles.itemRight)}>
                        <h4 onClick={this.handleClickTitle.bind(this, value.time)} className={cx(styles.itemTitle)}>{value.title}</h4>
                        <div className={cx(styles.itemComt)}>
                          {value.comt.replace(/<[^>]+>/g,"")}
                        </div>
                        <div className={cx(styles.itemTool)}>
                          <span><i className={cx(fa['fa'], fa['fa-eye'])}></i> 2333</span>
                          <span><i className={cx(fa['fa'], fa['fa-comment'])}></i> 2333</span>
                          <span><i className={cx(fa['fa'], fa['fa-heart'])}></i> 2333</span>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
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
    error: state.getHomeArticles.error,
    json: state.getHomeArticles.json,
    isLoading: state.getHomeArticles.isLoading,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getHeadlist: () => {dispatch({type: 'GET_HEADLIST_ASYNC'})},
    setHeadIndex: (index) => {dispatch(setHeadactive(index))},
    getHomeArticles: () => {dispatch({type: 'GET_HOME_ARTICLES_ASYNC'})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
