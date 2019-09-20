// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;
Vue.prototype.$apiKey = "87dfa1c669eea853da609d4968d294be";
/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
