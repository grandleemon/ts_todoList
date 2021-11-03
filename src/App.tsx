import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {ITodo} from './types/data'
import TodoList from "./components/todoList";


const App: React.FC = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const inputRef = useRef<HTMLInputElement>(null)

    const handleKeyDown:  React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter') addTodo();
    }

    const addTodo = () => {
        if(value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('')
        }

    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {

    }

    useEffect(() => {
        if(inputRef.current) inputRef.current.focus()
    })

    return (
        <div>
            <div>
                <input onKeyDown={handleKeyDown} ref={inputRef} type="text" value={value} onChange={e => setValue(e.target.value)}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
    );
};

export default App;