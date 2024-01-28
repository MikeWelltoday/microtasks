import React, {useState} from 'react'
import './App.css'
import {TaskType, Todolist} from './components/Todolist'
import {v1} from 'uuid'

//===========================================================================================

export type FilterValuesType = 'all' | 'active' | 'completed';

type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksType = {
    [key: string]: TaskType[]
}

//===========================================================================================

function App() {

    let todolistID1 = v1()
    let todolistID2 = v1()

    const [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'}
    ])

    const [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false}
        ],
        [todolistID2]: [
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Bread', isDone: false}

        ]
    })

    function addTask(title: string, todolistId: string) {
        setTasks({...tasks, [todolistId]: [{id: v1(), title: title, isDone: false}, ...tasks[todolistId]]})
    }

    function removeTask(taskId: string, todolistId: string) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(item => item.id !== taskId)})
    }

    function changeTaskStatus(taskId: string, isDone: boolean, todolistId: string) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].map(item => item.id === taskId ? {...item, isDone} : item)})
    }

    function changeTaskFilter(value: FilterValuesType, todolistId: string) {
        setTodolists(todolists.map(todolist => todolist.id === todolistId ? {...todolist, filter: value} : todolist))
    }

    return (
        <div className="App">

            {todolists.map(todolist => {

                let filteredTasks = tasks[todolist.id]
                if (todolist.filter === 'active') filteredTasks = filteredTasks.filter(t => !t.isDone)
                if (todolist.filter === 'completed') filteredTasks = filteredTasks.filter(t => t.isDone)

                return (
                    <Todolist key={todolist.id}
                              todolistId={todolist.id}
                              todolistTitle={todolist.title}
                              filteredTasks={filteredTasks}
                              todolistTaskFilter={todolist.filter}
                              addTask={addTask}
                              removeTask={removeTask}
                              changeTaskFilter={changeTaskFilter}
                              changeTaskStatus={changeTaskStatus}
                    />
                )
            })}

        </div>
    )
}

export default App
