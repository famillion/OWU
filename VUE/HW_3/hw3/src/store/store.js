import Vue from 'vue';
import Vuex from 'vuex';
import {userTodo, userTodoModule} from "../Routes/modules/userTodo/userTodo";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{
        [userTodoModule]: userTodo
    }
});