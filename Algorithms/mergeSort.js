function mergeSort(i, j, arr, height, timer, counter, duplicate) {
  let mid = Math.floor((i + j) / 2);
  if (i < j) {
    mergeSort(i, mid, arr, height, timer, counter, duplicate);
    mergeSort(mid + 1, j, arr, height, timer, counter, duplicate);
    merge(i, mid, j, arr, height, timer, counter, duplicate);
  }
}

function merge(i, mid, j, arr, height, timer, counter, duplicate) {
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
        //original array
        arr[i + k].style.backgroundImage = "linear-gradient(#cc2b5e, #753a88)";
        arr[i + k].style.height = `${(height[i + k] * 5) / 2}px`;
      }, timer * counter.count);
    })(k);
  }

  for (let k1 = 0; k1 <= j - i; k1++) duplicate[i + k1] = doNothing[k1];
}

export default mergeSort;
