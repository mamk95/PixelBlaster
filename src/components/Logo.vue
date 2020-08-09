<template>
  <div class="logo">
    <div class="logo-relative">
      <div class="grid-container">
        <div class="item1"></div>
        <div class="item2"></div>
        <div class="item3"></div>
        <div class="item4"></div>
      </div>
      <div class="mover"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Logo extends Vue {}
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  margin: auto;
}
.logo-relative {
  position: relative;
}
.grid-container {
  top: 0;
  left: 0;
  display: grid;
  grid: auto auto / auto auto;
  grid-gap: 10px;
  width: 150px;
  height: 150px;
  > .item1 {
    animation: logo-color-animation-item1-3 12s steps(1, start) 0s infinite;
  }
  > .item2 {
    animation: logo-color-animation-item2 12s steps(1, start) 1s infinite;
  }
  > .item4 {
    animation: logo-color-animation-item4 12s steps(1, start) 2s infinite;
  }
  > .item3 {
    animation: logo-color-animation-item1-3 12s steps(1, start) 3s infinite;
  }
}
.mover {
  width: 70px;
  height: 70px;
  background-color: red;
  position: absolute;
  animation: mover 12s ease-in-out 0s infinite;
  top: 0;
  left: 0;
}

@keyframes logo-color-animation-item1-3 {
  0% {
    background-color: white;
  }
  33% {
    background-color: red;
  }
  66% {
    background-color: green;
  }
  100% {
    background-color: blue;
  }
}

@keyframes logo-color-animation-item2 {
  0% {
    background-color: white;
  }
  33% {
    background-color: green;
  }
  66% {
    background-color: blue;
  }
  100% {
    background-color: red;
  }
}

@keyframes logo-color-animation-item4 {
  0% {
    background-color: white;
  }
  33% {
    background-color: blue;
  }
  66% {
    background-color: red;
  }
  100% {
    background-color: green;
  }
}

@keyframes mover {
  0% {
    background-color: red;
    left: 0;
    top: 0;
  }
  8.3% {
    background-color: green;
    left: 80px;
    top: 0;
  }
  16.6% {
    background-color: blue;
    left: 80px;
    top: 80px;
  }
  24.9% {
    background-color: red;
    left: 0;
    top: 80px;
  }
  33.2% {
    background-color: green;
    left: 0;
    top: 0;
  }
  41.5% {
    background-color: blue;
    left: 80px;
    top: 0;
  }
  49.8% {
    background-color: red;
    left: 80px;
    top: 80px;
  }
  58.1% {
    background-color: green;
    left: 0;
    top: 80px;
  }
  66.4% {
    background-color: blue;
    left: 0;
    top: 0;
  }
  74.7% {
    background-color: red;
    left: 80px;
    top: 0;
  }
  83% {
    background-color: green;
    left: 80px;
    top: 80px;
  }
  91.3% {
    background-color: blue;
    left: 0;
    top: 80px;
  }
  99.6% {
    background-color: red;
    left: 0;
    top: 0;
  }
}
</style>
