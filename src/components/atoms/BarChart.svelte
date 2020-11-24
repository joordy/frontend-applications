<script>
  import { scaleLinear, max, ticks } from 'd3'

  // Exported values
  export let data
  export let width
  export let height
  export let formValue

  // Graph values
  const label = 'city'
  const padding = { top: 20, right: 20, bottom: 30, left: 40 }
  let graphData = data.slice(10, 35)

  $: graphWidth = width - 60
  $: graphBars = graphData.map((item) => {
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

  $: yTicks = () => {
    let [startPoint, highestPoint] = yScale.domain()
    const ticks = []
    ticks.push(
      startPoint,
      parseInt((highestPoint / 6) * 1),
      parseInt((highestPoint / 6) * 2),
      parseInt((highestPoint / 6) * 3),
      parseInt((highestPoint / 6) * 4),
      parseInt((highestPoint / 6) * 5),
      highestPoint
    )
    console.log(ticks)
    return ticks
  }

  $: innerWidth = width - (padding.left + padding.right)
  $: barWidth = innerWidth / graphBars.length
</script>

<style>
  .tick {
    font-family: Helvetica, Arial;
    font-size: 0.725em;
    font-weight: 200;
  }

  .tick text {
    fill: #aaa;
    text-anchor: start;
  }

  .tick.tick-0 line {
    stroke-dasharray: 0;
  }

  .x-axis .tick text {
    text-anchor: middle;
  }

  .bar-data {
    fill: #03dac5;
    stroke: none;
    opacity: 0.75;
    transition: all 200ms;
  }

  .bar-container {
    opacity: 0;
    fill: black;
    cursor: pointer;
    transition: all 200ms;
  }

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
      <g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
        <text y="-4">{tick}</text>
      </g>
    {/each}
  </g>

  <!-- x axis -->
  <g class="axis x-axis">
    {#each graphBars as { label }, i}
      <g class="tick" transform="translate({xScale(i)},{height})">
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
      <rect
        class="bar-container"
        width={barWidth - 4}
        x={xScale(i) + 2}
        height={height - padding.bottom}
        data-index={i}
      />
    {/each}
  </g>
</svg>
