import Vue from "vue";
import App from "./App.vue";

const child = {
  template: `
    <input :value="value" @input="updateValue"/>
  `,
  props: [ 'value' ],
  model: {
    event: 'change', // 默认是input，自定义事件名
  },
  mounted(){
  },
  methods: {
    updateValue(e){
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  el: '#app',
  components: { child },
  template: `
  <div>
    <p>{{ message }}</p>
    <child v-model="message"/>
  </div>
  `,
  data: {
    message: '123',
  },
  methods: {
  }
})
