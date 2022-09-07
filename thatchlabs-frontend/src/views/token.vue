<template>
	<dashboard-layout>
		<div class="pt-5 px-4">
			<h4 class="text-gray-700 text-5xl font-semibold mb-2">qT4A3E....165</h4>
			<h4 class="text-4xl font-semibold">Manage Tokens</h4>

			<div class="flex flex-row mt-10 gap-4">
				<router-link to="/persona-token" class="rounded py-3 px-2 shadow bg-white cursor-pointer">
					<div class="flex flex-row" style="width: 300px;">
						<h2 class="italic font-semibold text-6xl mr-1">TL</h2>
						<h5 class="font-semibold text-2xl">Manage <br> Persona</h5>
					</div>
					<div class="flex flex-row justify-center my-10">
						<img style="width: 100px; height: 100px;" src="../assets/persona.png">
					</div>
				</router-link>
				<router-link to="/gang-token" class="rounded py-3 px-2 shadow bg-white cursor-pointer">
					<div class="flex flex-row" style="width: 300px;">
						<h2 class="italic font-semibold text-6xl mr-1">TL</h2>
						<h5 class="font-semibold text-2xl">Manage <br> Gang</h5>
					</div>
					<div class="flex flex-row justify-center my-10">
						<img style="width: 100px; height: 100px;" src="../assets/gang.png">
					</div>
				</router-link>
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
