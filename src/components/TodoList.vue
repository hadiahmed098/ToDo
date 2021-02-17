<template>
    <div class="todo-list-wrapper">
        <TodoItem v-for="item in todolist" v-bind:key="item.id" v-bind:todo="item.text" v-on:delete="handle_delete" v-on:done="handle_done" v-on:edit="handle_edit"></TodoItem>
        <br >
        <div class="todo-item-wrapper">
            <input v-model="next_todo_txt" placeholder="New ToDo...">
            <div class="button button-add" v-on:click="handle_add">
                Add
            </div>
        </div>
        <div v-if="blank">
            Please enter a To-Do task.
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
    name: "TodoList",
    props: {
        todolist: Array,
    },
    components: {
        TodoItem,
    },
    data: function() {
        return {
            next_todo_txt: '',
        }
    },
    computed: {
        blank: function() {
            return this.next_todo_txt == '';
        }
    },
    methods: {
        handle_add: function() {
            if(this.blank) return;
            this.$emit('add', this.next_todo_txt);
            this.next_todo_txt = '';
        },
        handle_edit: function(id) {
            this.$emit('edit', id);
        },
        handle_delete: function(id) {
            this.$emit('delete', id);
        },
        handle_done: function(id) {
            this.$emit('done', id);
        }
    },
}
</script>

<style scoped>
.todo-list-wrapper {
    width: 40%;
    margin-left:auto;
    margin-right:auto;
}
</style>