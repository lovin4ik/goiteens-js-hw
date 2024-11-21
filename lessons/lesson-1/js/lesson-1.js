const beginBtn = document.querySelector('.btn-begin')
function lesson1() {
	// Створити змінну з іменем age і присвоїти їй значення свого віку. Вивести значення цієї змінної в консоль.
	const age = 15
	console.log(`My age: ${age}.`)

	// Створити змінну з іменем name і присвоїти їй значення свого імені. Вивести значення цієї змінної в консоль.
	const name = 'Valera'
	console.log(`My name: ${name}.`)

	// Створити змінну з іменем isStudent і присвоїти їй значення true або false, залежно від того, чи є студентом. Вивести значення цієї змінної в консоль.
	const isStudent = true
	console.log(`Is student: ${isStudent}.`)

	// Створити змінну з іменем myString і присвоїти їй рядок з вашої улюбленою цитатою. Вивести цей рядок в консоль.
	const myString =
		'Єдиний спосіб робити чудову роботу — це любити те, що ти робиш.'
	console.log(myString)

	// Створити змінну з іменем myNumber і присвоїти їй довільне числове значення. Потім присвоїти цій змінній результат додавання до неї числа 10. Вивести значення myNumber в консоль.
	const myNumber = 5
	console.log(myNumber + 10)
	// Створити змінну з іменем myNull і присвоїти їй значення null. Вивести значення цієї змінної в консоль.
	const myNull = null
	console.log(myNull)

	// Створити скрипт який виводить спливаюче вікно з запитом на введення імені користувача за допомогою prompt(). Після введення імені вивести повідомлення привітання з використанням введеного імені.
	const userName = prompt('Enter your name')
	console.log(`Hello, ${userName === null ? 'World!' : userName}!`)

	// Створити скрипт який виводить спливаюче підтвердження за допомогою confirm(). Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!". Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".
	const isConfirm = confirm('Are you sure?')
	console.log(isConfirm ? 'Дякую за підтвердження!' : 'Дію відмінено!')

	// Створити скрипт який виводить спливаюче попередження за допомогою alert(). Вивести повідомлення про те, що дія небезпечна та попросити користувача підтвердити дію за допомогою confirm(). Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!". Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".
	alert('This action is dangerous!')
	const isDanger = confirm('Are you sure you want to do this dangerous action?')

	console.log(isDanger ? 'Дякую за підтвердження!' : 'Дію відмінено!')
}

beginBtn.addEventListener('click', lesson1)
