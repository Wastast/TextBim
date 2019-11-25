<template>
  <div class="header">
    <div class="div-line left-strip">
      <span></span>
    </div>
    <div class="div-line right-strip">
      <span></span>
    </div>
    <div class="div-fine">
      <span class="span span-big"> </span>
      <span class="span span-small"> </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
}
</script>

<style scoped lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  display: flow-root;
  background: url('~@/assets/header/headR.png');
  height: 99px;
  background-size: 100% 100%;
  width: 100%;
  > div {
    position: absolute;
  }
  .div-line {
    bottom: 23px;
    height: 6px;
    width: 564px;
    overflow: hidden;
    span {
      position: absolute;
      top: 0;
      width: 128px;
      height: 6px;
      background-size: 100% 100%;
    }
  }
  .left-strip {
    left: 295px;
    span {
      position: absolute;
      top: 0;
      left: -128px;
      background: url('~@/assets/header/left-move.png');
      animation: left-line 5s infinite linear;
    }
  }
  .right-strip {
    right: 278px;
    span {
      position: absolute;
      top: 0;
      right: -128px;
      background: url('~@/assets/header/right-move.png');
      background-size: 100% 100%;
      animation: right-line 5s infinite linear;
    }
  }
  .div-fine {
    position: absolute;
    top: 5px;
    left: 614px;
    .span {
      position: absolute;
      top: 0;
    }
    .span-big {
      width: 82px;
      height: 56px;
      background: url('~@/assets/header/left-head-move.png');
      overflow: hidden;
      animation: left-fine-big 2s infinite linear;
    }
    .span-small {
      right: -94px;
      top: 38px;
      width: 58px;
      height: 27px;
      background: url('~@/assets/header/left-head-move2.png');
      overflow: hidden;
      z-index: 0;
      &::before{
        content: '';
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        // background: red;
        z-index: 1;
      }
      // animation: left-fine-small 2s infinite linear;
    }
  }
}
@keyframes left-line {
  0% {
  }
  50% {
    left: 260px;
  }
  70% {
    width: 128px;
    left: 390px;
  }
  100% {
    width: 0;
    left: 514px;
  }
}
@keyframes right-line {
  0% {
  }
  50% {
    right: 260px;
  }
  70% {
    width: 128px;
    right: 400px;
  }
  100% {
    width: 0;
    right: 530px;;
  }
}
@keyframes left-fine-big {
  0% {
    width: 0;
  }
  60% {
    width: 82px;
  }
  100% {
    width: 82px;
  }
}
@keyframes left-fine-small {
  0% {
    width: 0;
  }
  60% {
    width: 58px;
  }
  100% {
    width: 58px;
  }
}
</style>
