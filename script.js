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

function analyzeConsonants() {
  const consonants = "bcdfghjklmnpqrstvwxyz";
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
      if (consonants.includes(char)) {
        count++;
      }
    }
    result.innerHTML = `Number of consonants: ${count}`;
  }
}



function analyzePunctuation() {
    const punctuations = ".,!?;:-()[]{}\"'–";
    let count = 0;
  
    const sentence = document.getElementById("sentenceInput").value;
    const result = document.getElementById("output");
    const errorMsg = document.getElementById("errorMsg");
  
    if (sentence.trim() === "") {
      errorMsg.style.display = "block";
      result.innerHTML = "";
    } else {
      errorMsg.style.display = "none";
      for (const char of sentence) {
        if (punctuations.includes(char)) {
          count++;
        }
      }
      result.innerHTML = `Number of punctuations: ${count}`;
    }
  }
  

function getWordCount(sentence) {
  if (sentence.trim() === "") {
    return 0;
  }

  const words = sentence.trim().split(/\s+/);
  return words.length;
}
