<template>
    <div class="container">
        <div class="row shadow rounded p-4">
            <div class="col">
                <h2>User Info</h2>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: {{userInfo.name}}</li>
                    <li class="list-group-item">Surname: {{userInfo.surname}}</li>
                    <li class="list-group-item">Email: {{userInfo.email}}</li>
                    <li class="list-group-item">Password: **********</li>
                    <li class="list-group-item">Gender: {{userInfo.gender}}</li>
                    <li class="list-group-item">Send To Mail: {{userInfo.sendsCheck}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserInfo',

        props:{
            userInfo:{
                type: Object
            }
        },

        methods:{
            getUs(){
                console.log(this.userInfo);
            }
        },
        created() {
            this.getUs();
        }
    }
</script>