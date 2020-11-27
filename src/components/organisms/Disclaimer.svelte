<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    margin: 40vh 0;

    div {
      margin-bottom: $margin-5;
      h3 {
        font-size: $h3-size;
        font-weight: $bold;
        color: $ui-blue-green;
      }
      ul {
        list-style: none;
        li {
          margin-bottom: $margin-1;
          a {
            color: $ui-blue-green;
            text-decoration: none;
            font-weight: $bold;
            margin-right: $margin-1;
            &:hover {
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
</style>

<article>
  <div>
    <h3>Disclaimer</h3>

    <ul>
      <li>
        <span>*</span>
        De visualisaties zijn gebaseerd op de bestaande data van het
        <a href="https://www.rdwdata.nl/" target="_blank">RDW</a>.
      </li>
      <li>
        <span>*</span>
        De datasets zijn gekoppeld aan elkaar, en zijn alleen meegenomen als er
        75% van de informatie bekend was.
      </li>
      <li>
        <span>*</span>
        Lege data kan voor vreemde resultaten zorgen, zoals een doorrijhoogte
        van 1 meter en 60 centimeter.
      </li>
    </ul>
  </div>

  <div>
    <h3>Data sources</h3>

    <ul>
      <li>
        RDW Data
        <a
          href="https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34"
          target="_blank"
        >GEO Parkeer Garages</a>
      </li>
      <li>
        RDW Data
        <a
          href="https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s"
          target="_blank"
        >Open Data Parkeren: SPECIFICATIES PARKEERGEBIED</a>
      </li>
    </ul>
  </div>

  <div>
    <h3>Code Sources</h3>
    <ul>
      <li>
        <a
          href="https://svelte.dev/"
          target="_blank"
        >Svelte.dev</a>Cybernetically enhanced web apps
      </li>
      <li>
        <a href="https://d3js.org/" target="_blank">D3js</a>Data Driven
        Documents
      </li>
    </ul>
  </div>
</article>
