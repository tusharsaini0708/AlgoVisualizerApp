var container = document.querySelector(".container");
var sortButton = document.querySelector(".sort");
var sortBubbleButton = document.querySelector(".bubbleSort");
var generateButton = document.querySelector(".generate");

var created = false;
var arrayLength = 200; //size of array
var height = new Array(arrayLength);

function createDiv() {
  created = true;
  for (let i = 0; i < height.length; i++) {
    const div = document.createElement("div");
    div.classList.add("element");
    div.style.height = `${(height[i] * 5) / 2}px`;
    container.appendChild(div);
  }
}

function sortDiv() {
  duplicate = [...height];
  for (let i = 0; i < height.length; i++)
    arr[i].style.height = `${(height[i] * 5) / 2}px`;
}
genArray();
let duplicate = [...height];
generateButton.addEventListener("click", genArray);

function genArray() {
  for (let i = 0; i < arrayLength; i++) {
    const random = Math.floor(Math.random() * (230 - 5) + 5);
    height[i] = random;
  }
  if (!created) createDiv();
  else sortDiv();
}

const arr = document.querySelectorAll(".element");

let counter = { count: 0 };

sortButton.addEventListener("click", () => {
  counter.count = 0;
  mergeSort(0, height.length - 1);
});

sortBubbleButton.addEventListener("click", () => {
  console.log(height);
  counter.count = 0;
  bubbleSort(counter);
});

console.log(height);

function animateWholeArray(counter) {
  for (let s = 0; s < height.length; s++) {
    ((s) => {
      counter.count = counter.count + 1;
      setTimeout(() => {
        // arr[s].style.backgroundImage = " linear-gradient(#5c258d,#4389a2)"; selecd
        // arr[s].style.backgroundImage = " linear-gradient(#1d976c,#93f9b9)"; // final
        arr[s].style.backgroundImage = " linear-gradient(#1d976c,#2A5044)"; // grand final
        //arr[s].style.backgroundImage = " linear-gradient(#cc2b5e,#753a88)";

        // arr[s].style.backgroundImage = " linear-gradient(#56ab2f,#a8e063)"; green choice
      }, 10 * counter.count);
    })(s);
  }
}

function bubbleSort(counter) {
  let i, j;
  for (i = 0; i < height.length; i++) {
    for (j = 0; j < height.length - 1 - i; j++) {
      ((i, j) => {
        counter.count = counter.count + 1;
        setTimeout(() => {
          arr[j + 1].style.backgroundImage = "linear-gradient(#F96E26,#F96E26)";
          arr[j].style.backgroundImage = "linear-gradient(#F96E26,#F96E26)";
          if (height[j] > height[j + 1]) {
            let temp = height[j];
            height[j] = height[j + 1];
            height[j + 1] = temp;
            arr[j + 1].style.height = `${(height[j + 1] * 5) / 2}px`;
            arr[j].style.height = `${(height[j] * 5) / 2}px`;
          }
          if (j == height.length - i - 1 - 1) {
            arr[j].style.backgroundImage = "linear-gradient(#cc2b5e, #753a88)";
            arr[j + 1].style.backgroundImage =
              "linear-gradient(#cc2b5e, #753a88)";
          }

          if (j != 1 && j != 0) {
            arr[j - 2].style.backgroundImage =
              "linear-gradient(#cc2b5e, #753a88)";
            arr[j - 1].style.backgroundImage =
              "linear-gradient(#cc2b5e, #753a88)";
          }
        }, 10 * counter.count);
      })(i, j);
    }
  }
  animateWholeArray(counter);
}

function mergeSort(i, j) {
  let mid = Math.floor((i + j) / 2);
  if (i < j) {
    mergeSort(i, mid);
    mergeSort(mid + 1, j);
    merge(i, mid, j, counter);
    if (i == 0 && j == height.length - 1) animateWholeArray(counter);
  }
}

function merge(i, mid, j, counter) {
  let index1 = i,
    index2 = mid + 1;
  let temp = new Array();
  let doNothing = new Array();

  while (index1 <= mid && index2 <= j) {
    ((index1, index2) => {
      counter.count = counter.count + 1;
      setTimeout(() => {
        // if (index1 != 0 && index2 != 0) {
        //   arr[index1 - 1].style.backgroundColor = "turquoise";
        //   arr[index2 - 1].style.backgroundColor = "turquoise";
        // }

        arr[index1].style.backgroundImage = "linear-gradient(#F96E26,#F96E26)";
        arr[index2].style.backgroundImage = "linear-gradient(#F96E26,#F96E26)";
        if (height[index1] < height[index2]) {
          temp.push(height[index1]);
        } else {
          temp.push(height[index2]);
        }
      }, 10 * counter.count);
    })(index1, index2);
    if (duplicate[index1] < duplicate[index2]) {
      doNothing.push(duplicate[index1]);
      index1++;
    } else {
      doNothing.push(duplicate[index2]);
      index2++;
    }
  }

  while (index1 <= mid) {
    ((index1, index2) => {
      counter.count = counter.count + 1;
      setTimeout(() => {
        temp.push(height[index1]);
      }, 10 * counter.count);
    })(index1, index2);
    doNothing.push(duplicate[index1]);
    index1++;
  }

  while (index2 <= j) {
    ((index1, index2) => {
      counter.count = counter.count + 1;
      setTimeout(() => {
        temp.push(height[index2]);
      }, 10 * counter.count);
    })(index1, index2);
    doNothing.push(duplicate[index2]);
    index2++;
  }
  for (var k = 0; k <= j - i; k++) {
    ((k) => {
      counter.count = counter.count + 1;
      setTimeout(() => {
        height[i + k] = temp[k];
        arr[i + k].style.backgroundImage = "linear-gradient(#cc2b5e, #753a88)";
        //arr[index2].style.backgroundColor = "turquoise";
        arr[i + k].style.height = `${(height[i + k] * 5) / 2}px`;
        //original array height change
      }, 10 * counter.count);
    })(k);
  }

  for (let k1 = 0; k1 <= j - i; k1++) duplicate[i + k1] = doNothing[k1];
}
