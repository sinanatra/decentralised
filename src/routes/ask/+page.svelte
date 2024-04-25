<script>
    import { askQuestion } from "@lib/questions";

    let questionText = "";

    function submitQuestion() {
        askQuestion(questionText);
        questionText = "";
    }
</script>

<article>
    <textarea type="text" bind:value={questionText} />
    <button on:click={submitQuestion}>Ask Question</button>
</article>
