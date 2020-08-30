<template>
    <div class="col">
        <h2>User's ToDo</h2>
        <div class="form-group">
            <label for="todo">Todo</label>
            <input type="text" id="todo" class="form-control" placeholder="Enter ToDo" v-model="todoText">
        </div>
        <div>
            <button class="btn btn-secondary btn-group-sm"
                    @click="addTodoToList"
                    v-if="todoList.length<10">Add ToDo to list
            </button>
            <div class="border border-warning rounded p-2 text-danger" v-else>Sorry! Limit 10 todo</div>
        </div>
        <div class="todo-list mt-3">
            <ul class="list-group">
                <div class="d-flex align-items-center text-secondary rounded"
                    v-for="(toDo, index) in todoList" :key="index"
                >
                    <TodoListItem
                            :toDo="toDo"
                            :index="index"
                            @delete-item="deleteItem"
                    />
                    {{checkTodoList}}
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
    import TodoListItem from "./TodoListItem";

    export default {
        name: 'AddTodoList',

        components: {
            TodoListItem
        },

        data() {
            return {
                todoText: '',
                todoList: [],
                isClick: false
            }
        },

        methods: {
            addTodoToList() {
                if (this.todoText.trim()) {
                    this.todoList.push(this.todoText);
                }
                this.todoText = '';
            },

            deleteItem(ev){
                this.todoList.splice(ev, 1);
            },

            tdlCheck(){
                console.log(this.todoList);
                this.$emit('check-todo-list', this.todoList)
            }

        },

        computed:{
            checkTodoList(){
                return this.tdlCheck();
            }
        }


    }
</script>