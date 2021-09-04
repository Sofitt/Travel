<template>
  <span :data="index" class="reviews__point" @click="changePostPos()"></span>
</template>

<script>
export default {
  name: "reviewsPoints",
  props: ['activeElem', 'index'],
  components: {},
  data: function () {
    return {

    }
  },
  methods: {
    setActivePoint: function () {
      let points = document.querySelectorAll('.reviews__point');
      for (let point of points) {
        if (point.attributes.data.value == this.index) {
          point.classList.add('__active');
        } else {
          point.classList.remove('__active');
        }
      }

    },
    // eslint-disable-next-line no-unused-vars
    changePostPos: function () {
      // eslint-disable-next-line no-unused-vars
      this.activeElem = document.querySelector('.reviews__posts').childNodes; // нужна шина евентов

      for (let i = 0; i < this.activeElem.length; i++) {
        if (this.activeElem[i].attributes.data.value == this.index) { // почему то строгое сравнение всё ломает
          this.activeElem[i].classList.add('__active');
          this.activeElem[i].childNodes[0].classList.add('__active'); // avatar
          this.activeElem[i].childNodes[1].classList.add('__active'); // block


        } else { // весь код нужно вывести в reviews, чтобы потом не дублировать его в arrows
          this.activeElem[i].classList.remove('__active');
          this.activeElem[i].childNodes[0].classList.remove('__active'); // avatar
          this.activeElem[i].childNodes[1].classList.remove('__active'); // block
        }
      }
      this.setActivePoint();
    }
  },
  computed: {},
  watch: {},
  mounted() {
    if (this.index === 1) {
      document.querySelector('.reviews__point').classList.add('__active');
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/scss/style";

.reviews__point {
  content: '';
  width: 12px;
  height: 12px;
  background: rgba(229, 229, 229, 1);
  border-radius: 50%;
  cursor: pointer;

  &.__active {
    background: rgba(57, 66, 93, 1) !important;

    @media (max-width: $md2+px) {
      display: none;
    }
  }
}
</style>