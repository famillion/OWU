import Home from "./components/Home/Home";
import Contacts from "./components/Contacts/Contacts";
import MyProjects from "./components/MyProjects/MyProjects";

export const routes = [
    {path: '', component: Home, name: 'Home'},
    {path: '/contacts', component: Contacts, name: 'Contacts'},
    {path: '/my_projects', component: MyProjects, name: 'MyProjects',
        // children:[
        //     {}
        // ]
    },
];