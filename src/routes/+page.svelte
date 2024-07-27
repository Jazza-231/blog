<script lang="ts">
  export let data;

  console.log(data);
</script>

<h1>Posts</h1>

<ul>
  {#each data.posts as post}
    <li style="list-style: none;">
      <h2><a href="/post/{post.id}">{post.title}</a></h2>
    </li>
  {/each}
</ul>

<style lang="scss">
  h1 {
    padding: 2rem;
  }
</style>
