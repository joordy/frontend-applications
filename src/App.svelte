<script>
  import Header from '/src/components/templates/Header.svelte'
  import Charts from '/src/components/templates/Charts.svelte'
  import Footer from '/src/components/templates/Footer.svelte'
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
    color: #fefefe;
    background-color: #161616;
  }
  :global(html) {
    margin: 0px 200px;
  }
  :global(h1) {
    font-size: 3rem;
  }
  :global(h2) {
    font-size: 2rem;
  }
  :global(h3) {
    font-size: 1.75rem;
  }
</style>

<Header />
<Charts />
<Footer />
