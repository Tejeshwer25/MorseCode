const inputBtn_button = document.getElementById('submit');
const inputText_textarea = document.getElementById('input_text');
const outputText_div = document.getElementById('output');

inputBtn_button.addEventListener('click', () => {showOutput(); });

async function showOutput() {
    let text = inputText_textarea.value;
    text = text.trim()

    if(text === '') {
        outputText_div.textContent = "Please enter something except spaces!!"
    } else {
        let output = await getOutput(text);
        outputText_div.textContent = output;
    }
}

async function getOutput(text) {
    let res = await fetch(`https://api.funtranslations.com/translate/morse.json?text=${text}`);
    let data;

    if(res.status !== 200) {
        let msg = "Unable to fetch the result due to some issue with API..."
        return msg;
    } else {
        data = await res.json();
    }

    return data.contents.translated
}