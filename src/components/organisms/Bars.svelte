<script>
  import BarChart from '/src/components/molecules/BarChart.svelte'
  import { countValues, checkForValue } from '/src/modules/helpers/utils'

  // Exports of sizes & data
  export let data
  export let width

  // Place local Storage
  const barData = countValues(data) // Filters data
  localStorage.setItem('barData', JSON.stringify(barData))

  // Label statement & optionlist-filter for label
  let value
  let optionList = Object.keys(barData[0])
  optionList = optionList.filter(
    (item) => item !== 'name' && item !== 'chargingPoints'
  )
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    h2 {
      max-width: 21em;
      font-weight: $normal;
      span {
        font-weight: $extraBold;
        font-size: $h2-size;
        color: $ui-blue-green;
      }
    }
    p {
      max-width: 500px;
      margin-bottom: $margin-1;
      &:last-of-type {
        margin-bottom: $margin-3;
      }
    }
    article {
      height: 30px;
      display: flex;
      justify-content: start;
      align-content: center;
      margin-bottom: $margin-3;
      h3 {
        font-weight: $normal;
        font-size: $h4-size;
        line-height: 40px;
      }
      select {
        height: 40px;
        width: 220px;
        border: 1px solid $ui-blue-green;
        border-radius: 2px;
        margin: 0 $margin-1;
      }
      select,
      option {
        color: $ui-black;
      }
    }
  }
</style>

<section>
  <h2>
    Hoe zit het met de
    <span>{checkForValue(value)}</span>
    van de parkeergarages in de grote steden?
  </h2>
  <p>
    Het parkeren in de grote steden kan soms een lastige opgave zijn. Hoe zit
    het met de gemiddelde waarden per stad? Zitten hier absolute uitschieters
    tussen, en zo ja, waarin schieten zij uit?
  </p>

  <p>Hieronder kan je het gemiddelde {checkForValue(value)} bekijken.</p>
  <article>
    <h3>Categorie:</h3>

    <!-- Binds value of selectbox in component -->
    <select bind:value name="" id="">
      {#each optionList as option}
        <option value={option}>{checkForValue(option)}</option>
      {/each}
    </select>
  </article>

  <!-- Binds width of browser in component -->
  <div bind:clientWidth={width}>
    <BarChart {barData} {width} formValue={value} height={500} />
  </div>
</section>
