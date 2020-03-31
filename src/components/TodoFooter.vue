<template>
	<div>
		<div class="btn-group">
			<button
				type="button"
				@click="completeToggle"
				v-show="btnStatus"
				class="btn normal"
			>
				완료목록제외
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
import bus from '@/utils/bus';
export default {
	methods: {
		allDeleteTodo() {
			this.$store.commit('allDeleteTodo');
		},
		completeToggle() {
			bus.$emit('completeToggle');
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
