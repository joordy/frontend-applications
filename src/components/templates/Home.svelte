<script>
  import Header from '/src/components/organisms/Header.svelte'
  import Charts from '/src/components/organisms/Charts.svelte'
  export let width
</script>

<Header />
<Charts bind:clientWidth={width} />
