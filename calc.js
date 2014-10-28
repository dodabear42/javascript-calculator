$(document).ready(function() {

	function show_button() {
		$('.number-button,.operand-button').click(function() {
			var clicked = $(this).html();
			$('#viewscreen').text(clicked);
		});
	}

	var num1 = show_button();
	var num2 = show_button();
	var operand = show_button();

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	function add(num1, num2) {
	    result = (num1 + num2);
	    return result;
	}
	function multiply(num1, num2) {
	    result = (num1 * num2);
	    return result;
	}
	function divide(num1, num2) {
	    result = (num1 / num2);
	    return result;
	}
	function subtract(num1, num2) {
	    result = (num1 - num2);
	    return result;
	}

	function equals() {
			$('#equals-button').click(function(operand) {
			if(operand === '+') {
				result = add(num1,num2);
			} else if(operand === 'X') {
				result = multiply(num1, num2);
			} else if(operand === '-') {
				result = subtract(num1, num2);
			} else if(operand === '/') {
				result = divide(num1, num2);
			} else {
				result = 'error';
			}
			$('viewscreen').text(result);
		});
	}
});