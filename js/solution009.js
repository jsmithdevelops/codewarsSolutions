function minValue(values) {
  let uniqueValues = [...new Set(values)]

  let sortedUniqueValues = uniqueValues.sort((a, b) => a - b).join("")
  return parseInt(sortedUniqueValues)
}

minValue([2, 1, 2])

//best solution

// function minValue(values) {
//   let arr = Array.from(new Set(values))
//   return parseInt(arr.sort().join(""))
// }
