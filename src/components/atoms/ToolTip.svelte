<script>
  export let graphData
  export let x
  export let y
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  g {
    fill: white;
    rect {
      width: 240px;
      height: 92px;
      fill: white;
      rx: 4px;
    }
    text {
      font-size: $graph-text;
      fill: $ui-dark-grey;
      &:nth-of-type(1) {
        tspan {
          text-transform: uppercase;
          font-weight: $bold;
          font-size: $graph-text;
        }
      }
    }
  }
</style>

<g class="information-widget" transform="translate({x}, {y})">
  <rect />
  <text x="5" y="18">
    <tspan>Parkeergarage: {graphData.name}</tspan>
  </text>
  <text x="5" y="34">Aantal garages: {graphData.totalGarage}</text>
  <text x="5" y="50">Capaciteit: {graphData.totalCapacity}</text>
  <text x="5" y="66">Gem. doorrijhoogte: {graphData.avgDriveThrough}</text>
  <text x="5" y="82">Aantal laadpalen: {graphData.chargingPoints}</text>
</g>
