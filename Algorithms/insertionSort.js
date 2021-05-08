function insertionSort(height, arr, timer, counter) {
  let duplicate = [...height];
  for (let i = 0; i < height.length; i++) {
    let index = i;
    while (1) {
      if (duplicate[index] < duplicate[index - 1] && index != 0) {
        let temp = duplicate[index];
        duplicate[index] = duplicate[index - 1];
        duplicate[index - 1] = temp;

        ((index) => {
          counter.count = counter.count + 1;
          setTimeout(() => {
            let temp = height[index];
            height[index] = height[index - 1];
            height[index - 1] = temp;
            arr[index].style.height = `${(height[index] * 5) / 2}px`;
            arr[index - 1].style.height = `${(height[index - 1] * 5) / 2}px`;
            arr[index].style.backgroundImage =
              "linear-gradient(#cc2b5e, #753a88)";
            arr[index - 1].style.backgroundImage =
              "linear-gradient(#F96E26,#F96E26)";
          }, timer * counter.count);
        })(index);
      } else {
        (() => {
          counter.count = counter.count + 1;
          setTimeout(() => {
            arr[index].style.backgroundImage =
              "linear-gradient(#cc2b5e, #753a88)";
          }, timer * counter.count);
        })(index);
        break;
      }
      index--;
    }
  }
}

export default insertionSort;
