function quickSort(l, h, height, arr, timer, counter, duplicate) {
  if (l < h) {
    let pivot = partision(l, h, height, arr, timer, counter, duplicate);
    quickSort(l, pivot - 1, height, arr, timer, counter, duplicate);
    quickSort(pivot + 1, h, height, arr, timer, counter, duplicate);
  }
}

function partision(l, h, height, arr, timer, counter, duplicate) {
  let pivot = duplicate[l];
  let i = l;
  let j = h;

  while (i < j) {
    while (duplicate[i] <= pivot) {
      ((i) => {
        counter.count = counter.count + 1;
        setTimeout(() => {
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
      arr[j].style.backgroundImage = "linear-gradient(#cc2b5e, #753a88)";
      if (j != 0)
        arr[j - 1].style.backgroundImage = "linear-gradient(#cc2b5e, #753a88)";
    }, timer * counter.count);
  })(l, j);

  return j;
}

export default quickSort;
