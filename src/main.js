import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import router from "./router";
import store from "./store";

axios.defaults.baseURL = "https://axios-defba-default-rtdb.firebaseio.com";
axios.defaults.headers.common["Authorization"] = "fasfdsa";
axios.defaults.headers.get["Accepts"] = "application/json";

const reqIntrceptor = axios.interceptors.request.use((config) => {
  console.log("Request Interceptor", config);

  return config;
});
const reqsIntrceptor = axios.interceptors.response.use((res) => {
  console.log("Response Interceptor", res);
  return res;
});

axios.interceptors.request.eject(reqIntrceptor);
axios.interceptors.request.eject(reqsIntrceptor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
