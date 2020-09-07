<template>
    <div class="list-group-item list-group-item-action"

                    @click="isHidden=!isHidden"

    >
        {{indx+1}}. {{user.name}} {{user.surname}}

        <UserInfo
                :userInfo="getUs()"
                :class="isHidden ?'hidden' :''"
        />
    </div>


</template>

<script>

    import UserInfo from "./UserInfo";

    export default {
        name: 'UserItem',
        components:{
        UserInfo
        },

        data() {
            return {
                isChecked: false,
                isHidden: true
            }
        },

        props: {
            user: {type: Object},
            indx: {type: Number}
        },

        methods:{
            getUs(){
                return this.user;
            }
        },
        created() {
            console.log(this.getUs() + Date.now());
        }
    }
</script>

<style scoped>
    .hidden{
        display: none;
    }
</style>