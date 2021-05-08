function bubbleSort(height, arr, timer, counter) {
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
}

export default bubbleSort;
