import React, { Component, PropTypes } from 'react'
import styles from './articleWrite.css'
import cns from 'classnames/bind'
import GBheader from '../../component/header/GB-header.jsx'
import GBRicheditor from '../../component/rich-editor/GB-Rich-editor.jsx'
import GBbutton from '../../component/button/GB-button.jsx'
import {connect} from 'react-redux'
import { setHeadactive, setArticleTitle, setArticleComt } from '../../redux/action/index.js'

let cx = cns.bind(styles)

class Article_writer extends Component {
  static defaultProps = {}
  static propTypes = {
    headLst: PropTypes.array.isRequired,
    headActive: PropTypes.number.isRequired,
    setHeadIndex: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    props.getHeadlist()
  }
  handleClick() {
    this.props.writeArticle()
  }
  render() {
    const { headLst, headActive, setHeadIndex, setTitle, setComt } = this.props
    return (
      <div className={cx(styles.detailWrap)}>
        <GBheader active={headActive} propList={headLst} itemClick={(value, index) => setHeadIndex(index)} />
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
    setHeadIndex: (index) => {dispatch(setHeadactive(index))},
    setTitle: (title) => {dispatch(setArticleTitle(title))},
    setComt: (article) => {dispatch(setArticleComt(article))},
    writeArticle: () => {dispatch({type: 'POST_ARTICLE'})}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Article_writer)
