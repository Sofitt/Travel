<template>
<section class="brands">
<!--  <brandsItem :item="item" :key="item.logo" v-for="item of brands"></brandsItem>-->
  <div class="brands__item">
    <img src="../../../assets/img/b1.png" alt="Axon airlines" class="brands__logo">
  </div>
  <div class="brands__item">
    <img src="../../../assets/img/b2.png" alt="Jetstar" class="brands__logo">
  </div>
  <div class="brands__item">
    <img src="../../../assets/img/b3.png" alt="Expedia" class="brands__logo">
  </div>
  <div class="brands__item">
    <img src="../../../assets/img/b4.png" alt="Qantas" class="brands__logo">
  </div>
  <div class="brands__item">
    <img src="../../../assets/img/b5.png" alt="Alitalia" class="brands__logo">
  </div>
</section>
</template>

<script>
// import brandsItem from './brandsItem'

export default {
  name: "brands",
  components: {
    // brandsItem,
  },
  data: function () {
    return {
      brands: [
        {logo: '../assets/img/b1.png', alt: 'Axon airlines'},
        {logo: '../assets/img/b2.png', alt: 'Jetstar'},
        {logo: '../assets/img/b3.png', alt: 'Expedia'},
        {logo: '../assets/img/b4.png', alt: 'Qantas'},
        {logo: '../assets/img/b5.png', alt: 'Alitalia'},
      ]
    }
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {

  },
}
</script>

<style lang="scss">
@import "../../../assets/scss/style";

.brands {
  display: flex;
  flex-flow: row;
  align-items: center;
  margin: 0px 0px 10px 0px;
  min-height: 162px;
  max-width: 5vmax;

  @media (max-width: 990px) {
    overflow-x: auto;
    max-width: 122vmin;
  }
  @media (max-width: $md3+px) {
  max-width: 100%;
  }

  &__item {
    width: 241px;
    height: 86px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin: auto 8.5px;
    padding: 25px 40px;
    cursor: pointer;
@include transitionAll();
//transition: all 0.3s ease 0s;

    @media (max-width: $md1+px) {
      width: 25vmin;
    }

    @media (max-width: $md3+px) {
      width: 180px;
      margin: 0 3px;
      padding: 25px 30px;
    }
    &:hover {
      background: #FFFFFF;
      box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
      border-radius: 10px;
      @include transitionAll();
      //transition: all 0.3s ease 0s;
    }

  }

  &__logo {
    object-fit: contain;
  }
}
</style>