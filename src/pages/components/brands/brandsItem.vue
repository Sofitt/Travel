<template>
<div class="brands__item">
  <img :src="item.logo" :alt="item.alt" class="brands__logo">
</div>
</template>

<script>
export default {
  name: "brandsItem",
  props: ['item'],
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

<style>

</style>