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
  :global(header, main) {
    width: 1040px;
    margin: 0 auto;
    /* margin: 0px 200px; */
  }
</style>

<Header />
<Charts />
<Footer />
