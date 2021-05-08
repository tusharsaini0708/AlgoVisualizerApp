import bubbleSort from "./Algorithms/bubbleSort.js";
import mergeSort from "./Algorithms/mergeSort.js";
import quickSort from "./Algorithms/quickSort.js";
import insertionSort from "./Algorithms/insertionSort.js";

var container = document.querySelector(".container");
var sortMergeButton = document.querySelector(".mergeSort");
var sortBubbleButton = document.querySelector(".bubbleSort");
var sortQuickButton = document.querySelector(".quickSort");
var sortInsertionButton = document.querySelector(".insertionSort");
var generateButton = document.querySelector(".generate");
var speedRange = document.querySelector(".speed");
var arraySize = document.querySelector(".arraySize");
var arrayLength = 200;
var timer = 101 - speedRange.value;
var created = false;
var height = new Array(arrayLength);

// only for responsive width
let tempWidth;
window.addEventListener("resize", function () {
  tempWidth = (container.clientWidth - arrayLength) / arrayLength; // 1px margin separating
  for (let i = 0; i < height.length; i++) arr[i].style.width = `${tempWidth}px`;
});

//Random Array generator

genArray();
generateButton.addEventListener("click", genArray);
let duplicate = [...height];

function genArray() {
  for (let i = 0; i < arrayLength; i++) {
    const random = Math.floor(Math.random() * (200 - 5) + 5);
    height[i] = random;
  }
  if (!created) createDiv();
  else sortDiv();
}

function createDiv() {
  created = true;
  for (let i = 0; i < height.length; i++) {
    const div = document.createElement("div");
    div.classList.add("element");
    tempWidth = (container.clientWidth - arrayLength) / arrayLength; // 1px margin separating
    div.style.width = `${tempWidth}px`;
    div.style.height = `${(height[i] * 5) / 2}px`;
    container.appendChild(div);
  }
}

function removeDiv() {
  const div = document.querySelectorAll(".element");
  for (let i = 0; i < height.length; i++) {
    container.removeChild(div[i]);
  }
}

function sortDiv() {
  duplicate = [...height];
  for (let i = 0; i < height.length; i++) {
    arr[i].style.backgroundImage = "linear-gradient(#cc2b5e, #753a88)";
    arr[i].style.height = `${(height[i] * 5) / 2}px`;
  }
}

// speed and size handler
speedRange.addEventListener("input", () => {
  timer = 101 - speedRange.value;
});

arraySize.addEventListener("input", () => {
  removeDiv();
  sortMergeButton.disabled = false;
  sortBubbleButton.disabled = false;
  sortQuickButton.disabled = false;
  sortInsertionButton.disabled = false;
  generateButton.disabled = false;
  arrayLength = arraySize.value;
  created = false;
  height = new Array(arrayLength);
  genArray();
  duplicate = [...height];
  arr = document.querySelectorAll(".element");
});

var arr = document.querySelectorAll(".element");
let counter = { count: 0 };

//Button click handler
sortMergeButton.addEventListener("click", () => {
  counter.count = 0;
  sortBubbleButton.disabled = true;
  sortQuickButton.disabled = true;
  sortInsertionButton.disabled = true;
  generateButton.disabled = true;
  mergeSort(0, height.length - 1, arr, height, timer, counter, duplicate);
  animateWholeArray(counter);
});

sortQuickButton.addEventListener("click", () => {
  counter.count = 0;

  sortBubbleButton.disabled = true;
  sortMergeButton.disabled = true;
  sortInsertionButton.disabled = true;
  generateButton.disabled = true;
  quickSort(0, height.length - 1, height, arr, timer, counter, duplicate);
  animateWholeArray(counter);
});

sortBubbleButton.addEventListener("click", () => {
  counter.count = 0;

  sortMergeButton.disabled = true;
  sortQuickButton.disabled = true;
  sortInsertionButton.disabled = true;
  generateButton.disabled = true;
  bubbleSort(height, arr, timer, counter);
  animateWholeArray(counter);
});

sortInsertionButton.addEventListener("click", () => {
  counter.count = 0;

  sortBubbleButton.disabled = true;
  sortQuickButton.disabled = true;
  sortMergeButton.disabled = true;
  generateButton.disabled = true;
  insertionSort(height, arr, timer, counter);
  animateWholeArray(counter);
});

//Animate Array after sorting complete
function animateWholeArray(counter) {
  for (let s = 0; s < height.length; s++) {
    ((s) => {
      counter.count = counter.count + 1;
      setTimeout(() => {
        arr[s].style.backgroundImage = " linear-gradient(#1d976c,#2A5044)"; // grand final
        sortMergeButton.disabled = false;
        sortBubbleButton.disabled = false;
        sortQuickButton.disabled = false;
        sortInsertionButton.disabled = false;
        generateButton.disabled = false;
      }, timer * counter.count);
    })(s);
  }
}
