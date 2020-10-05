import React from 'react';
import {
	chooseCategory,
	chooseDifficulty,
	loadQuestions,
	startQuiz
} from '../../redux/quiz/quiz.actions';
import { categories, difficulties } from '../../redux/quiz/quiz.data';
import { useDispatch, useSelector } from 'react-redux';
import { ScoreSectionDiv } from '../score-block/score-block.styles';
import { CustomButton } from '../custom-button/cutsom-button';
import { CustomSelect } from '../custom-select/custom-select';

export const StartPage = () => {
	const dispatch = useDispatch();
	const quiz = useSelector(state => state.quiz);
	const { category, difficulty } = quiz;
	const loadQuiz = () => {
		dispatch(loadQuestions());
		dispatch(startQuiz(true));
	};

	return (
		<ScoreSectionDiv>
			<CustomSelect
				labelText="Choose category"
				value={category}
				onChange={value => dispatch(chooseCategory(value))}
				options={categories}
			/>
			<CustomSelect
				labelText="Choose difficulty"
				value={difficulty}
				onChange={value => dispatch(chooseDifficulty(value))}
				options={difficulties}
			/>
			<CustomButton onClick={loadQuiz} centered>
				Start
			</CustomButton>
		</ScoreSectionDiv>
	);
};
