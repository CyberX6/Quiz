export const fetchQuestions = async (difficulty, category) => {
	let query = '';
	if (difficulty && difficulty !== 'any') {
		query += `&difficulty=${difficulty}`;
	}

	if (category && category !== 'any') {
		query += `&category=${category}`;
	}

	let response = await fetch(`https://opentdb.com/api.php?amount=10${query}`);
	response = await response.json();

	let questions = [];

	for (let result in response.results) {
		let res = response.results[result];

		let answers = res.hasOwnProperty('incorrect_answers')
			? res.incorrect_answers
			: [];
		let answersList = [];
		for (let answer in answers) {
			let answerText = answers[answer];
			answersList.push({
				answerText,
				isCorrect: false
			});
		}

		answersList.push({
			answerText: res.hasOwnProperty('correct_answer')
				? res.correct_answer
				: '',
			isCorrect: true
		});

		questions.push({
			questionText: res.question,
			answerOptions: answersList
		});
	}

	return questions;
};
