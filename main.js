const tasks = [
    {title: "Купить продукты на неделю", isDone: false},
    {title: "Полить цветы", isDone: true},
    {title: "Сходить на тренировку", isDone: false},
    {title: "Купить лекарства", isDone: false},
]

const rootEl = document.getElementById("root")
const headerEl = document.createElement("h1")
headerEl.append('Trello')
rootEl.append(headerEl)
const tasksEl = document.createElement("ul")
tasks.forEach((task) => {
    const taskEl = document.createElement("li")
    const taskTitleEl = document.createElement("div")
    taskTitleEl.append(task.title)
    taskEl.append(taskTitleEl)
    const taskCheckboxEl = document.createElement("input")
    taskCheckboxEl.type = "checkbox"
    taskCheckboxEl.checked = task.isDone
    taskEl.append(taskCheckboxEl)

    tasksEl.append(taskEl)
})
rootEl.append(tasksEl)
