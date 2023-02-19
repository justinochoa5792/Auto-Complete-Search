let inputBox = document.getElementById("input-box");
let resultBox = document.querySelector(".result-box");
let available = [
  "HTML",
  "CSS",
  "Javascript",
  "Web development",
  "How to create a website",
];

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = available.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  displayResult(result);

  if (!result.length) {
    resultBox.innerHTML = "";
  }
};

function displayResult(result) {
  const content = result.map((el) => {
    return `<li onclick='chooseOption(this)'>${el}<li>`;
  });
  resultBox.innerHTML = `
  <ul>${content.join("")}</ul>
  `;
}

function chooseOption(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}
