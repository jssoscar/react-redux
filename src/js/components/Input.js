/**
 * Author       jishengsheng
 * Date         2016-9-19 11:31:45
 * Version      1.0
 * Description  Input Component
 */

import React,{Component} from "react";

class Input extends Component {
    render() {
        var {add} = this.props;
        return <form onSubmit={ e => {
            e.preventDefault();
            add(this.refs.input.value);
            this.refs.input.value = "";
        }
        }>
            <input type="text" placeholder="回车提交" name="desc" ref="input" required/>
        </form>;
    }
}

export default Input;