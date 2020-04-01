<template>
	<ul class="todo-container">
		<transition-group name="slide-fade">
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
		</transition-group>
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
		},
	},
	created() {
		this.loadTodo();
		const flag = localStorage.getItem(this.$store.state.todoStatus);
		console.log(flag);
		this.$store.commit('completeFiter', flag);
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
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
	opacity: 0;
}
</style>
