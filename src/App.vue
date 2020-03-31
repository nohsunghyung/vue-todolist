<template>
	<div id="app">
		<form @submit.prevent="submitForm">
			<input type="text" placeholder="할일입력" v-model="todoText" />
			<button type="submit">입력</button>
		</form>
		<ul class="todo-container">
			<li class="item" v-for="(item,index) in todoArray" :key="index">
				<span class="todo-list">{{item.text}}</span>
				<button type="button">삭제</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			todoText: '',
		};
  },
  computed: {
    todoArray(){
      return this.$store.state.todoArray;
    }
  },
	methods: {
		submitForm() {
      this.$store.commit('addTodoItem',this.todoText);
			this.initForm();
		},
		initForm() {
			this.todoText = '';
    },
    loadTodo(){
      
    }
  },
  created () {
    this.$store.commit('loadTodo')
  },
};
</script>

<style></style>
