<template>
  <div>
    {{ obj.age }}
    <button @click="test">test</button>
  </div>
</template>
<script>
import Headers from '@/components/headers'
export default {
  // components: {Headers},
  name: "App",
  data(){
    return {
      obj: {
        name: 123
      }
    }
  },
  methods: {
    test(){
      this.$set(this.obj, 'age', 456)
    }
  }
};
</script>

<style lang="scss"></style>
