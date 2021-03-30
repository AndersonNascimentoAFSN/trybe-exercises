const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(arr, fn) {

  const newArray = [];
  for(let index = 0; index < arr.length; index += 1) {
    newArray.push(
      fn(arr[index])
      );
  }
  return newArray;
}

const lenArry = mapForEach(strArray, (item) => item.length);

// console.log(lenArry);
