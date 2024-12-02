const section1 = document.querySelector("#section-1");
const testButton = document.querySelector("#test-button");

testButton.addEventListener("click", () => {
    const newText = document.createElement("p");
    newText.textContent = "surprise!";
    section1.insertBefore(newText, testButton);
});

const section2 = document.querySelector("#section-2");
const textInput = document.querySelector("#text-input");
const printButton = document.querySelector("#print-button");

printButton.addEventListener("click", () => {
    const input = textInput.value;
    const printInput = document.createElement("p");
    printInput.textContent = `${input}`;
    section2.appendChild(printInput);
});

const section3 = document.querySelector("#section-3");

