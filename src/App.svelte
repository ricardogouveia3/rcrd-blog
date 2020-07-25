<script>
	import AppHeader from "./components/AppHeader.svelte";
	import AppBlogList from "./components/AppBlogList.svelte";

	
	const DEVTO_API_MY_POSTS =
	"https://dev.to/api/articles?username=ricardogouveia3";
	
	let posts;

  fetch(DEVTO_API_MY_POSTS)
		.then(response => response.json())
		.then(data => {
			posts = data;
		});
</script>

<div class="app">
  <AppHeader />
	<AppBlogList {posts} />
</div>
