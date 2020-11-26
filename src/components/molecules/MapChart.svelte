<script>
  import { geoMercator, geoPath } from 'd3'
  import { onMount } from 'svelte'
  import { feature } from 'topojson'

  // export let data
  export let width
  export let height

  const padding = { top: 30, right: 30, bottom: 30, left: 30 }

  // const projection = geoMercator().scale(6000).center([5.116667, 52.17])
  // const path = geoPath().projection(projection)
  // onMount(async function () {
  //   const map = await fetch(
  //     'https://cartomap.github.io/nl/wgs84/gemeente_2020.topojson'
  //   )

  //   const json = await map.json()
  //   const topoData = feature(json, json.objects.gemeente_2020)
  //   const land = {
  //     ...topoData,
  //     features: topoData.features,
  //   }
  //   mapData = land.features
  // })
</script>

<style lang="scss">
  svg {
    background-color: white;
  }
</style>

<svg
  width={width + padding.left + padding.right}
  height={height + padding.top + padding.bottom}
>
  <!-- map -->
</svg>
