<script>
    import Header from "@components/Header.svelte";
</script>

<main>
    <Header />
    <slot />
</main>

<style>
    :global(body) {
        height: 100vh;
        margin: 0;
        font-family: sans-serif;
    }

    main {
        padding: 10px;
    }
</style>
