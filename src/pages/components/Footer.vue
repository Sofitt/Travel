<template>
  <footer class="Footer">
    <div class="Footer__first">
      <div class="Footer__block">
        <h1 class="Footer__logo">Jadoo.</h1>
        <p class="Footer__desc">
          Book your trip in minute, get full Control for much longer.
        </p>
      </div>
    </div>
    <div class="Footer__second">
      <div class="Footer__block">
        <h5 class="Footer__title" @click="toggleDisplay($event.target, 534)">Company</h5>
        <div class="Footer__links">
          <a href="" class="Footer__link">About</a>
          <a href="" class="Footer__link">Careers</a>
          <a href="" class="Footer__link">Mobile</a>
        </div>
      </div>
      <div class="Footer__block">
        <h5 class="Footer__title" @click="toggleDisplay($event.target, 534)">Contact</h5>
        <div class="Footer__links">
          <a href="" class="Footer__link">Help/FAQ</a>
          <a href="" class="Footer__link">Press</a>
          <a href="" class="Footer__link">Affilates</a>
        </div>
      </div>
      <div class="Footer__block">
        <h5 class="Footer__title" @click="toggleDisplay($event.target, 534)">More</h5>
        <div class="Footer__links">
          <a href="" class="Footer__link">Airlinefees</a>
          <a href="" class="Footer__link">Airline</a>
          <a href="" class="Footer__link">Low fare tips</a>
        </div>
      </div>
    </div>
    <div class="Footer__third">
      <div class="Footer__block">
        <div class="fit">
          <a href="" class="social">
            <img src="../../assets/svg/facebook.svg" alt="" class="logo">
          </a>
          <a href="" class="social instagram">
            <img src="../../assets/svg/instagram.svg" alt="" class="logo">
          </a>
          <a href="" class="social">
            <img src="../../assets/svg/twitter.svg" alt="" class="logo">
          </a>
        </div>
        <h5 class="discoverApps">Discover our app</h5>
        <div class="stores">
          <a href="" class="googlePlay">
            <img src="../../assets/svg/googlePlay.svg" alt="" class="googlePlay__logo">
          </a>
          <a href="" class="appStore">
            <img src="../../assets/svg/appStore.svg" alt="" class="appStore__logo">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data: function () {
    return {
      toggleTarget: document.querySelectorAll('.Footer__links'),
    }
  },
  methods: {
    toggleDisplay(target, maxWidth) {
      if (screen.width <= maxWidth) {

        for (let item of this.toggleTarget) {
          if (item !== target.nextSibling) {
            item.classList.remove('display');
          }
        }
          target.nextSibling.classList.toggle('display');
      }
    }
  },
  computed: {

  },
  watch: {

  },
  mounted() {

  },
}
</script>

<style lang="scss">
@import "../../assets/scss/style";

.Footer {
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 50px;
  height: 258px;

  @media (max-width: $md1+px) {
    flex-flow: column;
    align-items: center;
    height: auto;
  }
  // Footer logo
  &__first {

    > .Footer__block {
      width: 207px;
      @media (max-width: $md1+px) {
        height: 66px;
        width: 151px;
      }

      > .Footer__logo {
        color: rgba(24, 30, 75, 1);
        margin: 0px 0px 20px 0px;

        font-family: 'Poppins';
        font-size: 44px;
        font-style: normal;
        font-weight: 500;
        line-height: 66px;
        letter-spacing: 0em;
        text-align: left;
      }

      > .Footer__desc {

        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;

        @media (max-width: $md1+px) {
          display: none;
        }
      }
    }
  }

  // Footer sections / links
  &__second {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    width: 474px;
    @media (max-width: 534px) {
      flex-flow: column;
      width: auto;
    }

    > .Footer__block {
      @media (max-width: $md1+px) {
        align-items: center;
        margin: 0px 0px 30px 0px;
      }
      @media (max-width: 534px) {
        margin: 0px 0px 0px 0px;
      }
      // Section Title
      > h5 {
        display: flex;
        height: 66px;
        align-items: center;

        @media (max-width: 534px) {
          padding: 10px 50px;
          margin: 0px 0px 20px 0px;
          border-radius: 0 0 15px 15px;
          box-shadow: 0 1px 5px orange;
          background: #FFF1DA;
          height: 30px;
          justify-content: center;
          cursor: pointer;
        }
      }

      // Links
      .Footer__links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-flow: column;

        @media (max-width: 534px) {
          display: none;
          max-height: 0px;
        }

        .Footer__link {
          margin: 0px 0px 13px 0px;

          font-family: 'Poppins';
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: left;

          @media (max-width: 534px) {
          display: block;
            width: 100%;
            height: 35px;
            margin-bottom: 0;
            padding: 7px 10px;
            text-align: center;
            &:last-child {
              border-radius: 0 0 15px 15px;
            }
            &:hover {
              color: #5f6ede;
              background: rgba(24, 30, 75, 0.08);
            }
          }

          &:hover {
            color: #5f6ede;
          }
        }
      }

    }
  }

  // Footer socials / stores
  &__third {
    > .Footer__block {
      width: 214px;

      // Socials
      .fit {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        margin: 0px 0px 30px 0px;
        padding: 0px 17px;

        .social {
          width: 41px;
          height: 41px;
          display: flex;
          align-items: center;
          justify-content: center;

          background: #FFFFFF;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
          border-radius: 50%;
        }

        .instagram {
          width: 45px;
          height: 45px;
          background: conic-gradient(from 180deg at 50% 50%, #B8D2F1 0deg, #F289AA 60deg, #C68BF0 106.09deg, #D164DA 153.75deg, #C963E8 221.25deg, #BFC2E8 258.75deg, #FFC999 288.75deg, #D0D8C9 315deg, #BAD0F1 334.13deg, #CED8CB 358.97deg, rgba(255, 255, 255, 0) 360deg);
        }
      }

      // Text between socials n stores
      .discoverApps {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 0px 16px 0px;

        font-family: 'Poppins';
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0.005em;
        text-align: left;
      }

      // Stores
      .stores {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
      }
    }
  }

  &__block {
    display: flex;
    flex-flow: column;
    width: 114px;

    .Footer__title {
      margin: 0px 0px 34px 0px;
      color: rgba(8, 8, 9, 1);

      font-family: 'Poppins';
      font-size: 21px;
      font-style: normal;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;

    }
  }
}

.display {
  @media (max-width: 534px) {
    position: absolute;
    transform: translate(0, 29px);
    display: flex !important;
    max-height: fit-content !important;
    padding: 0px 0 0;
    border-radius: 0 0 15px 15px;
    box-shadow: 0 2px 4px orange;
    background: rgba(255, 241, 218, 1);
    @include transitionAll();
    //transition: all 0.3s ease 0s;
  }
}


</style>