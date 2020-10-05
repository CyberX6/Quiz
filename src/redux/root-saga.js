import { all } from 'redux-saga/effects';
import quizSagas from './quiz/quiz.sagas';

export default function* rootSaga() {
	yield all([quizSagas()]);
}
