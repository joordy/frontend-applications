<script>
  import MapChart from '/src/components/molecules/MapChart.svelte'
  import { countValues } from '/src/modules/helpers/utils'
  import { getMyData } from '/src/modules/helpers/getCityInfo'
  import { onMount } from 'svelte'
  export let data
  export let width

  const mapData = countValues(data)
  const uniqueCity = mapData.map((item) => item.name)
  let fetchedData = getMyData(uniqueCity).then()

  // onMount(async () => {
  //   fetchedData = await getMyData(uniqueCity)
  // })
  console.log(fetchedData)
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
  <MapChart {data} {width} height={700} />
</section>
