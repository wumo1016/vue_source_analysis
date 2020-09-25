import Vue from "vue";
import App from "./App.vue";

new Vue({
  el: '#app',
  render: h => h(App)
})

// class Test {
//   constructor(){
//     this.dep = []
//     this.newDep = []
//     this.depId = new Set()
//     this.newDepId = new Set()
//   }
//   add(dep){
//     this.newDep.push(dep)
//     this.newDepId.add(dep.id)
//   }
//   clean(){
//     this.dep = this.newDep
//     this.newDep = []
//     let tmp = this.depId
//     this.depId = this.newDepId
//     this.newDepId = tmp
//     this.newDepId.clear()
//   }
// }

// const test = new Test()
// test.add({id: 123})
// console.log(test)
// test.clean()
// console.log(test)
