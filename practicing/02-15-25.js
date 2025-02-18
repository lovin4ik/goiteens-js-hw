// books
const books = {
	count: 3,
	list: [
		{
			title: 'The Great Gatsby',
			author: 'F. Scott Fitzgerald',
			year: 1925
		},
		{
			title: 'To Kill a Mockingbird',
			author: 'Harper Lee',
			year: 1960
		},
		{
			title: '1984',
			author: 'George Orwell',
			year: 1949
		}
	]
}
//! Код виконаного завдання

const {
	count: countList,
	list: [
		{ title: title1, author: author1, year: year1 },
		{ title: title2, author: author2, year: year2 },
		{ title: title3, author: author3, year: year3 }
	]
} = books

console.log(`countList: ${countList}`)
console.log(`title1: ${title1}`)
console.log(`author1: ${author1}`)
console.log(`year1: ${year1}`)
console.log(`title2: ${title2}`)
console.log(`author2: ${author2}`)
console.log(`year2: ${year2}`)
console.log(`title3: ${title3}`)
console.log(`author3: ${author3}`)
console.log(`year3: ${year3}`)

//todo [1]
console.log('%c [1] ', 'color: yellow; background-color: #2274A5')
//? ✴️ Створіть об'єкт "bankAccount" з трьома властивостями:
//?  "ownerName", "accountNumber", "balance"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "deposit",
//? який, використовуючи методи взаємодії з користувачем,
//? додає гроші на рахунок,
//? та виводить повідомлення про залишок на рахунку
//? дублюючи його в консоль.
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод "withdraw",
//? який, використовуючи методи взаємодії з користувачем,
//? дозволяє знімати гроші з рахунку,
//? якщо на рахунку достатньо коштів,
//? та виводить повідомлення про залишок на рахунку,
//? дублюючи його в консоль.
//? Якщо на рахунку не вистачає коштів, то він виводить повідомлення:
//? "⛔️ Не достатньо коштів на вашому рахунку!",
//? дублюючи його в консоль.
//? ✳️ За допомогою виклика методу "deposit" об'єкта "bankAccount" додай кошти на рахунок.
//? ✳️ За допомогою виклика методу "withdraw" об'єкта "bankAccount" зніми кошти з рахуноку.
//! Код виконаного завдання

const wrapperBalance = document.querySelector('.balance')
const btnDeposit = document.querySelector('.bth-deposit')
const btnWithdraw = document.querySelector('.bth-withdraw')
const inputAmount = document.querySelector('.input-amount')
const result = document.querySelector('.result')

const bankAccount = {
	ownerName: 'Jack Nicholson',
	accountNumber: 1111222233334444,
	balance: 10000
}

Object.assign(bankAccount, {
	deposit(amount) {
		if (isNaN(Number(amount)) || amount <= 0) {
			result.textContent = 'Error, amount must be a lot than 0 or not a number'
			return console.log('Error, amount must be a lot than 0 or not a number')
		}
		this.balance += Number(amount)

		wrapperBalance.textContent = `Your balance:${bankAccount.balance}$`
		result.textContent = 'deposit is successful'
		return console.log('deposit')
	},
	withdraw(amount) {
		if (isNaN(Number(amount)) || amount <= 0) {
			result.textContent = 'Error, amount must be a lot than 0 or not a number'
			return console.log('Error, amount must be a lot than 0 or not a number')
		}

		if (amount > this.balance) {
			result.textContent = 'Error, not enough money'
			return console.log('Error, not enough money')
		}

		this.balance -= Number(amount)
		result.textContent = 'withdraw is successful'
		wrapperBalance.textContent = `Your balance:${bankAccount.balance}$`
		return console.log('withdraw')
	}
})

wrapperBalance.textContent = `Your balance: ${bankAccount.balance}$`

btnDeposit.addEventListener('click', () => {
	bankAccount.deposit(inputAmount.value)
})
btnWithdraw.addEventListener('click', () => {
	bankAccount.withdraw(inputAmount.value)
})

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

	// {
	// 	id,
	// 	type,
	// 	amount
	// }

	//todo:  Метод створює і повертає об'єкт транзакції.
	//todo:  Приймає суму і тип транзакції.
	createTransaction(amount, type) {
		const transactionsObject = {
			id: this.transactions.length + 1,
			type,
			amount
		}

		console.log(transactionsObject)
		return transactionsObject
	},

	//todo:  Метод відповідає за додавання суми до балансу.
	//todo:  Приймає суму танзакції.
	//todo:  Викликає createTransaction для створення об'єкта транзакції
	//todo:  після чого додає його в історію транзакцій
	deposit(amount) {
		this.balance += amount
		const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT)

		this.transactions.push(newTransaction)
		console.log(newTransaction)
		console.log(this.transactions)
		console.log(this.getBalance())
		return console.log('deposit')
	},
	//todo:  Метод відповідає за зняття суми з балансу.
	//todo:  Приймає суму танзакції.
	//todo:  Викликає createTransaction для створення об'єкта транзакції
	//todo:  після чого додає його в історію транзакцій.
	//todo:  Якщо amount більше, ніж поточний баланс, виводь повідомлення
	//todo:  про те, що зняття такої суми не можливо, недостатньо коштів.
	withdraw(amount) {
		if (amount > this.balance) {
			result.textContent = 'Error, not enough money'
			return console.log('Error, not enough money')
		}

		const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW)

		this.transactions.push(newTransaction)

		this.balance -= Number(amount)
		console.log(newTransaction)
		console.log(this.transactions)
		console.log(this.getBalance())
		return console.log('withdraw')
	},

	//todo:  Метод повертає поточний баланс
	getBalance() {
		return this.balance
	},

	//todo:  Метод шукає і повертає об'єкт транзакції по id
	getTransactionDetails(id) {},

	//todo:  Метод повертає кількість коштів
	//todo:  певного типу транзакції з усієї історії транзакцій
	getTransactionTotal(type) {}
}
//! Код виконаного завдання

account.deposit(1000)
account.deposit(2000)
account.deposit(3000)
account.withdraw(100)
account.withdraw(1488)
account.withdraw(300)
account.withdraw(4112)

console.log('--------------------------------------------------')
