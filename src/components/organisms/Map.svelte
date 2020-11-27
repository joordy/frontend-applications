<script>
  import MapChart from '/src/components/molecules/MapChart.svelte'

  // Exports of sizes & data
  export let data
  export let width

  // Options for selectbox
  let carOptions = ['personenauto', 'suv', 'bestelauto', 'personenauto']
  let value
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    margin: 40vh 0;
    h2 {
      font-weight: $normal;
      width: 625px;
      span {
        font-weight: $extraBold;
        font-size: $h2-size;
        color: $ui-blue-green;
        &:first-letter {
          text-transform: uppercase;
        }
      }
    }
    p {
      max-width: 500px;
    }
    article {
      height: 30px;
      display: flex;
      justify-content: start;
      align-content: center;
      margin: $margin-3 0;
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
    div {
      width: 100%;
      height: 695px;
      overflow: hidden;
      img {
        height: 100%;
        width: auto;
        transition: 0.3s ease;
        &:hover {
          transform: scale(1.4);
        }
      }
    }
  }
</style>

<section>
  <h2>
    Ik heb een
    <span>{value}</span>. Waar in Nederland kan ik deze auto parkeren?
  </h2>
  <p>Hoe zit het met het parkeren van mijn {value} in de stad?</p>
  <article>
    <h3>Type auto:</h3>
    <select bind:value name="" id="">
      {#each carOptions as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  </article>

  <div {width}>
    <img
      src="https://user-images.githubusercontent.com/48051912/100394991-6f1a4e80-303f-11eb-9031-84be94161f1d.png"
      alt=""
    />
  </div>

  <!-- <MapChart {data} {width} height={700} /> -->
</section>
