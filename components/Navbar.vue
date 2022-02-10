<template>
	<div>
		<ul class="nav__container">
			<li class="nav__item"><NuxtLink class="nav__button" to="/">Home</NuxtLink></li>
			<li class="nav__item"><NuxtLink class="nav__button" to="/blog">Blog</NuxtLink></li>
			<li class="nav__item"><NuxtLink class="nav__button" to="/contact">Contact</NuxtLink></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "NavBar"
	}
</script>

<style>
	.nav__container {
		display: flex;
		background: #D4E7FF;
		align-items: center;
		justify-content: center;
		padding: 15px;
		margin: 0;
	}

	.nav__item {
		list-style: none;
		margin: 20px;
	}

	.nav__button {
		text-decoration: none;
		border-radius: 5px;
		color: #fff;
		background: #3E87FF;
		padding: 10px 30px;
		transition: .3s all ease-in-out;
	}

	.nav__button:hover {
		background: #69A0FD;
	}
</style>