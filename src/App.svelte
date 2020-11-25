<script>
  import Home from '/src/components/templates/Home.svelte'
  let width
</script>

<style>
  @import 'src/styles/index.scss';
</style>

<Home bind:clientWidth={width} />
