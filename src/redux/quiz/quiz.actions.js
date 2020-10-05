import { QuizActionTypes } from './quiz.types';

export const startQuiz = () => ({
	type: QuizActionTypes.START_QUIZ
});

export const finishQuiz = () => ({
	type: QuizActionTypes.FINISH_QUIZ
});

export const setScore = score => ({
	type: QuizActionTypes.SET_SCORE,
	payload: score
});

export const setShowScore = showScore => ({
	type: QuizActionTypes.SET_SHOW_SCORE,
	payload: showScore
});

export const setCurrentQuestion = currentQuestion => ({
	type: QuizActionTypes.SET_CURRENT_QUESTION,
	payload: currentQuestion
});

export const chooseDifficulty = difficulty => ({
	type: QuizActionTypes.CHOOSE_DIFFICULTY,
	payload: difficulty
});

export const chooseCategory = category => ({
	type: QuizActionTypes.CHOOSE_CATEGORY,
	payload: category
});

export const loadQuestions = () => ({
	type: QuizActionTypes.LOAD_QUESTIONS
});

export const setQuestions = questions => ({
	type: QuizActionTypes.SET_QUESTIONS,
	payload: questions
});
