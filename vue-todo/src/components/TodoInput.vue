<template>
	<form @submit.prevent="SubmitForm">
		<input type="text" placeholder="할일입력" v-model="todoText" />
		<button type="submit">입력</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			todoText: '',
		};
	},
	methods: {
		SubmitForm() {
			const todoObj = {
				text: this.todoText,
			};

			console.log(this.todoText, todoObj);

			this.$store.commit('addTodoItem', todoObj);
			console.log(this.$store.state.todoArray);
			// this.initForm();
		},
		initForm() {
			this.todoText = '';
		},
	},
};
</script>

<style></style>
