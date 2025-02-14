const btnBegin = document.querySelector('.btn-begin')

const lesson13 = () => {
	//todo [1]
	console.log('%c [1] ', 'color: yellow; background-color: #2274A5')
	//? Зроби деструктуризацію об’єкта
	//? та виведи вконсоль всі властивості
	//? як змінні з такими ж іменами,
	//? або заміни імена на схожі, якщо це необхідно.
	const userA = {
		name: 'Mango',
		age: 20,
		hobby: 'html',
		premium: true
	}
	//! Код виконаного завдання

	const { name: nameA, age: ageA, hobby: hobbyA, premium: premiumA } = userA

	console.log(`nameA: ${nameA}`)
	console.log(`ageA: ${ageA}`)
	console.log(`hobbyA: ${hobbyA}`)
	console.log(`premiumA: ${premiumA}`)

	console.log('--------------------------------------------------')

	//todo [2]
	console.log('%c [2] ', 'color: yellow; background-color: #2274A5')
	//? Зроби деструктуризацію об’єкта
	//? та виведи вконсоль всі властивості
	//? як змінні з такими ж іменами,
	//? або заміни імена на схожі, якщо це необхідно.
	const userB = { name: 'Mango', age: 2 }
	//! Код виконаного завдання

	const { name: nameB, age: ageB } = userB

	console.log(`nameB: ${nameB}`)
	console.log(`ageB: ${ageB}`)

	console.log('--------------------------------------------------')

	//todo [3]
	console.log('%c [3] ', 'color: yellow; background-color: #2274A5')
	//? Зроби глибоку деструктуризацію об’єкта
	//? та виведи вконсоль всі властивості
	//? як змінні з такими ж іменами,
	//? або заміни імена на схожі, якщо це необхідно.
	const employeePerformance = {
		count: 11,
		employeePerformanceLists: [
			{
				ann: 29,
				david: 35,
				helen: 1,
				lorence: 99
			},
			{
				poly: 12,
				mango: 17,
				ajax: 4
			},
			{
				lux: 147,
				david: 21,
				kiwi: 19,
				chelsy: 38
			}
		]
	}
	//! Код виконаного завдання

	const {
		count: countPerformance,
		employeePerformanceLists: [
			{ ann, david: david1, helen, lorence },
			{ poly: poly1, mango: mango1, ajax },
			{ lux: lux1, david: david2, kiwi: kiwi1, chelsy: chelsy1 }
		]
	} = employeePerformance

	console.log(`count: ${countPerformance}`)
	console.log(`ann: ${ann}`)
	console.log(`david1: ${david1}`)
	console.log(`helen: ${helen}`)
	console.log(`lorence: ${lorence}`)
	console.log(`poly: ${poly1}`)
	console.log(`mango: ${mango1}`)
	console.log(`ajax: ${ajax}`)
	console.log(`lux: ${lux1}`)
	console.log(`david2: ${david2}`)
	console.log(`kiwi: ${kiwi1}`)
	console.log(`chelsy: ${chelsy1}`)

	console.log('--------------------------------------------------')

	//todo [4]
	console.log('%c [4] ', 'color: yellow; background-color: #2274A5')
	//? Зроби глибоку деструктуризацію об’єкта
	//? та виведи вконсоль всі властивості
	//? як змінні з такими ж іменами,
	//? або заміни імена на схожі, якщо це необхідно.
	const employeeSalaries = {
		count: 6,
		employeeSalaryLists: [
			{
				mango: 100,
				poly: 150,
				alfred: 80
			},
			{
				kiwi: 200,
				lux: 50,
				chelsy: 150
			}
		]
	}
	//! Код виконаного завдання

	const {
		count: countSalaries,
		employeeSalaryLists: [
			{ mango: mango2, poly: poly2, alfred },
			{ kiwi: kiwi2, lux: lux2, chelsy: chelsy2 }
		]
	} = employeeSalaries

	console.log(`countSalaries: ${countSalaries}`)
	console.log(`mango2: ${mango2}`)
	console.log(`poly2: ${poly2}`)
	console.log(`alfred: ${alfred}`)
	console.log(`kiwi2: ${kiwi2}`)
	console.log(`lux2: ${lux2}`)
	console.log(`chelsy2: ${chelsy2}`)

	console.log('--------------------------------------------------')

	//todo [5]
	console.log('%c [5] ', 'color: yellow; background-color: #2274A5')
	//? Зроби глибоку деструктуризацію об’єкта
	//? та виведи вконсоль всі властивості
	//? як змінні з такими ж іменами,
	//? або заміни імена на схожі, якщо це необхідно.
	const products = [
		{
			name: 'Радар',
			price: 1300,
			quantity: 4
		},
		{
			name: 'Сканер',
			price: 2700,
			quantity: 3
		},
		{
			name: 'Дроїд',
			price: 400,
			quantity: 7
		},
		{
			name: 'Захоплення',
			price: 1200,
			quantity: 2
		}
	]
	//! Код виконаного завдання

	const [
		{ name: name1, price: price1, quantity: quantity1 },
		{ name: name2, price: price2, quantity: quantity2 },
		{ name: name3, price: price3, quantity: quantity3 },
		{ name: name4, price: price4, quantity: quantity4 }
	] = products

	console.log(`name1: ${name1}, price1: ${price1}, quantity1: ${quantity1}`)
	console.log(`name2: ${name2}, price2: ${price2}, quantity2: ${quantity2}`)
	console.log(`name3: ${name3}, price3: ${price3}, quantity3: ${quantity3}`)
	console.log(`name4: ${name4}, price4: ${price4}, quantity4: ${quantity4}`)

	console.log('--------------------------------------------------')

	//todo [6]
	console.log('%c [6] ', 'color: yellow; background-color: #2274A5')
	//? ✴️ Напиши сценарій керування особистим кабінетом інтернет-банку.
	//? Є об'єкт account в якому необхідно реалізувати методи
	//? для роботи з балансом та історією транзакцій.
	//? ✳️ Типів транзацкій всього два.
	//? Можна покласти або зняти гроші з рахунку.
	const Transaction = {
		DEPOSIT: 'deposit',
		WITHDRAW: 'withdraw'
	}

	//todo: Кожна транзакція - це об'єкт з властивостями: id, type і amount

	const account = {
		//todo: Поточний баланс рахунку
		balance: 0,
		//todo:  Історія транзакцій
		transactions: [],

		//todo:  Метод створює і повертає об'єкт транзакції.
		//todo:  Приймає суму і тип транзакції.
		createTransaction(amount, type) {
			return {
				id: this.transactions.length + 1,
				type,
				amount
			}
		},

		//todo:  Метод відповідає за додавання суми до балансу.
		//todo:  Приймає суму танзакції.
		//todo:  Викликає createTransaction для створення об'єкта транзакції
		//todo:  після чого додає його в історію транзакцій
		deposit(amount) {
			if (typeof amount !== 'number' || amount <= 0) {
				console.log('Error, amount is not a number or empty')
				return
			}

			const transaction = this.createTransaction(amount, Transaction.DEPOSIT)
			this.transactions.push(transaction)
			this.balance += amount

			console.log(`Success, amount: ${amount}, balance: ${this.balance}`)
		},

		//todo:  Метод відповідає за зняття суми з балансу.
		//todo:  Приймає суму танзакції.
		//todo:  Викликає createTransaction для створення об'єкта транзакції
		//todo:  після чого додає його в історію транзакцій.
		//todo:  Якщо amount більше, ніж поточний баланс, виводь повідомлення
		//todo:  про те, що зняття такої суми не можливо, недостатньо коштів.
		withdraw(amount) {
			if (typeof amount !== 'number' || amount <= 0) {
				console.log('Error, amount is not a number or empty')
				return
			}

			if (amount > this.balance) {
				console.log('Error, not enough money')
				return
			}

			const transaction = this.createTransaction(amount, Transaction.WITHDRAW)
			this.transactions.push(transaction)
			this.balance -= amount

			console.log(`Success, amount: ${amount}, balance: ${this.balance}`)
		},

		//todo:  Метод повертає поточний баланс
		getBalance() {
			return this.balance
		},

		//todo:  Метод шукає і повертає об'єкт транзакції по id
		getTransactionDetails(id) {
			return this.transactions.find(transaction => transaction.id === id)
		},

		//todo:  Метод повертає кількість коштів
		//todo:  певного типу транзакції з усієї історії транзакцій
		getTransactionTotal(type) {
			return this.transactions
				.filter(transaction => transaction.type === type)
				.reduce((acc, transaction) => acc + transaction.amount, 0)
		}
	}
	//! Код виконаного завдання

	account.deposit(500, Transaction.DEPOSIT)
	account.getBalance()
	account.withdraw(300, Transaction.WITHDRAW)
	account.getBalance()
	account.deposit(200, Transaction.DEPOSIT)
	account.getBalance()
	account.withdraw(150, Transaction.WITHDRAW)
	account.getBalance()
	account.deposit(400, Transaction.DEPOSIT)
	account.getBalance()
	account.withdraw(500, Transaction.WITHDRAW)
	account.getBalance()

	console.log('--------------------------------------------------')
}

btnBegin.addEventListener('click', lesson13)
