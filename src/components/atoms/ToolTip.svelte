<script>
  //Export tooltip data
  export let barData
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

<!-- Tooltip with the data of the selected bar -->
<g class="information-widget" transform="translate({x}, {y})">
  <rect />
  <text x="5" y="18">
    <tspan>Parkeergarage: {barData.name}</tspan>
  </text>
  <text x="5" y="34">Aantal garages: {barData.totalGarage}</text>
  <text x="5" y="50">Capaciteit: {barData.totalCapacity}</text>
  <text x="5" y="66">Gem. doorrijhoogte: {barData.avgDriveThrough}</text>
  <text x="5" y="82">Aantal laadpalen: {barData.chargingPoints}</text>
</g>
