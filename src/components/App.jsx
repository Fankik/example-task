import React, {useState} from 'react';
import { connect } from 'react-redux';
import '../css/style.css';
import {taskCreateAction, 
        taskRemoveAction, 
        setCurrentStoreAction, 
        taskSaveAction, 
        todoAddAction, 
        taskChangeTitleAction, 
        todoChangeTitleAction, 
        todoChangeTextAction,
        todoChangeCheckBoxAction,
        todoRemoveAction
    } from '../redux/actions';
import Modal from './Modal';


let App = (state) => {

    const [taskNum, setTaskNum] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [task, setTask] = useState();
    const [createOrChange, setCreateOrChange] = useState(0)

    const taskCreateChange = (event) =>{ 
        document.body.style.overflow = "hidden";
        localStorage.setItem('currentState', JSON.stringify(state.store));
        let targetTaskNum = parseInt(event.target.parentElement.getAttribute('task-num'));
        if(isNaN(targetTaskNum)) targetTaskNum = 0;
        setCreateOrChange("create")
        setTaskNum(targetTaskNum);

        switch(event.target.className){
            case "task-create-first":
                state.dispatch(taskCreateAction(targetTaskNum));
                setTask(state.store[targetTaskNum]);
                break;

            case "task-create":
                setTaskNum(targetTaskNum + 1);
                state.dispatch(taskCreateAction(targetTaskNum + 1));
                setTask(state.store[targetTaskNum + 1]);
                break;

            case "task-change":
                setCreateOrChange("change");
                setTask(state.store[targetTaskNum]);
                break;

            default:
        }

        
        setShowModal(true);
    }

    const taskRemove = () =>{
        document.body.style.overflow = "unset";
        state.dispatch(taskRemoveAction(taskNum));
        setShowModal(false);
        localStorage.clear('currentState');
    }

    const closeModal = () =>{
        document.body.style.overflow = "unset";
        setShowModal(false);
        state.dispatch(setCurrentStoreAction(JSON.parse(localStorage.getItem('currentState'))));
        localStorage.clear('currentState');
    }

    const changeTaskModalTitle = (event) =>{
        task.task_title = event.target.value;
        state.dispatch(taskChangeTitleAction(taskNum, event.target.value));
    }

    const changeTodos = (event) =>{
        let todoNum = event.target.parentElement.getAttribute('todo-num');
        let value = event.target.value;
 
        switch(event.target.className){
            case "todos-title-input":
                task.task_body[todoNum].todo_title = value;
                state.dispatch(todoChangeTitleAction(taskNum, todoNum, value));
                break;

            case "todos-status-checkbox":
                task.task_body[todoNum].status === "checked"? state.dispatch(todoChangeCheckBoxAction(taskNum, todoNum, "")): state.dispatch(todoChangeCheckBoxAction(taskNum, todoNum, "checked"));
                break;

            case "todos-text-textarea":
                task.task_body[todoNum].text = value;
                state.dispatch(todoChangeTextAction(taskNum, todoNum, value));
                break;

            default:
        }

    }

    const taskSave = () =>{
        document.body.style.overflow = "unset";
        state.dispatch(taskSaveAction(task, taskNum));
        setShowModal(false);
        localStorage.setItem('saveState', JSON.stringify(state.store));
    }

    const todoAdd = (event) =>{
        state.dispatch(todoAddAction(parseInt(event.target.parentElement.getAttribute('todo-num')) + 1, taskNum));
    }

    const todoRemove = (event) =>{
        state.dispatch(todoRemoveAction(taskNum, event.target.parentElement.getAttribute('todo-num')));
    }

    return (
        <div className="center-container">
            <button className="task-create-first" onClick={taskCreateChange}>Создать первую заметку</button>
            {state.store.map((task, index) => (
                
                <div className="task" key={index} task-num={index}>
                    <button className="task-change" onClick={taskCreateChange}>Изменить заметку</button>

                    <p>{task.task_title}</p>
                    <div className="todo-list">
                        {task.task_body.map((todo, index) => (
                            <div className="todos" key={index} todo-num={index}>
                                <p>{todo.todo_title}</p>
                                <input className="todos-status-checkbox" type="checkbox" checked={todo.status} readOnly />
                                <textarea readOnly value={todo.text}></textarea>
                            </div>   
                        ))}
                    </div>
                    <button className="task-create" onClick={taskCreateChange}>Создать заметку</button>
                </div>

            ))}

            <Modal {...{
                taskNum, 
                closeModal,
                showModal,
                taskRemove, 
                changeTaskModalTitle,
                changeTodos,
                taskSave,
                createOrChange,
                todoAdd,
                todoRemove
                }}/>
         
        </div>
    );
}

export default connect(
    state => ({ store: state}),
)(App);