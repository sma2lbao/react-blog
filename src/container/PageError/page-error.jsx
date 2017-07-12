import React, { Component } from 'react'
import cns from 'classnames/bind'
import styles from './page-error.css'
let cx = cns.bind(styles)

export default class Page_error extends Component {
  static defaultProps = {

  }
  static propTypes = {

  }
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className={cx(styles.errPageWrap)}>
        <div className={cx(styles.errPage)}>
          <i className={cx(styles.errIcon)}></i>
          <span className={cx(styles.errTip)}>
            对不起，您的浏览器版本太低。请您升级您的浏览器。(有部分功能不支持IE。)
          </span>
        </div>
      </div>
    )
  }
}
