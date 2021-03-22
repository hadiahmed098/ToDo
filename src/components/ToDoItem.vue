<template>
    <div>
        <p>{{todo.text}}</p>
    </div>
</template>

<script>
export default {
    name: 'ToDoItem',
    props: {
        todo: Object,
    }
}
</script>

<style scoped>

</style>