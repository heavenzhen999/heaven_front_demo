/*
 * @Author: chen zhen
 * @Date: 2018-06-26 15:12:39
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-06-29 14:10:50
 * @Description: 常量
 */
import * as _INTERFACE from './interface'
// export const SYSTEM_LABEL = '青岛港气象预警管控平台'

// 系统服务IP
let SYSTEM_SERVERIP
// Arcgis API for Javascript 实时位置
let ARCGIS_API_FOR_JAVASCRIPT_IPPORT
// arcgis 服务地址
let ARCGIS_SERVER_IPPORT

if (process.env.NODE_ENV === 'production') {
  SYSTEM_SERVERIP = '10.199.67.132:8080'
  ARCGIS_API_FOR_JAVASCRIPT_IPPORT = '10.199.67.132:8080'
  ARCGIS_SERVER_IPPORT = '10.199.64.63:8399'
} else {
  SYSTEM_SERVERIP = 'localhost:8080'
  ARCGIS_API_FOR_JAVASCRIPT_IPPORT = 'localhost:8080'
  ARCGIS_SERVER_IPPORT = '192.168.2.27:8399'
}

export const INTERFACE = _INTERFACE

// 登陆成功后到跳转登录页的等待时间
export const LOGIN_SUCCESS_WAIT = 300

// 登陆失败后,显示失败文字的时间
export const LOGIN_UNSUCCESS_TEXT_TIME = 1000

export const LOGIN_PROCESS_STATES = {
  SUCCESS: 'SUCCESS',
  UNSUCCESS: 'UNSUCCESS',
  DEFAULT: 'DEFAULT'
}

// 地图部分
const ESRI_VERSION = '3.17'
export const ARCGIS_API_FOR_JAVASCRIPT_JS = `http://${ARCGIS_API_FOR_JAVASCRIPT_IPPORT}/arcgis_js_api/library/${ESRI_VERSION}/${ESRI_VERSION}/init.js`
export const ARCGIS_API_FOR_JAVASCRIPT_CSS = `http://${ARCGIS_API_FOR_JAVASCRIPT_IPPORT}/arcgis_js_api/library/${ESRI_VERSION}/${ESRI_VERSION}/esri/css/esri.css`
// 用于进行地图
export const ARCGIS_SERVER_LAYER = `http://${ARCGIS_SERVER_IPPORT}/arcgis/rest/services/port/MapServer`
// 用于进行测量的工具
export const ARCGIS_GEOMETRY = `http://${ARCGIS_SERVER_IPPORT}/arcgis/rest/services/Geometry/GeometryServer`

// websocket 地址
export const WEBSOCKET_URL = `ws://${SYSTEM_SERVERIP}/???`

// 默认的时间轴显示时间跨度(1000 * 60 * 60 *3) 3个小时
export const CHART_X_LENTH = 10800000
