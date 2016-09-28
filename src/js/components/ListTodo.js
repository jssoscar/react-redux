/**
 * Author       jishengsheng
 * Date         2016-9-19 11:34:18
 * Version      1.0
 * Description
 */

import React,{Component} from "react";

class ListTodo extends Component {
    render() {
        return <ul>
            {
                this.props.todolist.map(function(cur,index){
                    return <li key={cur.id}>
                        <label>{cur.val}</label>
                        <button data-index={index} onClick={event => this.props.remove(event.target.getAttribute("data-index"))}>删除</button>
                    </li>
                }.bind(this))
            }
        </ul>;
    }
}

export default ListTodo;