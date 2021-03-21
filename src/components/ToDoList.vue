<template>
  <div class="todo-list-wrapper">
    <p>{{uuid}}</p>
    <slot></slot>
        <br />
        <div class="todo-item-wrapper">
            <input placeholder="New ToDo...">
            <div class="button button-add" >
                Add
            </div>
        </div>
        <div>
            Please enter a To-Do task.
        </div>
  </div>
</template>

<script>
import userAuth from '../App'

export default {
  name: 'ToDoList',
  props: {
    
  },
  data() {
      return {
          uuid: userAuth.uuid,
      };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
