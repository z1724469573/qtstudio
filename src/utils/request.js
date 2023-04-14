import axios from "axios";
import { ElMessage } from "element-plus";
import store from "@/store";
const Ajax = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

//响应拦截器
//
Ajax.interceptors.response.use(
  (response) => {
    const { data } = response;
    const {meta} = data
    if (meta?.statusCode === 0) {
      return data;
    } else {
      ElMessage.error(meta.message); // 提示错误消息
      return Promise.reject(new Error(meta.message));
    }
  },
  (error) => {
    // TODO: 将来处理 token 超时问题
    ElMessage.error(error.message); // 提示错误信息
    return Promise.reject(error);
  }
);

Ajax.interceptors.request.use(
  config => {
    if(store.getters.token) {
      // 如果token存在 注入token
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

const get = (url, data) => {
  return new Promise((resolve, reject) => {
    Ajax.get(url, {
      params: data,
    })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
const post = (url, data) => {
  return new Promise((resolve, reject) => {
    Ajax.post(url, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export default {
  get,
  post,
};
