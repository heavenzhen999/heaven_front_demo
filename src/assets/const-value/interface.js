/*
 * @Author: chen zhen
 * @Date: 2018-06-26 15:24:09
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-06-29 14:03:04
 * @Description: 专门写 交互接口的文件
 */

// 如果使用Mock, 则路径请求改变
const SYSTEM_NAME = process.env.MOCK === false ? 'beidouPlayform' : 'mock'

export const LOGIN = `${SYSTEM_NAME}/system/login`

export const LOGOUT = `${SYSTEM_NAME}/system/logout`

export const GET_MONITOR_LIST = `${SYSTEM_NAME}/monitor/getList`

export const GET_MONITOR_DETAILS = `${SYSTEM_NAME}/monitor/getDetails`
