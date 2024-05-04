function ucFirstLetters(sentence) {
    // Split the sentence into words
    let words = sentence.split(" ");

    // Capitalize the first letter of each word
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the words back into a sentence
    let capitalizedSentence = capitalizedWords.join(" ");

    return capitalizedSentence;
}

// Example usage:
let sentence = "this is a test sentence";
let result = ucFirstLetters(sentence);
console.log(result); // Output: "This Is A Test Sentence"
