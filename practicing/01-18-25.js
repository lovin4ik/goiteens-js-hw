const arrayNum = [8, 13, 21, 34, 55]
const arrayNum2 = [10, 20, 30, 40, 50]

function logitem(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(`Element position ${i + 1}, вміст елементу: ${arr[i]}`)
	}
	console.log('<------------------------------------------->')
}

logitem(arrayNum)
logitem(arrayNum2)
