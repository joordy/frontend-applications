<script>
  import { countValues, countAllValues } from '/src/modules/helpers/utils'

  export let data

  const barData = countValues(data)
  const allValues = countAllValues(barData)
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    margin: $margin-12 0;
    display: flex;
    flex-wrap: wrap;
    article {
      height: 3rem;
      line-height: 3rem;
      width: 50%;
      display: flex;
      justify-content: start;
      align-items: middle;
      margin-bottom: $margin-2;
      h3 {
        font-size: $h3-size;
        font-weight: $semiBold;
        text-transform: uppercase;
      }
      p {
        font-size: $h2-size;
        font-weight: $extraBold;
        color: $ui-blue-green;
      }
      &:nth-of-type(1) p,
      &:nth-of-type(3) p {
        width: 9rem;
      }
      &:nth-of-type(2) p,
      &:nth-of-type(4) p {
        width: 6rem;
      }
    }
  }
</style>

<section>
  <article>
    <p>{allValues.totalCap}</p>

    <h3>Aantal plekken</h3>
  </article>
  <article>
    <p>{allValues.totalChargers}</p>

    <h3>Gemiddelde aantal laadpalen</h3>
  </article>
  <article>
    <p>{allValues.avgDriveThrough}</p>

    <h3>Gemiddelde doorrijhoogte</h3>
  </article>
  <article>
    <p>{allValues.totalGarage}</p>

    <h3>Totaal aantal garages*</h3>
  </article>
</section>
