const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const inputText = document.querySelector('.input-text');
const vowels = ['a', 'e', 'i', 'o', 'u'];

btn.addEventListener('click', vowelCounter);

function vowelCounter() {
  const input = inputText.value.toLowerCase();
  const newInput = [...new Set(input)];
  const len = newInput.length;
  const vowelsLen = vowels.length;
  let vowelCount = 0;
  

  if (!input) {
    output.textContent = `Please enter a word`;
  } else {
    for (i = 0; i < len; i++) {
    for (j = 0; j < vowelsLen; j++) {
      if (newInput[i] === vowels[j]) {
          vowelCount++;
        }
      }
    }
    const plural = vowelCount > 1 ? 'vowels' : 'vowel';
    output.textContent = `${input} has ${vowelCount} ${plural}.`
  }
}
