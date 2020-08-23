<template>
    <div>
        <ul>
            <TodoItem
                    v-for="(todo,i) in todoArr"
                    :key="i"
                    :todo="todo"
                    @push-to-list="changeTodoObj"
                />
        </ul>
    </div>
</template>
<script>
    import TodoItem from "./TodoItem";

    export default {
        name: 'TodoList',

        components:{
            TodoItem
        },

        props:{
            todoArr: {
                type: Array
            }
        },

        methods: {
            changeTodoObj(){},

        },
    }
</script>