<template>
  <div class="home">
    <h1>ToDo App</h1>
    <h2>Inspired by <a href="https://purdueieee.org/software" target="_blank">Software Saturdays</a> Spring 2021</h2>
    <transition name="fade">
      <div v-if="msgShow" class="message"><h4>{{dbMsg}}</h4></div>
    </transition>
    <ToDoList :nextID="nxt" @add="added">
      <ToDoItem v-for="item in todolist" v-bind:key="item.id" v-bind:todo="item" @edit="added"/>
    </ToDoList>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from '@/components/ToDoList.vue'
import ToDoItem from '@/components/ToDoItem.vue'
import {db} from '@/firebase'
import userAuth from '@/App'

export default {
  name: 'Home',
  components: {
    ToDoList,
    ToDoItem,
  },
  data() {
    return {
      nxt: 0,
      dbMsg: '',
      msgShow: false,
      todolist: [],
    }
  },
  methods: {
    added(message) {
      this.dbMsg = message;
      this.msgShow = true;
      setTimeout(() => {this.msgShow = false;}, 3000);
    }
  },
  created() {
    db.ref('/tasks/' + userAuth.uuid).on('value', (snap) => {
      const data = snap.val();
      this.todolist = [];
      for(let key in data) {
        if(key == 'dummy') continue;
        this.todolist.push({id:data[key].id, text:data[key].text});

        if(data[key].id > this.nxt) {
          this.nxt = data[key].id;
        }
      }

      this.nxt++;
    });
  }
}
</script>

<style scoped>
.message {
  border: 2px solid grey;
  background-color: #d4d4d4;
  text-emphasis: bold;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
