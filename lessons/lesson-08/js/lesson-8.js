const beginBtn = document.querySelector('.btn-begin')
function lesson8() {
	// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
	console.log('за допомогою циклу for')
	const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']
	let string = ''

	for (let i = 0; i < friends.length; i++) {
		string += friends[i]
		if (i < friends.length - 1) {
			string += ', '
		}
	}

	console.log(string)

	console.log('<- ==================== ->')
	console.log('за допомогою методу join')
	string = friends.join(', ')
	console.log(string)

	// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
	const cards = [
		'Карточка-1',
		'Карточка-2',
		'Карточка-3',
		'Карточка-4',
		'Карточка-5'
	]
	// 3. Видалити
	const cardToRemove = 'Карточка-3'
	const indexToRemove = cards.indexOf(cardToRemove)
	cards.splice(indexToRemove, 1)

	// 4. Додати
	const cardToAdd = 'Карточка-6'
	cards.push(cardToAdd)

	// 5. Оновити
	const cardToUpdate = 'Карточка-4'
	const indexToUpdate = cards.indexOf(cardToUpdate)
	cards.splice(indexToUpdate, 1, 'Карточка-4-NEW')
}

beginBtn.addEventListener('click', lesson8)
