<template>
	<div>
		<div class="btn-group">
			<button
				type="button"
				@click="fiterComplete"
				v-show="btnStatus"
				class="btn normal"
			>
				{{ ddd ? '완료목록제외' : '완료목록보기' }}
			</button>
			<button
				type="button"
				@click="allDeleteTodo()"
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
		fiterComplete() {
			this.$store.commit('fiterComplete');
		},
	},
	computed: {
		btnStatus() {
			return this.$store.state.todoArray.length;
		},
		ddd() {
			return this.$store.state.completeStatus;
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
