const ARMY_MOVE_ACTION = 'END_TASK_ACTION';
function findRegionById(state, id){

    for (let region of state){
        if (region.id === id){
            return region;
        }
    }
    return null;
}
export  function regionReducer (state, action){
    if (action.type === ARMY_MOVE_ACTION){
        let currentRegion = findRegionById(state, action.startId);


    }
}
export function  createArmyMoveAction(id){
    return {
        type: ARMY_MOVE_ACTION,
        startId : id,
    }

}