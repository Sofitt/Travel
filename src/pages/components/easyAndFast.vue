<template>
<section class="easy">
  <h2 class="easy__title title">Easy and Fast</h2>
  <h3 class="easy__subtitle subtitle">Book your next trip <br> in 3 easy steps</h3>
  <div class="easy__inner">
    <div class="easy__block">
      <div class="easy__feature">
        <img src="../../assets/img/c1.svg" alt="" class="easy__img">
        <div class="easy__text">
          <h3 class="easy__header title">Choose Destination</h3>
          <p class="easy__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
        </div>
      </div>
      <div class="easy__feature">
        <img src="../../assets/img/c2.svg" alt="" class="easy__img">
        <div class="easy__text">
          <h3 class="easy__header title">Make Payment</h3>
          <p class="easy__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
        </div>
      </div>
      <div class="easy__feature">
        <img src="../../assets/img/c3.svg" alt="" class="easy__img">
        <div class="easy__text">
          <h3 class="easy__header title">Reach Airport on Selected Date</h3>
          <p class="easy__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
        </div>
      </div>
    </div>
    <img src="../../assets/img/09.jpg" class="easy__screenApp">
  </div>
</section>
</template>

<script>
export default {
  name: "easyAndFast",
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

.easy {
  margin: 0px 0px 200px 0px;


@media (max-width: $md1+px) {
  display: flex;
  flex-flow: column;
  justify-content: center;
}
@media (max-width: $md2+px) {
  margin: 0px 0px 80px 0px;
}
@media (max-width: 510px) {
  padding: 0 20px;
}

&__title {
   text-align: left !important;

@media (max-width: $md1+px) {
  text-align: center !important;
}
}

&__subtitle {
   text-align: left !important;
 }

&__inner {
   display: flex;
   flex-flow: row;
@media (max-width: $md1+px) {
  align-items: center;
  justify-content: center;
}
}

&__block {
   display: flex;
   flex-flow: column;
 }

&__feature {
   display: flex;
   flex-flow: row;
   align-items: center;
   margin: 0px 0px 48px 0px;
   max-width: 400px;

@media (max-width: $md1+px) {
  max-width: 500px;
}

}

&__img {

 }

&__text {
   margin: 0px 0px 0px 20px;
 }

&__header {
   font-weight: 700;
   font-size: 16px !important;
   line-height: 19.92px !important;
   text-align: left !important;
   text-transform: none !important;

@media (max-width: $md1+px) {
  font-size: 18px !important;
}
@media (max-width: 352px) {
  font-size: 16px !important;
}
}

&__desc {
   font-family: Poppins;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: 20px;
   letter-spacing: 0em;
   text-align: left;

@media (max-width: $md1+px) {
  font-size: 18px;
}
@media (max-width: 352px) {
  display: none;
}
}

&__screenApp {
   position: absolute;
 //right: 330px;
   right: 0px;
   margin: 0px 0px 0px 200px;
   transform: translate(0, -175px);

@media (max-width: $md1+px) {
  display: none;
}
}
}
</style>