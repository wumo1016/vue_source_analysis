import Vue from "vue";
import App from "./App.vue";

const CompA = {
  template: `<div>
    <p>CompA</p>
    <p>{{ firstname }}</p>
    <p>{{ secondname }}</p>
  </div>`,
  props: ['firstname', 'secondname']
}
const CompB = {
  template: `<div>
    <p>CompB</p>
    <p>{{ name.name }}</p>
    <p>{{ age }}</p>
  </div>`,
  props: {
    age: Number,
    name: {
      type: Object,
      // default: '小明',
      // validator(value) {
      //   return value === '小明' || value === '小红'
      // },
    }
  }
}

new Vue({
  el: '#app',
  components: {
    CompA,
    CompB
  },
  // <CompA firstname="jack2" secondname="jack" />
  template: `<div>
    <CompB :name="test" :age="age" />
    <button @click="change">测试</button>
  </div>`,
  data: {
    test: {
      name: '小明'
    },
    age: 18
  },
  methods: {
    change(){
      this.test = {
        name: '小强'
      }
    }
  }
})
