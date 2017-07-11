import React, {Component, PropTypes} from 'react'
import cns from 'classnames/bind'
import styles from './home.css'
import fa from 'font-awesome/css/font-awesome.css'
import { connect } from 'react-redux'
import GBheader from '../../component/header/GB-header.jsx'
import GBcarousel from '../../component/carousel/GB-carousel.jsx'
import { setHeadactive } from '../../redux/action/index.js'

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
  }
  render() {
    const { headLst, headActive, setHeadIndex} = this.props
    return (
      <div>
        <GBheader active={headActive} propList={headLst} itemClick={(value, index) => setHeadIndex(index)} />
        <GBcarousel />
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
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getHeadlist: () => {dispatch({type: 'GET_HEADLIST_ASYNC'})},
    setHeadIndex: (index) => {dispatch(setHeadactive(index))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
