<script>
  export let yTick
  export let yScale
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .tick {
    font-size: $graph-text;
    font-weight: $light;
    text {
      fill: $ui-soft-white;
      text-anchor: middle;
    }
  }
</style>

<g class="tick" transform="translate(30, {yScale(yTick)})">
  <text y="-4">{yTick}</text>
</g>
