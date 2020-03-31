<template>
	<ul class="todo-container">
		<template v-for="(item, index) in todoArray">
			<li
				class="item"
				:key="index"
				:class="{ complete: item.complete, active: item.complete && flag }"
			>
				<span class="todo-list">{{ item.text }}</span>
				<div class="btn-group">
					<button type="button" @click="completeChk(item)">완료</button>
					<button type="button" @click="deleteTodo(index)">삭제</button>
				</div>
			</li>
		</template>
		<button type="button" @click="flagChange">완료필터</button>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			flag: false,
		};
	},
	computed: {
		todoArray() {
			return this.$store.state.todoArray;
		},
	},
	methods: {
		loadTodo() {
			this.$store.commit('loadTodo');
		},
		deleteTodo(index) {
			this.$store.commit('deleteTodo', index);
		},
		completeChk(item) {
			item.complete = !item.complete;
			this.$store.commit('setTodoItem');
		},
		flagChange() {
			this.flag = !this.flag;
		},
	},
	created() {
		this.loadTodo();
	},
};
</script>

<style scoped lang="scss">
.todo-container {
	margin-top: 20px;
	.item {
		display: flex;
		padding: 20px;
		box-shadow: 1px 1px 10px 1px #ddd;
		border-radius: 5px;
		background-color: #fff;
		+ .item {
			margin-top: 20px;
		}
		&.complete {
			text-decoration: line-through;
		}
		&.active {
			display: none;
		}
	}
}
</style>
