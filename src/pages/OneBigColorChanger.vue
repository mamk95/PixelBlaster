<template>
  <div id="one-big-color-changer" class="one-big-color-changer"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class OneBigColorChanger extends Vue {
  readonly colors = ["red", "green", "blue"];
  colorIndex = 0;

  mounted() {
    document.documentElement.requestFullscreen();
    this.startColorChangingInterval();
  }

  startColorChangingInterval(): void {
    const colorDiv = document.getElementById("one-big-color-changer");
    if (colorDiv !== null) {
      setInterval(() => {
        colorDiv.style.backgroundColor = this.nextCssColor();
      }, 1000);
    }
  }

  nextCssColor(): string {
    return this.colors[this.colorIndex++ % this.colors.length];
  }
}
</script>

<style scoped lang="scss">
.one-big-color-changer {
  height: 100vh;
  width: 100vw;
}
</style>
