import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

export const db = GUN();
export const questions = writable([]);
export const answers = writable([]);

db.get('question_01').map().on((question, id) => {
    questions.update(existingQuestions => [...existingQuestions, { id, ...question }].reverse())
        ;
});

db.get('answers_01').map().on((answer, id) => {
    answers.update(existingAnswer => [...existingAnswer, { id, ...answer }]);
});


export function askQuestion(questionText) {
    questions.update(existingQuestions => {
        const questionExists = existingQuestions.some(question => question.question === questionText);
        if (!questionExists) {
            db.get('question_01').set({ question: questionText });
            return existingQuestions;
        } else {
            console.log("Question already exists.");
            return existingQuestions;
        }
    });
}


export function answerQuestion(questionId, questionText) {
    // db.get('answers_01').get(questionId).get('answers').set(answer);
    answers.update(existingAnswer => {
        db.get('answers_01').set({ question: questionId, answer: questionText });
        return existingAnswer;
    });
}