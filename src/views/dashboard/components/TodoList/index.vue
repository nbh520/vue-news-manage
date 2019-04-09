<!--  -->
<template>
  <section class="todoapp">
    <header class="header">
      <input class="new-todo" autocomplete="off" placeholder="TodoList" @keyup.enter="addTodo">
    </header>
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" @change="toggleAll({ done: !allChecked })">
      <label for="toggle-all" />
      <ul class="todo-list">
        <todo v-for="(todo, index) in filteredTodos" :key="index" :todo="todo" @toggleTodo="toggleTodo" @deleteTodo="deleteTodo" @editTodo="editTodo"/>
      </ul>
    </section>
    <footer class="footer">
      <span class="todo-count">
        <strong>{{ remaining ? remaining : '' }}</strong>
        {{ remaining ? '条任务未完成' : '全部完成' }}
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters" :key="key">
          <a :class="{ selected : key === visibility }" @click.prevent="visibility = key">
            {{ key }}
          </a>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script>
import Todo from './Todo.vue'
const STORAGE_KEY = 'todos'
const filters = {
  '全部': todos => todos,
  '未完成': todos => todos.filter(todo => !todo.done),
  '已完成': todos => todos.filter(todo => todo.done)
}
export default {
  name: 'TodoList',
  components: {
    Todo
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : w + 's',
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  },
  data() {
    return {
      todos: null,
      filters,
      visibility: '全部'
    }
  },
  computed: {
    allChecked() {
      return this.todos.every(todo => todo.done)
    },
    remaining() {
      return this.todos.filter(todo => !todo.done).length
    },
    // 切换
    filteredTodos() {
      return filters[this.visibility](this.todos)
    }
  },
  watch: {
    todos: {
      deep: true,
      handler() {
        this.setLocalStorage()
      }
    }
  },
  created() {
    const lastTodoList = JSON.parse(window.localStorage.getItem('todos'))
    const defalutList = [
      { text: '管理员模块', done: false },
      { text: '用户模块', done: false },
      { text: '新闻模块', done: false },
      { text: '评论模块', done: false },
      { text: 'vue', done: true },
      { text: 'element-ui', done: true },
      { text: 'axios', done: true },
      { text: 'webpack', done: true }
    ]
    this.todos = lastTodoList || defalutList
  },
  methods: {
    setLocalStorage() {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
    },
    addTodo(e) {
      const text = e.target.value.trim()
      this.todos.unshift({
        text,
        done: false
      })
      e.target.value = ''
    },
    toggleAll({ done }) {
      this.todos.forEach(todo => {
        todo.done = done
      })
    },
    toggleTodo(val) {
      val.done = !val.done
    },
    deleteTodo(val) {
      this.todos.splice(this.todos.indexOf(val), 1)
    },
    editTodo({ todo, value }) {
      todo.text = value
    }
  }
}

</script>
<style lang="scss">
  @import './index.scss';
</style>
