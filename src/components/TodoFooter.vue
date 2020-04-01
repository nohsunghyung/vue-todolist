<template>
	<div>
		<div class="btn-group">
			<button
				type="button"
				@click="completeView"
				v-show="btnStatus"
				class="btn normal"
			>
				완료목록보기
			</button>
			<button
				type="button"
				@click="completeFiter"
				v-show="btnStatus"
				class="btn normal"
			>
				완료목록제외
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
	methods: {
		allDeleteTodo() {
			this.$store.commit('allDeleteTodo');
		},
		completeFiter() {
			this.$store.commit('completeFiter');
		},
		completeView() {
			this.$store.commit('completeView');
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
