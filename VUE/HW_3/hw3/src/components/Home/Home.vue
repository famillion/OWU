<template>
    <div class="container">
        <div class="row shadow">
            <div class="col-4 offset-1 sizing">
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
                chuck: 'https://m.actve.net/evropa2/2018/09/foto-web-detail-440x355px-chuckn.png',
            }
        }
    }

</script>
<style>
    h1{
        margin: 20px 0;
    }
    .col-4.sizing{
        padding: 0;
        box-sizing: border-box;
    }

    .photo{
        width: 100%;
    }
</style>