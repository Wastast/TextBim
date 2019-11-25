<template>
  <div class="index">
    <loading v-if="isLoading"></loading>
    <map-header></map-header>
  </div>
</template>

<script>
import loading from '@/components/Loading'
import MapHeader from '@/components/Header'
export default {
  name: 'index',
  data() {
    return {
      isLoading: true
    }
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {
    this.isLoading = false
  },
  components: {
    loading,
    MapHeader
  }
}
</script>

<style scoped lang="scss">
.index {
  > div {
    position: absolute;
  }
  width: 100vw;
  height: 100vh;
  // width: 1920px;
  // height: 1080px;
  background: #000;
}
</style>
