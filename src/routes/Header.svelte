<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';

	

</script>

<header>
	<nav>
		<a href="/" id="logo">
			<img src = "/logo.jpeg" alt="SKauth">
		</a>

		<ul>
			<a href="/news"><li>Nachrichten</li></a>
			<a href="/blog"><li>Musik</li></a>
			<a href="/about"><li>Über uns</li></a>
			<a href="/imprint"><li>Impressum</li></a>
			
		</ul>
	</nav>

</header>

<style>
	header {
		/* background: #022B3A; */
		background: white;
		box-shadow: 0 0 10px #01202c;
		
	}
	nav {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		list-style: none;
		margin: 0;
		padding: 0;
		grid-template-columns: 100px 1fr;
	}
	ul {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		align-items: center;
		list-style: none;
		margin: 0;
		

	}
	li{
		height: 75px;
		border: .01rem solid #ededed;
		display: flex;
		justify-content: center;
		align-items: center;

	}
	li:nth-child(1){
		border-left: none;
	}
	li:nth-child(4){
		border-right: none;
		margin-right: 2rem;
	}
	a{
		color: #022B3A;
		text-decoration: none;
	}
	a:hover{
		background-color: #ededed;
		text-decoration: none;
	}
	#logo{
		display: flex;
		justify-content: center;
		align-items: center;

	}
	#logo:hover{
		background-color: #ffffff;
		text-decoration: none;
	}
	img {
		width: 110px;
		height: 75px;
		margin: 0 0rem 0 5rem;
	}
	
</style>
