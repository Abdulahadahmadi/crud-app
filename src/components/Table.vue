<template>
    <div class="overflow-x-auto px-8 relative  sm:rounded-lg border border-blue-600 mx-4 my-6 rounded-lg shadow-xl">
        <table class="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Name
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Email
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Age
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Address
                    </th>
                    <!-- <th scope="col" class="py-3 px-6">
                        Gender
                    </th> -->
                    <th scope="col" class="py-3 px-6">
                        Edit
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-black text-lg dark:bg-gray-900 dark:border-gray-700" v-for="user in $props.users" :key="user.email">
                    <td class=" text-black">{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.age}}</td>
                    <td>{{user.address}}</td>
                    <td><a href="#"><img src="../assets/update.png" width="40" alt="edit btn" @clcik="editUser"></a></td>
                    <td><a href="#"><svg width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/></svg></a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        users: {
            type: Object,
        }
    },
    methods: {
        deleteUser(id) {
            this.$emit('delete-user', users.id)
        },
        editUser(id) {
        }
    },
    mounted() {
        console.log(this.users);
    },

}
</script>
