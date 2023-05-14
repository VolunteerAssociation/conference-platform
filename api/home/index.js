/*
 * @Author: chenguihui
 * @Date: 2023-05-14 13:05:36
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-14 13:27:12
 * @Description: 首页相关的请求接口地址
 * @filePath: Do not edit
 */
import request from "../request"
// 轮播图
export const carousel = (data) => {
  return request({
    url: "/api/index/index",
    data,
    method: "GET"
  })
}