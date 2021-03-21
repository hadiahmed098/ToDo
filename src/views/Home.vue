<template>
  <div class="home">
    <h1>ToDo App</h1>
    <h2>Inspired by <a href="https://purdueieee.org/software" target="_blank">Software Saturdays</a> Spring 2021</h2>
    <ToDoList />
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from '@/components/ToDoList.vue'

export default {
  name: 'Home',
  components: {
    ToDoList
  }
}
</script>
