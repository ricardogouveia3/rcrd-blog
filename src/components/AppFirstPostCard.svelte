<script>
  export let post = {};
</script>

<style lang="scss">
  article {
    background-color: #fff;
    border-radius: 25px;

    a {
      padding: 15px;
      display: flex;
      column-gap: 20px;

      @media (max-width: 900px) {
        flex-direction: column;
      }
    }
  }

  h2,
  span {
    color: #4a4a4a;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 1.7em;
    line-height: 1.5;
  }

  p {
    color: #718797;
    line-height: 1.5;
    font-weight: 300;
  }

  .post-img {
    object-fit: cover;
    border-radius: 20px;
    width: 50%;
    height: 350px;

    @media (max-width: 900px) {
      width: 100%;
    }
  }

  .meta {
    display: flex;
    column-gap: 20px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 0;
  }

  .meta {
    img {
      border-radius: 50%;
      width: 70px;
    }

    .content {
      justify-content: center;
    }

    p {
      margin: 0;
    }
  }
</style>

<article class="single-post">
  <a target="_blank" href={post.url}>
    <img class="post-img" src={post.cover_image} alt="" />
    <div class="content">
      <div class="post-info">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>
      <div class="meta">
        <img src={post.user.profile_image_90} alt="" />
        <div class="content">
          <span>{post.user.name}</span>
          <p>
            {new Date(post.published_at).toLocaleDateString('pt-BR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>
    </div>
  </a>
</article>
