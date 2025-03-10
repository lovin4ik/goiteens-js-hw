import { showResults5 } from '../../../components/showResults5.js'

const beginBtn = document.querySelector('.btn-begin')
function lesson5() {
	showResults5()

	//? Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.
	const resultSelect = document.querySelector('.result-select')
	const select = document.querySelector('.beverage-select')

	select.addEventListener('change', () => {
		switch (select.value) {
			case 'coffee':
				resultSelect.textContent = 'Ви вибрали каву'
				console.log('Ви обрали каву')
				break
			case 'tea':
				resultSelect.textContent = 'Ви обрали чай'
				console.log('Ви обрали чай')
				break
			case 'juice':
				resultSelect.textContent = 'Ви обрали сік'
				console.log('Ви обрали сік')
				break
			default:
				resultSelect.textContent = ''
				break
		}
	})

	//? Створити розмітку з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.
	const btnSecondCheck = document.querySelector('.btn-second-check')
	const dayInput = document.querySelector('.day-input')
	const resultDay = document.querySelector('.result-day')

	btnSecondCheck.addEventListener('click', e => {
		e.preventDefault()

		switch (dayInput.value.trim().toLowerCase()) {
			case 'понеділок' || 'вівторок' || 'середа' || 'четвер':
				resultDay.textContent = 'Робочий день'
				console.log('Робочий день')
				break
			case 'неділя' || 'субота':
				resultDay.textContent = 'Вихідний'
				console.log('Вихідний')
				break
			default:
				resultDay.textContent = ''
				break
		}
	})

	//? Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.
	const monthInput = document.querySelector('.month-input')
	const btnCheckMonth = document.querySelector('.btn-check-month')
	const resultMonth = document.querySelector('.result-month')

	//! Це завдання буде продовжене в наступному блоці

	//? Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці:.${daysInMonth[month]}
	//! Це завдання буде продовженням попереднього блоку
	const daysInMonth = {
		1: 31,
		2: 28,
		3: 31,
		4: 30,
		5: 31,
		6: 30,
		7: 31,
		8: 31,
		9: 30,
		10: 31,
		11: 30,
		12: 31
	}

	btnCheckMonth.addEventListener('click', e => {
		const month = parseInt(monthInput.value.trim())
		e.preventDefault()

		if (isNaN(month) || month < 1 || month > 12) {
			resultMonth.textContent = 'Будь ласка введіть число від 1 до 12'
			console.log('Будь ласка введіть число від 1 до 12')

			return
		}

		let season
		switch (month) {
			case 12:
			case 1:
			case 2:
				season = 'Winter'
				break
			case 3:
			case 4:
			case 5:
				season = 'Spring'
				break
			case 6:
			case 7:
			case 8:
				season = 'Summer'
				break
			case 9:
			case 10:
			case 11:
				season = 'Autumn'
				break
			default:
				season = 'Unknown'
		}

		const days = daysInMonth[month]

		resultMonth.textContent = `Місяць ${month} - ${season}, днів у цьому місяці: ${days}`
	})

	//? Створити розмітку з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".
	const colorInput = document.querySelector('.color-input')
	const btnCheckColor = document.querySelector('.btn-check-color')
	const resultColor = document.querySelector('.result-color')

	btnCheckColor.addEventListener('click', e => {
		e.preventDefault()
		const selectedColor = colorInput.value.trim().toLowerCase()

		switch (selectedColor) {
			case 'red':
			case 'червоний':
				resultColor.textContent = 'стоп'
				console.log('стоп')
				break

			case 'green':
			case 'зелений':
				resultColor.textContent = 'йти'
				console.log('йти')
				break
			case 'yellow':
			case 'жовтий':
				resultColor.textContent = 'чекати'
				console.log('чекати')
				break
			default:
				resultColor.textContent = ''
		}
	})

	//? Створити розмітку з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами. Користувач повинен бути попереджений про можливість ділення на нуль.
	const firstNumberInput = document.querySelector('.calculator-input--first')
	const secondNumberInput = document.querySelector('.calculator-input--second')
	const operatorSelect = document.querySelector('.lesson-select')
	const btnCheckCalculator = document.querySelector('.btn-check-calculator')
	const resultCalculator = document.querySelector('.result-calculator')

	btnCheckCalculator.addEventListener('click', e => {
		e.preventDefault()

		const firstNumber = parseInt(firstNumberInput.value)
		const secondNumber = parseInt(secondNumberInput.value)
		const operator = operatorSelect.value

		if (isNaN(firstNumber) || isNaN(secondNumber)) {
			resultCalculator.textContent = 'Введіть числа!!!'
			console.log('Введіть числа!!!')
		}

		switch (operator) {
			case '+':
				resultCalculator.textContent = firstNumber + secondNumber
				console.log(
					`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`
				)
				break
			case '-':
				resultCalculator.textContent = firstNumber - secondNumber
				console.log(
					`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`
				)
				break
			case '*':
				resultCalculator.textContent = firstNumber * secondNumber
				console.log(
					`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`
				)
				break
			case '/':
				resultCalculator.textContent = firstNumber / secondNumber
				console.log(
					`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`
				)
				if (firstNumber === 0 || secondNumber === 0) {
					resultCalculator.textContent = 'Ділення на нуль неможливе!!!'
					console.log('Ділення на нуль неможливе!!!')
				}
				break
		}
	})
}

beginBtn.addEventListener('click', lesson5)
