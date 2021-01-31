<template>
  <div>
    <input type="text" v-model="test" />
    {{ test }}
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
