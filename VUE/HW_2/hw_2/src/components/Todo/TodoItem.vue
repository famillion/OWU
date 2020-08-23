<template>
    <li>
        <input type="checkbox" v-model="isChecked">
        <span>{{pushValue}}{{todo.todo}}</span>
    </li>
</template>
<script>
    export default {
        name: 'TodoItem',

        data() {
            return {
                isChecked: false,
            }
        },

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
                this.todo.isChecked = this.isChecked
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