<template>
  <div id="app">
    <h1>To Do App</h1>
    <h3>A VueJS app built for Software Saturdays Spring 2021.</h3>
    <h3>For more information, visit our <a href="https://purdueieee.org/software">website</a>.</h3>
    <hr >
    <h3>Current To-Do List</h3>
    <TaskList>
    </TaskList>
    <hr >
    <h3>Finished To-Do List</h3>
  </div>
</template>

<script>
import TaskList from './components/TaskList'

export default {
  name: 'App',
  components: {
    TaskList,
  },
  
}
</script>

<style>
#app {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  width: 50%;
  margin: 0px auto;
}

.button {
    border: 1px solid black;
    padding: 7px;
    margin: 5px;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
}
</style>
