<template>
    <div>
        <AddTodo
                @todo-to-app="todoToArr"
                :lengthArr="todoArr.length"
                :todoArr="todoArr"
                @removed-arr="removedArr"
        />
        <TodoList :todoArr="todoArr"
        />

        <div class="show-form">
            <button @click="isShowForm = !isShowForm">Show Form</button>
        </div>
        <Form v-if="isShowForm"/>
    </div>
</template>

<script>


    import AddTodo from "./components/Todo/AddTodo";
    import TodoList from "./components/Todo/TodoList";
    import Form from "./components/Form/Form";


    export default {
        name: 'App',
        components: {
            AddTodo,
            TodoList,
            Form
        },

        data() {
            return {
                todoArr: [],
                isShowForm: false
            }
        },

        methods: {
            todoToArr(ev){
                ev.id = this.todoArr.length;
                this.todoArr.push(ev);
            },

            removedArr(ev){
                this.todoArr = ev;
            },
        },
    }
</script>

<style>
.show-form{
    margin: 20px;
}
</style>
