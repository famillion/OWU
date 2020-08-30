<template>
    <div class="header-nav">
        <ul class="nav nav-tabs justify-content-center">
            <router-link
                    class="nav-item nav-link"
                    active-class="active"
                    tag="li"
                    :to="{name: 'Home'}"
                    exact
            >
                Home
            </router-link>
            <router-link
                    class="nav-item nav-link"
                    active-class="active"
                    tag="li"
                    :to="{name: 'Contacts'}"
                    exact
            >
                Contacts
            </router-link>
            <router-link
                    class="nav-item nav-link"
                    active-class="active"
                    tag="li"
                    :to="{name: 'MyProjects'}"
                    exact
            >
                My Projects
            </router-link>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'Header',
    }
</script>

<style>

</style>
