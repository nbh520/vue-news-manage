<!--  -->
<template>
  <li :class="{ completed: todo.done, editing: editing }" class="todo">
    <div class="view">
      <input :checked="todo.done" type="checkbox" class="toggle" @change="toggleTodo(todo)">
      <label @dblclick="editing = true" v-text="todo.text" />
      <button class="destroy" @click="deleteTodo(todo)" />
    </div>
    <input v-show="editing" :value="todo.text" class="edit" @keydown.enter="doneEdit" >
  </li>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todo: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      editing: false
    }
  },
  methods: {
    toggleTodo(todo) {
      this.$emit('toggleTodo', todo)
    },
    deleteTodo(todo) {
      this.$emit('deleteTodo', todo)
    },
    editTodo({ todo, value }) {
      this.$emit('editTodo', { todo, value })
    },
    doneEdit(e) {
      const value = e.target.value.trim()
      const { todo } = this
      if (!value) {
        this.deleteTodo({ todo })
      } else if (this.editing) {
        this.editTodo({ todo, value })
      }
      this.editing = false
    }
  }
}

</script>
