<script lang="ts">
  import { fly } from 'svelte/transition'
</script>

<svelte:head>
  <title>Twitter</title>
</svelte:head>

<main 
class="container"
in:fly={{ x: -100, duration: 250, delay: 300}}
out:fly={{ x: -100, duration: 250, delay: 300 }}
>
  <section class="hero">
    <h1 class="title">Twitter 🐦️</h1>
    <p class="text">Share your hot take with everyone.</p>
  </section>

  <section class="login">
    <a href="/home" class="btn"> Share Your Hot Take</a>
  </section>
</main>

<style>
  .container {
    height: 100vh;
    display: grid;
  }

  .hero,
  .login {
    display: grid;
    place-content: center;
  }

  .hero {
    background-color: var(--color-brand);
    text-align: center;
  }

  .title {
    font-size: var(--font-80);
    z-index: 2;
  }

  .text {
    padding: var(--spacing-16);
    transform: rotate(2deg) translateY(-40%);
    background: var(--color-bg-primary);
    font-weight: bold;
    font-size: var(--font-24);
    z-index: 1;
  }

  @media (min-width: 1024) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

</style>