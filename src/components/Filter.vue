<template lang="">
    <div class="flex justify-center">
        <div class="">            
            <!-- <label for="countries" class=" text-sm font-medium text-white mx-10 dark:text-gray-400">Select an option</label> -->
            <select id="countries" class="bg-blue-500 md:px-8 text-white border py-4 border-gray-300 text-sm rounded-lg hover:bg-blue-800 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option  disabeld="">select by age:</option>
            <option value="US">12 - 18</option>
            <option value="CA">18 - 45</option>
            <option value="FR">45 - 60</option>
            <option value="DE">- 100</option>
            </select>
        </div>

        <div class=" w-2/4 mx-2">
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
            <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="search" v-model="search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search name, email and address" required="">
                <button type="submit" @click="searchUsers()" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            search: '',
            users: JSON.parse(localStorage.getItem('users')) || [],
        }
    },
    computed: {
        filteredItems () {
        return this.items.filter(item => {
            return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        })
        }
    },

    methods: {
        searchUsers() {
            this.$emit('userSearched', this.search);
        }
    }
}
</script>
