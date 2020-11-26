<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    margin: $margin-4 0 $margin-10 0;

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
          &:hover {
            opacity: 0.5;
          }
        }
      }
    }
  }
</style>

<article>
  <h3>Disclaimer:</h3>

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
      Lege data kan voor vreemde resultaten zorgen, zoals een doorrijhoogte van
      1 meter en 60 centimeter.
    </li>
  </ul>
</article>
