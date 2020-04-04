<template>
	<div class="search-form">
		<input
			type="text"
			v-model="searchText"
			@input="searchFilter"
			placeholder="검색"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchText: '',
		};
	},
	methods: {
		searchFilter() {
			this.$store.commit('searchFilter', this.searchText);
		},
	},
};
</script>

<style scoped lang="scss">
.search-form {
	margin-top: 20px;
	text-align: right;
	input {
		height: 35px;
		line-height: 35px;
		border: 1px solid #ddd;
		font-size: 15px;
	}
}
</style>
