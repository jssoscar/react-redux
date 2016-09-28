/**
 * Author       jishengsheng
 * Date         2016-9-19 11:19:29
 * Version      1.0
 * Description  React todolist demo
 */

import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Input from "../components/Input";
import ListTodo from "../components/ListTodo";
import Page from "../components/Page";

import {add, remove} from "../actions/actions";

class TodoList extends Component{
    render() {
        const {todolist, add, remove} = this.props;

        return (
            <div>
                <h1>React+Redux版todolist</h1>
                <Input add={add}/>
                <ListTodo todolist={todolist} remove={remove}/>
                <Page len={todolist.length}/>
            </div>
        ) ;
    }
}

export default  connect((state) => {
    return {
        todolist : state.todolist
    };
}, (dispatch) => {
    return bindActionCreators({
        add,
        remove
    }, dispatch);
})(TodoList);