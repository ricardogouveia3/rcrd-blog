<script>
  export let post = {};
</script>

<style lang="scss">
  li {
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-wrap: nowrap;
    max-width: 100%;

    a {
      padding: 15px;
      display: flex;
      flex-direction: column;
      column-gap: 20px;
      flex-grow: 1;
      max-width: 100%;
    }
  }

  li:first-of-type {
    grid-column: 1 / -1;

    .post-description { display: block; }
    .meta { margin: 0; }

    @media (min-width: 1000px) {
      a {
        min-height: 350px;
        flex-direction: row;
        column-gap: 20px;
      }

      .post-img {
        min-width: 50%;
        height: unset;
      }

      .post-title { font-size: 1.8em; }
    }
  }

  .post-img {
    object-fit: cover;
    border-radius: 20px;
    height: 300px;
  }

  .content {
    padding: 20px 5px 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;

    .post-title {
      color: #4a4a4a;
      font-weight: 600;
      line-height: 1.3;
      font-size: 1.3em;
      letter-spacing: 0.5px;
      padding: 0;
      margin: 0;
    }

    .post-description {
      display: none;
      color: #718797;
      line-height: 1.5;
    }
  }

  .meta {
    display: flex;
    margin-top: 25px;
    font-size: 0.9em;

    img {
      border-radius: 50%;
      width: 75px;
      height: 75px;
      margin-right: 15px;
    }

    .content {
      padding: unset;
      justify-content: center;

      .post-user-name {
        color: #4a4a4a;
        font-weight: 700;
      }

      .post-date {
        color: #718797;
      }
    }
  }
</style>

<li class="single-post">
  <a target="_blank" href={post.url}>
    <img class="post-img" src={post.cover_image} alt="" />
    <div class="content">
      <div class="post-info">
        <h2 class="post-title">{post.title}</h2>
        <p class="post-description">{post.description}</p>
      </div>
      <div class="meta">
        <img src={post.user.profile_image_90} alt="" />
        <div class="content">
          <span class="post-user-name">{post.user.name}</span>
          <span class="post-date">
            {new Date(post.published_at).toLocaleDateString('pt-BR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
      </div>
    </div>
  </a>
</li>
