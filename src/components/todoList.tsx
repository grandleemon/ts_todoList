import React from 'react';
import TodoItem from "./todoItem";
import {ITodo} from '../types/data'
interface ITodoListProps {
    items: ITodo[];
    removeTodo: (id:number) => void;
    toggleTodo: (id:number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const {items, removeTodo, toggleTodo} = props;
    return (
        <div>
            {
                items.map(el => <TodoItem key={el.id}
                                          toggleTodo={toggleTodo}
                                          removeTodo={removeTodo}
                                          {...el} />)
            }
        </div>
    );
};

export default TodoList;