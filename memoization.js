var badFibonacci = (function() {
	var fibonacciCallCount = 0;

	var fibonacci = function (n) {
	 var result = n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
	 fibonacciCallCount++;
	 return result;
	};

	for (var i = 0; i <= 10; i += 1) {
	 document.getElementById('no-memoization-bad').innerHTML += '// ' + i + ': ' + fibonacci(i) + '<br />';
	}

	document.getElementById('no-memoization-bad').innerHTML += '<br />' + 'FibonacciCallCount: ' + fibonacciCallCount;
})();

var fibonacci = (function ( ) {
	var fibonacciCallCount = 0;
	var memo = [0, 1];

	var fib = function (n) {
		fibonacciCallCount++;
		var result = memo[n];

		if (typeof result !== 'number') {
		 	result = fib(n - 1) + fib(n - 2);
			memo[n] = result;
		}

		return result;
	};
	
	document.getElementById('memoization-good').innerHTML += '<br />' + 'FibonacciCallCount: ' + fibonacciCallCount;
 	return fib;
})();