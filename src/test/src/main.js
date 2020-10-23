import Vue from "vue";
import App from "./App.vue";

const child = {
  template: `
    <div>
      <slot text="123456" :msg="msg"></slot>
    </div>
  `,
  data(){
    return {
      msg: '测试'
    }
  }
}

new Vue({
  el: '#app',
  components: {
    child
  },
  template: `
  <div>
    <child>
      <template v-slot="props">
        <div>{{ props.text }}</div>
        <div>{{ props.msg }}</div>
      </template>
    </child>
  </div>
  `,
  data: {
    message: '123',
  },
  methods: {}
})
