<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <router-link class="nav-link active" id="v-pills-home-tab" data-toggle="pill" role="tab"
                                 aria-controls="v-pills-home" aria-selected="true"
                                 tag="a"
                                 :to="{name: 'CreateUserForm'}"
                                 exact
                    >
                        Create New User
                    </router-link>
                    <router-link class="nav-link" id="v-pills-profile-tab" data-toggle="pill" role="tab"
                                 aria-controls="v-pills-profile" aria-selected="false"
                                 tag="a"
                                 to="/all_users"
                                 exact
                    >
                        All Users
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyProjsMenu',

    }
</script>