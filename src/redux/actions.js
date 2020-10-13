
export const taskRemoveAction = (task_num) =>{
    return{
        type: "TASK_REMOVE",
        task_num: task_num
    };
}

export const taskCreateAction = (task_num) =>{
    return{
        type: "TASK_CREATE",
        task_num: task_num
    };
}

export const setCurrentStoreAction = (state) =>{
    return{
        type: "SET_CURRENT_STORE",
        state: state
    };
}

export const taskSaveAction = (task, task_num) =>{
    return {
        type: "TASK_SAVE",
        task: task,
        task_num: task_num
    };
    
}

export const todoAddAction = (todo_num, task_num) =>{
    return {
        type: "TODO_ADD",
        todo_num: todo_num,
        task_num: task_num
    };
}

export const taskChangeTitleAction = (task_num, value) =>{
    return {
        type: "TASK_CHANGE_TITLE",
        task_num: task_num,
        value: value
    };
}

export const todoChangeTitleAction = (task_num, todo_num, value) =>{
    return {
        type: "TODO_CHANGE_TITLE",
        task_num: task_num,
        todo_num: todo_num,
        value: value
    };
}

export const todoChangeTextAction = (task_num, todo_num, value) =>{
    return {
        type: "TODO_CHANGE_TEXT",
        task_num: task_num,
        todo_num: todo_num,
        value: value
    };
}

export const todoChangeCheckBoxAction = (task_num, todo_num, value) =>{
    return {
        type: "TODO_CHANGE_CHECKBOX",
        task_num: task_num,
        todo_num: todo_num,
        value: value
    };
}

export const todoRemoveAction = (task_num, todo_num) =>{
    return{
        type: "TODO_REMOVE",
        task_num: task_num,
        todo_num: todo_num
    };
}