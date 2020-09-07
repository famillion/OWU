<template>
    <div class="container">
        <div class="row p-4 rounded">
            <div class="col">
                <div class="user-list">
                    <h2>Users List</h2>
                    <ul class="list-group">
                        <div class="d-flex align-items-center text-secondary rounded"
                             v-for="(user, id) in users"
                             :key="id"
                        >
                            <UserItem :user="user"
                                      :indx="id"
                            />
                        </div>
                    </ul>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import UserItem from "./UserItem";

    export default {
        name: 'AllUsers',

        components: {
            UserItem,
        },

        data() {
            return {
                users: [],
                count: 1
            }
        },

        methods: {
            getUsersFromDB() {
                return this.$http.get('https://owu-vue-db.firebaseio.com/users.json')
                    .then(res => {
                        const newRes = res.data
                        for (const el in newRes) {
                            newRes[el].id = el;
                            this.users.push(newRes[el])
                        }
                    })
            }
        },

        created() {
            this.getUsersFromDB();
        }
    }
</script>