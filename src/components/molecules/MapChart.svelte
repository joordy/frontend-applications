<script>
  import { onMount } from 'svelte'
  import { feature } from 'topojson' // import * as d3 from 'd3'
  import { geoAlbers, geoPath } from 'd3-geo'
  export let data
  console.log('hi')
  console.log(data)

  let graphData = data
  const projection = geoAlbers()
  const path = geoPath().projection(projection)
  // set the ranges
  const width = 960
  const height = 560
  const margin = { top: 20, right: 20, bottom: 30, left: 40 }

  onMount(async () => {
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/https://gist.githubusercontent.com/rveciana/a2a1c21ca1c71cd3ec116cc911e5fce9/raw/79564dfa2c56745ebd62f5655a6cc19d2cffa1ea/us.json'
    )
    const json = await response.json()
    const land = feature(json, json.objects.land)
    graphData = path(land)
  })
</script>

<style>
  svg {
    background-color: rgb(255, 255, 255, 0.01);
  }
  .border {
    stroke: #444444;
    fill: #cccccc;
  }
</style>

<svg
  width={width + margin.left + margin.right}
  height={height + margin.top + margin.bottom}
>
  <path d={graphData} class="border" />
</svg>
