<script lang="ts">
  import { goto } from "$app/navigation";
  import type { PageData } from "./$types";

  export let data: PageData;

  let first: string;
  let last: string;
  let user_id: string | undefined = data.user?.id;

  async function newPost() {
    const response = await fetch("/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first, last, user_id }),
    });

    const result = await response.json();
    console.log(result);
  }
</script>

<h1>New post</h1>

{#if data.user}
  <form method="post" on:submit|preventDefault={newPost}>
    <input type="text" placeholder="First name" required bind:value={first} />
    <input type="text" placeholder="Last name" required bind:value={last} />
    <button type="submit">Send!</button>
  </form>
{/if}

<style lang="scss">
  form {
    margin: auto;
    width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input,
    textarea,
    button {
      padding: 1rem;
    }
  }
</style>
