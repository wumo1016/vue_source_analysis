<template>
  <div>
    {{ message.name }}
    <div @click="test">测试</div>
    <!-- <Headers /> -->
  </div>
</template>

<script>
// import Headers from "@/components/headers.vue";
export default {
  name: "A",
  methods: {
    test(){
    }
  }
};
</script>

<style>
</style>
