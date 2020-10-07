<template>
  <div>
    <A :flag="flag"></A>
    <button @click="toggle">toggle</button>
  </div>
</template>
<script>
import A from './views/A/index'
export default {
  name: "App",
  components: { A },
  data() {
    return {
      flag: true
    };
  },
  methods: {
    toggle() {
      this.flag = !this.flag
    },
  }
};
</script>

<style lang="scss">
</style>



