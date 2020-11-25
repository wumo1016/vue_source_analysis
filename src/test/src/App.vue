<template>
  <div>
    {{ count }}
    {{ aCount }}
    {{ acCount }}
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
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
  }
};
</script>

<style lang="scss"></style>
