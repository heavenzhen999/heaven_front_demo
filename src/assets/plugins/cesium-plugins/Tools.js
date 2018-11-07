/*
 * @Author: chen zhen
 * @Date: 2018-10-19 14:17:26
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-10-29 09:41:09
 * @Description: Cesium 内部工具方法
 */
// import Cesium from 'cesium/Cesium'

class Tools {
  /**
   * 从精度度转换为直接坐标系
   * @param {Array} [经度，纬度，高]
   */
  static WGS84Toworld(lon, lat, height) {
    return Cesium.Cartesian3.fromDegrees(lon, lat, height)
  }

  /**
   * 从世界坐标系转换为经纬度
   * @param {Cesium.Cartesian3} cartesian3
   * @param {Cesium.Viewer} viewer
   */
  static worldToWGS84(cartesian3, viewer) {
    let ellipsoid = viewer.scene.globe.ellipsoid
    let cartographic = ellipsoid.cartesianToCartographic(cartesian3)
    return [
      Cesium.Math.toDegrees(cartographic.longitude),
      Cesium.Math.toDegrees(cartographic.latitude),
      cartographic.height
    ]
  }
}

export default Tools
