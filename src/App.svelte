<script>
  import Home from '/src/components/templates/Home.svelte'
  let width
</script>

<style>
  @import 'src/styles/index.scss';
</style>

<!-- Sends clientWidth further into components as prop. -->
<Home bind:clientWidth={width} />
