function getNumOfGoodStartingIndies(arr) {
  let answer = 0;
  let arrLength = arr.length;

  for (let startingIndex = 0; startingIndex < arrLength; startingIndex++) {
    if (startingIndex === arrLength - 1) {
      answer++;
      break;
    }

    let currentIndex = startingIndex;
    let isOddJump = true;

    while (currentIndex !== -1) {
      if (isOddJump) {
        currentIndex = arr.findIndex(
          (value, index) => index > currentIndex && value >= arr[currentIndex],
        );
      } else {
        currentIndex = arr.findIndex(
          (value, index) => index > currentIndex && value <= arr[currentIndex],
        );
      }

      if (currentIndex === arrLength - 1) {
        answer++;
        break;
      }
      isOddJump = !isOddJump;
    }
  }

  return answer;
}
