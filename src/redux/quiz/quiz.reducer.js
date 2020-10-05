import { QuizActionTypes } from './quiz.types';

const INITIAL_STATE = {
	currentQuestion: 0,
	showScore: false,
	score: 0,
	questions: [],
	questionsAreLoading: 'false',
	category: null,
	difficulty: null,
	quizStarted: false
};

const quizReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case QuizActionTypes.START_QUIZ:
			return {
				...state,
				showScore: false,
				score: 0,
				quizStarted: true
			};
		case QuizActionTypes.FINISH_QUIZ:
			return {
				...state,
				showScore: false,
				currentQuestion: 0,
				score: 0,
				questions: [],
				category: null,
				difficulty: null,
				quizStarted: false
			};
		case QuizActionTypes.SET_SCORE:
			return {
				...state,
				score: action.payload
			};
		case QuizActionTypes.SET_SHOW_SCORE:
			return {
				...state,
				showScore: action.payload
			};
		case QuizActionTypes.SET_CURRENT_QUESTION:
			return {
				...state,
				currentQuestion: action.payload
			};
		case QuizActionTypes.CHOOSE_DIFFICULTY:
			return {
				...state,
				difficulty: action.payload
			};
		case QuizActionTypes.CHOOSE_CATEGORY:
			return {
				...state,
				category: action.payload
			};
		case QuizActionTypes.LOAD_QUESTIONS:
			return {
				...state,
				questionsAreLoading: true
			};
		case QuizActionTypes.SET_QUESTIONS:
			return {
				...state,
				questionsAreLoading: false,
				questions: action.payload
			};
		default:
			return state;
	}
};

export default quizReducer;
