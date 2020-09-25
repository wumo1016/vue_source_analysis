<template>
  <div>
    {{ msg1 }}
    {{ msg2 }}
    <button @click="change">change</button>
  </div>
</template>
<script>
// import A from './views/A/index'
export default {
  name: "App",
  // components: { A },
  data() {
    return {
      msg1: "测试1",
      msg2: "测试2",
    };
  },
  methods: {
    change() {
      this.msg1 = 1
      this.msg2 = 2
    },
  }
};
</script>
 
<style lang="scss">
</style>
