const beginBtn = document.querySelector('.btn-begin')
function lesson6() {
	// Вивести на екран всі числа від 1 до 10 за допомогою циклу while.
	console.log('цикл while:')
	let i = 1
	while (i <= 10) {
		console.log(i) // 1, 2, 3 і тд
		i++
	}

	console.log('<- =============================== ->')

	// Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.
	console.log('цикл for:')
	console.log('<- =============================== ->')

	for (let i = 2; i <= 20; i += 2) {
		console.log(i)
	}

	console.log('<- =============================== ->')

	// Вивести на екран таблицю множення числа 7 за допомогою циклу for.
	console.log('цикл for:')
	console.log('<- =============================== ->')

	for (let i = 1; i <= 10; i++) {
		console.log(`7 x ${i} = ${7 * i}`)
	}

	console.log('<- =============================== ->')
	// Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.
	console.log('виведення елементів масиву за допомогою while')
	console.log('цикл while:')
	console.log('<- =============================== ->')

	const whileArray = [1, 2, 3, 4, 5]
	i = 0
	while (i < whileArray.length) {
		console.log(whileArray[i])
		i++
	}

	console.log('<- =============================== ->')
	// Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.
	console.log('цикл for:')
	console.log('<- =============================== ->')
	const forArray = []

	for (let i = 1; i <= 10; i++) {
		forArray.push(i)
	}

	console.log(forArray)

	for (let i = 0; i <= forArray.length; i++) {
		console.log(forArray[i])
		if (forArray[i] === 7) {
			break
		}
	}
	console.log('<- =============================== ->')
	// Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
	let n = 0
	let randomNumber = Math.floor(Math.random() * 100)
	console.log('цикл while:')
	console.log('<- =============================== ->')
	while (n < randomNumber) {
		console.log(n)
		n++
		if (n >= randomNumber) {
			break
		}
	}

	console.log('<- =============================== ->')
	// За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.
	console.log('цикл while:')
	console.log('<- =============================== ->')

	n = 1
	while (n <= 20) {
		if (n % 3 === 0) {
			n++
			console.log('пропуск')
			continue
		}
		console.log(n)
		n++
	}
}

beginBtn.addEventListener('click', lesson6)
