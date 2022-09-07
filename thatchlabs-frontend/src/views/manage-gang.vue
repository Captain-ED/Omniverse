<template>
	<dashboard-layout>
		<div class="pt-5 px-4">
			<h4 class="text-gray-700 text-5xl font-semibold mb-2">qT4A3E....165</h4>
			<h4 class="text-4xl font-semibold">Manage Gang</h4>

			<div class="flex flex-row mt-10">
				<div class="nft-list">
					<div class="grid grid-cols-2 gap-3 mt-5">
						<template v-for="i in 10" :key="i">
							<nft-card @click="selectPersonaItem(i)" :isItemSelected="selectedNft === i" />
						</template>
					</div>
				</div>
				<div class="w-56 pl-5 mt-4 flex flex-col items-center">
					<h5 class="font-semibold text-center">Actions</h5>
					<button class="shadow py-4 py-2 bg-black text-white rounded-full mx-auto mt-7" style="width: 130px; height: 50px;" @click="processSelectedPersona">Invalidate</button>
					<button class="shadow py-4 py-2 bg-black text-white rounded-full mx-auto mt-7" style="width: 130px; height: 50px;" @click="processSelectedPersona">Rank Up</button>
				</div>
			</div>
		</div>
	</dashboard-layout>
</template>

<script lang="ts" setup>
import { ref, onMounted, inject  } from "vue";
import { useRouter, useRoute } from 'vue-router'
import DashboardLayout from '../components/DashboardLayout.vue';
import NftCard from '../components/NftCard.vue';
	//let selectedNft = null;
	const router = useRouter();
	const selectedNft = ref(0);
	const swal = inject("$swal");

	const selectPersonaItem = (index) => {
		selectedNft.value = index
		console.log(index)
	};

	const processSelectedPersona = () => {
		if(selectedNft.value <= 0) {
			swal.fire({
				icon: 'error',
				text: 'Please select a nft to proceed'
			})
			return;
		}
		router.push('/mint-persona')
	};
</script>

<style scoped>
.nft-list{
	width: calc(100% - 224px);
}
</style>
