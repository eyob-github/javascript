function countBoomerangs(numbers) {
  let count = 0;
  for (let i = 0; i <= numbers.length - 2; i++) {
    if (numbers[i] == numbers[i + 2] && numbers[i] !== numbers[i + 1]) {
      count++;
    }
  }
  console.log(`You have ${count} boomerang numbers`);
}

countBoomerangs([9, 5, 9, 5, 1, 1, 1]);
countBoomerangs([5, 6, 6, 7, 6, 3, 9]);
countBoomerangs([4, 4, 4, 9, 9, 9, 9]);
countBoomerangs([1, 2, 1, 3, 4, 3]);
