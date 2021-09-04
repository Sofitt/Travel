<template>
<div id="main">
  <img src="../assets/img/00.png" alt="" class="main__background">
  <div class="main__wrapper __container">
    <vHeader></vHeader>
    <intro></intro>
    <category></category>
    <selling></selling>
    <easyAndFast></easyAndFast>
    <reviews></reviews>
    <brands></brands>
    <subscribe></subscribe>
    <Footer></Footer>
          <span class="Copyrights">All rights reserved@jadoo.com</span>
  </div>
</div>
</template>

<script>
import vHeader from "./components/vHeader"
import intro from "./components/intro"
import category from "./components/category"
import selling from "./components/selling"
import easyAndFast from "./components/easyAndFast"
import reviews from './components/reviews/reviews'
import brands from './components/brands/brands'
import subscribe from './components/subscribe'
import Footer from './components/Footer'

export default {
  name: "mainPage",
  // eslint-disable-next-line vue/no-unused-components
  components: {vHeader, intro, category, selling, easyAndFast, reviews, brands, subscribe, Footer},
  data: function () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {

  },
}
</script>

<style>

</style>