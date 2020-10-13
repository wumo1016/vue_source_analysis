import Vue from "vue";
import App from "./App.vue";


new Vue({
  el: '#app',
  template: `
  <ul :class="bindCls" class="list" v-if="isShow">
    <li v-for="(item,index) in data" @click="clickItem(index)">{{item}}:{{index}}</li>
  </ul>
  `,
  data: {
    bindCls: 's',
    isShow: true,
    data: [ 1,2,3,4 ]
  },
  methods: {
    clickItem(index){
      console.log(index)
    }
  }
  // render: h => h(App)
})
