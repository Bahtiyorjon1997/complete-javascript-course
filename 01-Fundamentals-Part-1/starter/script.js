// type conversion - manual conversion
const age = '12'
console.log(typeof Number(age))

// type coercion - types get converted automatically by the js under the hood
console.log(12 + '21') // result -> "1221"

console.log('12' - 21) // result -> -9

// truthy and falsy values
// there is 5 falsy values in JS: 0, "", null, undefined, NaN
console.log("''", Boolean(''))
console.log(0, Boolean(0))
console.log('[]', Boolean([]))

// loose and string equality
18 == '18' // result -> true | loose equality
18 === '18' // result -> false | strict equality

// switch case statements
const day = 'Monday'

switch (day) {
  case 'Monday':
    console.log('Monday')
    break
  case 'Sunday':
    console.log('Sunday')
    break
  default:
    console.log('default')
}

//  backwards compatibility  - old ecma script version code (lets say 1997) is supported in the new browsers.
// JS is backwards compatible because nothing has never been removed from the language, but only new stuff has been added.
