<template>
  <div>
    {{ family }}
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
      msg: 456,
      list: [1, 2, 3],
      
    };
  },
  computed: {
    family(){
      return this.msg + '123'
    }
  },
  methods: {
    change() {
      this.msg = 789
    },
  }
};
</script>

<style lang="scss">
</style>



