<template>
	<div>
		<div class="btn-group">
			<button
				type="button"
				@click="completeFiter((bool = !bool))"
				class="btn normal"
				v-if="btnStatus && btnFlag"
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
			bool: this.boolChk(this.$store.state.todoStatus),
			textFlag: this.boolChk(this.$store.state.todoStatus),
		};
	},
	computed: {
		btnStatus() {
			return this.$store.state.todoArray.length;
		},
		btnFlag() {
			return this.$store.state.btnFlag;
		},
	},
	methods: {
		allDeleteTodo() {
			this.$store.commit('allDeleteTodo');
			this.bool = false;
			this.textFlag = false;
		},
		completeFiter(bool) {
			this.$store.commit('completeFiter', bool);
			this.$store.commit('setTodoItem');
			this.textFlag = !this.textFlag;
		},
		boolChk(name) {
			const strBool = JSON.parse(localStorage.getItem(name));
			let bool;
			if (strBool !== null) {
				strBool == true ? (bool = true) : (bool = false);
			} else {
				bool = false;
			}
			return bool;
		},
		btnToggle() {
			let bool = this.boolChk(this.$store.state.completeStatus);
			this.$store.commit('btnFlagFn', bool);
		},
	},
	created() {
		this.btnToggle();
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
