/**
 * Author       jishengsheng
 * Date         2016-09-19 12:01
 * Version      1.0
 * Description
 */

import {combineReducers} from "redux";
import {todolist} from "./todolist";
import {add, remove} from "../actions/actions"

const todoApp = combineReducers({
    todolist,
    add,
    remove
});

export default todoApp;