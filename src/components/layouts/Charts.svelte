<script>
  import Bars from '/src/components/organisms/Bars.svelte'
  import FunFacts from '/src/components/organisms/FunFacts.svelte'
  import Map from '/src/components/organisms/Map.svelte'
  import Disclaimer from '/src/components/organisms/Disclaimer.svelte'
  import Footer from '/src/components/layouts/Footer.svelte'

  // Imports data to use in application
  import { cleanMyData } from '/src/modules/cleanData'

  // Exports size
  export let width
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  main {
    position: relative;
    animation: moveIn 1s;
    section {
      min-height: 75vh;
      p {
        font-size: $largeP-size;
        font-weight: $light;
        width: 70%;
        margin-bottom: $margin-2;
        a {
          color: $ui-blue-green;
          text-decoration: none;
          font-weight: $bold;
          &:hover {
            opacity: 0.5;
          }
        }
      }
    }
  }

  @keyframes moveIn {
    0% {
      margin-top: 80vh;
    }
    100% {
      margin-top: 0vh;
    }
  }
</style>

<!-- Waits till data is loaded, otherwise you see loading screen. -->
{#await cleanMyData()}
  <p style="text-align: center; width: 100%; margin-top: 14rem;">Loading...</p>
{:then data}
  <main bind:clientWidth={width}>
    <section>
      <article>
        <p>
          Binnen Nederland zijn er een tal van mogelijkheden waar je kan
          parkeren. Maar wat nou als je afhankelijk bent van een laadpaal, of
          gelimiteerd bent door de hoogte van je voertuig? Of simpelweg omdat er
          te weinig parkeerplekken beschikbaar zijn voor alle auto's in ons
          land.
        </p>
        <p>
          Deze datavisualisatie maakt gebruik van de open datasetsdie
          beschikbaar zijn gesteld door de Rijksdienst voor het wegverkeer
          <a href="https://www.rdwdata.nl/" target="_blank">(RDW)</a>. Hierin
          heb ik gebruik gemaakt van een select aantal garages waar alle
          informatie omtrent locatie, capaciteit, doorrijhoogte en aantal
          laadpalen voor elektrische auto's beschikbaar van is.
        </p>
        <p>
          In de visualisaties is er te zien hoe dit per stad geregeld is. Welke
          stad heeft het goed voor elkaar, en welke niet? Er wordt uitgegaan van
          het gemiddelde, uiteraard heeft iedere stad wel een uitspringer er
          tussen zitten. Vandaar dat er een beter overzicht wordt geschetst
          wanneer er gebruik wordt gemaakt van de gemiddelde waardes.
        </p>
      </article>
    </section>

    <Bars {data} {width} />
    <Map {data} {width} />
    <FunFacts {data} />
    <Disclaimer {data} />
  </main>

  <Footer />
{:catch error}
  <div style="text-align: center; width: 100%; margin-top: 14rem;">
    <p>Something went wrong, please try again.</p>
    <p>{error.message}</p>
  </div>
{/await}
