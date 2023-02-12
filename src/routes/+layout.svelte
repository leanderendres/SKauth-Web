<script>
	import Header from './Header.svelte';
	import './styles.css';
	
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p> <a href="imprint">Imprint</a> - all rights reserved </p>
	</footer>
</div>

<style>
	* {
		font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		color: azure;
	}
	
</style>
