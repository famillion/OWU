<template>
    <div class="container">
        <div class="row rounded shadow">
            <div class="col-3 p-3">
                <MyProjsMenu/>
            </div>
            <div class="col-9 p-3">
                <div class="project-block shadow">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import MyProjsMenu from "./Add_User_Form/MyProjsMenu";

    export default {
        name: 'MyProjects',

        components:{
            MyProjsMenu,
        },

    }

</script>
