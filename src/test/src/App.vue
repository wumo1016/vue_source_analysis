<template>
  <div>
    <div>{{ msg }}</div>
    <ul>
      <li v-for="item in list">
        {{ item }}
      </li>
    </ul>
    <button @click="add">add</button>
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
      msg: {
        a: 123
      },
      list: [1, 2, 3],
      
    };
  },
  methods: {
    add(){
      // this.msg.b = 456
      Vue.set(this.msg, 'b', 789)
      // this.list[3] = 5
    },
    change() {
      this.list[2] = 9
    },
  }
};
</script>

<style lang="scss">
</style>



