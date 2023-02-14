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
	main {
		position: absolute;
	}
	p {
		font-size: 2rem;
		position: absolute;
    	bottom: -50%;
		left: 50%;
    	width: 100%;
    	font-size: 0.8rem;
    	color: #8DADB9;
    	z-index: 2;
	}
</style>
