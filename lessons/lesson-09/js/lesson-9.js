const beginBtn = document.querySelector('.btn-begin')
function lesson9() {
	// 	Завдання 1
	// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

	//! Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

	const array = ['Mango', 'Poly', 'Ajax', 'Kiwi']
	const array2 = [1, 2, 3, 4, 5]
	const logItems = array => {
		for (let i = 0; i < array.length; i++) {
			console.log(`${i + 1} - ${array[i]}`)
		}
	}
	logItems(array)
	logItems(array2)

	// Завдання 2
	// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
	console.log('<- ==================== ->')
	const calculateEngravingPrice = (message, pricePerWord) => {
		console.log(message.split(' ').length * pricePerWord)
	}
	calculateEngravingPrice('JavaScript is in my blood', 10)

	// Завдання 3
	// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.
	const findLongestWord = string => {
		const words = string.split(' ')
		let longestWord = ''

		for (let i = 0; i < words.length; i++) {
			if (words[i].length > longestWord.length) {
				longestWord = words[i]
			}
		}

		return console.log(longestWord)
	}

	findLongestWord('JavaScript is in my blood')
	findLongestWord('Google do a roll')
	findLongestWord('May the force be with you')
	// Завдання 4
	// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
	//!     Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.

	//!     Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.
	const formatString = string => {
		const maxLength = 40
		if (string.length > maxLength) {
			return console.log(string.slice(0, maxLength) + '...')
		}
		return console.log(string)
	}
	formatString('Цей рядок менший за 40 символів.')

	formatString(
		'Цей рядок набагато довший і перевищує максимальну кількість символів.'
	)

	// Завдання 5
	// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

	const checkForSpam = message => {
		const spamWords = ['spam', 'sale']
		for (let i = 0; i < spamWords.length; i++) {
			if (message.toLowerCase().includes(spamWords[i])) {
				return console.log(true)
			}
		}
		return console.log(false)
	}

	checkForSpam('Latest technology news') // false
	checkForSpam('JavaScript weekly newsletter') // false
	checkForSpam('Get best sale offers now!') // true

	// Завдання 6
	// Напиши скрипт з наступним функціоналом:
	//     При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
	//     Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
	//     Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
	// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.
	// let input;
	// const numbers = [];
	// let total = 0;

	let input
	const numbers = []
	let total = 0

	do {
		input = prompt('Enter a number')

		if (input === null) {
			break
		}

		const number = Number(input)
		if (isNaN(number)) {
			alert('Було введено не число, попробуйте ще раз')
			continue
		}

		numbers.push(number)
	} while (true)

	if (numbers.length > 0) {
		for (const num of numbers) {
			total += num // Додаємо кожен елемент до total
		}

		console.log(`Загальна сума чисел дорівнює ${total}`)
	} else {
		console.log('Масив чисел порожній')
	}
}

beginBtn.addEventListener('click', lesson9)
