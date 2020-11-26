<script>
  import Bars from '/src/components/organisms/Bars.svelte'
  import FunFacts from '/src/components/organisms/FunFacts.svelte'
  import Map from '/src/components/organisms/Map.svelte'
  import Footer from '/src/components/layouts/Footer.svelte'

  import { cleanMyData } from '/src/modules/cleanData'
  export let width
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  main {
    position: relative;
    animation: moveIn 1.2s;

    section {
      min-height: 75vh;
      p {
        font-size: $largeP-size;
        font-weight: $light;
        width: 70%;
        margin-bottom: $margin-1;
        span {
          font-size: $largeP-size;
          font-weight: $bold;
          color: $ui-blue-green;
        }
      }
    }
  }

  @keyframes moveIn {
    0% {
      margin-top: 80vh;
    }

    75% {
      margin-top: 10vh;
    }
    100% {
      margin-top: 0vh;
    }
  }
</style>

{#await cleanMyData()}
  <p style="text-align: center; width: 100%; margin-top: 14rem;">Loading...</p>
{:then data}
  <main bind:clientWidth={width}>
    <section>
      <p>
        Binnen Nederland heb je een tal van mogelijkheden waar je kan parkeren.
        Maar wat nou als je rekening moet houden met het feit dat je afhankelijk
        bent van een laadpaal, of gelimiteerd bent met de hoogte van je
        voertuig?
      </p>
      <p>
        De data visualisatie maakt gebruik van de opendata sets die beschikbaar
        zijn gesteld door de Rijksdienst voor het wegverkeer (RDW). Hierin is
        gebruik gemaakt van een select aantal garages waar alle informatie zoals
        locatie, capaciteit, doorrijhoogte en aantal laadpalen van beschikbaar
        is.
      </p>
      <p>
        In de visualisatie is te zien hoe het per stad geregeld is. Hierin wordt
        uitgegaan van het gemiddelde.
      </p>
      <!-- <p> -->
      <!-- <span>Disclaimer:</span>
      <ul>
        <li>
          De data waar niks van bekend is, is uit de dataset gefilterd. Zodat er
          een overzicht kan worden gegenereerd waarbij
        </li>
        <li />
      </ul> -->
      <!-- de data waar geen informatie van bekend is, trekt het gemiddelde omhoog
        of omlaag, of laat helemaal niks zien. De visualisaties zijn gebaseerd
        op de data die geschikbaar is gesteld. -->
      <!-- </p> -->
    </section>

    <Bars {data} {width} />
    <FunFacts {data} />
    <Map {data} {width} />
  </main>

  <Footer />
{:catch error}
  <div style="text-align: center; width: 100%; margin-top: 14rem;">
    <p>Something went wrong, please try again.</p>
    <p>{error.message}</p>
  </div>
{/await}
