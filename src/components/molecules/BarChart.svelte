<script>
  import ToolTip from '/src/components/atoms/ToolTip.svelte'
  import AxisLeft from '/src/components/atoms/AxisLeft.svelte'
  import AxisBottom from '/src/components/atoms/AxisBottom.svelte'
  import { scaleLinear, max, pointer } from 'd3'

  // Exported values
  export let barData
  export let width
  export let height
  export let formValue

  // Graph values
  const xValue = 'name'
  const padding = { top: 20, right: 60, bottom: 75, left: 60 }
  let userData = barData.slice(0, 50)
  let toggleTooltip = false
  let tooltipData = {}

  // Reactive declerations
  // Set width of SVG
  $: graphWidth = width - 180

  // Maps the needed data into a new format, with only value and label send to chart.
  $: graphBars = userData.map((item) => {
    let graphValue = item[formValue]
    let layout = {
      label: item[xValue],
      value: graphValue == undefined ? 0 : parseFloat(graphValue),
    }
    return layout
  })

  // Sets X and Y scalings with D3
  $: xScale = scaleLinear()
    .domain([0, graphBars.length])
    .range([padding.left, width - padding.right])

  $: yScale = scaleLinear()
    .domain([0, max(graphBars, (data) => data.value)])
    .range([height - padding.bottom, padding.top])

  // Custom function which calculates 5 custom ticks, based on value of Y-Axis
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

  // Sets innerWidth of chart
  $: innerWidth = width - (padding.left + padding.right)

  // Calculates how width the bars should be
  $: barWidth = innerWidth / graphBars.length

  // Function to change the toggleTooltip to true, and pass in the exact data
  function showTooltip(event) {
    const index = this.getAttribute('data-index')
    const selectedBarData = barData[index]
    const [x, y] = pointer(event)
    // Set data.
    tooltipData = { selectedBarData, x, y }
    toggleTooltip = true
    console.log(pointer(event))
    console.log(index)
    console.log(selectedBarData)
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

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
  <g class="yAxis axis">
    {#each yAxisTicks() as yTick}
      <AxisLeft {yTick} {yScale} />
    {/each}
  </g>

  <g class="xAxis axis">
    {#each graphBars as { label }, index}
      <AxisBottom {index} {height} {barWidth} {xScale} {label} />
    {/each}
  </g>

  <g class="allBars">
    {#each graphBars as { value }, index}
      <rect
        class="graph__bar"
        x={xScale(index) + 2}
        y={yScale(value)}
        width={barWidth - 4}
        height={height - padding.bottom - yScale(value)}
        data-index={index}
        on:click={showTooltip}
      />
    {/each}
  </g>

  {#if toggleTooltip}
    <ToolTip
      barData={tooltipData.selectedBarData}
      x={tooltipData.x}
      y={tooltipData.y}
    />
  {/if}
</svg>
