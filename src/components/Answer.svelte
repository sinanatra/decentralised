<script>
    import { answerQuestion } from "@lib/questions";

    export let id;
    let answerText = "";

    function submitAnswer(questionId, answerText) {
        answerQuestion(questionId, answerText);
        answerText = "";
    }
</script>

<div>
    <textarea type="text" bind:value={answerText} />
    <div class="message-text">
        <button on:click={() => submitAnswer(id, answerText)}
            >Submit Answer</button
        >
    </div>
</div>

<style>
    .message-text {
        border-radius: 3px;
        margin-bottom: 5px;
        display: flex;
        max-width: 640px;
    }
</style>
