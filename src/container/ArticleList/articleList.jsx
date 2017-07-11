import React, { Component, PropTypes } from 'react'
import cns from 'classnames/bind'
import styles from './articleList.css'
import fa from 'font-awesome/css/font-awesome.css'
import GBheader from '../../component/header/GB-header.jsx'
import GBpaging from '../../component/paging/GB-paging.jsx'
let cx = cns.bind(styles)

export default class ArticleList extends Component {
  static defaultProps = {}
  static propTypes = {}
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <GBheader propList={['主页', '生活记录', '工作记录', '心情随笔']} />
        <div className={cx(styles.comtWrap)}>
          <div className={cx(styles.listWrap)}>
            <ul>
              <li className={cx(styles.listItem)}>
                <div className={cx(styles.itemLeft)}>
                  <img src="" alt="" />
                </div>
                <div className={cx(styles.itemRight)}>
                  <h4 className={cx(styles.itemTitle)}>送它上电影院，又得干死一堆烂片</h4>
                  <div className={cx(styles.itemComt)}>
                    有人说，中国也有了自己的B级片—— “网大”。 说到它，你肯定会用“低俗噱头”有人说，中国也有了自己的B级片—— “网大”。 说到它，你肯定会用“低俗噱头”和“粗制有人说，中国也有了自己的B级片—— “网大”。 说到它，你肯定会用“低俗噱头”和“粗制和“粗制滥造”来形容。 不过凡事总有例外，比如Sir刚看完的这部。 被毒饭安利的。 有血有肉、有.
                  </div>
                  <div className={cx(styles.itemTool)}>
                    <span><i className={cx(fa['fa'], fa['fa-eye'])}></i> 333</span>
                    <span><i className={cx(fa['fa'], fa['fa-comment'])}></i> 333</span>
                    <span><i className={cx(fa['fa'], fa['fa-heart'])}></i> 333</span>
                  </div>
                </div>
              </li>
              <li className={cx(styles.listItem)}>
                <div className={cx(styles.itemLeft)}>
                  <img src="" alt="" />
                </div>
                <div className={cx(styles.itemRight)}>
                  <h4 className={cx(styles.itemTitle)}>送它上电影院，又得干死一堆烂片</h4>
                  <div className={cx(styles.itemComt)}>
                    有人说，中国也有了自己的B级片—— “网大”。 说到它，你肯定会用“低俗噱头”有人说，中国也有了自己的B级片—— “网大”。 说到它，你肯定会用“低俗噱头”和“粗制有人说，中国也有了自己的B级片—— “网大”。 说到它，你肯定会用“低俗噱头”和“粗制和“粗制滥造”来形容。 不过凡事总有例外，比如Sir刚看完的这部。 被毒饭安利的。 有血有肉、有.
                  </div>
                  <div className={cx(styles.itemTool)}>
                    <span><i className={cx(fa['fa'], fa['fa-eye'])}></i> 333</span>
                    <span><i className={cx(fa['fa'], fa['fa-comment'])}></i> 333</span>
                    <span><i className={cx(fa['fa'], fa['fa-heart'])}></i> 333</span>
                  </div>
                </div>
              </li>
              <li className={cx(styles.listItem)}>
                <div className={cx(styles.itemLeft)}>
                  <img src="" alt="" />
                </div>
                <div className={cx(styles.itemRight)}>
                  <h4 className={cx(styles.itemTitle)}>送它上电影院，又得干死一堆烂片</h4>
                  <div className={cx(styles.itemComt)}>
                    有人说，中国也有了自己的B级片—— “网大”。 说到它，你肯定会用“低俗噱头”有人说，中国也有了自己的B级片—— “网大”。 说到它，你肯定会用“低俗噱头”和“粗制有人说，中国也有了自己的B级片—— “网大”。 说到它，你肯定会用“低俗噱头”和“粗制和“粗制滥造”来形容。 不过凡事总有例外，比如Sir刚看完的这部。 被毒饭安利的。 有血有肉、有.
                  </div>
                  <div className={cx(styles.itemTool)}>
                    <span><i className={cx(fa['fa'], fa['fa-eye'])}></i> 333</span>
                    <span><i className={cx(fa['fa'], fa['fa-comment'])}></i> 333</span>
                    <span><i className={cx(fa['fa'], fa['fa-heart'])}></i> 333</span>
                  </div>
                </div>
              </li>
            </ul>
            <div style={{borderTop: '1px solid #ddd', padding: '20px 5px 50px 5px', textAlign: 'right'}}>
              <GBpaging size={10} total={200} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
