<template>
    <div class="container">
        <div class="row rounded shadow">
            <div class="col-4 offset-1 p-4">
                <img :src="chuck" alt="Chuck" class="photo">
            </div>
            <div class="col-6  test2">
                <h1>Chuck Norris</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, sapiente?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius eos et laboriosam magnam
                    quibusdam tempora veritatis? Accusantium architecto autem consectetur dolor doloremque illo
                    nulla!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, consequuntur inventore odit repudiandae voluptate voluptatum!</p>
            </div>
        </div>
    </div>
</template>
<script>



    export default {
        name: 'Home',
        data(){
            return{
                chuck: this.$store.state.avatar,
            }
        }
    }

</script>
<style>
    h1{
        margin: 20px 0;
    }

    .photo{
        width: 100%;
    }
</style>