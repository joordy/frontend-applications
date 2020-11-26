<script>
  // import { countValues } from '/src/modules/helpers/utils'
  // import { getMyData } from '/src/modules/helpers/getCityInfo'

  // export let data
  // export let width
  // const mapData = countValues(data)
  // const uniqueCity = mapData.map((item) => item.name)

  // async function workwithData(uniqueCity) {
  //   const blablabla = await getMyData(uniqueCity)
  //   return blablabla
  // }

  // workwithData(uniqueCity)

  // import { onMount } from 'svelte'
  // import { select, json, geoPath, geoNaturalEarth1, zoom } from 'd3'
  // import { feature } from 'topojson'

  // const group = select('.holland')

  // const projection = geoNaturalEarth1()
  // const pathGenerator = geoPath().projection(projection)

  // group
  //   .append('path')
  //   .attr('class', 'sphere')
  //   .attr('d', pathGenerator({ type: 'Sphere' }))

  // json('https://unpkg.com/world-atlas@1.1.4/world/110m.json').then((data) => {
  //   const countries = feature(data, data.objects.countries)
  //   group
  //     .selectAll('path')
  //     .data(countries.features)
  //     .enter()
  //     .append('path')
  //     .attr('class', 'country')
  //     .attr('d', pathGenerator)
  // })
  export let height

  const padding = { top: 20, right: 60, bottom: 75, left: 60 }
  // import * as d3 from 'd3'
  // import { onMount } from 'svelte'
  // import { feature } from 'topojson'

  // const svg = d3.select('#map')
  // console.log(svg)

  // const projection = d3.geoMercator().scale(5000).center([5.116667, 52.17])
  // const pathGenerator = d3.geoPath().projection(projection)

  // function drawMap() {
  //   d3.json('https://cartomap.github.io/nl/wgs84/gemeente_2020.topojson').then(
  //     (data) => {
  //       const gemeentes = feature(data, data.objects.gemeente_2020)

  //       svg
  //         .selectAll('path')
  //         .data(gemeentes.features)
  //         .enter()
  //         .append('path')
  //         .attr('d', pathGenerator)
  //         .append('title')
  //         .text((d) => `${d.properties.statnaam}, ID:${d.id}`)
  //     }
  //   )
  // }

  // drawMap()
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  svg {
    width: 100%;
    margin-top: $margin-3;
    margin-bottom: $margin-8;
    background-color: white;
  }
  path {
    fill: lightblue;
    stroke: black;
    stroke-opacity: 0.4;
  }

  path:hover {
    fill: blue;
  }

  svg g {
    width: 600%;
    height: 600%;
  }
</style>

<section id="map">
  <svg id="map" height={height + padding.top + padding.bottom}>
    <!-- map -->
  </svg>
</section>
