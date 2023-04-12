function getMaxNumOfTrees(fruits) {
  let maxNumOfTrees = 0;

  for (let i = 0; i < fruits.length; i++) {
    let twoFruits = [];
    let numOfTrees = 0;

    for (let j = i; j < fruits.length; j++) {
      const fruit = fruits[j];
      if (!twoFruits.includes(fruit)) {
        twoFruits.push(fruit);
        if (twoFruits.length > 2) {
          break;
        }
      }
      numOfTrees++;
    }

    if (numOfTrees > maxNumOfTrees) {
      maxNumOfTrees = numOfTrees;
    }
  }

  return maxNumOfTrees;
}
