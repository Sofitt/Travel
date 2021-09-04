<template>
  <div class="reviews__message" :data="this.message.index">
    <img :src="this.message.img" :alt="message.alt" class="reviews__avatar">
    <div class="reviews__block">
      <p class="reviews__text">{{this.message.text}}</p>
      <span class="reviews__name">{{this.message.name}}</span>
      <span class="reviews__location">{{this.message.location}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "postsMessage",
  props: ['message'],
  components: {},
  data: function () {
    return {

    }
  },
  methods: {},
  computed: {},
  watch: {},
  mounted: function () {
    if (this.message.index === 1) {
      let mainNode = document.querySelector('.reviews__message');
      let avatar = mainNode.childNodes[0];
      let block = mainNode.childNodes[1];
      mainNode.classList.add('__active');
      avatar.classList.add('__active');
      block.classList.add('__active');
    }
  },
}
</script>

<style>

</style>