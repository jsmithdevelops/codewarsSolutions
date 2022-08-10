// //My Code
// function mergeArrays(arr1, arr2) {
//   // combine two arrays
//   const combinedArray = arr1.concat(arr2)
//   const sortedCombinedArray = combinedArray.sort(function (a, b) {
//     return a - b
//   })
//   let uniqueCombinedArray = [...new Set(sortedCombinedArray)]
//   return uniqueCombinedArray
// }

//Best Answer Code

function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)))
}

// returns new Array from

mergeArrays([1, 2, 3, 0], [4, 11, 12, 1, 2])
