<script>
  import Lines from '/src/components/organisms/Lines.svelte'
  import Map from '/src/components/organisms/Map.svelte'
  import { cleanMyData } from '/src/modules/cleanData'
</script>

<style lang="scss">
</style>

{#await cleanMyData()}
  <p>Loading...</p>
{:then data}
  <main>
    <Lines {data} />
    <Map {data} />
  </main>
{:catch error}
  <p>Something went wrong, please try again.</p>
  <p>{error.message}</p>
{/await}
