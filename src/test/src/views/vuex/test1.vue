<template>
  <div>
    {{ count }}
    {{ aCount }}
    {{ acCount }}
    <button @click="increment">increment</button>
    <button @click="incrementAct">incrementAct</button>
    <button @click="increment1">increment1</button>
    <button @click="incrementAct1">incrementAct1</button>

    <div>
      <button @click="registerModule">注册</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(['count']),
    ...mapState('a', {
      aCount: 'count'
    }),
    ...mapGetters('a', {
      acCount: 'computedCount'
    })
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions({
      incrementAct: 'increment'
    }),
    ...mapMutations('a', {
      increment1: 'increment'
    }),
    ...mapActions('a', {
      incrementAct1: 'increment'
    }),
    registerModule(){
      this.$store.registerModule('c', {
        namespaced: true,
        state: {
          count: 1
        },
        mutations: {
          increment(state){
            state.count++
          }
        },
        actions: {
          increment({ commit }){
            commit('increment')
          }
        },
      })
    }
  }
};
</script>

<style lang="scss"></style>
