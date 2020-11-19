<script>
  import BarChart from '/src/components/organisms/BarChart.svelte'
  import MapChart from '/src/components/organisms/MapChart.svelte'
  import { cleanMyData } from '/src/modules/cleanData'
</script>

<style>
</style>

{#await cleanMyData()}
  <p>Loading...</p>
{:then data}
  <main>
    <BarChart {data} />
    <MapChart {data} />
  </main>
{:catch error}
  <p>Something went wrong, please try again.</p>
  <h1>{error.message}</h1>
{/await}
