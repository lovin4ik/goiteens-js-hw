const btnBegin = document.querySelector('.btn-begin')

const lesson17 = () => {
	const firstResult = document.querySelector('.first-result')
	const secondResult = document.querySelector('.second-result')
	const thirdResult = document.querySelector('.third-result')
	const fourthResult = document.querySelector('.fourth-result')

	//todo [1]
	console.log('%c [1] ', 'color: yellow; background-color: #2274A5')
	//? Створити розмітку з кнопкою та текстовим полем.
	//? За допомогою JavaScript отримати доступ до кнопки
	//? та текстового поля за їх ідентифікаторами
	//? та змінити текст на кнопці на значення текстового поля.
	//! Код виконаного завдання
	firstResult.innerHTML = `
		<input type="text" class="lesson-input first-input" placeholder="Введіть текст:">
		<button class="btn-check btn-check-first">Введіть текст</button>
	`
	const firstInput = document.querySelector('.first-input')
	const btnCheck = document.querySelector('.btn-check-first')

	firstInput.addEventListener('input', () => {
		btnCheck.textContent = firstInput.value.trim() || 'Введіть текст'
	})

	console.log('--------------------------------------------------')

	//todo [2]
	console.log('%c [2] ', 'color: yellow; background-color: #2274A5')
	//? Створити розмітку з заголовком та зображенням.
	//? За допомогою JavaScript отримати доступ до зображення
	//? та змінити значення атрибута "src" на шлях до іншого зображення.
	//! Код виконаного завдання

	secondResult.innerHTML = `
		<h2>Зміна source в зображенні</h2>
		<img src="https://media1.tenor.com/m/l1MdesflQSQAAAAd/razorback-hog-pig-riding.gif" alt="гойда" class="change-source" width="400">
		<button class="btn-check btn-check-second">Поміняти зображення<button>
	`
	const changeSource = document.querySelector('.change-source')
	const btnCheckSecond = document.querySelector('.btn-check-second')
	const sourceForChange = {
		firstLink:
			'https://media1.tenor.com/m/l1MdesflQSQAAAAd/razorback-hog-pig-riding.gif',
		secondLink: 'https://c.tenor.com/nHyBdb8eM4cAAAAC/tenor.gif'
	}

	btnCheckSecond.addEventListener('click', () => {
		if (changeSource.src === sourceForChange.firstLink) {
			changeSource.src = sourceForChange.secondLink
		} else {
			changeSource.src = sourceForChange.firstLink
		}
	})

	console.log('--------------------------------------------------')

	//todo [3]
	console.log('%c [3] ', 'color: yellow; background-color: #2274A5')
	//? Створити розмітку  з посиланням та зображенням.
	//? За допомогою JavaScript отримати доступ до посилання
	//? та змінити значення атрибута "href" на нову URL-адресу.
	//? Також отримати доступ до зображення
	//? та додати новий атрибут "alt" з описом зображення.
	//! Код виконаного завдання

	thirdResult.innerHTML = `
		<a href="https://www.google.com/" class="change-href text-white transition-color duration-300 hover:text-secondary" target="_blank">Link to Google</a>
		<img src="https://media1.tenor.com/m/vQEORKBuwu8AAAAd/meme-hog-rider.gif" alt="гойда" class="change-alt" width="400">
		<button class="btn-check btn-check-third">Поміняти посилання й допис зображення</button>
	`
	const btnCheckThird = document.querySelector('.btn-check-third')
	const changeHref = document.querySelector('.change-href')
	const changeAlt = document.querySelector('.change-alt')

	const hrefForChange = {
		firstLink: 'https://www.google.com/',
		secondLink: 'https://www.youtube.com/'
	}

	const altForChange = {
		firstLink: 'МЕМ',
		secondLink: 'катається на кабані'
	}

	btnCheckThird.addEventListener('click', () => {
		if (changeHref.href === hrefForChange.firstLink) {
			changeHref.href = hrefForChange.secondLink
			changeHref.textContent = 'Link to YouTube'
		} else {
			changeHref.href = hrefForChange.firstLink
			changeHref.textContent = 'Link to Google'
		}

		if (changeAlt.alt === altForChange.firstLink) {
			changeAlt.alt = altForChange.secondLink
		} else {
			changeAlt.alt = altForChange.firstLink
		}
	})

	console.log('--------------------------------------------------')

	//todo [4]
	console.log('%c [4] ', 'color: yellow; background-color: #2274A5')
	//? Створити розмітку  зі списком елементів.
	//? За допомогою JavaScript отримати доступ
	//? до першого елемента списку
	//? та змінити його вміст на новий текст.
	//! Код виконаного завдання

	fourthResult.innerHTML = `
		<ul class="change-list flex flex-col items-center justify-center">
			<li class="change-list__item text-white transition-color duration-300 hover:text-secondary">Item 1</li>
			<li class="change-list__item text-white transition-color duration-300 hover:text-secondary">Item 2</li>
			<li class="change-list__item text-white transition-color duration-300 hover:text-secondary">Item 3</li>
			<li class="change-list__item text-white transition-color duration-300 hover:text-secondary">Item 4</li>
		</ul>
		<button class="btn-check btn-check-fourth">Змінити перший елемент списку</button>
	`

	const changeList = document.querySelector('.change-list')
	const btnCheckFourth = document.querySelector('.btn-check-fourth')
	const changeItemName = {
		firstName: 'Item 1',
		secondName: 'I love JavaScript'
	}

	btnCheckFourth.addEventListener('click', () => {
		if (changeList.firstElementChild.textContent === changeItemName.firstName) {
			changeList.firstElementChild.textContent = changeItemName.secondName
		} else {
			changeList.firstElementChild.textContent = changeItemName.firstName
		}
	})

	console.log('--------------------------------------------------')
}

btnBegin.addEventListener('click', lesson17)
