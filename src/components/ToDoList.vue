<template>
  <div class="todo-list-wrapper">
    <p>{{uuid}}</p>
    <slot></slot>
        <br />
        <div class="todo-item-wrapper">
            <input v-model="newTodo" placeholder="New ToDo...">
            <div class="button-add" @click="addTodo">
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
import {db} from '../firebase'

export default {
  name: 'ToDoList',
  props: {
    nextID: Number,
  },
  data() {
      return {
          uuid: userAuth.uuid,
          newTodo: '',
      };
  },
  methods: {
    addTodo() {
      if(this.newTodo == '') {
        alert("Please enter some text.")
        return;
      }

      db.ref('/tasks/' + this.uuid + '/t' + this.nextID).set({id: this.nextID, text: this.newTodo})
      .then (() => {
        this.$emit('add', "Add Successful!");
      })
      .catch((error) => {
        this.$emit('add', error.code);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-item-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid gray;
  margin: 10px 0px;
  padding: 5px;
}

.button-add {
  border: 1px solid black;
  padding: 7px;
  margin: 5px;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  color: #8936b3;
}

.button-add:hover {
  background-color: #8936b3;
  color: white;
  border: 1px solid white;
}
</style>
