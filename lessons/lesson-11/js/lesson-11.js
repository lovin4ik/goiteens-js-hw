const beginBtn = document.querySelector('.btn-begin')

function lesson11() {
	// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.
	const bankAccount = {
		ownerName: 'Valera',
		accountNumber: '1',
		balance: 1488,
		deposit: function (amount) {
			this.balance += amount
		},
		withdraw: function (amount) {
			this.balance -= amount
		}
	}

	console.log(`Власник рахунку: ${bankAccount.ownerName}`)
	console.log(`Номер рахунку: ${bankAccount.accountNumber}`)
	console.log(`Баланс: ${bankAccount.balance}`)

	bankAccount.deposit(100)
	console.log(`Новий баланс: ${bankAccount.balance}`)

	bankAccount.withdraw(500)
	console.log(`Новий баланс: ${bankAccount.balance}`)

	console.log('<- =============================== ->')
	// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
	const inputTemperature = document.querySelector('.input-temperature')
	const btnCheckTemperature = document.querySelector('.btn-check-temperature')
	const showResultTemperature = document.querySelector('.result-temperature')

	const weather = {
		temperature: inputTemperature.value,
		humidity: 0,
		windSpeed: 0,
		getTemperature: function () {
			return this.temperature < 0
		}
	}

	btnCheckTemperature.addEventListener('click', () => {
		weather.temperature = inputTemperature.value
		showResultTemperature.textContent = weather.getTemperature()
			? 'температура нижче 0 градусів Цельсія'
			: 'температура вище або рівна 0 градусів Цельсія'
	})

	// Створіть об’єкт "user", якій буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт

	const inputEmail = document.querySelector('.input-email')
	const inputPassword = document.querySelector('.input-password')
	const btnCheckLogin = document.querySelector('.btn-check-login')
	const showResulLogin = document.querySelector('.result-login')

	const user = {
		name: 'Valera',
		email: 'valera@ua.com',
		password: 'qwerty1488',
		login: function (email, password) {
			return email === this.email && password === this.password
		}
	}

	btnCheckLogin.addEventListener('click', () => {
		const isSuccess = user.login(inputEmail.value, inputPassword.value)
		showResulLogin.textContent = isSuccess
			? 'Вхід успішний'
			: 'Вхід не успішний'
	})

	// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.
	const movie = {
		title: 'Seishun Buta Yarou wa Randoseru Girl no Yume wo Minai',
		director: ['Hajime Kamoshida', 'Souichi Masui'],
		year: 2023,
		rating: 8.31,
		getRating: function (rating) {
			return rating > 8
		}
	}

	console.log(movie.getRating(movie.rating))
}

beginBtn.addEventListener('click', lesson11())
