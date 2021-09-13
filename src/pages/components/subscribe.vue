<template>
  <section class="sub">
    <div class="sub__header">
      <div class="sub__logo">
        <img src="../../assets/img/send2.svg" alt="send icon" class="sub__logo icon">
      </div>
    </div>
    <div class="sub__inner">
      <p class="sub__titleMob">Subscribe to get interesting offers</p>
      <p class="sub__title">Subscribe to get information, latest news and other
        interesting offers about Cobham</p>
      <form action="">
      <label class="sub__form">
        <img src="../../assets/svg/mail.svg" alt="" class="sub__inputImg">
        <input type="email" placeholder="Your email" class="sub__input">
        <button class="sub__btn link" type="submit">Subscribe</button>
      </label>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "subscribe",
  components: {},
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

<style lang="scss">
@import "../../assets/scss/style";

.sub {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0px 165px 0px;

  @media (max-width: 660px) {
    //max-width: 95%;
  }

  &__header {
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 670px) {
      display: none;
    }
  }

  &__logo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background: linear-gradient(201.65deg, #747DEF 10.27%, #5E3BE1 100%);
    border-radius: 50%;
    top: 35px;

    &.icon {
      transform: rotate(-30deg);
      background: transparent;
      left: 0;
      top: 0;
    }

    @media (max-width: $md3+px) {
      display: none;
    }
  }

  &__inner {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    min-height: 407px;
    background: rgba(223, 215, 249, 0.2);
    border-radius: 129px 20px 20px 20px;
    margin-right: 35px;

    @media (max-width: $md3+px) {
      margin-right: 0;
    }
    @media (max-width: 652px) {
      max-width: 100%;
    }
    @media (max-width: 670px) {
      min-height: 200px;
    }

  }

  &__title {
    padding: 0px 155px;
    margin: 80px 0 76px 0px;

    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: center;

    @media (max-width: 1015px) {
      font-size: 28px;
      padding: 0px 50px;
    }

    @media (max-width: 670px) {
      display: none;
    }

    &Mob {
      display: none;
      padding: 0px 50px;
      margin: 30px 0 10px;

      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: center;

      @media (max-width: 670px) {
        display: block;
        font-size: 22px;
      }
    }

  }

  &__form {
    //width: 625px;
    height: 68px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;

    margin: 0px 0px 78px 0px;


    @media (max-width: 670px) {
      margin: 0px 0px 30px 0px;
      padding: 0 20px;
    }

  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 68px;

    color: white !important;
    background: linear-gradient(180deg, #FF946D 0%, #FF7D68 100%);
    border-radius: 10px;

    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    @include transitionAll();
    //transition: all 0.3s ease 0s;
    @media (max-width: 652px) {
      width: 150px;
    }

    @media (max-width: 630px) {
      width: 130px;
    }

    &:hover {
      background: linear-gradient(180deg, #ff7d4e 0%, #ff4d30 100%);
      @include transitionAll();
      //transition: all 0.3s ease 0s;
    }
  }

  &__input {
    background: #FFFFFF;
    border-radius: 10px;
    width: 421px;
    height: 68px;
    padding: 25px 30px 25px 68px;
    margin-right: 24px;

    font-family: 'Montserrat';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;

    @media (max-width: 670px) {
      max-width: 360px;
      width: 50%;
      padding: 25px 20px;
      font-size: 18px;
    }

    &:placeholder-shown {
      color: rgba(57, 66, 93, 1);
      padding-left: 68px;

      @media (max-width: 670px) {
        max-width: 380px;
        padding-left: 20px;
        font-size: 18px;
      }
    }

    &Img {
      position: absolute;
      transform: translate(-280px);

      @media (max-width: 670px) {
        display: none;
      }
    }
  }
}
</style>