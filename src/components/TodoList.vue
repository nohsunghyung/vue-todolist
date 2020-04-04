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
						<font-awesome-icon :icon="['far', 'check-circle']" />
					</button>
					<button type="button" @click="deleteTodo(index)">
						<font-awesome-icon :icon="['far', 'trash-alt']" />
					</button>
				</div>
			</li>
		</template>
		<transition-group name="fade"> </transition-group>
	</ul>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
	components: {
		FontAwesomeIcon,
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
			this.completeBtnFn();
		},
		completeBtnFn() {
			let btnFlag;
			const fetchTodo = JSON.parse(
				localStorage.getItem(this.$store.state.todoKey),
			);
			if (fetchTodo !== null) {
				const filterTodo = fetchTodo.filter(arr => {
					return arr.complete == true;
				});
				if (filterTodo.length > 0) {
					btnFlag = true;
				} else {
					btnFlag = false;
				}
			}
			localStorage.setItem(
				this.$store.state.completeStatus,
				JSON.parse(btnFlag),
			);
			this.$store.commit('btnFlagFn', btnFlag);
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
		transition: 0.3s;
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
.svg-inline--fa {
	font-size: 20px;
}
</style>
