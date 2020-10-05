import React from 'react';
import { useSelector } from 'react-redux';
import { ScoreBlock } from './components/score-block/score-block';
import { QuizBlock } from './components/quiz-block/quiz-block';
import { StartPage } from './components/start-page/start-page';
import { AppContainer } from './App-styles';

export default function App() {
	const quiz = useSelector(state => state.quiz);
	const { showScore, questions, quizStarted } = quiz;

	let questionBlock = questions.length ? (
		showScore ? (
			<ScoreBlock />
		) : (
			<QuizBlock />
		)
	) : null;

	return (
		<AppContainer>
			{quizStarted ? questionBlock : <StartPage />}
		</AppContainer>
	);
}
