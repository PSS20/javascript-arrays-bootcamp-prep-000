var chocolateBars = [snickers, hundred grand, kitkat, skittles]

function addElementToBeginningOfArray(array,element) {
  var newarray = (element,...array)
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array = [element,...array]
  return array
}

function addElementToBeginningOfArray(array,element) {
  var newarray = [...array, element]
  return newarray
}