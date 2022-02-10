<template>
	<div class="container">
		<h1>Contacto</h1>
		<form class="form">
			<div class="form__item">
				<input type="text" placeholder="Nombre" required>
			</div>
			<div class="form__item"><input type="text" placeholder="Asunto" required></div>
			<div class="form__item"><input type="email" placeholder="Email" required></div>
			<div class="form__item"><textarea cols="30" rows="10" placeholder="Mensaje"></textarea></div>
			<button class="submit">Enviar</button>
		</form>
	</div>
</template>

<script>
	export default {
		name: "ContactPage"
	}
</script>

<style>
	.container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.form__item input {
		width: 100%;
		padding: 10px;
		margin-bottom: 15px;
		border-radius: 0;
		font-size: 15px;
		border-style: solid;
		border-radius: 5px;
	}

	.form__item textarea {
		padding: 10px;
		border-radius: 5px;
		border-style: solid;
		font-size: 15px;
		resize: none;
	}

	button {
		display: block;
		margin: 10px 0;
		padding: 10px 20px;
		cursor: pointer;
		width: 100%;
		color: #fff;
		background: #3E87FF;
		border: 0;
		border-radius: 5px;
		font-size: 15px;
		text-align: center;
		transition: .3s all ease-in-out;
	}

	button:hover {
		background: #69A0FD;
	}
</style>