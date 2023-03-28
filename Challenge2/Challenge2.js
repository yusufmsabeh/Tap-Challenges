function majorityElements(array) {
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
