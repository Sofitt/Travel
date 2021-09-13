<template>
<section class="intro">
  <div class="intro__block">
    <article class="intro__slogan">
      <h3 class="intro__slogan-title">Best Destinations around the world</h3>
    </article>
    <section class="intro__section">
      <div class="intro__section-decor"></div>
      <h1 class="intro__section-title">Travel, enjoy and live a new and full life</h1>
      <p class="intro__section-subtitle">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
    </section>
    <div class="intro__btns">
      <a class="intro__find link">Find out more</a>
      <button class="intro__btn">
        <div class="intro__btn-play">
          <img src="../../assets/img/play.svg" class="intro__btn-icon">
        </div>
        <span class="intro__btn-text">Play Demo</span>
      </button>
    </div>

  </div>
  <div class="intro__background">
  </div>
</section>
</template>

<script>
export default {
  name: "intro"
}
</script>

<style lang="scss">
@import "../../assets/scss/style";

.intro {
  display: flex;
  flex-flow: row;
  margin: 0px 0px 217px 0px;
  @media (max-width: $md2+px) {
    margin: 0px 0px 100px 0px;
  }

  &__block {
    margin: 112px 0px 0px 0px;
    max-width: 555px;
    @media (max-width: 1206px) {
      max-width: none;
      margin: 50px 0px 0px 0px;
    }
    @media (max-width: $md2+px) {
      padding: 0px 20px 0px 20px;
    }
  }

  &__slogan {

    &-title {
      text-transform: uppercase;
      color: rgba(223, 105, 81, 1);

      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      @media (max-width: 1206px) {
        text-align: center;
      }
    }
  }

  &__section {
    margin: 25px 0px 0px 0px;

    &-decor {
      z-index: -1;
      position: relative;
      left: 240px;
      top: 80px;
      width: 385px !important;
      height: 12px !important;
      background: url("../../assets/img/decor.png");

      @media (max-width: $md2+px) {
        display: none;
      }
    }

    &-title {
      z-index: 1;
      color: rgba(24, 30, 75, 1);
      @media (max-width: 1206px) {
        text-align: center;
      }
      @media (max-width: 990px) {
        font-size: 60px;
        line-height: 1.4;
      }
      @media (max-width: 510px) {
        font-size: 40px;
        line-height: 1.5;
      }


      font-family: "Volkhov";
      font-size: 84px;
      font-style: normal;
      font-weight: 700;
      line-height: 89px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    &-subtitle {
      margin: 30px 0px 0px 0px;
      color: rgba(94, 98, 130, 1);

      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;

      @media (max-width: 510px) {
        margin: 5px 0px 0px 0px;
      }
    }
  }


  &__btns {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    margin: 32px 0px 0px 0px;
    width: 380px;

    @media (max-width: 510px) {
      width: 100%;
    }

  }

  &__find {
    padding: 18px 26px;
    color: rgba(255, 255, 255, 1) !important;
    background: #F1A501;
    box-shadow: 0px 20px 35px rgba(241, 165, 1, 0.15);
    border-radius: 10px;
    cursor: pointer;

    font-weight: 400 !important;
    line-height: 25px !important;
    text-align: center !important;
    @include transitionAll();
    //transition: all 0.3s ease 0s;

    &:hover {
      background: #ff9100;
      @include transitionAll();
      //transition: all 0.3s ease 0s;
    }

    @media (max-width: 510px) {
      padding: 13px 13px;
    }
    @media (max-width: 351px) {
      width: 50%;
      font-size: 16px !important;
      padding: 13px 3px;
    }
  }

  &__btn {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    width: 165px;
    background: 0;
    @media (max-width: 351px) {
      text-align: center;
      margin: 0px 0px 0px 10%;
    }

    &-play {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 52px;
      max-height: 52px;
      background: rgba(223, 105, 81, 1);
      border-radius: 50%;
      box-shadow: 0px 15px 30px rgba(223, 105, 81, 0.3);
      @include transitionAll();
      //transition: all 0.3s ease 0s;

      &:hover {
        background: rgb(236, 84, 55);
        @include transitionAll();
        //transition: all 0.3s ease 0s;
      }

      @media (max-width: 510px) {
        position: relative;
        left: 10px;
        border-radius: 10px 0px 0px 10px;
      }
      @media (max-width: 351px) {
        display: none;
      }
    }

    &-icon {
      position: relative;
      left: 1px;
    }

    &-text {
      font-size: 17px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;

      @media (max-width: 510px) {
        margin: 0px 1.5px 0px 0px;
        padding: 13px 10px;
        background: rgba(223, 105, 81, 1);
        border-radius: 10px;
        color: white;
      }
      @media (max-width: 351px) {
        width: auto;
        font-size: 16px !important;
        font-weight: 400;
        margin: 0px 0px 0px 0px;
        padding: 13px 17%;
      }
    }
  }

  &__background {
    z-index: -1;
    position: absolute;
    right: 0px;
    background: url("../../assets/img/01.png") no-repeat;
    width: 784px;
    height: 764px;

    @media (max-width: 1206px) {
      display: none;
    }
  }
}
</style>