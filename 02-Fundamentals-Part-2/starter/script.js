'use strict' // strict mode activation

// function
function loggerGuy(log) {
  console.log(`This is your boss, ${log}.`)
}

// invoking / running / calling function
loggerGuy('Bakhtee')

// arrays
//  only primitive types are only not mutable

const friendsArray = ['A', 'B', 'J', 'B']

const friendsArray2 = new Array('A', 'B', 'J', 'B')

// adding a new element to the right
friendsArray.push('NEW element')
console.log(friendsArray)

// adding a new element to the left
friendsArray.unshift('NEW element to left')
console.log(friendsArray)

// removing a new element from the right
friendsArray.pop() // returns the last element
console.log(friendsArray)

friendsArray.shift() // removes the first element
console.log(friendsArray)

// objects
const johannes = {
  firstName: 'John',
  lastName: 'Gessler',
  age: 2024 - 1988,
  friends: ['Lucy', 'Kay', 'Nina']
}

// Dot and Brackets notation
const NAME = 'Name'
console.log(johannes['first' + NAME]) // we can write expressions inside the brackets, they will first be evaluated then the operation is done

// console.log(johannes.last + NAME) // ERROR: cannot write expressions with dot notation

// object methods
const man = {
  firstName: 'Ahmad',
  lastName: 'Ataya',
  birthDate: '1999',
  friends: ['Mohammad', 'Omar'],

  calcAge: function () {
    return 2024 - this.birthDate
  }
}

console.log(man.calcAge())
console.log(man['calcAge']())

// LEETCODE TRIPLETS MEDIUM
var threeSum = function (nums) {
  nums = nums.toSorted((a, b) => a - b)
  let triplets = []
  for (var i = 0; i < nums.length; i++) {
    for (var j = 1; j < nums.length; j++) {
      for (var k = 2; k < nums.length; k++) {
        if (
          i !== j &&
          j !== k &&
          i !== k &&
          nums[i] + nums[j] + nums[k] === 0 &&
          nums[i] <= nums[j] &&
          nums[j] <= nums[k]
        ) {
          if (!triplets.includes([nums[i], nums[j], nums[k]]))
            triplets.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
  return Array.from(
    new Set(triplets.map((triplet) => triplet.sort((a, b) => a - b).toString()))
  ).map((triplet) => triplet.split(',').map(Number))
}
console.log('Triplets', threeSum([-1, 0, 1, 2, -1, -4]))

//
