export function showResult10() {
	// show result

	const firstResult = document.querySelector('.first-result')
	const firstShowResult = `
			<button class='btn-check btn-hello-world'>Перевірити</button>
			<p class='result-hello-world text-center text-lg'></p>
		`
	firstResult.innerHTML = firstShowResult

	const secondResult = document.querySelector('.second-result')
	const secondShowResult = `
			<p class="text-lg font-semibold text-center">Вгадайне число від 1 до 100:</p>
			<input
				type="text"
				class="guessField lesson-input"
				placeholder="Введіть число:"
			/>
			<button
				type="button"
				class="btn-check btn-checkField"
			// >
				Перевірити
			</button>
			<p class="result result-guessField text-center text-lg"></p>
		`
	secondResult.innerHTML = secondShowResult

	const thirdResult = document.querySelector('.third-result')
	const thirdShowResult = `
			<p class="text-lg font-semibold text-center">
				Цілкова кількість натискань лкм на сторінці
			</p>
			<p class="result counter text-center text-lg"></p>
		`
	thirdResult.innerHTML = thirdShowResult
}
