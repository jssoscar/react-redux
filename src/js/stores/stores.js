/**
 * Author       jishengsheng
 * Date         2016-09-22 15:48
 * Version      1.0
 * Description
 */

import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export default () => {
    return createStore(rootReducer);
};