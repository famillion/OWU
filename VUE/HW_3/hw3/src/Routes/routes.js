import Home from "../components/Home/Home";
import Contacts from "../components/Contacts/Contacts";
import MyProjects from "../components/MyProjects/MyProjects";
import VueRouter from 'vue-router';
import Vue from "vue";
import AddUserForm from "../components/MyProjects/Add_User_Form/UserForm/AddUserForm";
import AllUsers from "../components/MyProjects/AllUsers/AllUsers";

Vue.use(VueRouter);

const routes = [
    {path: '', component: Home, name: 'Home'},
    {path: '/contacts', component: Contacts, name: 'Contacts'},
    {path: '/my_projects', component: MyProjects, name: 'MyProjects', redirect: {name: 'CreateUserForm'},
        children:[
            {path:'', component: AddUserForm, name: 'CreateUserForm'},
            {path: '/all_users', component: AllUsers, name: 'AllUsers'}
        ]
    },
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});

