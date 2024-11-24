import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todosActions';

const Todo = () => {
    const {isLoading,todos,error} = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllTodos())
    },[])
    return (
        <div>
            <h2>Todos App</h2>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {todos && todos.map((todo) =>{
                    return <article key={todo.id}>
                        <h2>{todo.id}</h2>
                        <h2>{todo.title}</h2>
                        
                    </article>
                })}
            </section>
        </div>
    );
};

export default Todo;