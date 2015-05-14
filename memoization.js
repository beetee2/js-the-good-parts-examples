var noMemoization = (function() {
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


var goodMemoization = (function() {
	var fibonacciCallCount = 0;

	var fibonacci = (function ( ) {
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

		return {
			fib: fib
		};

	}( ));

	for (var i = 0; i <= 10; i += 1) {
	 document.getElementById('memoization-good').innerHTML += '// ' + i + ': ' + fibonacci.fib(i) + '<br />';
	}

	document.getElementById('memoization-good').innerHTML += '<br />' + 'FibonacciCallCount: ' + fibonacciCallCount;
})();

var memoizer = (function() {

	var fib = (function() {

		var memoizer = function (memo, formula) {
			var recur = function (n) {
				var result = memo[n];
				
				if (typeof result !== 'number') {
					result = formula(recur, n);
					memo[n] = result;
				}
				return result;
			};
			return recur;
		};

	
		var fibonacci = memoizer([0, 1], function (recur, n) {
			return recur(n - 1) + recur(n - 2);
		});

		return {
			fibonacci: fibonacci
		};
	})();
	

	for (var i = 0; i <= 10; i += 1) {
	 document.getElementById('memoization-memoizer').innerHTML += '// ' + i + ': ' + fib.fibonacci(i) + '<br />';
	}
})();