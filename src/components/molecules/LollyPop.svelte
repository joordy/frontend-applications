<script>
  import { select, scaleBand, scaleLinear, max, axisBottom, axisLeft } from 'd3'
  import { onMount } from 'svelte'
  export let data

  // set the ranges
  const width = 960
  const height = 480
  const margin = { top: 20, right: 20, bottom: 30, left: 40 }

  // Set data range
  const graphData = data.splice(0, 10)
  let x = []
  let y = []
  let bars = []

  // Wait for the element svg to mount so that we can call it with d3.
  onMount(() => {
    const axis = select('svg g')
    const name = 'carCapacity'
    const value = 'maxDriveThrough'

    bars = graphData.map((d) => {
      return {
        // ...d,
        name: d[name],
        value: Number(d[value]) || 0,
      }
    })

    // X & Y axis are really hard to make with HTML elements, and D3 is very good at making this. So let's not change anything about this :).
    x = scaleBand()
      .range([0, width])
      .padding(0.1)
      .domain(graphData.map((d) => d[name]))
    y = scaleLinear()
      .range([height, 0])
      .domain([0, max(graphData, (d) => d[value])])

    // add the x Axis
    axis
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(axisBottom(x))
      .classed('X-Axis', true)

    // add the y Axis
    axis.append('g').call(axisLeft(y)).classed('Y-Axis', true)
  })
</script>

<style>
</style>

<svg
  width={width + margin.left + margin.right}
  height={height + margin.top + margin.bottom}
>
  <g transform="translate({margin.left},{margin.top})">
    {#each bars as { name, value }}
      <rect
        class="bar"
        width={x.bandwidth()}
        height={height - y(value)}
        x={x(name)}
        y={y(value)}
        fill="#03dac5"
      />
    {:else}
      <p>creating bars..</p>
    {/each}
  </g>
</svg>
