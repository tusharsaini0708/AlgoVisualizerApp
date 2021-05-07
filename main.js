var container = document.querySelector(".container");
var sortMergeButton = document.querySelector(".mergeSort");
var sortBubbleButton = document.querySelector(".bubbleSort");
var sortQuickButton = document.querySelector(".quickSort");
var generateButton = document.querySelector(".generate");
var speedRange = document.querySelector(".speed");
var arraySize = document.querySelector(".arraySize");
var arrayLength = 200;

arraySize.addEventListener("input", () => {
  removeDiv();
  arrayLength = arraySize.value;
  created = false;
  height = new Array(arrayLength);
  genArray();
  duplicate = [...height];
  arr = document.querySelectorAll(".element");
});

function removeDiv() {
  const div = document.querySelectorAll(".element");
  for (let i = 0; i < height.length; i++) {
    container.removeChild(div[i]);
  }
}

var timer = 101 - speedRange.value;
console.log(timer);
speedRange.addEventListener("input", () => {
  timer = 101 - speedRange.value;
});

var created = false;
var arrayLength = 200; //size of array
var height = new Array(arrayLength);

// only for responsive width
let tempWidth;
window.addEventListener("resize", function () {
  tempWidth = (container.clientWidth - arrayLength) / arrayLength; // 1px margin separating
  for (let i = 0; i < height.length; i++) arr[i].style.width = `${tempWidth}px`;
});

function createDiv() {
  created = true;
  for (let i = 0; i < height.length; i++) {
    const div = document.createElement("div");
    div.classList.add("element");
    tempWidth = (container.clientWidth - arrayLength) / arrayLength; // 1px margin separating
    // div.style.width = `${100 / arrayLength}%`;
    div.style.width = `${tempWidth}px`;
    div.style.height = `${(height[i] * 5) / 2}px`;
    container.appendChild(div);
  }
}

function sortDiv() {
  duplicate = [...height];
  for (let i = 0; i < height.length; i++) {
    arr[i].style.backgroundImage = "linear-gradient(#cc2b5e, #753a88)";
    arr[i].style.height = `${(height[i] * 5) / 2}px`;
  }
}
genArray();
let duplicate = [...height];
generateButton.addEventListener("click", genArray);

function genArray() {
  for (let i = 0; i < arrayLength; i++) {
    const random = Math.floor(Math.random() * (200 - 5) + 5);
    height[i] = random;
  }
  if (!created) createDiv();
  else sortDiv();
}

var arr = document.querySelectorAll(".element");

let counter = { count: 0 };

sortMergeButton.addEventListener("click", () => {
  counter.count = 0;
  mergeSort(0, height.length - 1);
});

sortQuickButton.addEventListener("click", () => {
  counter.count = 0;
  quickSort(0, height.length - 1);
});

sortBubbleButton.addEventListener("click", () => {
  console.log(height);
  counter.count = 0;
  bubbleSort(counter);
});

// console.log(height);

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
      }, timer * counter.count);
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
        }, timer * counter.count);
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
        if (index1 != 0 && index2 != 0) {
          arr[index1 - 1].style.backgroundImage =
            "linear-gradient(#cc2b5e, #753a88)";
          arr[index2 - 1].style.backgroundImage =
            "linear-gradient(#cc2b5e, #753a88)";
        }

        arr[index1].style.backgroundImage = "linear-gradient(#F96E26,#F96E26)";
        arr[index2].style.backgroundImage = "linear-gradient(#F96E26,#F96E26)";
        if (height[index1] < height[index2]) {
          temp.push(height[index1]);
        } else {
          temp.push(height[index2]);
        }
      }, timer * counter.count);
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
      }, timer * counter.count);
    })(index1, index2);
    doNothing.push(duplicate[index1]);
    index1++;
  }

  while (index2 <= j) {
    ((index1, index2) => {
      counter.count = counter.count + 1;
      setTimeout(() => {
        temp.push(height[index2]);
      }, timer * counter.count);
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
      }, timer * counter.count);
    })(k);
  }

  for (let k1 = 0; k1 <= j - i; k1++) duplicate[i + k1] = doNothing[k1];
}

function quickSort(l, h) {
  if (l < h) {
    let pivot = partision(l, h, counter);
    quickSort(l, pivot - 1);
    quickSort(pivot + 1, h);
  }
  if (l == 0 && h == height.length - 1) animateWholeArray(counter);
}

function partision(l, h, counter) {
  let pivot = duplicate[l];
  let i = l;
  let j = h;

  while (i < j) {
    while (duplicate[i] <= pivot) {
      ((i) => {
        counter.count = counter.count + 1;
        setTimeout(() => {
          // if (i != 0)
          //   arr[i - 1].style.backgroundImage = "linear-gradient(blue,black)";
          // arr[i].style.backgroundImage = "linear-gradient(blue,red)";
          arr[i].style.backgroundImage = "linear-gradient(#cc2b5e, #753a88)";
          if (i != height.length - 1)
            arr[i + 1].style.backgroundImage =
              "linear-gradient(#F96E26,#F96E26)";
        }, timer * counter.count);
      })(i);
      i++;
    }

    while (duplicate[j] > pivot) {
      ((j) => {
        counter.count = counter.count + 1;
        setTimeout(() => {
          // if (j != height.length - 1)
          //   arr[j + 1].style.backgroundImage = "linear-gradient(blue,black)";
          // arr[j].style.backgroundImage = "linear-gradient(blue,red)";
          //if (j != height.length - 1)
          arr[j].style.backgroundImage = "linear-gradient(#cc2b5e, #753a88)";
          if (j != 0)
            arr[j - 1].style.backgroundImage =
              "linear-gradient(#F96E26,#F96E26)";
        }, timer * counter.count);
      })(j);
      j--;
    }

    if (i < j) {
      let temp = duplicate[i];
      duplicate[i] = duplicate[j];
      duplicate[j] = temp;
      ((i, j) => {
        // console.log(height[i], height[j]);
        counter.count = counter.count + 1;
        setTimeout(() => {
          let temp = height[i];
          height[i] = height[j];
          height[j] = temp;
          arr[i].style.backgroundImage = "linear-gradient(#F96E26,#F96E26)";
          arr[j].style.backgroundImage = "linear-gradient(#F96E26,#F96E26)";
          arr[i].style.height = `${(height[i] * 5) / 2}px`;
          arr[j].style.height = `${(height[j] * 5) / 2}px`;
        }, timer * counter.count);
      })(i, j);
    }
  }

  let temp = duplicate[l];
  duplicate[l] = duplicate[j];
  duplicate[j] = temp;

  ((l, j) => {
    counter.count = counter.count + 1;
    setTimeout(() => {
      let temp = height[l];
      height[l] = height[j];
      height[j] = temp;

      arr[l].style.backgroundImage = "linear-gradient(#F96E26,#F96E26)";
      arr[j].style.backgroundImage = "linear-gradient(#F96E26,#F96E26)";

      arr[l].style.height = `${(height[l] * 5) / 2}px`;
      arr[j].style.height = `${(height[j] * 5) / 2}px`;
    }, timer * counter.count);

    counter.count = counter.count + 1;
    setTimeout(() => {
      if (i != height.length)
        arr[i].style.backgroundImage = "linear-gradient(#cc2b5e, #753a88)";
      // arr[i - 1].style.backgroundImage = "linear-gradient(blue,black)";
      // arr[i + 1].style.backgroundImage = "linear-gradient(blue,black)";
      // arr[j + 1].style.backgroundImage = "linear-gradient(blue,black)";
      arr[j].style.backgroundImage = "linear-gradient(#cc2b5e, #753a88)";
      if (j != 0)
        arr[j - 1].style.backgroundImage = "linear-gradient(#cc2b5e, #753a88)";
    }, timer * counter.count);
  })(l, j);

  return j;
}

//gfg code
// function partision(low, high) {
//   // pivot (Element to be placed at right position)
//   let pivot = some[high];

//   let i = low - 1; // Index of smaller element and indicates the
//   // right position of pivot found so far

//   for (let j = low; j <= high - 1; j++) {
//     // If current element is smaller than the pivot
//     if (some[j] < pivot) {
//       i++; // increment index of smaller element
//       let temp = some[i];
//       some[i] = some[j];
//       some[j] = temp;

//       // swap some[i] and some[j]
//     }
//   }

//   let temp = some[i + 1];
//   some[i + 1] = some[high];
//   some[high] = temp;

//   // swap arr[i + 1] and arr[high])
//   return i + 1;
// }
