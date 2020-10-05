import { call, put, select, takeEvery } from 'redux-saga/effects';
import { setQuestions } from './quiz.actions';
import { fetchQuestions } from './quiz.api';
import { QuizActionTypes } from './quiz.types';

export const getDifficulty = state =>
	state.quiz.difficulty && state.quiz.difficulty.value;
export const getCategory = state =>
	state.quiz.category && state.quiz.category.value;

export function* handleQuestionsLoad() {
	try {
		const difficulty = yield select(getDifficulty);
		const category = yield select(getCategory);
		const questions = yield call(fetchQuestions, difficulty, category);
		console.log(questions);
		yield put(setQuestions(questions));
	} catch (error) {
		throw error;
	}
}

export default function* watchQuestionsLoad() {
	yield takeEvery(QuizActionTypes.LOAD_QUESTIONS, handleQuestionsLoad);
}
