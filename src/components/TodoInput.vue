<template>
	<div class="container">
		<form @submit.prevent="submitForm">
			<div class="input-cover">
				<input
					type="text"
					placeholder="할일을 입력해주세요."
					v-model="todoText"
					class="todo-input"
				/>
				<button type="submit" class="btn success btn-submit">입력</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			todoText: '',
		};
	},
	methods: {
		submitForm() {
			this.$store.commit('addTodoItem', this.todoText);
			this.initForm();
		},
		initForm() {
			this.todoText = '';
		},
	},
};
</script>

<style scoped lang="scss">
.container {
	margin-top: 40px;
}
.input-cover {
	overflow: hidden;
}
.todo-input {
	float: left;
	width: 500px;
	border: 1px solid #ddd;
	border-right: 0;
}
.btn-submit {
	float: left;
	width: 100px;
	height: 50px;
	line-height: 50px;
	font-size: 18px;
	border-radius: 0;
}
</style>
