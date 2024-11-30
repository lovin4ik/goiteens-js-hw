const beginBtn = document.querySelector('.btn-begin')
function lesson3() {
	// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
	const result = 5 + 5 + '5'
	console.log(result)
	// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
	const email = 'Qj2dM@example.com'
	const hasAt = email.indexOf('@') !== -1

	if (hasAt) {
		const emailLength = email.length
		console.log(emailLength, hasAt)
	}
	// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
	const my = 'My'
	const name = 'name'
	const is = 'is'
	const fullName =
		my +
		' ' +
		name +
		' ' +
		is +
		' ' +
		'Viktor' +
		'- це приклад з різними переміними'
	console.log(fullName)
	// r
	const words = ['My', 'name', 'is', 'Viktor']
	const fullName2 = words.join(' ') + ' - це приклад з масивом'
	console.log(fullName2)
	// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»
	const userName = 'Valera'
	const payment = 300
	alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`)
}

beginBtn.addEventListener('click', lesson3)
