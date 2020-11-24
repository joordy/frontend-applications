<script>
  import Home from '/src/components/templates/Home.svelte'
  let width
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
  }
  :global(*) {
    color: #fefefe;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  :global(html) {
    background-color: #292929;
  }
  :global(body) {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  :global(section) {
    margin-bottom: 3rem;
  }
  :global(h1) {
    font-size: 3rem;
    margin-bottom: 2rem;
    font-weight: 700;
  }
  :global(h2) {
    font-size: 2rem;
    margin-bottom: 2rem;
    width: 21em;
  }
  :global(h3) {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
  :global(p) {
    width: 400px;
    margin-bottom: 2rem;
  }
</style>

<Home bind:clientWidth={width} />
