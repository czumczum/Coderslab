function longestWord(stringToCheck) {
	if (typeof stringToCheck === "string") {
		var str = stringToCheck.split(" ");
		var longest = 0;
		var word = null;
		str.forEach(function (str) {
			if (longest < str.length) {
				longest = str.length;
				word = str;
			}
		})
		return word.length;
	} else {
		return -1;
	}
};

console.log(longestWord("Ala ma kota")); // => 4
console.log(longestWord("Lorem ipsum dolor sit amet")); // => 5
console.log(longestWord("test")); // => 4
console.log(longestWord(12)); // => -1
console.log(longestWord("Loremipsum dolorsit amet"));
