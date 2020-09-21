<template>
  <div>123456</div>
</template>
<script>
import A from './views/A/index'
export default {
  name: 'App',
  components: { A },
  data(){
    return {
      message: '测试App'
    }
  },
  created(){
    console.log('app created')
  }
}
</script>
 
<style lang="scss">
</style>
