<template>
  <div id="app">
    <h1>To Do App</h1>
    <h3>A VueJS app built for Software Saturdays Spring 2021.</h3>
    <h3>For more information, visit our <a href="https://purdueieee.org/software">website</a>.</h3>
    <hr >
    <h3>Current To-Do List</h3>
    <TodoList v-bind:todolist=todolist v-on:add="handle_add" v-on:delete="handle_delete" v-on:done="handle_done" v-on:edit="handle_edit">
    </TodoList>
    <hr >
    <h3>Finished To-Do List</h3>
  </div>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  name: 'App',
  components: {
    TodoList,
  },
  data: function() {
    return  {
        todolist: [
          {id: 0, text: 'Finish this website'},
          {id: 1, text: 'Make slides for Software Saturday'},
          {id: 2, text: 'Teach VueJS'}],
        finished_todo: [],
        next_todo_id: 3,
        next_finished_id: 0,
    }
  },
  methods: {
        handle_add: function(text) {
            this.todolist.push({id:this.next_todo_id, text:text});

            // Edit the database here
            //addNewTodo(this.next_todo_id, newTodo);

            this.next_todo_id++;
        },
        handle_delete: function(toDelete) {
            let index = -1;
            this.todolist.forEach(element => {
                if(element.id == toDelete)
                    index = this.todolist.indexOf(element);
            });
            this.todolist.splice(index, 1);

            // Edit the database here
            //deleteTodo(toDelete);
        },
        handle_edit: function() {
            /*let index = -1;
            this.todolist.forEach(element => {
                if(element.id == toUpdate)
                    index = this.todolist.indexOf(element);
            });*/

            // Edit the database here
            //updateTodo(this.todolist[index].id, this.todolist[index].text);
        },
        handle_done: function(toFinish) {
            let index = -1;
            this.todolist.forEach(element => {
                if(element.id == toFinish)
                    index = this.todolist.indexOf(element);
            });
            this.finished_todo.push({id:this.next_finished_id, text:this.todolist[index].text});

            // Edit the database here
            //deleteTodo(toFinish);
            //doneTodo(this.next_finished_id, this.todolist[index].text);

            this.next_finished_id++;
            this.todolist.splice(index, 1);
        },
  }
}
</script>

<style>
#app {
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  width: 100%;
}

a {
    color: gray;
}

a:hover {
    color: darkgray;
}

/* todo-list STYLES */
.todo-list-wrapper {
    width: 40%;
    margin-left:auto;
    margin-right:auto;
}

/* todo-item STYLES */
.todo-item-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    border: 2px solid gray;
    margin: 10px;
    padding: 5px;
}

.todo-item-text-wrapper {
    width: 40%;
    text-align: left;
}

.todo-item-text-interior {
    width: 90%;
    padding-left: 10px;
}

/* todo-finished STYLES */
.todo-finished-wrapper {
    width: 40%;
    margin-left:auto;
    margin-right: auto;
    border: 2px solid grey;
    padding: 10px 5px;
    margin-top: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}

.todo-finished-text-wrapper {
    color: grey;
    text-decoration: line-through;
    width: 40%;
    text-align: left;
    margin: 0px 10px;
}

/* BUTTON STYLES */
.button {
    border: 1px solid black;
    padding: 7px;
    margin: 5px;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
}

.button-done {
    color: #48b526;
}

.button-done:hover {
    background-color: #48b526;
    color: white;
    border: 1px solid white;
}

.button-edit:hover {
    background-color: #407fc2;
    color: white;
    border: 1px solid white;
}

.button-delete {
    color: #bf2c2c;
}

.button-delete:hover {
    background-color: #bf2c2c;
    color: white;
    border: 1px solid white;
}

.button-add {
    color: #8936b3;
}

.button-add:hover {
    background-color: #8936b3;
    color: white;
    border: 1px solid white;
}
</style>
