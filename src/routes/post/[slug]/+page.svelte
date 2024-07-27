<script lang="ts">
  export let data;

  type Post = {
    id: number;
    title: string;
    user_id: string;
    created_at: string;
    content: string;
  };

  const users = data.users;
  const post: Post = data.posts.find((post) => post.id == data.slug);
  console.log(users);

  const creator = users.find((user) => user.user_id === post.user_id);

  const creatorName = creator.first_name + " " + creator.last_name;
</script>

{#if post}
  <div class="container">
    <div class="post">
      <h2>{post.title}</h2>
      <h4>by {creatorName}</h4>
      <p>{post.content}</p>
    </div>
  </div>
{/if}

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
  }
</style>
