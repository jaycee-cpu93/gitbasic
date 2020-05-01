function fiz_return(number) {

	let answer = ""

	if ( number % 3 === 0 && number % 5 === 0 ) {
		answer = "fizzbuzz"
	}
	else if ( number % 3 === 0 ) {
		answer = "fizz"
	} 
	else if ( number % 5 === 0 ) {
		answer = "buzz"
	} 
	else {
		answer = "number not divisible by 3 or 5"
	}

	return answer

} 

