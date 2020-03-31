<template>
	<div id="app">
		<div class="content">
			<div class="content-wrapper">
				<Todo-header></Todo-header>
				<Todo-input></Todo-input>
				<Todo-list></Todo-list>
				<Todo-footer></Todo-footer>
			</div>
		</div>
	</div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFooter from '@/components/TodoFooter.vue';
export default {
	components: {
		TodoHeader,
		TodoInput,
		TodoList,
		TodoFooter,
	},
};
</script>

<style lang="scss">
@import './assets/css/reset.css';
@import './assets/css/common.scss';
.content {
	width: 600px;
	margin: 100px auto;
}
</style>
