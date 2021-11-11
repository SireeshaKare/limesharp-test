//Test 1

const output1 = repeat([1, 2, 3]);
console.log(output1);

function repeat(array) {
  let outArray = [];
  outArray = array.concat(array);
  return outArray.concat(array);
}

/******************************************************************************************/

//Test 2

const output2 = reformat("liMeSHArp DeveLoper TEST");
console.log(output2);

function reformat(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  const strArray = str.split("");

  let outArray = [];

  for (let element of strArray) {
    if (!vowels.includes(element)) {
      outArray.push(element);
    }
  }

  for (let i = 0; i < outArray.length; i++) {
    if (i === 0) {
      outArray[i] = outArray[i].toUpperCase();
    }

    if (i !== 0) {
      outArray[i] = outArray[i].toLowerCase();
    }
  }

  return outArray.toString().replace(/,/g, "");
}

/******************************************************************************************/

//Test 3
console.log(next_binary_number([1, 0, 0, 0, 0, 0, 0, 0, 0, 1])); // [1,1]

// possible test cases:
// [1,0] => [1,1]
// [1,1] => [1,0,0]
// [1,1,0] => [1,1,1]
// .......
// [1,0,0,0,0,0,0,0,0,1] => [1,0,0,0,0,0,0,0,1,0]

function next_binary_number(arr) {
  let addArray = [],
    outArray = [],
    carry = 0;
  for (let i = 0; i < arr.length; i++) {
    i === arr.length - 1 ? addArray.push(1) : addArray.push(0);
  }
  for (let i = arr.length - 1; 0 <= i; --i) {
    let a = 0 <= i ? arr[i] : 0,
      b = 0 <= i ? addArray[i] : 0;
    outArray.push((a + b + carry) % 2);
    carry = 1 < a + b + carry;
  }
  if (carry) {
    outArray.push(1);
  }
  return outArray.reverse();
}
