<script>
  import Header from '/src/components/layouts/Header.svelte'
  import Charts from '/src/components/layouts/Charts.svelte'
  export let width
</script>

<Header />
<Charts bind:clientWidth={width} />
