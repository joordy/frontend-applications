<script>
  import LollyPop from '/src/components/molecules/LollyPop.svelte'
  export let data
  console.log(data)

  // import { status_message } from '/src/stores/store.js'

  let optionList = Object.keys(data[0])
  optionList = optionList.filter(
    (item) =>
      item !== 'disAccess' &&
      item !== 'areaDesc' &&
      item !== 'areaID' &&
      item !== 'areaManagerID' &&
      item !== 'lat' &&
      item !== 'long'
  )
  console.log(optionList)

  // status_message.set('hello')
</script>

<style lang="scss">
  section {
    div {
      select {
        color: black;
      }
      option {
        color: black;
      }
      input {
        color: black;
      }
      button {
        color: black;
      }
    }
    h2 {
      font-weight: 300;
      span {
        font-weight: 900;
        font-size: 2rem;
        color: #03dac5;
      }
    }
  }
</style>

<section>
  <h2>
    Hoe zit het met de
    <!-- <span>{$graphOneType}</span> -->
    van de parkeergarages in de grote steden?
  </h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
    voluptates assumenda placeat maiores modi rem, nemo enim sint iste sequi.
    Placeat sequi temporibus deserunt enim minima exercitationem quidem eaque
    tempora?
  </p>
  <div>
    <select name="" id="">
      {#each optionList as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
    <!-- <select id="selectBoxOne">
      <option value="capaciteit">capaciteit</option>
      <option value="laadpalen">laadpalen</option>
      <option value="doorrijhoogte">maximale doorrijhoogte</option>
    </select>
    <button on:click={getValue()}>submit</button> -->
  </div>
  <LollyPop {data} />
</section>
