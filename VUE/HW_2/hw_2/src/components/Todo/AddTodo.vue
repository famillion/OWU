<template>
    <div>
        <input type="text" v-model="todoStr">
        <button @click="todoToApp" v-if="lengthArr<10">Add Todo</button>
        <button @click="removeEl">Remove Checked Todo</button>
    </div>
</template>

<script>

    export default {
        name: 'AddTodo',

        data() {
            return {
                todoStr: '',
            }
        },

        props: {
            lengthArr: {
                type: Number,
            },

            todoArr:{
                type: Array
            }
        },

        methods: {
            todoToApp() {
                if (this.todoStr) {
                    let obj = {todo: this.todoStr, isChecked: false}
                    this.$emit("todo-to-app", obj);
                    this.todoStr = '';
                }
            },

            removeEl(){
                let newArr = this.todoArr.filter(value => !value.isChecked);
                this.$emit("removed-arr", newArr);
            }
        },
    }
</script>
<style scoped>
    button {
        margin-left: 10px;
    }
</style>