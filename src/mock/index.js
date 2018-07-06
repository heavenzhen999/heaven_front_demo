/*
 * @Author: zhen chen
 * @Date: 2017-11-01 11:13:35
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-06-29 15:16:35
 * @description mockjs主文件
 */

import Mock from 'mockjs'
import { format } from '@/assets/utils'
import _ from 'lodash'

// 登录部分
Mock.mock('mock/system/login', 'post', (req, res) => {
  return {
    uuid: 'xxxx-xxxx-xxxx-xxxx',
    name: '超级管理员',
    username: 'admin',
    companyId: 0,
    privileges: '*',
    roleId: 'xxxx-xxxx-xxxx-xxxx',
    level: 0, // 用户级别
    plan: {
      'xxxxx': ['czcz'] // 预案分组
    }
  }
})

// 根据传入的参数获取对应的用户信息
Mock.mock('mock/monitor/getList', 'post', (req, res) => {
  let level = +req.body.get('level')
  let focusId = +req.body.get('focusId')
  let list = []
  let unit = ''
  let max = 0
  if (level === 0) {
    unit = '港区'
    max = 4
  } else if (level === 1) {
    unit = '公司'
    max = 3
  } else if (level === 2) {
    unit = `区域(${focusId})公司)`
    max = 6
  } else if (level === 3) {
    unit = `设备(${focusId})区域`
    max = 50
  }

  let i = 0
  while (i < max) {
    list.push({
      id: i,
      name: `第${i}${unit}`,
      level: level + 1
    })
    i++
  }

  return {
    company: {
      name: `xxx${unit}`
    },
    list: list
  }
})

// 根据传入的参数获取某个详细参数
Mock.mock('mock/monitor/getDetails', 'post', (req, res) => {
  let begDate = new Date(req.body.get('begDate')).getTime()
  let endDate = new Date(req.body.get('endDate')).getTime()
  let list = []

  const DEFAULT_INTERVAL = 10000 // 默认时间间隔为3s种
  // 转换
  let d = begDate

  while (d <= endDate) {
    let maxSpeed = _.random(2000, 2500, false) / 100
    let minSpeed = _.random(2, 600, false) / 100
    list.push({
      id: 0,
      companyId: 0,
      systemTime: format(new Date(d)),
      maxSpeed,
      minSpeed,
      avgSpeed: +((maxSpeed + minSpeed) / 2).toFixed(2),
      maxSpeedSensor: '111',
      minSpeedSensor: '123',
      avgSpeedSensor: '123'
    })
    d += DEFAULT_INTERVAL
  }
  return {
    list,
    now: {
      maxSpeed: 15,
      avgSpeed: 10,
      minSpeed: 5
    }
  }
})

export default Mock
