import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {FilterValuesType} from '../App'

//===========================================================================================

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistId: string
    todolistTitle: string
    filteredTasks: Array<TaskType>
    todolistTaskFilter: FilterValuesType
    addTask: (title: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
    changeTaskFilter: (value: FilterValuesType, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
}

//===========================================================================================

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim(), props.todolistId)
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTask()
        }
    }

    function onClickChangeTodolistFilterHandler(mode: FilterValuesType) {
        return () => props.changeTaskFilter(mode, props.todolistId)
    }

    return <div>
        <h3>{props.todolistTitle}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? 'error' : ''}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
            {
                props.filteredTasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.todolistId)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked, props.todolistId)
                    }

                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.todolistTaskFilter === 'all' ? 'active-filter' : ''}
                    onClick={onClickChangeTodolistFilterHandler('all')}>All
            </button>
            <button className={props.todolistTaskFilter === 'active' ? 'active-filter' : ''}
                    onClick={onClickChangeTodolistFilterHandler('active')}>Active
            </button>
            <button className={props.todolistTaskFilter === 'completed' ? 'active-filter' : ''}
                    onClick={onClickChangeTodolistFilterHandler('completed')}>Completed
            </button>
        </div>
    </div>
}
