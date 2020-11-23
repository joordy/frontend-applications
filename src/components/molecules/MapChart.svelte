<script>
  import {
    select,
    geoPath,
    geoMercator,
    zoom,
    zoomIdentity,
    zoomTransform,
    pointer,
  } from 'd3'
  import { feature } from 'topojson'
  import { getTopo } from '/src/modules/helpers/utils'
  const url = 'https://cartomap.github.io/nl/wgs84/gemeente_2020.topojson'
  const width = 960
  const height = 560
  const margin = { top: 20, right: 20, bottom: 30, left: 40 }

  // getTopo(url).then((data) => {
  //   const path = geoPath()
  //   const d3zoom = zoom().scaleExtent([1, 8]).on('zoom', zoomed)
  //   const width = 975
  //   const height = 610
  //   const svg = select('.map')
  //     .attr('viewBox', [0, 0, width, height])
  //     .on('click', reset)
  //   const g = svg.append('g')
  //   const projection = geoMercator().scale(6000).center([5.116667, 52.17])
  //   // eslint-disable-next-line no-unused-vars
  //   const pathGenerator = path.projection(projection)
  //   const gemeentes = g
  //     .append('g')
  //     .attr('fill', '#444')
  //     .attr('cursor', 'pointer')
  //     .selectAll('path')
  //     .data(feature(data, data.objects.gemeente_2020).features)
  //     .join('path')
  //     .on('click', clicked)
  //     .attr('d', path)
  //   gemeentes.append('title').text((d) => `${d.properties.statnaam}`)
  //   svg.call(d3zoom)
  //   function reset() {
  //     gemeentes.transition().style('fill', null)
  //     svg
  //       .transition()
  //       .duration(750)
  //       .call(
  //         d3zoom.transform,
  //         zoomIdentity,
  //         zoomTransform(svg.node()).invert([width / 2, height / 2])
  //       )
  //   }
  //   function clicked(event, d) {
  //     const [[x0, y0], [x1, y1]] = path.bounds(d)
  //     event.stopPropagation()
  //     gemeentes.transition().style('fill', null)
  //     select(this).transition().style('fill', 'rgb(60,179,113)')
  //     svg
  //       .transition()
  //       .duration(750)
  //       .call(
  //         d3zoom.transform,
  //         zoomIdentity
  //           .translate(width / 2, height / 2)
  //           .scale(
  //             Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height))
  //           )
  //           .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
  //         pointer(event, svg.node())
  //       )
  //   }
  //   function zoomed(event) {
  //     const { transform } = event
  //     g.attr('transform', transform)
  //     g.attr('stroke-width', 1 / transform.k)
  //   }
  // })
</script>

<svg
  class="map"
  width={width + margin.left + margin.right}
  height={height + margin.top + margin.bottom}
/>
