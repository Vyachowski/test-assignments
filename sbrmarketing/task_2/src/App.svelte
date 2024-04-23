<script>
  import { onMount } from 'svelte';
  import { currencies } from "./lib/currencies.js";
  // Определить стартовую валютную пару
  let [ fromCurrency, toCurrency ] = ['USD', 'EUR'];
  // При
  onMount(() => {
    // console.log(currencies);
  });
</script>

<main class='card'>
  <h1>Currency converter</h1>
  <div class='currency-card'>
    <select class='currency-selector'>
      {#each currencies as { code }}
        <option selected={code === fromCurrency}>{code}</option>
      {/each}
    </select>
    <label class='currency-label'>
      <input class='currency-input' id='fromCurrency' type='number' placeholder="100" />
    </label>
  </div>
  <div class='currency-card'>
    <select class='currency-selector'>
      {#each currencies as { code }}
        <option selected={code === toCurrency}>{code}</option>
      {/each}
    </select>
    <label  class='currency-label'>
      <input class='currency-input' id='toCurrency' type='number' placeholder="100" >
    </label>
  </div>
</main>

<style>
  .card {
    margin: auto;
    width: 540px;
    height: 540px;
    color: white;
    background-image: linear-gradient(
      45deg,
      hsl(240deg 100% 20%) 0%,
      hsl(289deg 100% 21%) 11%,
      hsl(315deg 100% 27%) 22%,
      hsl(329deg 100% 36%) 33%,
      hsl(337deg 100% 43%) 44%,
      hsl(357deg 91% 59%) 56%,
      hsl(17deg 100% 59%) 67%,
      hsl(34deg 100% 53%) 78%,
      hsl(45deg 100% 50%) 89%,
      hsl(55deg 100% 50%) 100%
    );
  }
</style>
