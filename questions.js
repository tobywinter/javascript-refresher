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
  return 'Write your method here';
}

var getFirstHalf = function(string) {
  return 'Write your method here';
}

var makeNegative = function(number) {
  return 'Write your method here';
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

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
