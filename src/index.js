/**
 * Author       jishengsheng
 * Date         2016-09-22 12:29
 * Version      1.0
 * Description
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import TodoList from './js/containers/TodoList';

import configureStore from "./js/stores/stores";

const store = configureStore();

render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById('container')
);