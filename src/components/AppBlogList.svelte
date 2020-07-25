<script>
  import AppFirstPostCard from "./AppFirstPostCard.svelte";
  import AppPostCard from "./AppPostCard.svelte";

  export let posts = [];
</script>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin: 0 auto;
    max-width: 1100px;
    width: 80%;
    min-width: 300px;
  }

  ul {
    display: grid;
    list-style-type: none;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    margin: 50px 0;
    padding: 0;
  }

  li:first-of-type {
    grid-column-start: 1;
    grid-column-end: 4;
  }
</style>

<main>
  <ul>
    {#each posts as post}
      <AppPostCard {post} />
    {/each}
  </ul>
</main>
