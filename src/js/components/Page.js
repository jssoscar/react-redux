/**
 * Author       jishengsheng
 * Date         2016-09-19 11:40
 * Version      1.0
 * Description
 */

import React,{Component} from "react";
import {connect} from "react-redux";

class Page extends Component {
    render() {
        return <p>总共有<span className="count">{this.props.len}</span>条记录！</p>;
    }
}

export default Page;