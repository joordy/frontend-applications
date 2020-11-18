<script>
  import { onMount } from 'svelte'
  export let data
  console.log(data)
  let carData = data.map((item) => item.carCapacity)
  let elements
  console.log(carData)

  onMount(() => {
    const svg = select('svg')

    svg
      .select(elements)
      .selectAll('rect')
      .data(carData)
      .enter()
      .append('rect')
      .style('width', function (d) {
        return d + 'px'
      })
      .text(function (d) {
        return d
      })
  })
</script>

<style>
  h1 {
    font-size: 16px;
  }
</style>

<h1>{JSON.stringify(data)}</h1>

<svg bind:this={elements} />
