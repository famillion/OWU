import Vue from 'vue';
import Vuex from 'vuex';
import {userTodo, userTodoModule} from "../Routes/modules/userTodo/userTodo";

Vue.use(Vuex);
const ava = require('../assets/img/chuckn.png');
export const store = new Vuex.Store({
    state:{
        avatar: ava
    },
    modules:{
        [userTodoModule]: userTodo
    }
});