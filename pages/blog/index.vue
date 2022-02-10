<template>
	<div class="posts__container">
		<h1>Lista de Articulos</h1>
		<div class="cards">
			<div v-for="post in posts" :key="post" class="card">
					<h2>{{post.title}}</h2>
					<p>{{post.description}}</p>
					<nuxt-link class="button" :to="post.path">Leer</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "IndexBlog",
		async asyncData({ $content, params, error }) {
			const posts = await $content("blog")
			.only(["title", "description","path"])
			.limit(5)
			.sortBy("title")
			.fetch()

			return { posts }
		}
	}
</script>

<style>
	.posts__container {
		display: flex;
		padding: 3em;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.posts__container h1 {
		border-bottom: 5px solid #3E87FF;
	}

	.cards {
		display: grid;
		margin: 10px auto;
		grid-template-columns: 33% 33% 33%;
		grid-gap: 10px;
		list-style: none;
		width: 100%;
	}

	.card {
		padding: 20px;
		box-shadow: 0 0 10px 5px #ECECEC;
	}

	.button {
		display: block;
		text-decoration: none;
		border-radius: 5px;
		color: #fff;
		margin: 10px 0;
		text-align: center;
		padding: 10px 20px;
		background: #3E87FF;
		transition: .3s all ease-in-out;
	}

	.button:hover {
		background: #69A0FD;
	}
</style>