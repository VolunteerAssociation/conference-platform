/*
 * @Author: chenguihui
 * @Date: 2023-05-14 13:04:42
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-14 13:26:57
 * @Description: 请求地址
 * @filePath: Do not edit
 */
let baseUrl = "";
if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:3000";
} else {
  baseUrl = "http://www.chenguihui.com/api";
}
export default baseUrl;
