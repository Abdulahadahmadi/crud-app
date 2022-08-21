<script setup>
  import { ref } from 'vue'
  import Form from './components/Form.vue'
  import Filter from './components/Filter.vue'
  import Table from './components/Table.vue'
  const users = ref(JSON.parse(localStorage.getItem('users')) || [])
  const search = (term) => {
    users.value = term.length > 0 ? users.value.filter(user => user.name.toLowerCase().includes(term.toLowerCase()) || user.email.toLowerCase().includes(term.toLowerCase()) || user.address.toLowerCase().includes(term.toLowerCase())) : JSON.parse(localStorage.getItem('users')) || [];
  }
</script>

<template>

    <Form />
    <Filter @userSearched="search($event)"/>
    <Table :users="users" />
    
</template>



