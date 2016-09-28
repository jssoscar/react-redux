/**
 * Author       jishengsheng
 * Date         2016-09-19 11:54
 * Version      1.0
 * Description
 */

let autoId = 0;

export const add = val => {
    return {
        type : "ADD",
        val,
        id : autoId++
    };
};

export const remove = index => {
    return {
        type : "REMOVE",
        index : parseInt(index, 10)
    }
};