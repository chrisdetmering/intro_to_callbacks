const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the

  reader.question(`Is ${el1} > ${el2}? `, (ans) => {
    callback(ans == 'yes');
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if (i == (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
    return; 
  } else {

    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {

      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]

        madeAnySwaps = true; 
      } 
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
      
    });
  }

}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
  
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
    } else {
      sortCompletionCallback(arr)
    }

  }

  outerBubbleSortLoop(true)
}

absurdBubbleSort([4, 3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
