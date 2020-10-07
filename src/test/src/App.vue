<template>
  <div>
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
      msg: 1,
      person: {
        name: {
          first: 1
        }
      }
      
    };
  },
  watch: {
    person: {
      deep: true,
      handler(){

      }
    },

  },
  methods: {
    change() {
      this.person.name.first = 789
    },
  }
};
</script>

<style lang="scss">
</style>



