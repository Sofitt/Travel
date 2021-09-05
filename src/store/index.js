import Vue from 'vue'
import Vuex from 'vuex'
import reviews from "@/store/modules/reviews";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    reviews
  }
})
