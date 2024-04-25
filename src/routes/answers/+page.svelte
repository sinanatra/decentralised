<script>
    import Answer from "@components/Answer.svelte";
    import { questions, answers } from "@lib/questions";

    $: console.log("q", $questions);
    $: console.log("a", $answers);

</script>

<div>
    {#each $questions as { id, question }}
        <div>
            <a href={id}>{question}</a>
        </div>
    {/each}
</div>
