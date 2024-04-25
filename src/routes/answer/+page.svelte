<script>
    import Answer from "@components/Answer.svelte";
    import { questions, answers } from "@lib/questions";
    
    $: console.log("q", $questions);
    $: console.log("an", $answers);
</script>

<div>
    <ul>
        {#each $questions as { id, question }}
            <li>
                <p>{question}</p>
                <Answer {id} />
            </li>
        {/each}
    </ul>
</div>
