<template>
	<div id="app">
		<form @submit.prevent="submitForm">
			<input type="text" placeholder="할일입력" v-model="todoText" />
			<button type="submit">입력</button>
		</form>
		<ul class="todo-container">
			<li v-for="(item, index) in todoArray" :key="index" class="item">
				<span class="todo-list">{{ item.text }}</span>
				<button type="button" @click="removeTodoItem(index)">삭제</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			todoText: '',
			todoArray: [],
		};
	},
	methods: {
		fetchTodo() {
			const arr = [];
			for (let i = 0; i < localStorage.length; i++) {
				console.log(localStorage.key(i));
			}
		},
		submitForm() {
			const todoObj = {
				text: this.todoText,
				complete: false,
			};
			this.todoArray.push(todoObj);
			this.saveTodo(todoObj.text, JSON.stringify(todoObj));
			this.initForm();
		},
		initForm() {
			this.todoText = '';
		},
		removeTodoItem(index) {
			this.todoArray.splice(index, 1);
		},
		saveTodo(name, todo) {
			localStorage.setItem(name, todo);
		},
	},
	created() {
		// this.fetchTodo();
	},
};
</script>

<style></style>
