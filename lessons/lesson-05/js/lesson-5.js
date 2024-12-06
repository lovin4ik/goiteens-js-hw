const beginBtn = document.querySelector('.btn-begin')
function lesson5() {
	//* show result

	const firstResult = document.querySelector('.first-result')
	const firstShowResult = `
		<label for="beverage">Напій:</label><br>
		<select class='beverage-select bg-gray-100 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold' id="beverage" name="beverage">
				<option value="">Оберіть...</option>
				<option value="coffee">Кава</option>
				<option value="tea">Чай</option>
				<option value="juice">Сік</option>
		</select>
		<p class='result-select text-center text-lg'></p>
	`

	firstResult.innerHTML = firstShowResult

	const secondResult = document.querySelector('.second-result')
	const secondShowResult = `
		<input type="text" class="lesson-input day-input" placeholder="Оберіть день в тиждні:">
		<button class="btn-check btn-second-check">Перевірити</button>
		<p class="result-day text-center text-lg font-medium"></p>
	`
	secondResult.innerHTML = secondShowResult

	const thirdResult = document.querySelector('.third-result')
	const thirdShowResult = `
		<input type="text" placeholder='Введіть номер місяця:' class='lesson-input month-input'>
		<button class='btn-check btn-check-month'>Дізнатися про місяць</button>
		<p class='result-month text-center text-lg font-medium'></p>
	`
	thirdResult.innerHTML = thirdShowResult

	const fourthResult = document.querySelector('.fourth-result')
	const fourthShowResult = `
		<input type="text" class="lesson-input color-input" placeholder="Введіть колір:">
		<button class="btn-check btn-check-color">Перевірити</button>
		<p class="result-color text-center text-lg font-medium"></p>
	`
	fourthResult.innerHTML = fourthShowResult

	const fifthResult = document.querySelector('.fifth-result')
	const fifthShowResult = `
		<div class='flex gap-1 items-center justify-center'>
			<input class='lesson-input calculator-input--first' />
			<select name="operator" class='lesson-select bg-gray-100 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold'>
				<option value="+">+</option>
				<option value="-">-</option>
				<option value="*">*</option>
				<option value="/">/</option>
			</select>
			<input class='lesson-input calculator-input--second' />
		</div>
		<button class='btn-check btn-check-calculator'>Перевірити</button>
		<p class='result-calculator text-center text-lg font-medium'></p>
	`
	fifthResult.innerHTML = fifthShowResult

	//? Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.
	const resultSelect = document.querySelector('.result-select')
	const select = document.querySelector('.beverage-select')

	select.addEventListener('change', () => {
		if (select.value === 'coffee') {
			resultSelect.textContent = 'Ви вибрали каву'
			console.log('Ви обрали каву')
		} else if (select.value === 'tea') {
			resultSelect.textContent = 'Ви обрали чай'
			console.log('Ви обрали чай')
		} else if (select.value === 'juice') {
			resultSelect.textContent = 'Ви обрали сік'
			console.log('Ви обрали сік')
		}
	})

	//? Створити розмітку з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.
	const btnSecondCheck = document.querySelector('.btn-second-check')
	const dayInput = document.querySelector('.day-input')
	const resultDay = document.querySelector('.result-day')

	btnSecondCheck.addEventListener('click', e => {
		e.preventDefault()
		const day = dayInput.value.toLowerCase()
		if (
			day === 'понеділок' ||
			day === 'вівторок' ||
			day === 'середа' ||
			day === 'четвер'
		) {
			resultDay.textContent = 'Робочий день'
			console.log('Робочий день')
		} else if (day === 'неділя' || day === 'субота') {
			resultDay.textContent = 'Вихідний'
			console.log('Вихідний')
		} else {
			resultDay.textContent = 'Введіть день тижня'
			console.log('Введіть день тижня')
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
		e.preventDefault()
		const month = monthInput.value
		if (month >= 1 && month <= 3) {
			resultMonth.textContent = `Зима, днів у цьому місяці: ${daysInMonth[month]}`
			console.log(`Зима, днів у цьому місяці: ${daysInMonth[month]}`)
		} else if (month >= 4 && month <= 6) {
			resultMonth.textContent = `Весна, днів у цьому місяці: ${daysInMonth[month]}`
			console.log(`Весна, днів у цьому місяці: ${daysInMonth[month]}`)
		} else if (month >= 7 && month <= 9) {
			resultMonth.textContent = `Літо, днів у цьому місяці: ${daysInMonth[month]}`
			console.log(`Літо, днів у цьому місяці: ${daysInMonth[month]}`)
		} else if (month >= 10 && month <= 12) {
			resultMonth.textContent = `Осінь, днів у цьому місяці: ${daysInMonth[month]}`
			console.log(`Осінь, днів у цьому місяці: ${daysInMonth[month]}`)
		} else {
			resultMonth.textContent = 'Введіть номер місяця'
			console.log('Введіть номер місяця')
		}
	})
	//? Створити розмітку з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".
	const colorInput = document.querySelector('.color-input')
	const btnCheckColor = document.querySelector('.btn-check-color')
	const resultColor = document.querySelector('.result-color')

	btnCheckColor.addEventListener('click', e => {
		e.preventDefault()
		const selectedColor = colorInput.value.toLowerCase()

		if (selectedColor === 'red' || selectedColor === 'червоний') {
			resultColor.textContent = 'стоп'
			console.log('стоп')
		} else if (selectedColor === 'green' || selectedColor === 'зелений') {
			resultColor.textContent = 'йти'
			console.log('йти')
		} else if (selectedColor === 'yellow' || selectedColor === 'жовтий') {
			resultColor.textContent = 'чекати'
			console.log('чекати')
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

		if (operator === '+') {
			resultCalculator.textContent = firstNumber + secondNumber
			console.log(firstNumber + secondNumber)
		} else if (operator === '-') {
			resultCalculator.textContent = firstNumber - secondNumber
			console.log(firstNumber - secondNumber)
		} else if (operator === '*') {
			resultCalculator.textContent = firstNumber * secondNumber
			console.log(firstNumber * secondNumber)
		} else if (operator === '/') {
			resultCalculator.textContent = firstNumber / secondNumber
			console.log(firstNumber / secondNumber)
			if (firstNumber === 0 || secondNumber === 0) {
				resultCalculator.textContent = 'Ділення на нуль неможливе!!!'
				console.log('Ділення на нуль неможливе!!!')
			}
		} else {
			resultCalculator.textContent = 'Виберіть операцію!!!'
			console.log('Виберіть операцію!!!')
		}
	})
}

beginBtn.addEventListener('click', lesson5)
