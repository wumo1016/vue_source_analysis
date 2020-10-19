import Vue from "vue";
import App from "./App.vue";

const Child = {
  template: `
  <button @click="clickHandler($event)">click me</button>
  `,
  methods: {
    clickHandler(e) {
      console.log('button click', e)
      this.$emit('select')
    },
  },
}

new Vue({
  el: '#app',
  components: {
    Child
  },
  template: `
  <div>
    <Child @select="selectHandler" @click.native.prevent="clickHandler"></Child>
  </div>
  `,
  data: {
  },
  methods: {
    selectHandler() {
      console.log('child select')
    },
    clickHandler() {
      console.log('child click')
    },
    selectHandler1(){}
  }
})
