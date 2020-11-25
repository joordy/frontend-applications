<script>
  import { scaleLinear, max } from 'd3'

  // Exported values
  export let graphData
  export let width
  export let height
  export let formValue

  // Graph values
  const label = 'name'
  const padding = { top: 20, right: 60, bottom: 75, left: 60 }
  let userData = graphData.slice(0, 50)

  // Reactive declerations
  $: graphWidth = width - 180
  $: graphBars = userData.map((item) => {
    let graphValue = item[formValue]
    let layout = {
      label: item[label],
      value: graphValue == undefined ? 0 : parseFloat(graphValue),
    }
    return layout
  })

  $: xScale = scaleLinear()
    .domain([0, graphBars.length])
    .range([padding.left, width - padding.right])

  $: yScale = scaleLinear()
    .domain([0, max(graphBars, (data) => data.value)])
    .range([height - padding.bottom, padding.top])

  $: yAxisTicks = () => {
    let [startPoint, highestPoint] = yScale.domain()
    const ticks = []
    ticks.push(
      parseInt(startPoint),
      parseInt((highestPoint / 4) * 1),
      parseInt((highestPoint / 4) * 2),
      parseInt((highestPoint / 4) * 3),
      parseInt(highestPoint)
    )
    return ticks
  }
  $: innerWidth = width - (padding.left + padding.right)
  $: barWidth = innerWidth / graphBars.length
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .tick {
    font-family: Helvetica, Arial;
    font-size: $graph-text;
    font-weight: $light;
  }

  .tick text {
    fill: #fefefe;
    text-anchor: start;
  }

  .tick.tick-0 line {
    stroke-dasharray: 0;
  }

  .yAxis .tick text {
    text-anchor: middle;
  }

  .xAxis .tick text {
    text-anchor: start;
    &::first-letter {
      text-transform: uppercase;
    }
  }

  .graph__bar {
    &:hover {
      opacity: 0.4;
      cursor: pointer;
    }
    fill: $ui-blue-green;
    stroke: none;
    opacity: 0.75;
    transition: all 300ms;
    rx: 2;
  }
</style>

<svg
  width={graphWidth + padding.left + padding.right}
  height={height + padding.top + padding.bottom}
>
  <!-- y axis -->
  <g class="axis yAxis">
    {#each yAxisTicks() as yTick}
      <g class="tick tick-{yTick}" transform="translate(30, {yScale(yTick)})">
        <text y="-4">{yTick}</text>
      </g>
    {/each}
  </g>

  <!-- x axis -->
  <g class="axis xAxis">
    {#each graphBars as { label }, index}
      <g
        class="tick"
        transform="translate({xScale(index)},{height - 65}), rotate(90)"
      >
        <text x={barWidth / 2} y="-4">{label}</text>
      </g>
    {/each}
  </g>

  <g class="bars">
    {#each graphBars as { value }, index}
      <!-- Bars for data -->
      <rect
        class="graph__bar"
        x={xScale(index) + 2}
        y={yScale(value)}
        width={barWidth - 4}
        height={height - padding.bottom - yScale(value)}
      />

      <!-- Bars for clickable -->
      <!-- <rect
        class="bar-container"
        width={barWidth - 4}
        x={xScale(i) + 2}
        height={height - padding.bottom}
        data-index={i}
      /> -->
    {/each}
  </g>
</svg>
