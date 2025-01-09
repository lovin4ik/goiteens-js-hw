const str = 'Hello world! I love JavaScript!'

let arrFormStr = str.split('')

console.log('Array from string:', arrFormStr)
console.log('<--------------------------------------------->')

arrFormStr = str.split('!')

console.log('Array from string 2:', arrFormStr)
console.log('<--------------------------------------------->')

arrFormStr = str.split('o')

console.log('Array from string 3:', arrFormStr)
console.log('<--------------------------------------------->')

console.log('index w from arr:', arrFormStr.indexOf(' w'))

console.log('index w from arr (boolean):', arrFormStr.includes(' w'))
console.log('<--------------------------------------------->')

arrFormStr[1] = arrFormStr[1].trim()

console.log(arrFormStr)
