const beginBtn = document.querySelector('.btn-begin')

function lesson2() {
	// Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
	let celsius
	function toFahrenheit(celsius) {
		const fahrenheit = (celsius * 9) / 5 + 32

		return console.log(
			`по цельсію: ${celsius}℃ - по фарангейту: ${fahrenheit}℉`
		)
	}
	celsius = 25
	toFahrenheit(celsius)
	celsius = 20
	toFahrenheit(celsius)
	celsius = -10
	toFahrenheit(celsius)

	// Створити змінну для зберігання кількості днів у місяці. Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
	let daysInMonth
	function hoursAndMinutes(daysInMonth) {
		const hours = daysInMonth * 24
		const minutes = hours * 60
		return console.log(
			`коли у місяці ${daysInMonth} днів то в ньому: ${hours} годин або ${minutes} хвилин`
		)
	}
	daysInMonth = 30
	hoursAndMinutes(daysInMonth)
	daysInMonth = 31
	hoursAndMinutes(daysInMonth)
	daysInMonth = 28
	hoursAndMinutes(daysInMonth)
	daysInMonth = 29
	hoursAndMinutes(daysInMonth)

	// Створити змінні для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.
	let health = 100
	let mana = 100

	function game(health, mana) {
		health -= Math.floor(Math.random() * 100)
		mana -= Math.floor(Math.random() * 100)

		return console.log(`ваше здоров'я: ${health}, ваша мана: ${mana}`)
	}

	game(health, mana)

	// Створити змінну для зберігання суми покупки в магазині. Застосувати знижку в розмірі 10% до цієї суми за допомогою оператора множення та вивести результат в консоль.
	let totalAmound

	function discount(totalAmound) {
		const discountedAmound = Math.floor(totalAmound * 0.9)

		return console.log(
			`сума покупки: ${totalAmound}, знижка: 10%, сума з знижкою: ${discountedAmound}`
		)
	}
	totalAmound = 500
	discount(totalAmound)

	totalAmound = 228
	discount(totalAmound)

	totalAmound = 1488
	discount(totalAmound)

	// Створити змінну для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль.

	let numberFloor = Math.PI
	console.log(`округлення числа ПИ: ${Math.floor(numberFloor)}`)

	// Створити змінну для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число та вивести результат в консоль.

	let stringParseFloat = '3.14'
	console.log(
		`перетворення рядка у десяткове число: ${parseFloat(stringParseFloat)}`
	)

	// Створити змінну для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.

	let stringParseInt = '123'
	console.log(`перетворення рядка у ціле число: ${parseInt(stringParseInt)}`)
	// Створити змінну для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.

	let numberSqrt = 2214144
	console.log(`квадратний корінь числа ${numberSqrt}: ${Math.sqrt(numberSqrt)}`)

	// Створити змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок та вивести результат в консоль.

	const numberToString = 1488
	const stringToNumber = '4588'
	const stringFromNumber = numberToString.toString()
	const numberFromString = parseInt(stringToNumber)

	console.log(
		`перетворення цілочисельного значення у рядок: ${stringFromNumber} - ${typeof stringFromNumber}`
	)
	console.log(
		`перетворення рядка у ціле число: ${numberFromString} - ${typeof numberFromString}`
	)
}

beginBtn.addEventListener('click', lesson2)
