import React from 'react';
import parse from 'html-react-parser';
import Loader from 'react-loader-spinner';
import {
	setCurrentQuestion,
	setScore,
	setShowScore
} from '../../redux/quiz/quiz.actions';
import { useDispatch, useSelector } from 'react-redux';
import {
	AnswerSectionContainer,
	QuestionCountContainer,
	QuestionSectionContainer,
	QuestionTextDiv
} from './quiz-block.styles';
import { CustomButton } from '../custom-button/cutsom-button';

export const QuizBlock = () => {
	const dispatch = useDispatch();
	const quiz = useSelector(state => state.quiz);
	const { score, currentQuestion, questions, questionsAreLoading } = quiz;

	const handleAnswerOptionClick = isCorrect => {
		if (isCorrect) {
			dispatch(setScore(score + 1));
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			dispatch(setCurrentQuestion(nextQuestion));
		} else {
			dispatch(setShowScore(true));
		}
	};
	return questionsAreLoading ? (
		<Loader type="ThreeDots" color="#00BFFF" height={200} width={200} />
	) : (
		<>
			<QuestionSectionContainer>
				<QuestionCountContainer>
					<span>Question {currentQuestion + 1}</span>/
					{questions.length}
				</QuestionCountContainer>
				<QuestionTextDiv>
					{parse(questions[currentQuestion].questionText)}
				</QuestionTextDiv>
			</QuestionSectionContainer>
			<AnswerSectionContainer>
				{questions[currentQuestion].answerOptions.map(answerOption => (
					<CustomButton
						key={answerOption.answerText}
						onClick={() =>
							handleAnswerOptionClick(answerOption.isCorrect)
						}>
						{parse(answerOption.answerText)}
					</CustomButton>
				))}
			</AnswerSectionContainer>
		</>
	);
};
