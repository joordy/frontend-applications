<script>
  export let index
  export let height
  export let barWidth
  export let xScale
  export let label
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .tick {
    font-size: $graph-text;
    font-weight: $light;
    text {
      fill: $ui-soft-white;
      text-anchor: start;
    }
  }
</style>

<g
  class="tick"
  transform="translate({xScale(index)}, {height - 65}), rotate(90)"
>
  <text x={barWidth / 2} y="-3">{label}</text>
</g>
