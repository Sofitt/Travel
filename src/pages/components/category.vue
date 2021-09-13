<template>
  <section class="category">
    <h2 class="category__title title">CATEGORY</h2>
    <h3 class="category__subtitle subtitle">We Offer Best Services</h3>
    <div class="category__feature">
      <div class="category__card">
        <div class="category__inner">
          <img src="../../assets/img/01.svg" alt="" class="category__innerImg">
          <h4 class="category__innerName card__header">Calculated Weather</h4>
          <p class="category__innerDesc">Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
        <div class="category__card target"/>
      </div>
      <div class="category__card">
        <div class="category__inner">
          <img src="../../assets/img/02.svg" alt="" class="category__innerImg">
          <h4 class="category__innerName">Best Flights</h4>
          <p class="category__innerDesc">Engrossed listening. Park gate sell they west hard for the.</p>
        </div>
        <div class="category__card target"/>
      </div>
      <div class="category__card">
        <div class="category__inner">
          <img src="../../assets/img/03.svg" alt="" class="category__innerImg">
          <h4 class="category__innerName card__header">Local Events</h4>
          <p class="category__innerDesc">Barton vanity itself do in it. Prefer to men it engrossed listening.</p>
        </div>
        <div class="category__card target"/>
      </div>
      <div class="category__card">
        <div class="category__inner">
          <img src="../../assets/img/04.svg" alt="" class="category__innerImg">
          <h4 class="category__innerName card__header">Customization</h4>
          <p class="category__innerDesc">We deliver outsourced aviation services for military customers</p>
        </div>
        <div class="category__card target"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "category",
  components: {},
  data: function () {
    return {

    }
  },
  methods: {

  },
  computed: {},
  watch: {},
}
</script>

<style lang="scss">
@import "../../assets/scss/style";

.category {
  margin: 0px 0px 130px 0px;
@media (max-width: $md2+px) {
  margin: 0px 0px 380px 0px;
}
@media (max-width: 534px) {
  margin: 0px 0px 380px 0px;
}
@media (max-width: 510px) {
  margin: 0 0 70px 0;
}
@media (max-width: 401px) {
  margin-bottom: 480px;
}

&__feature {
   display: flex;
   flex-flow: row;
   justify-content: space-between;
   align-items: flex-start;
   max-height: 323px;

@media (max-width: $md2+px) {
  flex-flow: row wrap;
}
@media (max-width: $md3+px) {
  justify-content: space-evenly;
  max-height: 380px;
}
}

&__card {
   height: 280px;
   max-height: 280px;
   width: 267px;

@media (max-width: $md2+px) {
  margin: 0px 0px 50px 0px;
}
@media (max-width: 510px) {
  height: 215px;
  padding: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-basis: 200px;
}
.target {
  height: 0;
  width: 0;

@media (max-width: $md1+px) {
  transform: translate(105px, -20px);
}
@media (max-width: $md2+px) {
  transform: translate(122px, -30px);
}
@media (max-width: 510px) {
  transform: translate(90px, -45px);
}
}

&:hover {
.target {
  z-index: -10;
  position: absolute;
  float: left;
  display: inline-block;
  transform: translate(-26px, -76px);
  width: 100px;
  height: 100px;
  border-radius: 30px 0px 10px;
  background: rgba(223, 105, 81, 1);
  @include transitionAll();

@media (max-width: $md1+px) {
  z-index: 10;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  transform: translate(105px, -30px);
  float: none;
}
@media (max-width: $md2+px) {
  transform: translate(122px, -30px);
}
@media (max-width: 510px) {
  transform: translate(90px, -45px);
}

}
}

}

&__inner {
   position: relative;
   display: flex;
   flex-flow: column;
   align-items: center;
   justify-content: center;
   z-index: 1;
   height: 314px;
 //padding: 35px;
   padding: 14%;
   border-radius: 36px;
   @include transitionAll();
@media (hover: hover) {
&:hover {
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
  background: rgb(255, 255, 255);
  @include transitionAll();
}
}
@media (max-width: $md1+px) {
  padding: 20px;
}
@media (max-width: 510px) {
  height: 215px;
  padding: 0px 0px 0px 0px;
}

&Img {
   margin: 0px 0px 30px 0px;
 }

&Name {
   margin: 0px 0px 15px 0px;

   font-family: "Open Sans";
   font-size: 20px;
   font-style: normal;
   font-weight: 600;
   line-height: 27px;
   letter-spacing: 0em;
   text-align: left;

@media (max-width: $md1+px) {
  font-size: 18px;
}
}

&Desc {
   font-size: 16px;
   font-style: normal;
   font-weight: 500;
   line-height: 26px;
   letter-spacing: 0em;
   text-align: center;

@media (max-width: 510px) {
  display: none;
}
}
}
}

</style>