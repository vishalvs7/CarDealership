<script>
	
	import './styles.css';
	import "../app.css";
	import Navbar from '../Components/Navbar.svelte';
	import Footer from '../Components/Footer.svelte';
</script>

<div class="app">
	
	<Navbar/>
	<main>
		
		<slot />
		
	</main>

	<Footer/>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	
	
</style>
