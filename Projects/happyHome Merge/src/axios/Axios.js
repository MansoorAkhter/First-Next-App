import axios from "axios";

export default axios.create({
  baseURL: "https://wpstaging.a2zcreatorz.com/Happy-home/wp-json/wc/v3/",
  // baseURL: "https://wpstaging.a2zcreatorz.com/Happy-home/wp-json/",
  //   headers: {
  //   "Accept": "application/json",
  //   "Content-Type": 'application/json; charset=utf-8; ',
  // },

});
// baseURL: "https://tasdeertech.com/api/a2z110",


export const constant = "consumer_key=ck_5ed7304b1870fa6d22307ffc534f8ab95f638942&consumer_secret=cs_51dbf8b7eabf20b95294525a4f885e89b6225c94"