<script>
    import { questions } from "@lib/questions";
    import { answerQuestion } from "@lib/questions";

    export let id;
    let answerText = "";

    function submitAnswer(questionId, answerText) {
        answerQuestion(questionId, answerText);
        answerText = "";
    }

    $: last = $questions[0];
</script>

{#if last}
    <h1>{last?.question}</h1>
{/if}

<textarea type="text" bind:value={answerText} />
<div class="message-text">
    <button on:click={() => submitAnswer(id, answerText)}>Submit Answer</button>
</div>
