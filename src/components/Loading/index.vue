<template>
  <div class="loading">
    <div class="loader">
      <div class="face">
        <div class="circle"></div>
      </div>
      <div class="face">
        <div class="circle"></div>
      </div>
      <div class="text">
        <span class="span1">加</span>
        <span class="span2">载</span>
        <span class="span3">中</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
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
.loading {
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  .loader {
    width: 20em;
    height: 20em;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .text {
      background-image: linear-gradient(90deg, #f66, #f90);
      background-clip: text;
      font-size: 20px;
      animation: hue 5s linear infinite;
      -webkit-text-fill-color: transparent;
      span {
        line-height: 30px;
      }
    }
    .face {
      position: absolute;
      border-radius: 50%;
      border-style: solid;
      animation: animate 3s linear infinite;
      &:nth-child(1) {
        width: 100%;
        height: 100%;
        color: gold;
        border-color: currentColor transparent transparent currentColor;
        border-width: 0.2em 0.2em 0em 0em;
        --deg: -45deg;
        animation-direction: normal;
      }
      &:nth-child(2) {
        width: 70%;
        height: 70%;
        color: lime;
        border-color: currentColor currentColor transparent transparent;
        border-width: 0.2em 0em 0em 0.2em;
        --deg: -135deg;
        animation-direction: reverse;
      }
      .circle {
        position: absolute;
        width: 50%;
        height: 0.1em;
        top: 50%;
        left: 50%;
        background-color: transparent;
        transform: rotate(var(--deg));
        transform-origin: left;
        &::before {
          position: absolute;
          top: -0.5em;
          right: -0.5em;
          content: '';
          width: 1em;
          height: 1em;
          background-color: currentColor;
          border-radius: 50%;
          box-shadow: 0 0 2em, 0 0 4em, 0 0 6em, 0 0 8em, 0 0 10em,
            0 0 0 0.5em rgba(255, 255, 0, 0.1);
        }
      }
    }
  }
}
@keyframes hue {
  from {
    filter: hue-rotate(0);
  }
  to {
    filter: hue-rotate(-1turn);
  }
}

@keyframes animate {
  to {
    transform: rotate(1turn);
  }
}
</style>
