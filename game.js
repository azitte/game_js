let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guess');
    const guess = Number(guessInput.value);
    const result = document.getElementById('result');
    attempts++;

    if (guess === randomNumber) {
        result.textContent = `정답입니다! ${attempts}번 시도했습니다.`;
        result.style.color = 'green';
    } else if (guess > randomNumber) {
        result.textContent = '너무 높습니다.';
        result.style.color = 'red';
    } else {
        result.textContent = '너무 낮습니다.';
        result.style.color = 'red';
    }

    guessInput.value = '';
    guessInput.focus();
}
