<template>
  <div v-if="flag">
    div标签
  </div>
  <ul v-else>
    ul标签
  </ul>
</template>

<script>
// import Headers from "@/components/headers.vue";
export default {
  name: "A",
  props: {
    flag: Boolean
  },
  methods: {
    test() {}
  }
};
</script>

<style>
</style>
