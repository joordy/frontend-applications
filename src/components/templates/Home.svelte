<script>
  import Header from '/src/components/organisms/Header.svelte'
  import Charts from '/src/components/organisms/Charts.svelte'
  import Footer from '/src/components/organisms/Footer.svelte'
  export let width
</script>

<Header />
<Charts bind:clientWidth={width} />
<Footer />
