var container = document.querySelector(".container");
var sortButton = document.querySelector(".sortButton");
var height = new Array();

function createDiv() {
  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.classList.add("element");
    div.style.height = `${(height[i] * 5) / 2}px`;
    container.appendChild(div);
  }
}

genArray();

function genArray() {
  for (let i = 0; i < 100; i++) {
    const random = Math.floor(Math.random() * 200);
    height.push(random);
  }
  createDiv();
}

const arr = document.querySelectorAll(".element");

sortButton.addEventListener("click", bubbleSort);

function bubbleSort() {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 99 - i; j++) {
      ((i, j) => {
        setTimeout(() => {
          arr[j + 1].style.backgroundColor = "green";
          arr[j].style.backgroundColor = "green";
          if (height[j] > height[j + 1]) {
            let temp = height[j];
            height[j] = height[j + 1];
            height[j + 1] = temp;
            arr[j + 1].style.height = `${(height[j + 1] * 5) / 2}px`;
            arr[j].style.height = `${(height[j] * 5) / 2}px`;
          }
          if (j == 99 - i - 1) {
            arr[j].style.backgroundColor = "turquoise";
            arr[j + 1].style.backgroundColor = "turquoise";
          }

          if (j != 1 && j != 0) {
            arr[j - 2].style.backgroundColor = "turquoise";
            arr[j - 1].style.backgroundColor = "turquoise";
          }
        }, 500 * i + 5 * j);
      })(i, j);
    }
  }
}
