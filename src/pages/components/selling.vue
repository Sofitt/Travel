<template>
  <div class="selling">
    <h2 class="selling__title title">Top Selling</h2>
    <h3 class="selling__subtitle subtitle">Top Destinations</h3>
    <div class="selling__feature">
      <div class="selling__card">
        <img src="../../assets/img/02.png" alt="" class="selling__img">
        <div class="selling__panel">
          <div class="selling__panelTop">
            <p class="selling__country">Rome, Italy</p>
            <span class="selling__cost">$5.42k</span>
          </div>
          <div class="selling__panelBottom">
            <img src="../../assets/img/nav.svg" alt="" class="selling__nav">
            <div class="selling__days">10 Days Trip</div>
          </div>
        </div>
      </div>
      <div class="selling__card">
        <img src="../../assets/img/03.png" alt="" class="selling__img">
        <div class="selling__panel">
          <div class="selling__panelTop">
            <p class="selling__country">London, UK</p>
            <span class="selling__cost">$4.2k</span>
          </div>
          <div class="selling__panelBottom">
            <img src="../../assets/img/nav.svg" alt="" class="selling__nav">
            <div class="selling__days">12 Days Trip</div>
          </div>
        </div>
      </div>
      <div class="selling__card">
        <img src="../../assets/img/04.png" alt="" class="selling__img">
        <div class="selling__panel">
          <div class="selling__panelTop">
            <p class="selling__country">Full Europe</p>
            <span class="selling__cost">$15k</span>
          </div>
          <div class="selling__panelBottom">
            <img src="../../assets/img/nav.svg" alt="" class="selling__nav">
            <div class="selling__days">28 Days Trip</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "selling",
  components: {},
  data: function () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style lang="scss">
@import "../../assets/scss/style";

.selling {
  margin: 0px 0px 156px 0px;
  @media (max-width: $md2+px) {
    margin: 0px 0px 80px 0px;
  }

  &__feature {
    display: flex;
    flex-flow: row;
    justify-content: space-between;

    @media (max-width: $md1+px) {
      flex-flow: row wrap;
      justify-content: space-around;
      align-items: center;
    }
    @media (max-width: 510px) {
      flex-flow: column wrap;
    }
    @media (max-width: 352px) {
      flex-flow: column;
      overflow: hidden;
      width: 100%;
    }
  }

  &__card {
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 457px;
    max-height: 457px;
    width: 314px;

    filter: drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.02)) drop-shadow(0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852)) drop-shadow(0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481)) drop-shadow(0px 20px 13px rgba(0, 0, 0, 0.01)) drop-shadow(0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185)) drop-shadow(0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481));

    @media (max-width: $md1+px) {
      margin: 0px 0px 40px 0px;
    }
    @media (max-width: 510px) {
      margin: 0 0 20px 0px;
    }
    @media (max-width: 352px) {
      margin: 0 auto;
      height: 130px;
      width: 100%;
    }
  }

  &__img {
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 314px;
    max-height: 457px;
    border-radius: 24px;

    @media (max-width: 352px) {
      display: none;
    }
  }

  &__panel {
    position: absolute;
    transform: translate(0, 330px);
    width: 315px;
    height: 130px;
    padding: 27px 23px 42px;
    border-radius: 0px 0px 24px 24px;
    background: white;

    @media (max-width: 510px) {
      height: 120px;
      transform: translate(0, 340px);
    }
    @media (max-width: 352px) {
      border-radius: 24px;
      width: 180px;
      transform: translate(0, 0px);
      padding: 20px 10px 0px;
    }

    &Top {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      margin: 0px 0px 20px 0px;

      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;

      @media (max-width: 352px) {
        flex-flow: column;
        text-align: center !important;
      }
    }

    &Bottom {
      display: flex;
      flex-flow: row;

      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;

      @media (max-width: 352px) {
        text-align: center !important;
      }
    }
  }

  &__country {

  }

  &__cost {

  }

  &__nav {
    margin: 0px 14px 0px 0px;
  }

  &__days {

  }
}
</style>