<script>
  import BarChart from '/src/components/organisms/BarChart.svelte'
  import { cleanMyData } from '/src/modules/cleanData'
</script>

<style>
</style>

{#await cleanMyData()}
  <!-- promise is pending -->
{:then data}
  <BarChart {data} />
{/await}
