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
    margin: 60vh 0;
    article {
      &:nth-of-type(1) {
        h2 {
          font-size: $h2-size;
          color: $ui-blue-green;
        }
        p {
          display: block;
          width: 500px;
          margin-bottom: $margin-2;
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
</style>

<section>
  <article>
    <h2>Conclusies omtrent de visualisaties</h2>

    <p>
      In de visualisatie zijn er een paar dingen die opvallen, uiteraard hebben
      Amsterdam en Rotterdam de meeste parkeergarages en plekken, maar ook is
      het nog relatief makkelijk om de auto daar te parkeren wat betreft de
      doorrijhoogte. In bijvoorbeeld Purmerend, Zeist en Zandvoort zijn de
      parkeergarages relatief laag. De hoogtes variëren tussen de 1.85 en 2
      meter hoog.
    </p>

    <p>
      In de beschikbare data zijn bijna 100.000 parkeerplaatsen beschikbaar,
      verdeeld over 355 locaties.
    </p>

    <p>
      Al met al komt het er op neer dat er dat een behoorlijk aantal
      parkeerplaatsen zijn die onder de twee meter zijn. Hierdoor is het
      lastiger om de personenbus overal in Nederland te parkeren.
    </p>

    <p />
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
