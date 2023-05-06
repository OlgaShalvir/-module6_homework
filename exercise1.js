let array = [2, 4, 5, 6, 7, 8, 9, 0, 0, 'a', null, undefined, false];

function countEvenOddZero(array) {
  let even = 0;
  let odd = 0;
  let zero = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && !isNaN(array[i])) {
      if (array[i] === 0) {
        zero++;
      } else if (array[i] % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
  }

  console.log(`Количество четных элементов ${even}, нечетных ${odd} и нулевых ${zero}`)
}

countEvenOddZero(array); 

