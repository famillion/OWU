<template>
    <div class="container">
        <div class="row p-4 rounded">
            <div class="col">
                <form action="">
                    <h2>Create New User</h2>
                    <div class="form-group">
                        <label for="name">Name *</label>
                        <input type="text" id="name"
                               :class="['form-control', warningFlag[0]]"
                               v-model="userForm.name"
                        >
                    </div>
                    <div class="form-group">
                        <label for="surname">Surname *</label>
                        <input type="text" id="surname"
                               :class="['form-control', warningFlag[1]]"
                               v-model="userForm.surname"
                        >
                    </div>
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email"
                               :class="['form-control', warningFlag[2]]"
                               v-model="userForm.email"
                        >
                    </div>
                    <div class="form-group">
                        <label for="password">Password *</label>
                        <input type="password" id="password"
                               :class="['form-control', warningFlag[3]]"
                               v-model="userForm.password"
                        >
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0">Gender:</legend>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender" id="male" value="Male"
                                           checked
                                           v-model="userForm.gender"
                                    >
                                    <label class="form-check-label" for="male">
                                        Male
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender" id="female"
                                           value="Female"
                                           v-model="userForm.gender"
                                    >
                                    <label class="form-check-label" for="female">
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div class="form-group">
                        <div class="form-check form-check-inline">
                            <input type="checkbox" id="send-news" class="form-check-input"
                                   v-model="userForm.sendsCheck"
                                   value="News"
                            >
                            <label for="send-news" class="form-check-label">Send news</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" id="send-offers" class="form-check-input"
                                   v-model="userForm.sendsCheck"
                                   value="Offers"
                            >
                            <label for="send-offers" class="form-check-label">Send Offers</label>
                        </div>
                    </div>

                </form>
            </div>

            <AddTodoList
                    @check-todo-list="todoListInObj"
            />
        </div>
        <div class="row">
                <div class="col-4 offset-4 mb-4">
                    <button class="btn btn-primary btn-lg btn-block" @click="sendForm">Create User</button>
                </div>
        </div>
    </div>
</template>
<script>
    import AddTodoList from "../TodoList/AddTodoList";

    export default {
        name: 'AddUserForm',

        components: {
            AddTodoList
        },

        data() {
            return {
                userForm: {
                    name: '',
                    surname: '',
                    email: '',
                    password: '',
                    gender: '',
                    sendsCheck: [],
                    objTodoList: [],
                },
                isWarning: {
                    name: false,
                    surname: false,
                    email: false,
                    password: false
                },
                warningBorder: 'border border-danger'
            }
        },

        computed: {
            warningFlag() {
                return [
                    this.checkInput(this.isWarning.name),
                    this.checkInput(this.isWarning.surname),
                    this.checkInput(this.isWarning.email),
                    this.checkInput(this.isWarning.password),
                ]
            },
        },

        methods: {
            todoListInObj(ev) {
                this.userForm.objTodoList = ev;
            },

            checkInput(flag) {
                return flag ? this.warningBorder : '';
            },

            tumblerFlag(value) {
                this.isWarning[value] = true;
            },

            sendForm() {
                if (this.userForm.name
                    && this.userForm.surname
                    && this.userForm.email
                    && this.userForm.password) {

                    this.$http.post('https://owu-vue-db.firebaseio.com/users.json', this.userForm);
                    this.userForm.name = '';
                    this.userForm.surname = '';
                    this.userForm.email = '';
                    this.userForm.password = '';
                    this.userForm.gender = '';
                    this.userForm.sendsCheck.length = 0;
                    this.userForm.objTodoList.length = 0;
                } else {
                    if (!this.userForm.name) {
                        this.tumblerFlag('name');
                    }
                    if (!this.userForm.surname) {
                        this.tumblerFlag('surname');
                    }
                    if (!this.userForm.email) {
                        this.tumblerFlag('email');
                    }
                    if (!this.userForm.password) {
                        this.tumblerFlag('password');
                    }
                }
            }
        },


    }

</script>


