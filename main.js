import { LessonsList } from './config/lessons.config.js'

function main() {
	const lessonsList = document.querySelector('#lessons-list')

	lessonsList.innerHTML = LessonsList.map(lesson => {
		return `<li>
			<a href="${lesson.path}" class="lesson-link"
				>${lesson.id}. ${lesson.title}
			</a>
		</li>`
	}).join('')

	console.log('App work')
}

main()
