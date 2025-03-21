import { showResult10 } from '../../../components/showResult10.js'

const beginBtn = document.querySelector('.btn-begin')
function lesson10() {
	showResult10()
	// 	1. Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки

	const btnHelloWorld = document.querySelector('.btn-hello-world')
	const resultHelloWorld = document.querySelector('.result-hello-world')

	btnHelloWorld.addEventListener('click', () => {
		console.log('Hello World!')
		resultHelloWorld.textContent = 'Hello World!'
	})

	// 2. Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.2
	const guessField = document.querySelector('.guessField')
	const btnCheckField = document.querySelector('.btn-checkField')
	const resultGuessField = document.querySelector('.result-guessField')
	const randomNum = Math.floor(Math.random() * 100) + 1

	const checkGuess = () => {
		const guess = Number(guessField.value)

		if (guess == randomNum) {
			resultGuessField.textContent = 'Відповідь правильна'
			console.log('Відповідь правильна')
		} else if (guess > randomNum) {
			resultGuessField.textContent = 'Ваше число більше'
			console.log('Ваше число більше')
		} else {
			resultGuessField.textContent = 'Ваше число менше'
			console.log('Ваше число менше')
		}
	}

	btnCheckField.addEventListener('click', e => {
		e.preventDefault()
		checkGuess()
	})

	// 3. Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.
	const counter = document.querySelector('.counter')
	let n = 0

	document.body.addEventListener('click', () => {
		n++
		counter.textContent = n
		console.log(n)
	})

	// 4. Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.

	const applyCallbackToEachElement = (array, callback) => {
		return array.map(callback)
	}

	const arr = [1, 2, 3, 4, 5]
	const squareCallback = num => num * num

	const result = applyCallbackToEachElement(arr, squareCallback)
	console.log(result)

	// 5. Розрахунок дисконтної ціни
	// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.

	const calculateDiscountedPrice = (price, discount, callback) => {
		const discountedPrice = callback(price, discount)
		console.log(`Дисконтна ціна: ${discountedPrice}`)
	}

	const showDiscountedPrice = (price, discount) => {
		return price * (1 - discount / 100)
	}

	calculateDiscountedPrice(100, 10, showDiscountedPrice)
}

beginBtn.addEventListener('click', lesson10)
