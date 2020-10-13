import React from 'react';
import { connect } from 'react-redux';

let Modal = (state) =>{

    return(
        <>{
        state.showModal &&
        <div className="modal-container">
            <div className="modal-task">
                <input className="task-title-input" value={state.store[state.taskNum].task_title} onChange={state.changeTaskModalTitle}/>
                <button className="modal-task-close" onClick={state.closeModal}><span></span></button>
                <div className="todo-list">
                    {state.store[state.taskNum].task_body.map((todo, index) => (
                        <div className="todos" key={index} todo-num={index}>
                            <input className="todos-title-input" type="text" value={todo.todo_title} onChange={state.changeTodos}/>
                            <input className="todos-status-checkbox" type="checkbox" defaultChecked={todo.status} onChange={state.changeTodos}/>
                            <textarea className="todos-text-textarea" value={todo.text} onChange={state.changeTodos}></textarea>
                            <button className="todos-add-button" onClick={state.todoAdd}>Добавить задачу</button>
                            {index !== 0 && <button className="todos-remove-button" onClick={state.todoRemove}>Удалить задачу</button>}
                        </div>
                    ))}
                </div>
                <button className="task-save" onClick={state.taskSave}>Сохранить заметку</button>
                { state.createOrChange === "change" && <button className="task-remove" onClick={state.taskRemove}>Удалить заметку</button>}
            </div>
        </div>
        }
        </>
    );
}

export default connect(
    state => ({ store: state}),
)(Modal);
 