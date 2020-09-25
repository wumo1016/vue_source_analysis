<template>
  <div>
    <!-- 123465 -->
    <div v-if="flag">{{ msg }}</div>
    <div v-else>{{ msg1 }}</div>

    <button @click="change">change</button>
    <button @click="toggle">toggle</button>
  </div>
</template>
<script>
// import A from './views/A/index'
export default {
  name: 'App',
  // components: { A },
  data(){
    return {
      flag: true,
      msg: '测试1',
      msg1: '测试2'
    }
  },
  methods: {
    change(){
      this.msg = Math.random()
    },
    toggle(){
      this.flag = !this.flag
    },
  }
}
</script>
 
<style lang="scss">
</style>
