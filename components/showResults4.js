export function showResults4() {
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
		<input type="number" class="lesson-input lesson-input--number-first" placeholder="Number:"/>
		<input type="number" class="lesson-input lesson-input--number-second" placeholder="Number:"/>
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

	const fourthResult = document.querySelector('.fourth-result')
	const showResult4 = `
		<input
			type="number"
			placeholder="Range:"
			class="lesson-input lesson-input--range"
		/>
		<button class="btn-check btn-check--renge mt-2">Перевірити</button>
		<p class="result-range text-center text-lg font-medium"></p>
	`
	fourthResult.innerHTML = showResult4

	const fifthResult = document.querySelector('.fifth-result')
	const showResult5 = `
		<label
			for="name"
			class="flex flex-col gap-1 justify-center items-center"
		>
			<input
				type="text"
				placeholder="Name:"
				class="lesson-input lesson-input--name"
				id="name"
			/>
			<span class="errors-name text-orange-700"></span>
		</label>

		<label
			for="email"
			class="flex flex-col gap-1 justify-center items-center"
		>
			<input
				type="email"
				placeholder="Email:"
				class="lesson-input lesson-input--email"
				id="email"
			/>
			<span class="errors-email text-orange-700"></span>
		</label>

		<label
			for="password"
			class="flex flex-col gap-1 justify-center items-center"
		>
			<input
				type="password"
				placeholder="Password:"
				class="lesson-input lesson-input--password"
				id="password"
			/>
			<span class="errors-password text-orange-700"></span>
		</label>

		<button class="btn-check btn-check--form" submit>Login</button>
	`
	fifthResult.innerHTML = showResult5
}
