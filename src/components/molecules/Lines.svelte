<script>
  export let data
  import OldLollyPop from '/src/components/atoms/OldLollyPop.svelte'

  // label statement for X-value:
  let value
  let optionList = Object.keys(data[0])
  optionList = optionList.filter(
    (item) =>
      item !== 'disAccess' &&
      item !== 'areaDesc' &&
      item !== 'areaID' &&
      item !== 'areaManagerID' &&
      item !== 'city' &&
      item !== 'lat' &&
      item !== 'long'
  )
</script>

<style lang="scss">
  h2 {
    font-weight: 300;
    span {
      font-weight: 900;
      font-size: 2rem;
      color: #03dac5;
    }
  }

  article {
    height: 30px;
    display: flex;
    justify-content: start;
    align-content: center;
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
    <span>{value}</span>
    van de parkeergarages in de grote steden?
  </h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
    voluptates assumenda placeat maiores modi rem, nemo enim sint iste sequi.
    Placeat sequi temporibus deserunt enim minima exercitationem quidem eaque
    tempora?
  </p>

  <article>
    <!-- <h3>Laat {value} zien</h3> -->
    <h3>Categorie:</h3>
    <select bind:value name="" id="">
      {#each optionList as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  </article>

  <OldLollyPop {data} {value} />
</section>
