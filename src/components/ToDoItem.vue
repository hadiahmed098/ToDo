<template>
    <div class="item-wrapper">
        <div class="button button-done" @click="done">Done!</div>
        <div class="item-text-wrapper">
            <input v-if="edit" v-model="editMsg" class="item-text-interior" />
            <div v-if="!edit" class="item-text-interior">{{todo.text}}</div>
        </div>
        <div v-if="edit" class="button button-edit" @click="save">Save</div>
        <div v-if="!edit" class="button button-edit" @click="editT">Edit</div>
        <div class="button button-delete" @click="deleteT">Delete</div>
    </div>
</template>

<script>
import {db} from '@/firebase'
import userAuth from '@/App'

export default {
    name: 'ToDoItem',
    props: {
        todo: Object,
    },
    data() {
        return {
            edit: false,
            editMsg: '',
        }
    },
    methods: {
        done() {

        },
        save() {
            this.edit = false;

            db.ref('/tasks/' + userAuth.uuid + '/t' + this.todo.id).update({text: this.editMsg})
            .then(() => {
                this.$emit('edit', 'Edit Saved!');
            })
            .catch((error) => {
                this.$emit('edit', error.code);
            })
        },
        editT() {
            this.editMsg = this.todo.text;
            this.edit = true;
        },
        deleteT() {
            db.ref('/tasks/' + userAuth.uuid + '/t' + this.todo.id).remove();
        }
    }
}
</script>

<style scoped>
.item-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid gray;
  margin: 10px 0px;
  padding: 5px;
}

.item-text-wrapper {
    width: 40%;
    text-align: left;
}

.item-text-interior {
    width: 90%;
    padding-left: 10px;
}

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

</style>