<script>
  import BarChart from '/src/components/atoms/BarChart.svelte'
  import { countValues, checkForValue } from '/src/modules/helpers/utils'

  export let data
  export let width

  const graphData = countValues(data)
  // console.log(data)
  console.log('graphData', graphData)

  // // label statement for X-value:
  let value
  let optionList = Object.keys(graphData[0])
  optionList = optionList.filter((item) => item !== 'name')
</script>

<style lang="scss">
  h2 {
    max-width: 21em;
    font-weight: 300;
    span {
      font-weight: 900;
      font-size: 2rem;
      color: #03dac5;
    }
  }
  p {
    max-width: 500px;
    margin-bottom: 1rem;
    &:last-of-type {
      margin-bottom: 3rem;
    }
  }
  article {
    height: 30px;
    display: flex;
    justify-content: start;
    align-content: center;
    margin-bottom: 3rem;
    h3 {
      font-weight: 300;
      font-size: 1.25rem;
    }
    select {
      margin: 0 1rem;
    }
    select,
    option {
      color: black;
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
    <select bind:value name="" id="">
      {#each optionList as option}
        <option value={option}>{checkForValue(option)}</option>
      {/each}
    </select>
  </article>

  <div bind:clientWidth={width}>
    <BarChart {graphData} {width} formValue={value} height={600} />
  </div>
</section>
