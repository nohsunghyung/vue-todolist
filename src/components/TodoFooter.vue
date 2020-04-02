<template>
	<div>
		<div class="btn-group">
			<button
				type="button"
				@click="completeFiter((bool = !bool))"
				v-show="btnStatus"
				class="btn normal"
			>
				{{ textFlag == true ? '완료목록보기' : '완료목록제외' }}
			</button>
			<button
				type="button"
				@click="allDeleteTodo"
				v-show="btnStatus"
				class="btn danger"
			>
				전체삭제
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			bool: this.boolChk(),
			textFlag: this.boolChk(),
		};
	},
	methods: {
		allDeleteTodo() {
			this.$store.commit('allDeleteTodo');
		},
		completeFiter(bool) {
			this.$store.commit('completeFiter', bool);
			this.$store.commit('setTodoItem');
			this.textFlag = !this.textFlag;
		},
		boolChk() {
			const strBool = localStorage.getItem(this.$store.state.todoStatus);
			const boolean = strBool == 'true';
			return boolean;
		},
	},
	computed: {
		btnStatus() {
			return this.$store.state.todoArray.length;
		},
	},
};
</script>

<style scoped lang="scss">
.btn-group {
	margin-top: 20px;
	text-align: right;
	.btn {
		display: inline-block;
		vertical-align: top;
		+ .btn {
			margin-left: 10px;
		}
	}
}
</style>
