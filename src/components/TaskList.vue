<template>
    <div class="task-list">
        <slot></slot>
        <br>
        <p>Add new ToDo item:</p>
        <div class="tasklist-wrapper">
            <input placeholder="Enter here..." v-model="new_task_txt">
            <div class="button">Add</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TaskList',
    data: function() {
        return {
            new_tast_txt: "",
        }
    }
}
</script>

<style scoped>
    .tasklist-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        border: 2px solid grey;
        margin: 10px 0px;
        padding: 5px;
    }
</style>