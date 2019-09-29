let quoteString = 'Failure is simply the opportunity to begin again this time more intelligently.'
let upperCaseString = (quoteString.toUpperCase())
console.log(`Upper case string is: ${upperCaseString}`)

let authorString = ' - Henry Ford'
completeString = quoteString.concat(authorString)
console.log(completeString)

secondQuote = 'Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King'
let lowerCaseString = (secondQuote.toLowerCase())
console.log(`Lower case string is: ${lowerCaseString}`)

console.log(`Character in quote at location 3: ${secondQuote[2]}`)

let firstLocation = secondQuote.indexOf('What separates the talented individual from the successful one is a lot of hard work.')
let lastLocation = secondQuote.indexOf(' - Stephen King')
let findString = secondQuote.slice(firstLocation,lastLocation)
console.log(findString)

console.log(`Character in quote at location 3: ${findString[2]}`)
