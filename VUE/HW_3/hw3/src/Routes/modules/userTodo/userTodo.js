import {state} from "./state";
import {actions} from "./actions";
import {mutations} from "./mutations";
import {getters} from "./getters";

const namespace = true;

export const userTodoModule = 'userTodo.js';

export const userTodo = {
    namespace,
    state,
    actions,
    mutations,
    getters
}