/*
 * @Author: chenguihui
 * @Date: 2023-05-14 13:04:15
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-14 13:26:21
 * @Description: 请求接口库
 * @filePath: Do not edit
 */
import baseUrl from "./BASE_URL";
export default (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      method: options.method || "GET",
      url: `${baseUrl}${options.url}`,
      data: options.data || {},
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      success: resolve,
      fail: reject,
      complete: (result) => {
        console.log(result);
      },
    });
  });
};
