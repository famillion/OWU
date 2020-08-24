<template>
    <div>
        <form name="vueForm" id="form">
            <label>Email: <input type="email" v-model="formValues.email"></label>
            <label>Password: <input type="password" v-model="formValues.pass"></label>
            <div>
                <label>Send spam<input type="checkbox" value="spam" v-model="formValues.spam"> </label>
                <label>Send news<input type="checkbox" value="news" v-model="formValues.spam"> </label>
            </div>
            <div id="ratio">
                <label><input type="radio" id="male" value="male" v-model="formValues.sex"> Male</label>
                <label><input type="radio" id="female" value="female" v-model="formValues.sex"> Female</label>
            </div>
            <div id="submit">
                <button @click.prevent="sendForm">Send Form</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                formValues:{
                    email: '',
                    pass: '',
                    sex: '',
                    spam:[]
                }
            }
        },

        methods: {
            sendForm() {
                if (this.formValues.email
                    && this.formValues.pass
                    && this.formValues.sex) {
                    console.log(this.formValues);
                    this.formValues = this.defaultValues();
                }
            },

            defaultValues(){
                return {
                    email: '',
                    pass: '',
                    sex: '',
                    spam:[]
                }
            }
        }
    }
</script>

<style scoped>
    #form {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #39aaaa;
    }

    label {
        margin: 10px;
    }

    #ratio{
        margin-top: 10px;
    }

    #submit {
        margin: 20px auto;
    }
</style>