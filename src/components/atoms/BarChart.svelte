<script>
  import { scaleLinear, max } from 'd3'

  // Exported values
  export let graphData
  export let width
  export let height
  export let formValue

  // Graph values
  const label = 'name'
  const padding = { top: 20, right: 20, bottom: 75, left: 60 }
  let userData = graphData.slice(0, 50)

  // Reactive declerations
  $: graphWidth = width - 60
  $: graphBars = userData.map((item) => {
    let graphValue = item[formValue]
    let layout = {
      label: item[label],
      value: graphValue == undefined ? 0 : parseFloat(graphValue),
    }
    return layout
  })
  $: innerWidth = width - (padding.left + padding.right)
  $: barWidth = innerWidth / graphBars.length

  $: xScale = scaleLinear()
    .domain([0, graphBars.length])
    .range([padding.left, width - padding.right])

  $: yScale = scaleLinear()
    .domain([0, max(graphBars, (data) => data.value)])
    .range([height - padding.bottom, padding.top])

  $: yTicks = () => {
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
</script>

<style>
  .tick {
    font-family: Helvetica, Arial;
    font-size: 0.725em;
    font-weight: 200;
  }

  .tick text {
    fill: #fefefe;
    text-anchor: start;
  }

  .tick.tick-0 line {
    stroke-dasharray: 0;
  }

  .y-axis .tick text {
    text-anchor: middle;
  }

  .x-axis .tick text {
    text-anchor: start;
  }

  .bar-data {
    fill: #03dac5;
    stroke: none;
    opacity: 0.75;
    transition: all 300ms;
    rx: 2;
  }

  /* .bar-container {
    opacity: 0;
    fill: black;
    cursor: pointer;
    transition: all 300ms;
  } */

  .bar-container:hover {
    opacity: 0.1;
  }
</style>

<svg
  width={graphWidth + padding.left + padding.right}
  height={height + padding.top + padding.bottom}
>
  <!-- y axis -->
  <g class="axis y-axis">
    {#each yTicks() as tick}
      <g class="tick tick-{tick}" transform="translate(30, {yScale(tick)})">
        <text y="-4">{tick}</text>
      </g>
    {/each}
  </g>

  <!-- x axis -->
  <g class="axis x-axis">
    {#each graphBars as { label }, i}
      <g
        class="tick"
        transform="translate({xScale(i)},{height - 65}), rotate(90)"
      >
        <text x={barWidth / 2} y="-4">{label}</text>
      </g>
    {/each}
  </g>

  <g class="bars">
    {#each graphBars as { value }, i}
      <!-- Bars for data -->
      <rect
        class="bar-data"
        x={xScale(i) + 2}
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
