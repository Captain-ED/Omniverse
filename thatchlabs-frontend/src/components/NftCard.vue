<template>
	<div class="py-3 px-3 shadow rounded-md cursor-pointer" :class="isItemSelected ? 'bg-black text-white' : 'bg-white text-black'">
		<div class="flex flex-row">
			<div class="mr-3">
				<img src="../assets/nft2.png" class="rounded" style="width: 80px; height: 80px;">
			</div>
			<div class="flex flex-col items-start justify-center">
				<h5 class="font-semibold overflow-ellipsis">DUSTY YETI </h5>
				<h5 class="font-semibold text-sm "># 4372</h5>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	props: {
		isItemSelected: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {

		};
	},
};
</script>

<style lang="css" scoped>
</style>
