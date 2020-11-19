<script>
  import BarChart from '/src/components/organisms/BarChart.svelte'
  import { cleanMyData } from '/src/modules/cleanData'
</script>

<style>
  @import url('https://cors-anywhere.herokuapp.com/https://rsms.me/inter/inter.css');
  @supports (font-variation-settings: normal) {
    :global(*) {
      font-family: 'Inter var', sans-serif;
    }
  }
  :global(*) {
    font-family: 'Inter', sans-serif;
    color: white;
    background-color: black;
  }
  :global(h1) {
    font-size: 4rem;
  }
  :global(h2) {
    font-size: 3.25rem;
  }
  :global(h3) {
    font-size: 2.5rem;
  }
  :global(h4) {
    font-size: 1.75rem;
  }
  :global(h5) {
    font-size: 1.25rem;
  }
</style>

{#await cleanMyData()}
  <!-- promise is pending -->
{:then data}
  <BarChart {data} />
{/await}
