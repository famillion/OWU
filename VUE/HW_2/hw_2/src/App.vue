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
    </div>
</template>

<script>


    import AddTodo from "./components/Todo/AddTodo";
    import TodoList from "./components/Todo/TodoList";

    export default {
        name: 'App',
        components: {
            AddTodo,
            TodoList
        },

        data() {
            return {
                todoArr: []
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

</style>
