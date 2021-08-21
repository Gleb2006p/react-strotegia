const END_TASK_ACTION = 'END_TASK_ACTION';
export  function politicsReducer (state, action){
    if (action.type === END_TASK_ACTION){
        state.update();
    }
}
export function  createEndTaskAction(){
    return {
        type : END_TASK_ACTION,
    }
}