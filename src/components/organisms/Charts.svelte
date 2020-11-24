<script>
  import Lines from '/src/components/molecules/Lines.svelte'
  import Bars from '/src/components/molecules/Bars.svelte'
  import Map from '/src/components/molecules/Map.svelte'
  import { cleanMyData } from '/src/modules/cleanData'
  export let width
</script>

<style lang="scss">
  p {
    width: 70%;
    margin-bottom: 8rem;
  }
</style>

{#await cleanMyData()}
  <p style="text-align: center; width: 100%;">Loading...</p>
{:then data}
  <main bind:clientWidth={width}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam
      nesciunt atque doloribus illo temporibus numquam consequuntur. At id
      corporis consectetur vitae? Debitis, culpa quod molestias at excepturi
      ratione corrupti?Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Est laboriosam nesciunt atque doloribus illo temporibus numquam
      consequuntur. At id corporis consectetur vitae? Debitis, culpa quod
      molestias at excepturi ratione corrupti?Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Est laboriosam nesciunt atque doloribus illo
      temporibus numquam consequuntur. At id corporis consectetur vitae?
      Debitis, culpa quod molestias at excepturi ratione corrupti?
    </p>
    <Bars {data} {width} />
    <!-- <Lines {data} /> -->
    <Map {data} {width} />
  </main>
{:catch error}
  <p>Something went wrong, please try again.</p>
  <p>{error.message}</p>
{/await}
