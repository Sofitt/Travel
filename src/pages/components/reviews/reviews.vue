<template>
  <div class="reviews">
    <div class="reviews__leftPart">
      <div class="reviews__title title">Testimonials</div>
      <div class="reviews__subtitle subtitle">What people say <br> about Us.</div>
      <div class="reviews__nav">
        <reviewsPoints :index="item.index" :key="item.id" v-for="item of reviewsArr"></reviewsPoints>
      </div>
    </div>
    <div class="reviews__posts">
        <postsMessage :message="message" :key="message.id" v-for="message of reviewsArr"></postsMessage>
    </div>
    <div class="reviews__arrows">
      <button disabled class="reviews__up" @click="changePostPos()"/>
      <button class="reviews__down" @click="changePostPos()"/>
    </div>
  </div>
</template>

<script>
import reviewsPoints from './reviewsPoints'
import postsMessage from './postsMessage'

export default {
  name: "reviews",
  components: {
    reviewsPoints, postsMessage
  },
  data: function () {
    return {
      arrows: '',
    }
  },
  methods: {
    /**
     * Сменить активный пост в зависимости счётчика curIndex
     */
    changePostPos: function () {
      this.$store.commit('updateCurIndex');
      this.$store.commit("setElem", {sel: document.querySelector('.reviews__posts').childNodes});
      for (let i = 0; i < this.postsArr.length; i++) {
        if (this.postsArr[i].attributes.data.value == this.curIndex) {
          this.postsArr[i].classList.add('__active');
          this.postsArr[i].childNodes[0].classList.add('__active');
          this.postsArr[i].childNodes[1].classList.add('__active');
        } else if (this.postsArr[i].attributes.data.value != this.curIndex) {
          this.postsArr[i].classList.remove('__active');
          this.postsArr[i].childNodes[0].classList.remove('__active');
          this.postsArr[i].childNodes[1].classList.remove('__active');
        }
      }
    },
  },
  computed: {
    reviewsArr: function () {
      return this.$store.getters.getReviews;
    },
    postsArr: function () {
      return this.$store.getters.getActiveElem;
    },
    curIndex() {
      return this.$store.getters.getIndex;
    }
  },
  watch: {
    curIndex() { // Определение состояния стрелок
      if (this.curIndex == 1) {
        this.arrows[0].disabled = true;
        this.arrows[1].disabled = false;
      } else if (this.curIndex == this.postsArr.length && this.postsArr.length > 1) {
        this.arrows[0].disabled = false;
        this.arrows[1].disabled = true;
      } else {
        this.arrows[0].disabled = true;
        this.arrows[1].disabled = true;
      }
    }
  },
  mounted: function () {
    this.arrows = document.querySelector('.reviews__arrows').childNodes;
  }
}
</script>

<style lang="scss">
@import "../../../assets/scss/style";
// Reviews
.reviews {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: $md2+px) {
    flex-flow: column;
  }
  @media (max-width: 338px) {
    display: none;
  }

  &__leftPart {
    display: flex;
    flex-flow: column;
    height: 356px;

    @media (max-width: $md2+px) {
      height: 200px;
    }
    @media (max-width: 481px) {
      margin: 0px 0px 50px 0px;
    }
  }

  // Title
  &__title {
    text-align: left !important;
    @media (max-width: $md1+px) {
      text-align: center !important;
    }
  }

  &__subtitle {
    text-align: left !important;
    color: rgba(20, 24, 62, 1);
  }

  // Nav
  &__nav {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    width: 40px;

    @media (max-width: $md2+px) {
      display: none;
    }
  }

  // Posts
  &__posts {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    flex: 0 1;
    max-width: 543px;
    max-height: 356px;

    @media (max-width: 991px) {
      flex-flow: row;
      overflow-x: auto;
      max-width: 100%;
    }
  }

  &__message {
    position: absolute;
    z-index: -10;
    display: flex;
    flex-flow: column;
    flex-basis: 100px;
    margin: 0px 0px 0px 70px;
    transform: translate(0);

    @media (max-width: 991px) {
      position: relative;
      transform: translate(0, 0);
      margin: 0 0px 0 0;
      z-index: 0;

    }

    &.__active {
      z-index: 10;
      position: relative;
      top: -100px;
      display: flex;
      flex-flow: column;
      flex-basis: auto;
      margin: auto;

      transform: translate(0, -0px);
      @media (max-width: 991px) {
        z-index: 0;
        top: 0;
      }
    }


  }

  &__avatar {
    position: relative;
    display: none;
    border-radius: 50%;
    height: 68px;
    width: 68px;

    @media (max-width: 991px) {
      position: relative;
      top: 200px;
      left: 250px;
      z-index: 11;
      border-radius: 50%;
      display: block;
      transform: translate(0, -6px);
      height: 68px;
      width: 68px;
    }

    &.__active {
      z-index: 11;
      position: absolute;
      border-radius: 50%;
      display: block;
      transform: translate(0, -6px);
      height: 68px;
      width: 68px;

      @media (max-width: 991px) {
        position: relative;
        top: 200px;
        left: 250px;
      }
    }
  }

  &__block {
    z-index: -10;

    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 34px 0 34px;
    margin: 0px 0px 0px 37px;
    width: 504px;
    height: 245px;

    filter: drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.02)) drop-shadow(0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852)) drop-shadow(0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481)) drop-shadow(0px 20px 13px rgba(0, 0, 0, 0.01)) drop-shadow(0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185)) drop-shadow(0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481));
    border-color: rgba(247, 247, 247, 1);
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-radius: 10px;

    @media (max-width: 650px) {
      width: 400px;
      height: 220px;
      padding-right: 30px;
    }
    @media (max-width: 991px) {
      z-index: 10;
      background: white;
      border-color: rgba(247, 247, 247, 1);
      border-style: solid;
      border-width: 2px 2px 2px 2px;
      border-radius: 10px;
      margin: 0px 10px 0px 0px;
      width: 350px;

      &:last-child {
        margin-right: 0;
      }
    }

    &.__active {
      z-index: 10;
      background: white;

      @media (max-width: 650px) {
        width: 400px;
        height: 220px;
        padding-right: 30px;
      }

      @media (max-width: 991px) {
        border-color: rgba(247, 247, 247, 1);
        border-style: solid;
        border-width: 2px 2px 2px 2px;
        border-radius: 10px;
        margin: 0px 20px;
        width: 350px;
      }
    }
  }

  // Post's text
  &__text {
    margin: 28px 0px 34px 0px;
    overflow-y: auto;
    max-height: 140px;

    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;

    @media (max-width: 650px) {
      margin: 0px 0px 10px 0px;
    }
  }

  // Post's name
  &__name {
    margin: 0px 0px 5px 0px;

    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;

  }

  // Post's location
  &__location {
    margin: 0px 0px 28px 0px;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;

  }

  // Nav arrows
  &__arrows {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    margin: 0px 20px 0px 0px;

    @media (max-width: $md1+px) {
      position: absolute;
      right: 0;
      margin: 0px 2% 0px 0px;
    }
    @media (max-width: 1100px) {
      display: none;
    }
  }

  &__up {
    width: 14px;
    height: 14px;
    transform: rotate(135deg);
    background: transparent;
    border: solid #3E2E4D;
    border-width: 0 0 2px 2px;

    &:disabled {
      cursor: default;
      border: solid rgba(188, 183, 194, 1);
      border-width: 0 0 2px 2px;
      background: transparent;
    }
  }

  &__down {
    width: 14px;
    height: 14px;
    transform: rotate(-45deg);
    background: transparent;
    border: solid #3E2E4D;
    border-width: 0 0 2px 2px;

    &:disabled {
      cursor: default;
      border: solid rgba(188, 183, 194, 1);
      border-width: 0 0 2px 2px;
      background: transparent;
    }
  }
}
</style>