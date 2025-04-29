// const sentenceInput = document.getElementById('sentenceInput').value
// const errorMsg = document.getElementById('errorMsg')
// const result = document.getElementById('result')


function analyzeVowels() {
    const vowels = "aeiou";
    let count = 0; 
    const sentence = document.getElementById("sentenceInput").value;
    const result = document.getElementById("output");
    const errorMsg = document.getElementById("errorMsg");
  
    if (sentence.trim() === "") {
      errorMsg.style.display = "block";
      result.innerHTML = "";
    } else {
      errorMsg.style.display = "none";
      for (const char of sentence.toLowerCase()) {
        if (vowels.includes(char)) {
          count++;
        }
      }
      result.innerHTML = `Number of vowels: ${count}`;
    }
  }
  
  function getConsonantCount(sentence) {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;
  
    for (const char of sentence.toLowerCase()) {
      if (consonants.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const consonantCount = getConsonantCount("Coding is fun");
  console.log(`Consonant Count: ${consonantCount}`);
  
  function getPunctuationCount(sentence) {
    const punctuations = ".,!?;:-()[]{}\"'–";
    let count = 0;
  
    for (const char of sentence) {
      if (punctuations.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
  console.log(`Punctuation Count: ${punctuationCount}`);
  
  function getWordCount(sentence) {
    if (sentence.trim() === '') {
      return 0;
    }
    
    const words = sentence.trim().split(/\s+/);
    return words.length;
  }
  
  