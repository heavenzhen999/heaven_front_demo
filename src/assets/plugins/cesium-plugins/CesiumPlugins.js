/*
 * @Author: chen zhen
 * @Date: 2018-10-18 15:22:03
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 16:32:10
 * @Description: 国泰星云二次封装Cesium - 主类
 */
// import Cesium from 'cesium/Cesium'
import BaseImageryProvider from './BaseImageryProvider'
import Tools from './Tools'
/**
 * TODO 修复放大所有功能
 */

// var resource = new Cesium.Resource({
//   url: 'http://localhost:8080/geoserver/heaven/wms?SERVICE=WMS&REQUEST=GetCapabilities&tiled=true',
//   retryCallback: (res) => {
//     console.log('test', res)
//   }
// })

class CesiumPlugins {
  constructor({
    container,
    baseLayer = null, // 默认底图，若为null,则使用自带的图片地图
    baseLayerPicker = false // 地图切换工具
  }) {
    window.cathayNebulaCesium = this
    this.version = '0.0.1'
    this.container = container

    this._viewer = null

    this._baseLayerPicker = baseLayerPicker

    // 添加的时候需要进行设定选用何种地图服务(进行选择)
    this.baseImageryProvider = BaseImageryProvider.chooseBaseImageryProvider(baseLayer)
    // 添加一个类，用户获取地图服务

    // 用来进行保存旋转操作的时候的方法的
    this._rotatoEvent = null
  }

  /**
   * ------------------------------------------------
   * --------------------基础------------------------
   * ------------------------------------------------
   */
  /**
   * 初始化
   */
  init() {
    let o = {
      animation: false, // 隐藏左边表盘
      timeline: false, // 隐藏时间轴
      navigationHelpButton: true, // 使用帮助按钮
      baseLayerPicker: false, // 是否显示图层选择器（默认不显示）
      homeButton: false, // 隐藏Home Button
      geocoder: false, // 隐藏地理编码功能
      skyBox: new Cesium.SkyBox({ // 关闭月亮、星星等
        show: false
      }),
      imageryProvider: this.baseImageryProvider || undefined // TODO 需要将默认效果隐藏掉
    }

    // 是否进行设定事都显示底图切换功能
    if (!this._baseLayerPicker) {
      o.baseLayerPicker = false
    } else {
      o.baseLayerPicker = true
      // 如果显示，将所有支持的地图服务全部获取到
      o.imageryProviderViewModels = BaseImageryProvider.allBaseImageryProviderViewModel()
      // TODO 暂时将所有的terrainProviderViewModels 进行隐藏
      o.terrainProviderViewModels = []
    }

    this._viewer = new Cesium.Viewer(this.container, o)
    // 去除版权信息
    this._viewer._cesiumWidget._creditContainer.style.display = 'none'
  }

  /**
   * 是否已经被销毁
   */
  isDestroyed() {
    return this._viewer.isDestroyed()
  }

  /**
   * 重新调整大小
   */
  resize() {
    this._viewer.resize()
  }

  /**
   * ------------------------------------------------
   * --------------------功能------------------------
   * ------------------------------------------------
   */
  /**
   * 视角漫游调整
   */
  flyTo() { }

  /**
   * 视角调整
   */
  zoomTo() { }

  /**
   * 地球中心飞行（开始）
   * @param {Boolean} isEquator 是否调整到赤道的视角，还是在默认的位置
   * // TODO 添加参数控制速度以及控制方向
   * // TODO 在进行切换此功能的时候，需要一个前置的飞行效果，用以移除卡顿的效果
   */
  startRotatoFlyByCore(isEquator) {
    // 为了防止两个旋转功能，同时运行
    if (_.isNull(this._rotatoEvent)) {
      // 先讲地球对应的位置，移动到相应的赤道上，并且将视角调整为直对地心
      let [lon, lat, alt] = Tools.worldToWGS84(this._viewer.camera.position, this._viewer)

      // var startTime = Cesium.JulianDate.fromDate(new Date())
      // var stopTime = Cesium.JulianDate.addSeconds(startTime, 10, new Cesium.JulianDate())

      // this._viewer.clock.startTime = startTime.clone() // 开始时间
      // this._viewer.clock.stopTime = stopTime.clone() // 结速时间
      // this._viewer.clock.currentTime = startTime.clone() // 当前时间
      // this._viewer.clock.clockRange = Cesium.ClockRange.CLAMPED // 行为方式
      // this._viewer.clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK // 时钟设置为当前系统时间; 忽略所有其他设置。

      this._rotatoEvent = () => {
        // 保证lon在允许的范围内
        lon -= 1
        if (lon < -180) lon += 360
        if (lon > 180) lon -= 360

        this._viewer.camera.setView({
          destination: Tools.WGS84Toworld(lon, isEquator ? 0 : lat, alt),
          orientation: {
            pitch: Cesium.Math.toRadians(-90), // default value (looking down)
            roll: 0.0 // default value
          }
        })
      }

      this._viewer.clock.onTick.addEventListener(this._rotatoEvent)
    }
  }

  /**
   * 地球中心飞行（结束）
   */
  stopRotatoFlyByCore() {
    this._viewer.clock.onTick.removeEventListener(this._rotatoEvent)
    this._rotatoEvent = null
  }

  /**
   * 围绕当前的中心点进行旋转（开始）
   * // TODO 在进行切换此功能的时候，需要一个前置的飞行效果，用以移除卡顿的效果
   */
  startRotatoFlyByPoint() {
    // 为了防止两个旋转功能，同时运行
    if (_.isNull(this._rotatoEvent)) {
      let angle = 10
      let initialHeading = this._viewer.camera.heading
      this._rotatoEvent = () => {
        angle += 10
        // let delTime = Cesium.JulianDate.secondsDifference(this._viewer.clock.currentTime, this._viewer.clock.startTime)
        this._viewer.camera.setView({
          orientation: {
            heading: Cesium.Math.toRadians(angle) + initialHeading,
            pitch: Cesium.Math.toRadians(-90), // default value (looking down)
            roll: 0.0 // default value
          }
        })
      }
      this._viewer.clock.onTick.addEventListener(this._rotatoEvent)
    }
  }

  /**
   * 围绕当前的中心点进行旋转（结束）
   */
  stopRotatoFlyByPoint() {
    this._viewer.clock.onTick.removeEventListener(this._rotatoEvent)
    this._rotatoEvent = null
  }

  /**
   * 地球旋转飞行（停止）
   */
  stopRotatoFly() {
    // this._viewer.clock.onTick.removeEventListener(this.Exection.bind(this))
  }

  /**
   * 调整地图的效果
   * // TODO 可以对地图的图层进行精确地调整
   * @param {Cesium.ImageryLayer} layer 需要进行调整的图层
   */
  static changeLayerStyle(layer, {
    alpha = null, // 默认值为1.0
    brightness = null, // 默认值为1.0
    contrast = null, // 默认值为1.0
    hue = null, // 默认值为0
    saturation = null, // 默认值为1.0
    gamma = null // 默认值为1.0
  }) {
    // TODO 进行layer的类型判断

    if (alpha) layer.alpha = alpha // 透明度
    if (brightness) layer.brightness = brightness // 亮度
    if (contrast) layer.contrast = contrast // 对比度
    if (hue) layer.hue = hue // 色彩
    if (saturation) layer.saturation = saturation // 饱和度
    if (gamma) layer.gamma = gamma // 伽马值
  }
}

export default CesiumPlugins
