<template>
	<ul class="todo-container">
		<template v-for="(item, index) in todoArray">
			<li
				class="item"
				:key="index"
				:class="{
					complete: item.complete,
					active: item.complete && item.toggle,
				}"
			>
				<span class="todo-list">{{ item.text }}</span>
				<div class="btn-group">
					<button type="button" @click="completeChk(item)">
						{{ !item.complete ? '완료' : '완료해제' }}
					</button>
					<button type="button" @click="deleteTodo(index)">삭제</button>
				</div>
			</li>
		</template>
	</ul>
</template>

<script>
export default {
	data() {
		return {};
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
	},
	created() {
		this.loadTodo();
		this.$store.commit('completeFiter');
	},
};
</script>

<style scoped lang="scss">
.todo-container {
	margin-top: 20px;
	.item {
		display: flex;
		padding: 20px;
		position: relative;
		box-shadow: 1px 1px 10px 1px #ddd;
		border-radius: 5px;
		background-color: #fff;
		+ .item {
			margin-top: 20px;
		}
		&.complete {
			text-decoration: line-through;
			color: #999;
			.todo-list {
				color: #999;
			}
		}
		&.active {
			display: none;
		}
	}
	.todo-list {
		padding-right: 100px;
		font-weight: bold;
		font-size: 18px;
		color: #000;
	}
	.btn-group {
		position: absolute;
		top: 18px;
		right: 20px;
		button {
			display: inline-block;
			vertical-align: middle;
			border: 0;
			font-size: 14px;
			background-color: #fff;
		}
	}
}
</style>
