const btnBegin = document.querySelector('.btn-begin')
const lesson12 = () => {
	//todo [1]
	console.log('%c [1] ', 'color: yellow; background-color: #2274A5')
	//? Напиши скрипт, який, для об'єкта user, послідовно:
	//? - додає поле mood зі значенням 'happy'
	//? - замінює значення hobby на 'skydiving'
	//? - замінює значення premium на false
	const user = {
		name: 'Mango',
		age: 20,
		hobby: 'html',
		premium: true
	}
	//! Код виконаного завдання

	user.mood = 'happy'
	user.hobby = 'skydiving'
	user.premium = false

	console.log(user)

	console.log('--------------------------------------------------')

	//todo [2]
	console.log('%c [2] ', 'color: yellow; background-color: #2274A5')
	//? Напиши функцію countProps(obj),
	//? яка рахує кількість властивостей в об'єкті.
	//? Функція повертає число — кількість властивостей.
	//! Код виконаного завдання
	const countProps = function (obj) {
		//! твій код

		return Object.keys(obj).length
	}
	//! Викличи функції для перевірки працездатності твоєї реалізації.
	console.log(countProps({})) //! 0
	console.log(countProps({ name: 'Mango', age: 2 })) //! 2
	console.log('--------------------------------------------------')

	//todo [3]
	console.log('%c [3] ', 'color: yellow; background-color: #2274A5')
	//? Напиши функцію findBestEmployee(employees),
	//? яка приймає об'єкт співробітників
	//? і повертає ім'я найпродуктивнішого (який виконав більше всіх задач).
	//? Співробітники і кількість виконаних завдань містяться
	//? як властивості об'єкта в форматі "ім'я":"кількість задач".
	//! Код виконаного завдання
	const findBestEmployee = function (employees) {
		//! твій код
		let bestEmployee = ''
		let maxTasks = 0

		for (const [name, tasks] of Object.entries(employees)) {
			if (tasks > maxTasks) {
				maxTasks = tasks
				bestEmployee = name
			}
		}

		return bestEmployee
	}

	//! Викличи функції для перевірки працездатності твоєї реалізації.
	console.log(
		findBestEmployee({
			ann: 29,
			david: 35,
			helen: 1,
			lorence: 99
		})
	) //! lorence

	console.log(
		findBestEmployee({
			poly: 12,
			mango: 17,
			ajax: 4
		})
	) //! mango

	console.log(
		findBestEmployee({
			lux: 147,
			david: 21,
			kiwi: 19,
			chelsy: 38
		})
	) //! lux
	console.log('--------------------------------------------------')

	//todo [4]
	console.log('%c [4] ', 'color: yellow; background-color: #2274A5')
	//? Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат.
	//? Функція рахує загальну суму зарплати працівників і повертає її.
	//? Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
	//! Код виконаного завдання
	const countTotalSalary = function (employees) {
		//! твій код
		return Object.values(employees).reduce((total, salary) => total + salary, 0)
	}

	//! Викличи функції для перевірки працездатності твоєї реалізації.
	console.log(countTotalSalary({})) //! 0

	console.log(
		countTotalSalary({
			mango: 100,
			poly: 150,
			alfred: 80
		})
	) //! 330

	console.log(
		countTotalSalary({
			kiwi: 200,
			lux: 50,
			chelsy: 150
		})
	) //! 400
	console.log('--------------------------------------------------')

	//todo [5]
	console.log('%c [5] ', 'color: yellow; background-color: #2274A5')
	//? Напиши функцію getAllPropValues(arr, prop),
	//? яка отримує масив об'єктів і ім'я властивості.
	//? Повертає масив значень певної властивості prop
	//? з кожного об'єкта в масиві.
	//! Код виконаного завдання
	const products = [
		{ name: 'Радар', price: 1300, quantity: 4 },
		{ name: 'Сканер', price: 2700, quantity: 3 },
		{ name: 'Дроїд', price: 400, quantity: 7 },
		{ name: 'Захоплення', price: 1200, quantity: 2 }
	]

	const getAllPropValues = function (arr, prop) {
		//! твій код
		return arr.map(item => item[prop])
	}

	//! Викличи функції для перевірки працездатності твоєї реалізації.
	console.log(getAllPropValues(products, 'name')) //! ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
	console.log(getAllPropValues(products, 'quantity')) //! [4, 3, 7, 2]
	console.log(getAllPropValues(products, 'category')) //! []
	console.log('--------------------------------------------------')

	//todo [6]
	console.log('%c [6] ', 'color: yellow; background-color: #2274A5')
	//? Напиши функцію calculateTotalPrice(allProdcuts, productName),
	//? яка отримує масив об'єктів та ім'я продукту (значення властивості name).
	//? Повертає загальну вартість продукту (ціна * кількість).
	//? Викличи функції для перевірки працездатності твоєї реалізації.
	//! Код виконаного завдання
	const calculateTotalPrice = function (allProdcuts, productName) {
		//! твій код
		const findProduct = allProdcuts.find(
			product => product.name === productName
		)
		return findProduct
			? findProduct.price * findProduct.quantity
			: 'Product not found'
	}

	//! Викличи функції для перевірки працездатності твоєї реалізації.
	console.log(calculateTotalPrice(products, 'Радар')) //! 5200
	console.log(calculateTotalPrice(products, 'Дроїд')) //! 2800
	console.log(calculateTotalPrice(products, 'Машина')) //! Product not found
	console.log('--------------------------------------------------')

	//todo [7] - додаткове
	console.log('%c [7] - додаткове ', 'color: yellow; background-color: #2274A5')
	//? Напиши сценарій керування особистим кабінетом інтернет-банку.
	//? Є об'єкт account в якому необхідно реалізувати методи
	//? для роботи з балансом та історією транзакцій.
	//! Код виконаного завдання

	const account = {
		owner: 'Mango',
		balance: 0,
		transactions: [],

		deposit(amount) {
			if (amount > 0) {
				this.balance += Number(amount)
				this.transactions.push({ type: 'deposit', amount })
				console.log(`Deposit: ${amount}`)
			} else {
				console.log('Amount must be a lot than 0')
			}
		},

		withdraw(amount) {
			if (amount > 0 && amount <= this.balance) {
				this.balance += Number(amount)
				this.transactions.push({ type: 'deposit', amount })
				console.log(`Deposit: ${amount}`)
			} else {
				console.log('Amount is a greater than balance')
			}
		},

		getBalance() {
			return this.balance
		},

		getTransactionHistory() {
			return this.transactions
		}
	}

	console.log('--------------------------------------------------')

	account.deposit(500)
	account.withdraw(200)
	account.deposit(300)
	account.withdraw(700)
	console.log('Історія транзакцій:', account.getTransactionHistory())
	console.log('Поточний баланс:', account.getBalance())
}

btnBegin.addEventListener('click', lesson12)
