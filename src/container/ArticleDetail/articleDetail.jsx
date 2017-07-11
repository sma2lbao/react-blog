import React, { Component, PropTypes } from 'react'
import GBheader from '../../component/header/GB-header.jsx'
import styles from './articleDetail.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_Article_detail extends Component{
  static defaultProps = {}
  static propTypes = {}
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={cx(styles.detailWrap)}>
        <GBheader  propList={['主页', '生活记录', '工作记录', '心情随笔']} />
        <div className={cx(styles.wrap)}>
          <div className={cx(styles.article)}>
            <h1>标题大法师打发</h1>
            <div className={cx(styles.articleComt)}>
              a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生
              a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生
              a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生
              a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生
              a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生
              a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生
              a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生a把发的所发生的发生
            </div>
          </div>
        </div>
      </div>
    )
  }
}
