/*
 * @Author: chen zhen
 * @Date: 2018-10-18 18:04:12
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 16:35:04
 * @Description: 用来处理加载各项地图服务的方式
 */
// import Cesium from 'cesium/Cesium'

import defaultImg from '@/assets/images/logo.png'
import imgURL from '@/assets/images/base-black-world.png'

const TiandituOption = {
  style: 'default',
  format: 'image/jpeg',
  tileMatrixSetID: 'GoogleMapsCompatible',
  show: false
}

/**
 * 完成底图类型：
 *  天地图 - 矢量 + 标注
 *  天地图 - 影像 + 标注
 *
 * 未完成
 *  天地图 - 地形 + 标注 ???? 有问题 不能正常的加载数据
 *  高德的数据和天地图的相同
 *
 * // 将所有能够支持的类型添加对应的方法
 *
 * // TODO 扩展从多数据源获取数据，提高相应速度
 */

const MAP_LIST = [
  {
    name: 'Black-World',
    label: '黑色底图',
    layer: (mapImgUrl) => {
      return new Cesium.SingleTileImageryProvider({
        url: mapImgUrl || imgURL
      })
    }
  },
  {
    name: 'Default-World',
    label: '全球地图',
    layer: () => {
      return Cesium.createWorldImagery()
    }
  },
  {
    name: 'TiandituLayerVecW',
    label: '天地图-全球矢量地图服务',
    layer: () => {
      return new Cesium.WebMapTileServiceImageryProvider(Object.assign(TiandituOption, {
        url: 'http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles',
        layer: 'tdtVecBasicLayer'
      }))
    }
  },
  {
    name: 'TiandituLayerVcaW',
    label: '天地图-全球矢量中文注记服务',
    layer: () => {
      return new Cesium.WebMapTileServiceImageryProvider(Object.assign(TiandituOption, {
        url: 'http://t0.tianditu.com/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg',
        layer: 'tdtAnnoLayer'
      }))
    }
  },
  {
    name: 'TiandituLayerImgW',
    label: '天地图-全球影像地图服务',
    layer: () => {
      return new Cesium.WebMapTileServiceImageryProvider(Object.assign(TiandituOption, {
        url: 'http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles',
        layer: 'tdtBasicLayer'
      }))
    }
  },
  {
    name: 'TiandituLayerCiaW',
    label: '天地图-全球影像中文注记服务',
    layer: () => {
      return new Cesium.WebMapTileServiceImageryProvider(Object.assign(TiandituOption, {
        url: 'http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg',
        layer: 'tdtAnnoLayer'
      }))
    }
  },
  {
    name: 'TiandituLayerTerW',
    label: '天地图-全球地形晕渲地图服务',
    layer: null
  },
  {
    name: 'TiandituLayerCtaW',
    label: '天地图-全球地形中文标记服务',
    layer: null
  },
  {
    name: 'OpenStreetMaps',
    label: 'OpenStreetMaps',
    layer: () => {
      return Cesium.createOpenStreetMapImageryProvider({
        url: 'https://a.tile.openstreetmap.org/'
      })
    }
  },
  {
    name: 'BingMap',
    label: 'BingMap',
    layer: () => {
      return new Cesium.BingMapsImageryProvider({
        url: 'https://dev.virtualearth.net',
        /**
         * !!!!! 陈震 申请的BingMap Key 仅供研究使用，不可上线产品，敬请重新申请对应key
         * tel 18722493286
         * key: 'get-yours-at-https://www.bingmapsportal.com/',
         */
        key: 'Aj2ug7Ci0zG7nHEP845ERkOiC36LTrxt0vRzbldf0aBYH3qt2cbaYgylzH7_eY6r',
        mapStyle: Cesium.BingMapsStyle.AERIAL
        // 目前Cesium中支持AERIAL、AERIAL_WITH_LABELS、ROAD、ORDNANCE_SURVEY、COLLINS_BART五种。
      })
    }
  },
  {
    name: 'GoogleMap',
    label: 'GoogleMap',
    layer: () => {
      let url = 'http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali'
      return new Cesium.UrlTemplateImageryProvider({ url })
    }
  },
  {
    name: 'ESRI_World_WGS84',
    label: 'ESRI_World_WGS84',
    layer: () => {
      return new Cesium.ArcGisMapServerImageryProvider({
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
        // url: 'http://atlasmaps.esri.com/arcgis/rest/services/Esri/USA_Population_Density/MapServer'
        // 两个ESRI地图服务的地址
        // http://atlasmaps.esri.com/arcgis/rest/services
        // https://services.arcgisonline.com/ArcGIS/rest/services
      })
    }
  },
  {
    name: 'MapBox',
    label: 'MapBox',
    layer: () => {
      return new Cesium.MapboxImageryProvider({
        mapId: 'mapbox.streets'
      })
      /**
       * 详情可以查看对应的官网
       * https://www.mapbox.com/
       */
      // 同时提供了mapbox.satellite、mapbox.streets、mapbox.streets-basic三种风格
      // 竟然不需要使用？key 不错
    }
  }
]

// 将MAP_LIST整理成map的格式
let mapListMap = new Map()

for (let o of MAP_LIST) {
  mapListMap.set(o.name, o)
}

// 支持的地图服务的英文名称
let _mapListName = null

class BaseImageryProvider {
  /**
   * 返回支持的地图服务
   */
  static suportBaseImageryProviders() {
    // 懒计算，加载时不进行计算
    if (_.isNull(_mapListName)) _mapListName = MAP_LIST.filter(i => !_.isNull(i.layer)).map(i => i.name)
    return _mapListName
  }
  /**
   * 根据传入的类型返回地图，
   * 如果传入 null 则返回null 此种情况会使用默认的图片
   * @param {String} baseLayerName 根据类型选择底图
   */
  static chooseBaseImageryProvider(baseLayerName) {
    if (mapListMap.has(baseLayerName)) return mapListMap.get(baseLayerName).layer()
    return mapListMap.get('Default-World').layer() // 返回默认底图
  }
  /**
   * 返回所有的地图数据
   */
  static allBaseImageryProvider() {
    return MAP_LIST
  }
  /**
   * 获取所有的地图数据，ViewModel版本
   */
  static allBaseImageryProviderViewModel() {
    return MAP_LIST.filter(i => !_.isNull(i.layer)).map(i => {
      return new Cesium.ProviderViewModel({
        name: i.label || i.name,
        // TODO 设定所有地图服务的图片
        iconUrl: i.icon || defaultImg,
        tooltip: i.tooltip || i.label || i.name || '',
        creationFunction: i.layer
      })
    })
  }
}

export default BaseImageryProvider
