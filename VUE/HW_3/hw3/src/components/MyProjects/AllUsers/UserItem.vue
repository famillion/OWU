<template>
    <li class="list-group-item list-group-item-action">{{id+1}}. {{user.name}} {{user.surname}} </li>
</template>

<script>
    export default {
        name: 'UserItem',
        data() {
            return {
                isChecked: false,
            }
        },

        props: {
            user: {type: Object},
            id: {type: Number}
        }
    }
</script>