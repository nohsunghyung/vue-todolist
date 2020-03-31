import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todoKey: 'TODOLIST',
		todoArray: [],
		fetchTodoArr: [],
	},
	mutations: {
		addTodoItem(state, payload) {
			const todoObj = {
				text: payload,
				complete: false,
				toggle: true,
			};
			state.todoArray.push(todoObj);
			localStorage.setItem(state.todoKey, JSON.stringify(state.todoArray));
		},
		setTodoItem(state) {
			localStorage.setItem(state.todoKey, JSON.stringify(state.todoArray));
		},
		loadTodo(state) {
			const fetchTodo = JSON.parse(localStorage.getItem(state.todoKey));
			if (fetchTodo !== null) {
				fetchTodo.forEach(element => {
					state.fetchTodoArr.push(element);
				});
			}
			state.todoArray = state.fetchTodoArr;
		},
		deleteTodo(state, index) {
			state.todoArray.splice(index, 1);
			localStorage.setItem(state.todoKey, JSON.stringify(state.todoArray));
		},
		allDeleteTodo(state) {
			const chk = confirm('전체 삭제 하시겠습니까?');
			if (chk) {
				localStorage.clear();
				state.todoArray = [];
			}
		},
		// complteToggle(state) {
		// 	const completeTodo = state.todoArray.filter(function(arr) {
		// 		return arr.complete == false;
		// 	});
		// 	console.log(completeTodo);
		// },
	},
});
