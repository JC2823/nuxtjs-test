<template>
	<div class="container">
		<h1>{{ article.title }}</h1>
		<pre>{{ formatDate(article.createdAt) }}</pre>
		<p>{{article.description}}</p>
		<hr>
		<nuxt-content :document="article" />
	</div>
</template>

<script>
	export default {
		async asyncData({ $content, params }) {
			const article = await $content("blog", params.slug).fetch()

			return { article }
		},

		methods: {
			formatDate(date) {
				const options = { year: "numeric", month: "long", day: "numeric" }
				return new Date(date).toLocaleDateString("es", options)
			}
		}
	}
</script>

<style>
	.container {
		width: 90%;
		margin: 30px auto;
		padding: 20px;
		box-shadow: 0 0 10px 5px #ECECEC;
	}

	pre {
		color: #8A8A8A;
	}

	hr {
		border: 2px solid #008cff;
	}
</style>