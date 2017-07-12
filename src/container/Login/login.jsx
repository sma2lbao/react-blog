import React, { Component, PropTypes } from 'react'
import ReactTransitionGroup from 'react-addons-css-transition-group'
import GBinput from '../../component/input-text/GB-Input-text.jsx'
import GBbutton from '../../component/button/GB-button.jsx'
import GBrefresh from '../../component/refresh/GB-refresh.jsx'
import GBmsg from '../../component/msg/GB-msg.jsx'
import styles from './login.css'
import cns from 'classnames/bind'
import fa from 'font-awesome/css/font-awesome.css'
import {connect} from 'react-redux'
import {setLoginUser, setLoginPass,} from '../../redux/action/index.js'

let cx = cns.bind(styles)


class Login extends Component {
  static defaultProps = {

  }
  static propTypes = {
    user: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
    setLoginUser: PropTypes.func.isRequired,
    setLoginPass: PropTypes.func.isRequired,
    loginAsync: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    msg: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    if(this.props.isLogin){
      setTimeout(() => {
        this.props.history.push('/')
      }, 2000)
    }
  }

  render() {
    const {user, pass, setLoginUser, setLoginPass, loginAsync, isLoading, msg, error} = this.props
    return(
      <div className={styles.loginWrap}>
        <div className={styles.loginComt}>
          <h5 className={styles.title}>输入登录信息</h5>
          <div className={styles.itemWrap}>
            <div className={styles.keyWrap}><span>用户名：</span></div>
            <GBinput value={user} onChange={(value) => {setLoginUser(value)}} />
            <div style={{marginTop: '30px'}} className={styles.keyWrap}><span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span></div>
            <GBinput value={pass} type="password" onChange={(value) => {setLoginPass(value)}} />
            <GBbutton text="登  录"  style={{fontSize: "18px", marginTop: "40px"}} onClick={() => {loginAsync(user, pass)}} />
          </div>
        </div>
        <div  className={cx(styles.refreshWrap, {hidden: !isLoading})}>
          <div className={styles.refreshBg}></div>
          <div className={styles.refreshPos}>
            <GBrefresh playing={isLoading} />
          </div>
        </div>
        <div>
          <div className={cx({hidden: !msg})}>
            <GBmsg type="alert" title="登录信息"  text={msg} />
          </div>
          <div className={cx({hidden: !error})}>
            <GBmsg type="alert" title="登录信息"  text={error}  />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.loginInfo.user,
    pass: state.loginInfo.pass,
    isLoading: state.loginStatu.isLoading,
    msg: state.loginStatu.msg,
    error: state.loginStatu.error,
    isLogin: state.loginStatu.isLogin,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoginUser: (user) => dispatch(setLoginUser(user)),
    setLoginPass: (pass) => dispatch(setLoginPass(pass)),
    loginAsync: (user, pass) => dispatch({type: 'LOGIN_ASYNC'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
