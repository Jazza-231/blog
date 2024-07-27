<svelte:head>
  <link rel="stylesheet" href="/src/styles/global.scss" />
</svelte:head>

<header>
  <div class="container">
    <h1 class="website">My Website</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/new-post">New post</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
    <h1 class="login">
      <a href="/login">Login</a>
    </h1>
  </div>
</header>

<slot></slot>

<footer>
  <div class="container">
    <p>&copy; 2024 My Website</p>
  </div>
</footer>

<style lang="scss">
  .container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  header {
    background-color: #333;
    color: #fff;
    padding: 1rem 0;

    .website {
      margin: 0;
      position: fixed;
      left: 10px;
    }

    .login {
      margin: 0;
      position: fixed;
      right: 10px;
    }

    nav ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      justify-content: space-around;

      li {
        margin: 0 0.5rem;

        a {
          color: #fff;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
    position: fixed;
    bottom: 0px;
    width: 100%;

    p {
      margin: 0;
    }
  }
</style>
