/**
 * Author       jishengsheng
 * Date         2016-09-19 12:04
 * Version      1.0
 * Description
 */

export const todolist = (state, action) => {
    state = state || [];

    switch(action.type){
        case "ADD" : {
            return [
                ...state,
                {
                    id : action.id,
                    val : action.val,
                    completed : parseInt(Math.random() * 100) % 2 === 0
                }
            ]
        }
        case "REMOVE" : {
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        }
        default :
            return state;
    }
};