/*
 * @Author: chenguihui
 * @Date: 2023-05-14 13:27:49
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-14 13:28:16
 * @Description: 我的请求相关接口
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