<script lang="ts">
  import { goto } from "$app/navigation";
  import type { PageData } from "./$types";

  export let data: PageData;

  let title: string;
  let content: string;
  let user_id: string | undefined = data.user?.id;

  async function newPost() {
    const response = await fetch("/new-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, user_id }),
    });

    const result = await response.json();
    console.log(result);

    if (result.success) {
      goto(`/post/${result.data[0].id}`);
    }
  }
</script>

<h1>New post</h1>

{#if data.user}
  <form method="post" on:submit|preventDefault={newPost}>
    <input type="text" placeholder="Title" required bind:value={title} />
    <textarea placeholder="Content" required bind:value={content}></textarea>
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
