export function showResults5() {
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
}
