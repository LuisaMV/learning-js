var printTables = function(number) {
  for (var i = 1; i <= number; i++) {
    for (var j = 1; j <= 10; j++) {
      console.log('' + i + 'x' + j + '=' + (i * j));
    }
  }
}

printTables(10);

/*
i=1  j=1
1x1 = 1
i = 1 j = 2
1 x 2 = 2
i = 1 j = 3
1 x3 = 3
...
1 x 10 = 10

i = 2 j = 1
2 x 1 = 2
i = 2 j = 2
2 x 2 = 4

var printNumbers = function() {
	for (var i = 1; i <= 10; i++ ) {
		console.log('' + '2' + 'x' + i + '=' + (i + i));
	}
}
	
printNumbers();

var printNumbers = function() {
  for (var i = 1; i <= 10; i++ ) {
    console.log('' + '3' + 'x' + i + '=' + (i + i + i));
  }
}
  
printNumbers();

var printNumbers = function() {
  for (var i = 1; i <= 10; i++ ) {
    console.log('' + '4' + 'x' + i + '=' + (i + i + i + i));
  }
}
  
printNumbers();

var printNumbers = function() {
  for (var i = 1; i <= 10; i++ ) {
    console.log('' + '5' + 'x' + i + '=' + (i + i + i + i + i));
  }
}
  
printNumbers();

var printNumbers = function() {
  for (var i = 1; i <= 10; i++ ) {
    console.log('' + '6' + 'x' + i + '=' + (i + i + i + i + i + i));
  }
}
  
printNumbers();

var printNumbers = function() {
  for (var i = 1; i <= 10; i++ ) {
    console.log('' + '7' + 'x' + i + '=' + (i + i + i + i + i + i + i));
  }
}
  
printNumbers();

var printNumbers = function() {
  for (var i = 1; i <= 10; i++ ) {
    console.log('' + '8' + 'x' + i + '=' + (i + i + i + i + i + i + i + i));
  }
}
  
printNumbers();

var printNumbers = function() {
  for (var i = 1; i <= 10; i++ ) {
    console.log('' + '9' + 'x' + i + '=' + (i + i + i + i + i + i + i + i + i));
  }
}
  
printNumbers();

var printNumbers = function() {
  for (var i = 1; i <= 10; i++ ) {
    console.log('' + '10' + 'x' + i + '=' + (i + i + i + i + i + i + i + i + i + i));
  }
}
  
printNumbers();
*/