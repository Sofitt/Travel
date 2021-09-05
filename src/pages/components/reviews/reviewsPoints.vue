<template>
  <span :data="index" class="reviews__point" @click="changePostPos()"></span>
</template>

<script>
export default {
  name: "reviewsPoints",
  props: ['index'],
  components: {},
  data: function () {
    return {

    }
  },
  methods: {
    setActivePoint: function (index) {
      let points = document.querySelectorAll('.reviews__point');
      for (let point of points) {
        if (point.attributes.data.value == index) {
          point.classList.add('__active');
        } else {
          point.classList.remove('__active');
        }
      }

    },
    changePostPos: function () {
      // this.activeElem = document.querySelector('.reviews__posts').childNodes;
      this.$store.commit("setElem", {sel: document.querySelector('.reviews__posts').childNodes})
      this.$store.commit('changePostPos', this.index);
      this.setActivePoint(this.index);
    }
  },
  computed: {
    curIndex() {
      return this.$store.getters.getIndex;
    }
  },
  watch: {
    curIndex: function () {
      this.setActivePoint(this.curIndex);
    }
  },
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