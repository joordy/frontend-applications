<script>
  import { countValues } from '/src/modules/helpers/utils'
  import { getMyData } from '/src/modules/helpers/getCityInfo'

  export let data
  export let width
  export let height

  const padding = { top: 20, right: 60, bottom: 75, left: 60 }
  const mapData = countValues(data)
  const uniqueCity = mapData.map((item) => item.name)

  async function workwithData(uniqueCity) {
    const blablabla = await getMyData(uniqueCity)
    console.log('blablabla', blablabla)
    return blablabla
  }

  workwithData(uniqueCity)
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  svg {
    width: 100%;
    margin-top: $margin-3;
    margin-bottom: $margin-8;
    background-color: white;
  }
</style>

<svg height={height + padding.top + padding.bottom}>
  <!-- map -->
</svg>
