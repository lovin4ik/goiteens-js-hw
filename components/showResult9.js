export function showResult9() {
	const firstResult = document.querySelector('.first-result')
	const firstShowResult = `
		<input type="text" class="lesson-input lesson-input--login"
		placeholder="Enter Login:" />
		<p class="result result-first text-center text-lg font-medium"></p>
		<button class="btn-check btn-check--login">Зареєструватися</button>
	`
	firstResult.innerHTML = firstShowResult
}
