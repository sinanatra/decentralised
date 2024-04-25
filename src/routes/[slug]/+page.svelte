<script>
    import Answer from "@components/Answer.svelte";
    import { page } from "$app/stores";
    import { questions, answers } from "@lib/questions";

    $: question = $questions.find((d) => d.id == $page.params.slug);
    $: answersData = $answers.filter((d) => d.question == question.question);
</script>

{#if question}
    <h1>{question.question}</h1>

    <div>
        <Answer id={question.question} />
    </div>
    {#if answersData}
        {#each answersData as data}
            <p>{data.answer}</p>
        {/each}
    {/if}
{/if}
