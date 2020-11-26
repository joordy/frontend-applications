<script>
  import Header from '/src/components/layouts/Header.svelte'
  import Charts from '/src/components/layouts/Charts.svelte'
  export let width
</script>

<Header />
<!-- Sends clientWidth further into components as prop. -->
<Charts bind:clientWidth={width} />
