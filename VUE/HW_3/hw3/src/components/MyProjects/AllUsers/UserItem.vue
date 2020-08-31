<template>
    <li class="list-group-item list-group-item-action">{{count}}. {{user.name}} {{user.surname}} {{user.id=id}}</li>
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
            id: {type: String},
            count: {type: Number}
        }
    }
</script>