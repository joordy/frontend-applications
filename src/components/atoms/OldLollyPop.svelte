<script>
  import { select, scaleBand, scaleLinear, max, axisBottom, axisLeft } from 'd3'
  import { onMount } from 'svelte'
  export let data
  export let value
  $: console.log(value)

  // set the ranges
  const width = 960
  const height = 580
  const margin = { top: 20, right: 20, bottom: 30, left: 40 }
  const innerWidth = width - margin.right - margin.left
  const innerHeight = height - margin.top - margin.bottom

  // Set data range
  const graphData = data.splice(20, 25)
  let x = []
  let y = []
  let bars = []

  onMount(() => {
    const axis = select('svg g')
    const name = 'areaDesc'
    const graphValue = 'carCapacity'

    bars = graphData.map((d) => {
      return {
        // ...d,
        name: d[name],
        graphValue: Number(d[graphValue]) || 0,
      }
    })

    y = scaleBand()
      .domain(graphData.map((item) => item[name]))
      .rangeRound([0, height])
      .padding(0.1) // .range([0, height])

    x = scaleLinear()
      .domain([0, max(graphData, (item) => item[graphValue])])
      .rangeRound([0, width])
      .nice() // .range([0, width])

    // axis
    //   .append('g')
    //   .attr('transform', 'translate(0,' + height + ')')
    //   .call(axisBottom(x))
    //   .classed('X-Axis', true)

    // axis.append('g').call(axisLeft(y)).classed('Y-Axis', true)
  })
</script>

<style>
</style>

<svg
  width={width + margin.left + margin.right}
  height={height + margin.top + margin.bottom}
>
  <g transform="translate({margin.left},{margin.top})">
    {#each bars as { name, graphValue }}
      <rect
        class="bar"
        height={y.bandwidth()}
        width={width - x(graphValue)}
        x={0}
        y={y(name)}
        fill="#03dac5"
      />
    {:else}
      <p>creating bars..</p>
    {/each}
  </g>
</svg>
