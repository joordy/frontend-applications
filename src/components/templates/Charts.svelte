<script>
  import Lines from '/src/components/organisms/Lines.svelte'
  import Map from '/src/components/organisms/Map.svelte'
  import { cleanMyData } from '/src/modules/cleanData'
</script>

<style lang="scss">
  p {
    width: 70%;
    margin-bottom: 8rem;
  }
</style>

{#await cleanMyData()}
  <p>Loading...</p>
{:then data}
  <main>
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
    <Lines {data} />
    <Map {data} />
  </main>
{:catch error}
  <p>Something went wrong, please try again.</p>
  <p>{error.message}</p>
{/await}
