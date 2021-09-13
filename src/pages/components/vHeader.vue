<template>
  <header class="header">
    <div class="header__logo">
      <img class="header__logo-img" src="../../assets/img/logo.svg" alt="Jadoo">
    </div>
    <!-- Nav -->
    <nav class="header__nav">
      <a href="" class="header__nav-link link">Destinations</a>
      <a href="" class="header__nav-link link">Hotels</a>
      <a href="" class="header__nav-link link">Flights</a>
      <a href="" class="header__nav-link link">Bookings</a>
    </nav>
    <!-- Burger -->
    <div class="header__menu menu">
      <div class="header__menu-icon" @click="burger = !burger">
        <span></span>
      </div>
      <nav class="header__menu-body" v-if="burger === true">
        <a href="" class="header__nav-link link">Destinations</a>
        <a href="" class="header__nav-link link">Hotels</a>
        <a href="" class="header__nav-link link">Flights</a>
        <a href="" class="header__nav-link link">Bookings</a>
      </nav>
    </div>
    <!-- Auth -->
    <div class="header__auth ">
      <a href="" class="header__auth link login">Login</a>
      <a href="" class="header__auth link signUp">Sign up</a>
      <!-- Lang change -->
      <div class="header__lang" >
        <div class="header__langCur" @click="changeLang('cur')">
          <a class="header__langBtn" v-if="dropdown === false">
            {{ currentLang }}
          </a>
          <i class="arrow down" :style="dropdownShow.icon"></i>
        </div>
        <span :style="dropdownShow.btn" @click="changeLang('EN')" class="header__langBtn">
          EN
        </span>
        <span :style="dropdownShow.btn" @click="changeLang('RU')" class="header__langBtn">
          <!-- Добавить перевод на русский -->
          RU
        </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "vHeader",
  data() {
    return {
      burger: false,
      dropdown: false,
      dropdownShow: {btn: 'display: none', icon: 'transform: translate(8px, 5px) rotate(45deg);'},
      currentLang: 'EN',
    }
  },
  methods: {
    /**
     * Выпадающий список для смены языка.
     * @param lang
     */
    changeLang: function (lang) {
      if (lang === 'cur') {
        this.dropdownShow = {btn: 'display: flex; position: relative; top: 12px', icon: 'transform: translate(18px, 20px) rotate(-135deg);'};
        this.dropdown = true;
      } else if (lang !== 'cur') {
        this.currentLang = lang;
        this.dropdown = false;
        this.dropdownShow = {btn: 'display: none', icon: 'transform: translate(8px, 5px) rotate(45deg);'};
      }
    }
  },
  watch: {},
  mounted: function () {

  }
}

</script>

<style lang="scss">
@import "../../assets/scss/style";

.header {
  margin: 30px 0px 0px 0px;
  display: flex;
  flex-flow: row nowrap;

  height: 54px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: $md3+px) {
    justify-content: space-around;
  }

  &__logo {
    flex: 0 1 370px;

    @media (max-width: $md2+px) {
      flex-basis: 160px;
    }
    @media (max-width: $md3+px) {
      margin: 0px 0px 0px 20px;
    }

    &-img {
      display: inline-block;
      max-width: 100px;
      height: 100px;
      font-family: 'Poppins';
      font-size: 44px;
      font-style: normal;
      font-weight: 500;
      line-height: 66px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  &__nav {
    display: flex;
    flex: 0 0 40%;
    justify-content: space-between;
    margin: 0px 87px 0px 0px;

    @media (max-width: $md2+px) {
      justify-content: flex-end;
      &-link {
        margin: 0px 40px 0px 0px;

        &:last-child {
          margin: 0px 0px 0px 0px;
        }
      }
    }
    @media (max-width: $md3+px) {
      display: none;
    }
  }

  &__menu {
    display: none;
    @media (max-width: $md3+px) {
      display: flex;
      flex: 1 1 35%;
      justify-content: flex-end;
      margin: 0px 40px 0px 0px;
      @include transitionAll();
    }

    &-icon {
      display: none;

      @media (max-width: $md3+px) {
        display: block;
        cursor: pointer;
        position: relative;
        width: 30px;
        height: 20px;

        &::before, &::after, span {
          right: 0;
          position: absolute;
          height: 10%;
          width: 100%;
          background: black;
        }
        &::before, &::after {
          content: '';
        }
        &::before {
          top: 0;
        }
        &::after {
          bottom: 0;
        }
        span {
          top: 50%;
          transform: scale(1) translate(0px, -50%);
        }
      }
    }

    @media (max-width: $md3+px) {
      &-body {
        z-index: 5;
        position: absolute;
        top: 70px;
        background: rgb(255, 255, 255);
        box-shadow: 0 2px 5px rgba(255, 165, 0, 1);
        padding: 15px 15px;
        border-top-left-radius: 15px;
        border-bottom-right-radius: 45px;

        @include transitionAll();
        animation-name: hUp;
        animation-timing-function: linear;
        animation-duration: 4s;

        overflow: auto;

        .link {
          margin: 0px 0px 10px 0px;
          font-size: 22px !important;

          &:last-child {
            margin: 0px 0px 0px 0px;
          }
        }
      }
    }

  }

  & .link {
    display: flex;
    flex-shrink: 0;
    font-family: "Open Sans";
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(33, 40, 50, 1);

    &:hover {
      color: rgb(95, 110, 222);

    }
  }

  &__auth {
    display: inline-flex;
    flex-flow: row nowrap;
    flex: 0 0 26.3%;
    justify-content: space-around;
    align-items: center;

    @media (max-width: $md2+px) {
      justify-content: center;
      flex-basis: 10%;
      @include transitionAll();
      .login {
        display: none;
      }
    }
    @media (max-width: $md3+px) {
      margin: 0px 20px 0px 0px;
      @include transitionAll();
    }

    .header__lang {
      min-width: 37px;

      display: flex;
      flex-flow: column;
      align-items: center;
      cursor: pointer;

      &:hover, &:active {

      }

      &Btn {

        font-family: 'Open Sans';
        font-size: 17px;
        font-style: normal;
        font-weight: 600 !important;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
      }
      .arrow.down {
        position: absolute;
        transform: translate(24px, 5px) rotate(45deg);
      }
      
      @media (max-width: $md2+px) {
      display: none;
      }
    }
  }
}
</style>