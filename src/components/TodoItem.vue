<template>
    <div class="todo-item-wrapper">
        <div class="button button-done" v-on:click="done_todo">Done!</div>
        <div class="todo-item-text-wrapper">
            <input v-if="edit" v-model="todo" class="todo-item-text-interior"/>
            <div v-if="!edit" class="todo-item-text-interior">{{todo}}</div>
        </div>
        <div v-if="edit" class="button button-edit" v-on:click="save_todo">Save</div>
        <div v-if="!edit" class="button button-edit" v-on:click="edit_todo">Edit</div>
        <div class="button button-delete" v-on:click="delete_todo">Delete</div>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: {
        todo: String
    },
    data: function() {
        return {
            edit: false,
        }
    },
    methods: {
        delete_todo: function() {
            this.$emit('delete', this.todo.id);
        },
        edit_todo: function() {
            this.edit = true;
        },
        save_todo: function() {
            this.edit = false;
            this.$emit('edit', this.todo.id);
        },
        done_todo: function() {
            this.$emit('done', this.todo.id);
        }
    },
}
</script>

<style scoped>

</style>