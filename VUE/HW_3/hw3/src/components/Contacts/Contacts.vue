<template>
    <div class="container">
        <div class="row flex-column shadow">
            <div class="col-8 offset-2 shadow">
                <h2>My Contacts</h2>
                <p><span class="title-span">Tel.:</span> <span class="body-span">+33333333333</span></p>
                <p><span class="title-span">Email: </span> <span class="body-span">superchuck@chuck.norris</span></p>
                <p><span class="title-span">Address: </span>
                    <span class="body-span">Lorem ipsum dolor sit amet, consectetur adipisicing.</span></p>
                <p><span class="title-span">Website: </span> <span class="body-span">chuck-norris.star</span></p>
            </div>
            <div class="col-8 offset-2">
                <h2>My Coordinates</h2>
                <div id="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d974.9266003271524!2d96.87790782922141!3d-12.200369688644933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDEyJzAxLjMiUyA5NsKwNTInNDIuNCJF!5e0!3m2!1suk!2sua!4v1598480082398!5m2!1suk!2sua" width="100%" height="450" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'Contacts',
    }

</script>


<style>
    h2 {
        margin: 20px;
        text-align: center;
    }

    .title-span{
        font-weight: 700;
        font-size: 18px;
    }

    .body-span{
        font-family: Roboto,sans-serif;
        font-size: 18px;
    }


</style>