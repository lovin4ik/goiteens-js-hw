const btnBegin = document.querySelector('.btn-begin')

const lesson20 = () => {
	const gallaryImages = document.querySelectorAll('.image-wrapper')

	let activeImage = 0

	document.addEventListener('keydown', e => {
		if (e.key === 'ArrowRight') {
			activeImage++
			if (activeImage > gallaryImages.length - 1) {
				activeImage = 0
			}
		} else if (e.key === 'ArrowLeft') {
			if (activeImage > 0) {
				activeImage = activeImage - 1
			} else {
				activeImage = gallaryImages.length - 1
			}
		}
		gallaryImages.forEach(image => {
			image.style.transform = `translateX(-${activeImage * 320}px)`
		})
	})

	//todo [2]
	console.log('%c [2] ', 'color: yellow; background-color: #2274A5')
	//? 🔸 Напиши скрипт створення і очищення колекції елементів.
	//? Користувач вводить кількість елементів в input
	//? і натискає кнопку Створити, після чого рендериться колекція.
	//? При натисканні на кнопку Очистити, колекція елементів очищається.
	//? 🔸 Створи функцію createBoxes(amount),
	//? яка приймає 1 параметр amount - число.
	//? Функція створює стільки div,
	//? скільки вказано в amount і додає їх в div#boxes.
	//? 🔸 Кожен створений div:
	//? - Має випадковий rgb колір фону
	//? - Розміри найпершого div — 30px на 30px
	//? - Кожен наступний div після першого,
	//?   повинен бути ширше і вище попереднього на 10px
	//? 🔸 Створи функцію destroyBoxes(), яка очищає div#boxes.
	//? ✴️ В HTML є такі елементи:
	/*
		<div id="controls">
			<input type="number" min="0" max="100" step="1" />
			<button type="button" data-action="render">Створити</button>
			<button type="button" data-action="destroy">Очистити</button>
		</div>

		<div id="boxes"></div>
	*/
	//! Код виконаного завдання

	const createNumber = document.querySelector('[data-action="render"]')
	const deleteAllNumbers = document.querySelector('[data-action="destroy"]')
	const inputNumber = document.querySelector('#controls > input')
	const boxes = document.querySelector('#boxes')

	const randomColor = () => {
		const r = Math.floor(Math.random() * 256)
		const g = Math.floor(Math.random() * 256)
		const b = Math.floor(Math.random() * 256)
		return `rgb(${r}, ${g}, ${b})`
	}

	const createBoxes = amount => {
		boxes.innerHTML = ''
		const fragment = document.createDocumentFragment()

		for (let i = 0; i < amount; i++) {
			const div = document.createElement('div')
			const size = 30 + 10 * i
			div.style.width = `${size}px`
			div.style.height = `${size}px`
			div.style.backgroundColor = `${randomColor()}`
			console.log(div)
			fragment.append(div)
		}

		boxes.append(fragment)
	}

	const destroyBoxes = () => {
		boxes.innerHTML = ''
	}

	createNumber.addEventListener('click', () => {
		createBoxes(inputNumber.value)
	})
	deleteAllNumbers.addEventListener('click', destroyBoxes)

	console.log('--------------------------------------------------')
}

lesson20()
btnBegin.addEventListener('click', lesson20)
