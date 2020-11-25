<script>
  import MapChart from '/src/components/atoms/MapChart.svelte'
  export let data
  export let width
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    h2 {
      font-weight: $normal;
      span {
        font-weight: $extraBold;
        font-size: $h2-size;
        color: $ui-blue-green;
      }
    }
    p {
      max-width: 500px;
    }
  }
</style>

<section>
  <h2>
    Ik heb een
    <span>personenauto</span>. Waar in Nederland kan ik deze auto parkeren?
  </h2>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, iusto
    quibusdam? Debitis, laboriosam soluta incidunt, neque quaerat mollitia
    tempora veniam odit deleniti quo animi dolores quibusdam earum tempore
    itaque? Non.
  </p>
  <MapChart {data} {width} />
</section>
