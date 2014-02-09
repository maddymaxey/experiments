var mathQuestions = (function(){

	function shuffle(things) {
		var nThings = things.length;
		var i, a, b, swap, l = Math.floor(nThings * 0.5);
		for (i = 0; i < l; i += 1) {
		    a = Math.floor(Math.random() * nThings);
		    b = Math.floor(Math.random() * nThings);
		    swap = things[a];
		    things[a] = things[b];
		    things[b] = swap;
		}
		return things;
	}

	function getOption(options, name, value) {
		if (options.hasOwnProperty(name)) {
		    return options[name];
		}
		return value;
	}

	var formatToInteger = function (x) {
    	return x.toFixed(0);
	};

	function additionQuestion(quiz,options) {
		var formatNumber = getOption(options,'formatNumber',formatToInteger);
		var opMin = parseInt(getOption(options,'min','0'),10);
		var opMax = parseInt(getOption(options,'max','9999'),10);
		var op1 = opMin + Math.random()*(opMax-opMin);
		var op2 = opMin + Math.random()*(opMax-opMin);
		var answer = parseFloat(formatNumber(op1))+parseFloat(formatNumber(op2));
		var answers = [
		    formatNumber(answer),
		    formatNumber(answer * 1.01+1),
		    formatNumber(answer * 0.99-1),
		    formatNumber(answer * Math.random())
		];
		answer = formatNumber(answer);
		answers = shuffle(answers);
		myQuiz.choiceSet(1,answers[0], answer===answers[0]);
		myQuiz.choiceSet(2,answers[1], answer===answers[1]);
		myQuiz.choiceSet(3,answers[2], answer===answers[2]);
		myQuiz.choiceSet(4,answers[3], answer===answers[3]);
		myQuiz.questionNumbers( formatNumber(op1), '+'+formatNumber(op2) );
		myQuiz.questionPrompt( 'Sum?' );
	}

	function subtractionQuestion(options) {
		var formatNumber = getOption(options,'formatNumber',formatToInteger);
		var opMin = parseInt(getOption(options,'min','0'),10);
		var opMax = parseInt(getOption(options,'max','9999'),10);
		var op1 = opMin + Math.random()*(opMax-opMin);
		var op2 = opMin + Math.random()*(opMax-opMin);
		op1 = op1+op2;
		var answer = parseFloat(formatNumber(op1))-parseFloat(formatNumber(op2));
		var answers = [
		    formatNumber(answer),
		    formatNumber(answer * 1.01+1),
		    formatNumber(answer * 0.99-1),
		    formatNumber(answer * Math.random())
		];
		answer = formatNumber(answer);
		answers = shuffle(answers);
		myQuiz.choiceSet(1,answers[0], answer===answers[0]);
		myQuiz.choiceSet(2,answers[1], answer===answers[1]);
		myQuiz.choiceSet(3,answers[2], answer===answers[2]);
		myQuiz.choiceSet(4,answers[3], answer===answers[3]);
		myQuiz.questionNumbers( formatNumber(op1), '-'+formatNumber(op2) );
		myQuiz.questionPrompt( 'Difference?' );
	}

	function multiplicationQuestion(quiz,options) {
		var formatNumber = getOption(options,'formatNumber',formatToInteger);
		var opMin = parseInt(getOption(options,'min','0'),10);
		var opMax = parseInt(getOption(options,'max','15'),10);
		var op1 = opMin + Math.random()*(opMax-opMin);
		var op2 = opMin + Math.random()*(opMax-opMin);
		var answer = parseFloat(formatNumber(op1))*parseFloat(formatNumber(op2));
		var answers = [
		    formatNumber(answer),
		    formatNumber(answer * 1.01+1),
		    formatNumber(answer * 0.99-1),
		    formatNumber(answer * Math.random())
		];
		answer = formatNumber(answer);
		answers = shuffle(answers);
		myQuiz.choiceSet(1,answers[0], answer===answers[0]);
		myQuiz.choiceSet(2,answers[1], answer===answers[1]);
		myQuiz.choiceSet(3,answers[2], answer===answers[2]);
		myQuiz.choiceSet(4,answers[3], answer===answers[3]);
		myQuiz.questionNumbers( formatNumber(op1), '&times;'+formatNumber(op2) );
		myQuiz.questionPrompt( 'Product?' );
	}

	function divisionQuestion(quiz,options) {
		var formatNumber = getOption(options,'formatNumber',formatToInteger);
		var opMin = parseInt(getOption(options,'min','1'),10);
		var opMax = parseInt(getOption(options,'max','15'),10);
		var op1 = opMin + Math.random()*(opMax-opMin);
		var op2 = opMin + Math.random()*(opMax-opMin);
		var prod = parseFloat(formatNumber(op1))*parseFloat(formatNumber(op2));
		op1 = prod;
		var answer = parseFloat(formatNumber(op1))/parseFloat(formatNumber(op2));
		var answers = [
		    formatNumber(answer),
		    formatNumber(answer * 1.01+1),
		    formatNumber(answer * 0.99-1),
		    formatNumber(answer * Math.random())
		];
		answer = formatNumber(answer);
		answers = shuffle(answers);
		myQuiz.choiceSet(1,answers[0], answer===answers[0]);
		myQuiz.choiceSet(2,answers[1], answer===answers[1]);
		myQuiz.choiceSet(3,answers[2], answer===answers[2]);
		myQuiz.choiceSet(4,answers[3], answer===answers[3]);
		myQuiz.questionNumbers( formatNumber(op1), '&divide;'+formatNumber(op2) );
		myQuiz.questionPrompt( 'Quotient?' );
	}

	function anyQuestion(quiz,options){
		var rn = Math.random();
		if( rn < 0.25 ){
			divisionQuestion(quiz,options);
		}else if( rn < 0.50 ){
			multiplicationQuestion(quiz,options);
		}else if( rn < 0.75 ){
			subtractionQuestion(quiz,options);
		}else{
			additionQuestion(quiz,options);
		}
	}

	return {
		addition: additionQuestion,
		subtraction: subtractionQuestion,
		multiplication: multiplicationQuestion,
		division: divisionQuestion,
		any: anyQuestion
	};
})();