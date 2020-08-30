<template>

    <li class="list-group-item list-group-item-action d-flex justify-content-between"
        @click="flag=!flag"
    >
        {{ toDo }}
        <button class="btn btn-secondary btn-sm ml-auto"
                v-if="flag"
                @click="deleteToDo"
        >
            Delete
        </button>
    </li>

</template>

<script>
    export default {
        name: 'TodoListItem',

        data(){
            return{
                flag: false
            }
        },

        props: {
            toDo: {
                type: String
            },

            index: {
                type: Number
            }
        },

        methods: {
            deleteToDo() {
                this.$emit('delete-item', this.index);
            },
        }
    }
</script>