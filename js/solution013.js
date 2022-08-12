//Return odd indexes of array

function removeEveryOther(arr) {
  return arr.filter(function (element, index) {
    return index % 2 === 0
  })
}
