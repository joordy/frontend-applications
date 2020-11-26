<script>
  import { countValues, countAllValues } from '/src/modules/helpers/utils'
  // Exports of data
  export let data

  // Sums all the values up to make totals
  const barData = countValues(data)
  const allValues = countAllValues(barData)
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    margin: $margin-12 0;
    article {
      &:nth-of-type(1) {
        h2 {
          font-size: $h2-size;
        }
        p {
          display: block;
          width: 500px;
        }
      }
      &:nth-of-type(2) {
        display: flex;
        flex-wrap: wrap;
        margin: $margin-4 0;
        div {
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
            width: 9rem;
          }
          &:nth-of-type(2) p,
          &:nth-of-type(4) p {
            width: 6rem;
          }
        }
      }
    }
  }

  // article {
  //   height: 3rem;
  //   line-height: 3rem;
  //   width: 50%;
  //   display: flex;
  //   justify-content: start;
  //   align-items: middle;
  //   margin-bottom: $margin-2;
  //   h3 {
  //     font-size: $h3-size;
  //     font-weight: $semiBold;
  //     text-transform: uppercase;
  //   }
  //   p {
  //     font-size: $h2-size;
  //     font-weight: $extraBold;
  //     color: $ui-blue-green;
  //     width: 9rem;
  //   }
  //   &:nth-of-type(2) p,
  //   &:nth-of-type(4) p {
  //     width: 6rem;
  //   }
</style>

<section>
  <article>
    <h2>Interessante bevindingen:</h2>

    <p>
      In de visualisaties zijn er een paar dingen die opvallen, uiteraard hebben
      Amsterdam en Rotterdam de meeste parkeerplekken, maar ook is het
      makkelijker om je elektrische auto op te laden in een parkeergarage in
      Rotterdam. dan in Amsterdam.
    </p>
  </article>

  <article>
    <div>
      <p>{allValues.totalCap}</p>
      <h3>Aantal plekken</h3>
    </div>
    <div>
      <p>{allValues.totalChargers}</p>

      <h3>aantal laadpalen</h3>
    </div>
    <div>
      <p>{allValues.avgDriveThrough}</p>

      <h3>Gemiddelde doorrijhoogte</h3>
    </div>
    <div>
      <p>{allValues.totalGarage}</p>

      <h3>Totaal aantal garages*</h3>
    </div>
  </article>

  <article />
</section>
