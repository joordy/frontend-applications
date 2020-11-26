# :chart: Frontend Applications

![D3  Graph](https://user-images.githubusercontent.com/48051912/100396104-139e8f80-3044-11eb-94c4-fb0293aedc24.gif)
![De Volkskrant](https://camo.githubusercontent.com/dc694b1e340d04b2def00a1188b49fef8fd3ff1c8888a9b2e39cf98ae2baa965/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f622f62332f566f6c6b736b72616e742e7376672f3132303070782d566f6c6b736b72616e742e7376672e706e67)

The Dutch newspaper _De Volkskrant_ asked us to look for some interesting insights of the subject The car in the city. To get the insights, we can use the datasets of the RDW. Inside the datasets of the RDW, we can look for interesting insights and patterns about parking spaces, all the cars in Holland and other vehicle data. The data describes where all the parking spots are, who owned them, and which cars are registered. During the past 6 weeks we will worked on a datavisualization made with Svelte, D3 library and SVG's. The redactors of the Volkskrant can use our work for a possible article in their newspaper.

## :page_facing_up: Data story

My data story describes how the parking garages are nowadays. Cars are getting bigger and bigger, do they still fit in all the garages? Or do you need to be aware of that as a car-driver.

For the data story I've used two datasets from the RDW, and combined them.

You can visit my data story [here](https://fa-jorrr.netlify.app)

---

## :flashlight: Concept

### Research question

- The cars are getting bigger and bigger, do they still fit in parking garages in the big cities of the Netherlands? Or do they have other problems

### Sub questions

- How many parking garages does a city has?
- How is the parking capacity divided
- What is the maximum Drive-Through height, is it accessible for everyone?

### Assumptions

- **Location** I expect that bigger cities has more spots than smaller towns
- **Capacity**: I expect that parking areas have more capacity in the big cities.
- **Maximum Vehicle Height**: I expect that in small towns, there are larger parking areas so people can ride in with bigger cars..
- **Disabled access**: I expect that 25% of all the parking area has access for disabled people.
- **Charging points**: I expect that every parking area has at least one charging point.

---

## :rocket: Get my code

### Clone the repository

```bash
  git clone https://github.com/joordy/frontend-applications.git
```

### Navigate to the repository and nstall the packages

```bash
  npm install
```

### Start local dev environment

```bash
  npm run dev
```

### Build export

```bash
npm run build
```

---

## :key: Deployment link

[Check it out](https://fa-jorrr.netlify.app/)

---

## :mag: Sources

#### Data sources:

- RDW. (2020, october 29). GEO Parkeer Garages | Open Data | RDW. Retrieved on october 22 2020, from https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34
- RDW. (2020, october 29). Open Data Parkeren: SPECIFICATIES PARKEERGEBIED | Open Data | RDW. Retrieved on october 23 2020, van https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s

#### Code Sources:

- MDN. (2020, September 28). Spread syntax (...). Retrieved 18 November 2020, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- MDN. (2020, October 8). Array.prototype.forEach(). MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
- MDN. (2020b, November 23). Array.prototype.reduce(). MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
- MDN. (2020a, September 2). Window.localStorage. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- Svelte. (n.d.). Svelte tutorial. Retrieved November 16, 2020, from https://svelte.dev/tutorial/basics
- Svelte. (n.d.). Svelte examples. Retrieved November 19, 2020, from https://svelte.dev/examples#bar-chart
- Frost, B. (2020, August 31). Atomic Design. Brad Frost. https://bradfrost.com/blog/post/atomic-web-design/
- Keheller, C. (2018). Data Visualization Course 2018. YouTube. https://www.youtube.com/playlist?list=PL9yYRbwpkykvOXrZumtZWbuaXWHvjD8gi
- All About Web. (2020, August 15). #AllAboutWeb Effective data visualization with #sveltejs and D3 - Matthias Stahl. YouTube. https://www.youtube.com/watch?v=GYXuOvX_fns
- Open Source. (n.d.). ESLinter. ESLint. Retrieved November 16, 2020, from https://eslint.org/
- G, D. (n.d.). dominikg/svite. GitHub. Retrieved November 16, 2020, from https://github.com/dominikg/svite

#### Other sources

- Tuce. (2018, September 6). gray concrete columns. Unsplash. https://unsplash.com/photos/tnMPwOyQ39E

---

## :lock: License

This is a repository which is licensed as MIT. Jordy Fronik ©️ 2020.

<!--

## <!-- ## :page_facing_up: Research Case

## :flashlight: Concept
I'll be making a data visualization with Javascript D3 of how well developed the parking garages are in the big cities from holland. I'll be comparing the Drive-through height, EV-charging capacity and the disabled access possibilities. By using the location I display where the optimal parking garages are located. To read more about it, make sure to check out my [documentation](https://github.com/joordy/frontend-data/wiki/Concept).
---
## :chart: Dataset
For my project I'll be using the [Location API](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34) and [Specification API](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s) form the RDW.
---  -->
