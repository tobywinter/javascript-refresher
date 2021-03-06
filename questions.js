var selectElementsStartingWithA = function(array) {
  return array.filter(function(element) {
    return (element[0] == 'a' || element[0] == 'A');
  });
};

var selectElementsStartingWithVowel = function(array) {
  return array.filter(function(element) {
    return ['a','e', 'i', 'o', 'u'].includes(element[0]);
  });
};

var removeNullElements = function(array) {
  return array.filter(function(element) {
    return element !== null;
  });
};

var removeNullAndFalseElements = function(array) {
  return array.filter(function(element) {
    return element !== false && element !== null;
  });
};

var reverseWordsInArray = function(array) {
  return array.map(function(element) {
    return element.split('').reverse().join('');
  });
};

var everyPossiblePair = function(array) {
  var result = [];
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i; j < array.length -1; j++) {
      result.push([array[i], array[j+1]].sort());
    }
  }
  return result.sort();
};

var allElementsExceptFirstThree = function(array) {
  return array.filter(function(element) {
    return array.indexOf(element) > 2;
  });
};

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
};

var sortByLastLetter = function(array) {
  var reversed = reverseWordsInArray(array);
  return reverseWordsInArray(reversed.sort());
};

// var getFirstHalf = function(string) {
//   var halfLength = Math.ceil(string.length / 2);
// };

var makeNegative = function(number) {
  return parseInt('-'+number);
};

// var numberOfPalindromes = function(array) {
//
// };

var shortestWord = function(array) {
  return array.reduce(function(a, b) {
    return (a.length <= b.length) ? a : b;
  });
};

var longestWord = function(array) {
  return array.reduce(function(a, b) {
    return (a.length >= b.length) ? a : b;
  });
};

var sumNumbers = function(array) {
  return array.reduce(function(a, b){
    return a + b;
  });
};

var repeatElements = function(array) {
  return (array+','+array).split(',');
};

var stringToNumber = function(string) {
  return parseInt(string);
};

var calculateAverage = function(array) {
  var sum = sumNumbers(array);
  return (sum / array.length);
};

var getElementsUntilGreaterThanFive = function(array) {
  result = [];
  for (i = 0; array[i] <= 5; i++) {
    result.push(array[i]);
  }
  return result;
};

var convertArrayToObject = function(array) {
  var o = {};
  for (var i = 0; i < array.length; i += 2){
    o[array[i]] = array[i + 1];
  }
  return o;
};

var getAllLetters = function(array) {
  characters = [];
  for (var i = 0; i < array.length; i ++){
    characters.push(array[i].split(''));
  }
  var flatten = [].concat.apply([], characters);
  var sorted = flatten.sort();
  var unique = Array.from(new Set(sorted));
  return unique;
};

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
