import { finishQuiz } from '../../redux/quiz/quiz.actions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScoreSectionDiv } from './score-block.styles';
import { CustomButton } from '../custom-button/cutsom-button';

export const ScoreBlock = () => {
	const dispatch = useDispatch();
	const quiz = useSelector(state => state.quiz);
	const { score, questions } = quiz;

	return (
		<ScoreSectionDiv>
			You scored {score} out of {questions.length}
			<CustomButton centered onClick={() => dispatch(finishQuiz())}>
				Restart
			</CustomButton>
		</ScoreSectionDiv>
	);
};
