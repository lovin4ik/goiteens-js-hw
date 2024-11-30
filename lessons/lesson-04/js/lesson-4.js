const beginBtn = document.querySelector('.btn-begin')
function lesson4() {
	// show result

	const firstResult = document.querySelector('.first-result')
	const showResult = `
		<input
			type="text"
			class="lesson-input lesson-input--first"
			placeholder="First input:"
		/>
		<input
			type="text"
			class="lesson-input lesson-input--second"
			placeholder="Second input:"
		/>
		<button class="btn-check btn-check-inputs">Перевірити</button>
		<p class="result-inputs text-center text-lg font-medium"></p>
	`
	firstResult.innerHTML = showResult

	const secondResult = document.querySelector('.second-result')
	const showResult2 = `
		<input type="number" class="lesson-input lesson-input--number" placeholder="Number:"/>
		<button class="btn-check btn-check-number">Провірити число</button>
		<p class="result-number text-center text-lg font-medium"></p>
	`
	secondResult.innerHTML = showResult2

	const thirdResult = document.querySelector('.third-result')
	const showResult3 = `
		<input
			type="text"
			class="lesson-input lesson-input--hasJs"
			placeholder="Input:"
		/>
		<button class="btn-check btn-check-hasJs text-sm">
			Провірити присутність JavaScript
		</button>
		<p class="result-hasJs text-center text-lg font-medium"></p>
	`

	thirdResult.innerHTML = showResult3
	// Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".

	const firstInput = document.querySelector('.lesson-input--first')
	const secondInput = document.querySelector('.lesson-input--second')
	const btnCheckInputs = document.querySelector('.btn-check-inputs')
	const resultInputs = document.querySelector('.result-inputs')
	function checkInputs() {
		if (firstInput.value && secondInput.value) {
			resultInputs.textContent = 'Обидва поля заповнені'
			console.log('Обидва поля заповнені')
		} else if (firstInput.value || secondInput.value) {
			resultInputs.textContent = '1 поле заповнено'
			console.log('1 поле заповнено')
		} else {
			resultInputs.textContent = 'Не всі поля заповнені'
			console.log('Не всі поля заповнені')
		}
	}
	btnCheckInputs.addEventListener('click', checkInputs)
	// Створити розмітку з двома числовими полями та кнопкою. При натисканні на кнопку перевіряти, чи сума значень полів більша за 10, якщо так, то виводити повідомлення "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".
	const inputNumber = document.querySelector('.lesson-input--number')
	const btnCheckNumber = document.querySelector('.btn-check-number')
	const resultNumber = document.querySelector('.result-number')
	function checkNumber() {
		if (inputNumber.value > 10) {
			resultNumber.textContent = 'Сума більша за 10'
			console.log('Сума більша за 10')
		} else {
			resultNumber.textContent = 'Сума менша або дорівнює 10'
			console.log('Сума менша або дорівнює 10')
		}
	}
	btnCheckNumber.addEventListener('click', checkNumber)

	// Створити розмітку з текстовим полем та кнопкою. При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript", якщо так, то виводити повідомлення "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".
	const inputHasJs = document.querySelector('.lesson-input--hasJs')
	const btnCheckHasJs = document.querySelector('.btn-check-hasJs')
	const resultHasJs = document.querySelector('.result-hasJs')

	btnCheckHasJs.addEventListener('click', () => {
		if (inputHasJs.value.includes('JavaScript')) {
			resultHasJs.textContent = 'Текст містить слово JavaScript'
			console.log('Текст містить слово JavaScript')
		} else {
			resultHasJs.textContent = 'Текст не містить слово JavaScript'
			console.log('Текст не містить слово JavaScript')
		}
	})
	// Створити розмітку з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введене число більше за 10 та менше за 20, якщо так, то виводити повідомлення "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".

	// Створити розмітку з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.
}

beginBtn.addEventListener('click', lesson4)
