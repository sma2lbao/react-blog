import React, { Component, PropTypes } from 'react'
// import GBpop from '../../component/pop/GB-pop.jsx'
import GBinput from '../../component/input-text/GB-Input-text.jsx'
import GBbutton from '../../component/button/GB-button.jsx'
import styles from './login.css'
import cns from 'classnames/bind'
import fa from 'font-awesome/css/font-awesome.css'

import {connect} from 'react-redux'
import {getUser, getPassword, login} from '../../redux/action'
let cx = cns.bind(styles)



class Login extends Component {
  static defaultProps = {

  }
  static propTypes = {

  }

  constructor(props) {
    super(props)
  }

  render() {
    const { user, password, onClick, statu, changeUser, changePassword} = this.props
    return(
      <div className={styles.loginWrap}>
        <div className={styles.loginComt}>
          <h5 className={styles.title}>输入登录信息</h5>
          <div className={styles.itemWrap}>
            <div className={styles.keyWrap}><span>用户名：</span></div>
            <GBinput value={user} onChange={(value) => changeUser(value)} />
            <div style={{marginTop: '30px'}} className={styles.keyWrap}><span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span></div>
            <GBinput type="password" value={password} onChange={(value) => changePassword(value)} />
            <GBbutton text="登  录"  style={{fontSize: "18px", marginTop: "40px"}} onClick={() => onClick(user, password)} />

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.inputInfo.user,
    password: state.inputInfo.password,
    statu: state.login,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (user, password) => {
      // dispatch(login('sma2lbao', '000000'))
      dispatch(login(user, password))
    },
    changeUser: (value) => {
      dispatch(getUser(value))
    },
    changePassword: (value) => {
      dispatch(getPassword(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
