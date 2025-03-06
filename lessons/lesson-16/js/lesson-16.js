import { task1 } from './task-1.js'
import { task2 } from './task-2.js'
import { task3 } from './task-3.js'
import { task4 } from './task-4.js'
import { task5 } from './task-5.js'

const beginBtn = document.querySelector('.btn-begin')

const lesson16 = () => {
	task1()
	task2()
	task3()
	task4()
	task5()
}

beginBtn.addEventListener('click', lesson16)
