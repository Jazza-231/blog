<script lang="ts">
  import { goto } from "$app/navigation";

  let email: string;
  let password: string;
  let error: string;

  async function handleLogin(event: Event) {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    console.log(result);

    if (result.success) {
      goto("/welcome");
    } else {
      error = result.error || "Login failed";
    }
  }
</script>

<div class="container">
  <div class="login">
    <form on:submit|preventDefault={handleLogin}>
      <input
        type="email"
        bind:value={email}
        placeholder="example@email.com"
        required
      />
      <input
        type="password"
        bind:value={password}
        placeholder="s3curEpassW0RD"
        required
      />
      <button type="submit">Log in</button>

      {#if error}
        <p style="color: tomato;">{error}</p>
      {/if}
    </form>

    <div class="sign-up">
      <a href="/signup">No account? Sign up.</a>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;

    .login {
      .sign-up {
        margin-top: 2rem;
        a {
          color: #3498db;
          text-decoration: none;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 1rem;

        input {
          padding: 0.5rem;
          border: none;
          border-radius: 0.25rem;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          margin-bottom: 1rem;
        }

        button {
          padding: 0.5rem;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
        }
      }
    }
  }
</style>
