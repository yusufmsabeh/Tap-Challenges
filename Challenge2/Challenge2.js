function majorityElements(array) {
  if (array.length <= 1 || array.length >= 5 * 10e4) return "invalid array";
  let uniqueArray = [...new Set(array)];
  let n = array.length / 2;
  let majorityElementsArray = [];
  let temp = 0;
  uniqueArray.forEach((element) => {
    array.forEach((element2) => {
      if (element == element2) temp++;
    });
    if (temp > n) majorityElementsArray.push(element);
    temp = 0;
  });

  return majorityElementsArray;
}

console.log(majorityElements([3, 2, 3]));
