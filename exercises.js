const testNum = number => {
  if(number > 10) {
    const myString = `${number} is greater than 10, success!`;
    return Promise.resolve(myString);
  } else {
    const myString = `${number} is less than 10, error!`;
    return Promise.reject(myString);
  }
}

// testNum(8)
    // .then( result => console.log(result))
    // .catch(error => console.log(error))

const makeAllCaps = wordArr => {
  const uppercased = wordArr.map( word => {
    if (typeof word === 'string') {
      return Promise.resolve(word.toUpperCase());
    } else {
      return Promise.reject('No, the array you passed in contained an element that was not a string!');
    }
  })
  return Promise.all(uppercased);
}

const sortWords = words => {
  const sorted = words.sort();
  return Promise.resolve(sorted)
}

// makeAllCaps(['wowow', 'pants', 'bird'])
//   .then(words => sortWords(words))
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

makeAllCaps(['wowow', 5, 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))


