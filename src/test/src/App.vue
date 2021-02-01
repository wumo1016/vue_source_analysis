<template>
  <div>
    <div v-for="i in 5" :key="i">
      {{ i }}
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      test: "",
    };
  },
  methods: {},
};
</script>

<style lang="scss"></style>
