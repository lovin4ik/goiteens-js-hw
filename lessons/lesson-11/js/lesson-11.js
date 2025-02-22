const beginBtn = document.querySelector('.btn-begin')

function lesson11() {
	// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.
	const bankAccount = {
		ownerName: 'Valera',
		accountNumber: '1',
		balance: 1488
	}

	Object.assign(bankAccount, {
		validTransaction: function (amount) {
			if (amount >= this.balance) {
				return false
			}
		},
		deposit(amount) {
			if (amount <= 0 || isNaN(Number(inputDeposit.value.trim()))) {
				return console.log('error deposit is empty or not a number')
			}

			this.balance += Number(amount)
			return console.log('deposit')
		},
		withdraw(amount) {
			if (amount <= 0 || isNaN(Number(inputWithdraw.value))) {
				return console.log('error withdraw, amount is empty or not a number')
			}

			if (amount > this.balance) {
				result.textContent = 'Error, not enough money'
				return console.log('Error, not enough money')
			}

			this.balance -= Number(amount)
			return console.log('withdraw')
		}
	})

	console.log(`Власник рахунку: ${bankAccount.ownerName}`)
	console.log(`Номер рахунку: ${bankAccount.accountNumber}`)
	console.log(`Баланс: ${bankAccount.balance}`)

	const btnDeposit = document.querySelector('.btn-deposit')
	const btnWithdraw = document.querySelector('.btn-withdraw')
	const inputDeposit = document.querySelector('.input-deposit')
	const inputWithdraw = document.querySelector('.input-withdraw')
	const textBalance = document.querySelector('.balance')

	textBalance.textContent = `${bankAccount.balance}$`

	btnDeposit.addEventListener('click', () => {
		bankAccount.deposit(inputDeposit.value)
		textBalance.textContent = `${bankAccount.balance}$`

		console.log(`Баланс після поповнення: ${bankAccount.balance}`)
	})

	btnWithdraw.addEventListener('click', () => {
		bankAccount.withdraw(inputWithdraw.value)
		textBalance.textContent = `${bankAccount.balance}$`
		console.log(`Баланс після зняття: ${bankAccount.balance}`)
	})

	console.log('<- =============================== ->')
	// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
	const inputTemperature = document.querySelector('.input-temperature')
	const btnCheckTemperature = document.querySelector('.btn-check-temperature')
	const showResultTemperature = document.querySelector('.result-temperature')

	const weather = {
		temperature: 0,
		humidity: '80%',
		windSpeed: '35m'
	}

	Object.assign(weather, {
		getTemperature: function () {
			return this.temperature < 0
		}
	})

	btnCheckTemperature.addEventListener('click', () => {
		if (
			inputTemperature.value.trim() === '' ||
			isNaN(Number(inputTemperature.value))
		) {
			showResultTemperature.textContent =
				'error temperature is empty or not a number'
			return console.log('error temperature is empty or not a number')
		}
		weather.temperature = Number(inputTemperature.value)
		showResultTemperature.textContent = weather.getTemperature()
			? 'температура нижче 0 градусів Цельсія'
			: 'температура вище або рівна 0 градусів Цельсія'
	})

	//? Створіть об’єкт "user" з трьома властивостями:
	//? "name", "email", "password"
	//? та додайте їм будь-яких логічних значень значень.
	//? ✴️ За допомогою додавання властивостей
	//? додайте до об'єкту метод "login",
	//? який який буде перевіряти правильність
	//? введеного name, email та password на такі умови:
	//?  - ім'я <name> містить не менше 3 символів,
	//?  - електронна пошта <email> містить символ @ та крапку після неї,
	//?  - пароль <password> містить не менше 6 символів.
	//? ❌ Якщо введені дані не пройшли ці перевірки
	//? треба вивести в консоль відповідні повідомлення з помилками(помилкою).
	//? ✅ Якщо ВСІ введені дані пройшли перевірки,
	//? треба послідовно вивести в косоль значення ВСІХ цих даних.
	//! Код виконаного завдання

	const inputName = document.querySelector('.input-name')
	const inputEmail = document.querySelector('.input-email')
	const inputPassword = document.querySelector('.input-password')
	const btnCheckLogin = document.querySelector('.btn-check-login')
	const showResulLogin = document.querySelector('.result-login')

	const user = {
		name: '',
		email: '',
		password: ''
	}

	Object.assign(user, {
		login(name, email, password) {
			if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
				return false
			}

			if (name.length < 3) {
				return console.log('error name is too short')
			}

			if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
				return console.log('error email is not valid')
			}

			if (password.length < 6) {
				return console.log('error password is too short')
			}

			this.name = name
			this.email = email
			this.password = password

			console.log(user)
			console.log(name)
			console.log(email)
			console.log(password)

			return true
		}
	})

	btnCheckLogin.addEventListener('click', () => {
		const isSuccess = user.login(
			inputName.value,
			inputEmail.value,
			inputPassword.value
		)
		showResulLogin.textContent = isSuccess
			? 'Вхід успішний'
			: 'Вхід не успішний'
	})

	console.log('%c [4] ', 'color: yellow; background-color: #2274A5')

	//? ✴️ Створіть об'єкт "movie" з чотирма властивостями:
	//? "title", "director", "year", "rating".
	//? ✴️ За допомогою додавання властивостей,
	//? додайте до об'єкту метод,
	//? який повертає "true",
	//? якщо рейтинг фільму вище 8,
	//? та "false",
	//? якщо рейтинг фільму 8 або нижче.
	//? Послідовно вивести значення ВСІХ властивостей в косоль
	//? Якщо метод повернув "true",
	//? то колір тексту поля title в консолі повинен бути зелений.
	//? Якщо метод повернув "false",
	//? то колір тексту поля title в консолі повинен бути червоний.
	//! Код виконаного завдання

	// все вище взято з лмс, а це я взяв з тг
	const movie = {
		title: 'Seishun Buta Yarou wa Randoseru Girl no Yume wo Minai',
		director: ['Hajime Kamoshida', 'Souichi Masui'],
		year: 2023,
		rating: 8.31
	}

	for (const key in movie) {
		if (typeof movie[key] != 'function') {
			console.log(`${key}: ${movie[key]}`)
		}
	}

	Object.assign(movie, {
		getRating: function () {
			return this.rating > 8
		}
	})

	const isHighRated = movie.getRating()
	const color = isHighRated ? 'color: green;' : 'color: red;'

	console.log(`%c${movie.title}`, color)
}

beginBtn.addEventListener('click', lesson11())
