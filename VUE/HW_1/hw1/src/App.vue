<template>
    <div>
        <div>
            <input type="text" v-model="todoStr">
            <button @click="addTest" :class="hidd">Add new todo</button>
        </div>
        <ul>
            <li
                    v-for="(str, ind) in todoArr"
                    :key="ind">
                {{str}}
                <button @click="delStr">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {},

        data() {
            return {
                todoArr: [],
                todoStr: '',
                count: 0,
                hide: 'hidden'
            }
        },

      computed:{
        hidd() {
          return  this.count >= 10 ? 'hidden': '';
        }
      },

        methods: {
            addTest() {
                if (this.todoStr) {
                    this.todoArr.push(this.todoStr);
                    this.count++;
                    console.log(this.count);
                }
            },

            delStr(ev) {
                let el = ev.target.parentElement.childNodes[0].nodeValue.trim();
                this.todoArr.splice(this.todoArr.indexOf(el), 1);
                this.count--;
                console.log(this.count);
            },
        }
    }
</script>

<style>
    button {
        margin: 10px;
    }

    .hidden {
        display: none;
    }
</style>
