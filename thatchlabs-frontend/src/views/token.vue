<template>
	<dashboard-layout>
		<div class="pt-5 px-4">
			<h4 class="text-gray-700 text-5xl font-semibold mb-2">qT4A3E....165</h4>
			<h4 class="text-4xl font-semibold">Manage Tokens</h4>

			<div class="flex flex-row mt-10">
				<div class="nft-list">
					<div class="flex flex-row justify-between">
						<h5 class="font-semibold text-xl">Selected</h5>
						<h5 class="font-semibold text-xl">0/5</h5>
					</div>
					<div class="grid grid-cols-2 gap-3 mt-5">
						<template v-for="i in 20" :key="i">
							<nft-card />
						</template>
					</div>
				</div>
				<div class="w-56 pl-5 mt-10">
					<button class="shadow py-4 py-2 bg-black text-white rounded-full" style="width: 130px; height: 50px;">Select</button>
				</div>
			</div>
		</div>
	</dashboard-layout>
</template>

<script lang="ts" setup>
import DashboardLayout from '../components/DashboardLayout.vue';
import NftCard from '../components/NftCard.vue';

</script>

<style scoped>
.nft-list{
	width: calc(100% - 224px);
}
</style>
