import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todoKey: 'TODOLIST',
		todoArray: [],
	},
	mutations: {
		addTodoItem(state, payload) {
			const todoObj = {
				text: payload,
				complete: false,
			};
			state.todoArray.push(todoObj);
			localStorage.setItem(state.todoKey, JSON.stringify(state.todoArray));
		},
		loadTodo(state) {
			// const fetchTodoArr = [];
			const fetchTodo = JSON.parse(localStorage.getItem(state.todoKey));
			console.log(fetchTodo);
			// loadTodoArr.forEach(function(element) {
			// });
		},
	},
});
