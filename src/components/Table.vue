<template lang="">
    
        <div class="overflow-x-auto relative  sm:rounded-lg border border-blue-600 mx-4 my-6 rounded-lg shadow-xl">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                        <th scope="col" class="py-3 px-6">
                            Gender
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Edit
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td>{{users.name}}</td>
                    </tr>
                    <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                        
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        
                    </tr>
                    <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                        
                    </tr>
                    <tr>
                        
                    </tr>
                </tbody>
            </table>
        </div>

</template>
<script>
import Form from './Form.vue'

export default {
    data: 'Form',
    data() {
        return {
            users: [],
        }
    },
    methods: {
        deleteUser(id) {
            this.$store.dispatch('deleteUser', users.id);

        },
        editUser(id) {
            this.$store.dispatch('editUser', users.id);


        }

    },
    mounted() {
        
    },
}
</script>
