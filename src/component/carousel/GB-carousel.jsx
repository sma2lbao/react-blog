import React, {Component, PropTypes} from 'react'
import styles from './GB-carousel.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_carousel extends Component {
  static defaultProps = {
    timeout: 4000,
    imgs: ['http://pic.58pic.com/58pic/14/27/45/71r58PICmDM_1024.jpg', 'http://pic17.nipic.com/20111122/6759425_152002413138_2.jpg', 'http://pic33.photophoto.cn/20141204/0006019060393096_b.jpg']
  }

  static propTypes = {
    imgs: PropTypes.array,
    onChange: PropTypes.func,
    timeout: PropTypes.number
  }

  constructor(props) {
    super(props)
    this.state = {
      imgs: this.props.imgs,
      showImg: 0
    }
  }

  handleLeft() {
    if(0 === this.state.showImg) {
      this.setState({
        showImg: this.props.imgs.length - 1
      })
    }
    else {
      this.setState({
        showImg: this.state.showImg - 1
      })
    }
  }

  handleRight() {
    if(this.props.imgs.length - 1 === this.state.showImg) {
      this.setState({
        showImg: 0
      })
    }
    else {
      this.setState({
        showImg: this.state.showImg + 1
      })
    }
  }

  handleImgActive(value, index) {
    if(this.props.onChange) {
      this.props.onChange(value, index)
    }
  }

  handleImgLeft() {
    this.handleLeft()
  }

  handleImgRight() {
    this.handleRight()
  }

  startInterval() {
    let intervalFlag =setInterval(() => {
      this.handleRight()
    }, this.props.timeout)
    return intervalFlag
  }

  componentDidMount() {

    let carouselAuto = this.startInterval()

    this.refs.wrap.addEventListener('mouseover', () => {
      clearInterval(carouselAuto)
    })
    this.refs.wrap.addEventListener('mouseout', () => {
      carouselAuto = this.startInterval()
    })

    this.refs.leftCtrl.addEventListener('click', () => {
      clearInterval(carouselAuto)
      setTimeout(() => {
        carouselAuto = this.startInterval()
      }, 0)
    })
    this.refs.rightCtrl.addEventListener('click', () => {
      clearInterval(carouselAuto)
      setTimeout(() => {
        carouselAuto = this.startInterval()
      }, 0)
    })

  }



  render() {
    let {imgs, showImg} = this.state
    return (
      <div className={styles.wrap}>
        <div className={styles.imgWrap}>
          <div className={styles.imgSecond} onClick={this.handleImgLeft.bind(this)} >
            <div className={styles.imgLeftHandle}>
              <img src={-1 === showImg - 1 ? imgs[imgs.length - 1] : imgs[showImg - 1]} ref="left" />
            </div>
          </div>

          <div ref="leftCtrl" className={styles.imgCtrl} onClick={this.handleLeft.bind(this)}><i className={styles.leftArrow}></i></div>

          <div ref="wrap" className={styles.imgPrimary} onClick={this.handleImgActive.bind(this, imgs[showImg], showImg)}>
            <img src={imgs[showImg]} />
          </div>

          <div ref="rightCtrl" className={styles.imgCtrl} onClick={this.handleRight.bind(this)}><i className={styles.rightArrow}></i></div>

          <div className={styles.imgSecond} onClick={this.handleImgRight.bind(this)}>
            <div className={styles.imgRightHandle}>
              <img src={imgs.length === showImg + 1 ? imgs[0] : imgs[showImg + 1]} />
            </div>
          </div>
        </div>


        <div className={styles.imgNav}>
          {imgs.map((value, index) => {
            return(
              <span key={index} className={cx(styles.imgNavItem, {hidden: index != showImg})}></span>
            )
          })}
        </div>
      </div>
    )
  }
}
