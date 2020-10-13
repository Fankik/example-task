let initialState = 0;

if(JSON.parse(localStorage.getItem('saveState')) === null){
    initialState = [
        {
            task_title: "Заметка 1", 
            task_body:[{todo_title: "Задача 1", text: "Сделать то то то", status: "checked"},
                       {todo_title: "Задача 2", text: "Сделать то то то", status: ""},
                       {todo_title: "Задача 3", text: "Сделать то то то", status: ""}]
        },
        {
            task_title: "Заметка 2", 
            task_body:[{todo_title: "Задача 2", text: "Сделать то то то", status: ""}]
        }];
}
else{
    initialState = JSON.parse(localStorage.getItem('saveState'));
}


export const storeReducer = (state = initialState, action) =>{
 
    switch(action.type){

        case "TASK_REMOVE":
            state.splice(action.task_num, 1);
            return [...state];

        case "TASK_CREATE":
            state.splice(action.task_num, 0, {
                task_title: "Заметка",
                task_body:[{todo_title: "Задача 1", text: "", status: ""}]
            });
            return [...state];

        case "SET_CURRENT_STORE":
            state = action.state;
            return [...state];
        
        case "TASK_SAVE":
            state[action.task_num] = action.task;
            return [...state];

        case "TODO_ADD":
            state[action.task_num].task_body.splice(action.todo_num, 0, {todo_title: "", text: "", status: ""});
            return [...state];

        case "TASK_CHANGE_TITLE":
            state[action.task_num].task_title = action.value;
            return [...state];

        case "TODO_CHANGE_TITLE":
            state[action.task_num].task_body[action.todo_num].todo_title = action.value;
            return [...state];

        case "TODO_CHANGE_TEXT":
            state[action.task_num].task_body[action.todo_num].text = action.value;
            return [...state];    

        case "TODO_CHANGE_CHECKBOX":
            state[action.task_num].task_body[action.todo_num].status = action.value;
            return [...state]; 

        case "TODO_REMOVE":
            state[action.task_num].task_body.splice(action.todo_num, 1);
            return [...state];

        default:
    }
    return state
}