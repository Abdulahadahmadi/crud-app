<template>
    <div class="mx-4 my-10 md:mx-auto md:w-2/3 lg:w-2/4 h-full items-center border border-blue-600 p-4 rounded-lg shadow-xl">
        <form class="mx-6 my-6 md:mx-10" @submit.prevent="registerUser">
            <div>
                <h1 class="text-2xl mb-4 text-center font-bold">Register New User</h1>
            </div>
            <div class="relative z-0 mb-6 w-full group">
                <input type="text" name="name" id="name" class="input peer" v-model="name" placeholder=" ">
                <label for="name" class="input-label">Name</label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
                <input type="email" name="email" id="email" class="input peer" v-model="email" placeholder=" " >
                <label for="email" class="input-label">Email</label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
                <input type="number" name="age" id="age" class="input peer" v-model="age" placeholder=" " >
                <label for="age" class="input-label">Age</label>
            </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="address" name="address" id="address" class="input peer" v-model="address" placeholder=" ">
                    <label for="address" class="input-label">Address</label>
                </div>
        <div class="flex flex-col md:flex-row">
            <div class="checkbox-parent">
                <input checked="" id="male" type="radio" value="" name="gender" class="checkbox-input">
                <label for="male" class="checkbox-label">Male</label>
            </div>
            <div class="checkbox-parent">
                <input id="female" type="radio" value="" name="gender" class="checkbox-input">
                <label for="female" class="checkbox-label">Female</label>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <button type="submit" class="btn" @click="saveData">Register</button>
        </div>
        </form>
    </div>

    <pre>
        {{ name }}
        {{ email }}
        {{ age }}
        {{ address }}
    </pre>
</template>

<script>
import { ref } from 'vue'

    const name = ref('')


    export default {
        name: 'Form',
        data() {
            return {
                name: "",
                email: "",
                age: "",
                address: "",
                users: [],
            }
        },
        mounted() {

        },

        methods: {

            registerUser() {
                let data = {
                    name: this.name,
                    email: this.email,
                    age: this.age,
                    address: this.address
                }
                console.log(data);
                this.users.push(data);
                localStorage.setItem('users', JSON.stringify(this.users));
            }

        }
    }



</script>
