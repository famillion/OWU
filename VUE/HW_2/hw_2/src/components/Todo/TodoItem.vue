<template>
    <li>
        <input type="checkbox" v-model="todo.isChecked">
        <span>{{pushValue}}{{todo.todo}}</span>
    </li>
</template>
<script>
    export default {
        name: 'TodoItem',

        props: {
            todo: {
                type: Object,
            },
        },

        computed: {
            pushValue() {
                return this.setAndPushValue();
            }
        },

        methods: {
            setAndPushValue() {
                this.$emit('push-to-list', this.todo);
            }
        },

    }
</script>

<style scoped>
    input {
        margin-right: 10px;
    }
</style>