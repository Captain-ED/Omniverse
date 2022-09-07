<template>
	<dashboard-layout>
		<div class="pt-5 px-4">
			<h4 class="text-gray-700 text-5xl font-semibold mb-2">qT4A3E....165</h4>
			<h4 class="text-4xl font-semibold">Mint Gang</h4>

			<div v-if="currentPage === 'create'">
				<form @submit.prevent="processMint" novalidate>
					<div class="flex flex-row mt-10">
						<div class="nft-list">
							<div class="flex flex-row gap-3 items-center">
								<div class="w-44">
									<h5 class="font-semibold">GANG NAME</h5>
								</div>
								<div class="w-full">
									<input type="text" v-model="vv.gang_name.$model" placeholder="Enter Gang Name" class="py-4 px-6 bg-gray-100 w-full rounded-full border-2 border-black" name="">
									<span class="error">{{ vv?.gang_name?.$errors[0]?.$message }}</span>
								</div>
							</div>
							<div class="flex flex-row gap-3 items-center mt-10">
								<div class="w-44">
									<h5 class="font-semibold">SIZE</h5>
								</div>
								<div class="w-full">
									<input type="text" v-model="vv.gang_size.$model" placeholder="Enter Gang Size" class="py-4 px-6 bg-gray-100 w-full rounded-full border-2 border-black" name="">
									<span class="error">{{ vv?.gang_size?.$errors[0]?.$message }}</span>
								</div>
							</div>
							<div class="flex flex-row gap-3 items-center mt-10">
								<div class="w-44">
									<h5 class="font-semibold">PRICE</h5>
								</div>
								<div class="w-full">
									<input type="text" v-model="vv.gang_price.$model" placeholder="Enter Gang Price" class="py-4 px-6 bg-gray-100 w-full rounded-full border-2 border-black" name="">
									<span class="error">{{ vv?.gang_price?.$errors[0]?.$message }}</span>
								</div>
							</div>
							<div class="flex flex-row gap-3 items-center mt-10">
								<div class="w-44">
									<h5 class="font-semibold">RANKING STYLE</h5>
								</div>
								<div class="w-full">
									<div class="gap-4 flex flex-row">
										<div class="flex-col flex justify-center items-center">
											<img src="../../assets/nft2.png" class="rounded" style="width: 150px; height: 150px;">
											<h5 class="font-semibold mt-3">STARS</h5>
										</div>
										<div class="flex-col flex justify-center items-center">
											<img src="../../assets/nft2.png" class="rounded" style="width: 150px; height: 150px;">
											<h5 class="font-semibold mt-3">NONE</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="w-56 pl-5 ml-14 flex flex-col item-center">
							<button class="shadow py-4 py-2 bg-black text-white rounded-full" style="width: 130px; height: 50px;" @click="processSelectedGang" :class="vv.$invalid ? 'bg-black-500' : 'bg-black'" :disabled="vv.$invalid">Mint</button>
							<img src="../../assets/nft2.png" class="rounded mt-7" style="width: 150px; height: 150px;">
						</div>	
					</div>
				</form>
			</div>
			<div v-if="currentPage === 'confirm'">
				<div class="grid grid-cols-2">
		        	<div class="pl-4 pt-5 flex flex-row justify-center">
		                <div class="bg-white py-10 px-5 shadow rounded flex flex-col items-center text-center" style="max-width: 350px; height: auto; min-width: 350px;">
		                	<h5 class="font-extrabold text-xl">CREW/ DUSTY YETI</h5>
		                	<h5 class="font-extrabold text-xl"># 4372</h5>
		                	<img src="../../assets/nft2.png" class="rounded mt-7 mb-7" style="width: 150px; height: 150px;">
		                	<h4 class="text-gray-700 text-xl font-semibold">SIZE</h4>
		                	<h4 class="text-xl font-semibold mb-2">10000</h4>
		                	<h4 class="text-gray-700 text-xl font-semibold mt-3">RANKING</h4>
		                	<h4 class="text-xl font-semibold mb-2">NONE</h4>
		                	<h4 class="text-gray-700 text-xl font-semibold mt-3">LEADER TOKEN</h4>
		                	<h4 class="text-lg font-semibold mb-2 overflow-hidden overflow-ellipsis w-full">3A7dxfcY1jRw....YXZhqi5kAigU2apBD</h4>
		                </div>
		        	</div>
		        	<div class="px-3 pt-5 flex flex-row justify-end">
		        		<div class="bg-gray-800 pb-10 pt-4 px-5 flex flex-col justify-center items-center login-container rounded-xl">
		        			<div class="flex flex-row justify-center mt-4 w-full">
		        				<div style="">
		                            <h5 class="text-center text-white font-semibold">Wallet1 023949c2342304322</h5>            
		                        </div>
		        			</div>
		        			<div class="bg-black p-4 mt-10 mb-2">
		        				<h5 class="italic text-5xl font-extrabold text-gray-400">TL</h5>
		        			</div>
		                    <h5 class="text-2xl font-extrabold text-white">Thatch Labs</h5>
		                    <h5 class="font-semibold text-gray-400">demo.thatchlabs.ssc</h5>
		                    <div class="bg-gray-700 w-full mb-2 px-2 rounded mt-2">
		                    	<div class="flex flex-row justify-between w-full py-3 px-2 rounded">
			                    	<h5 class="font-semibold text-white font-semibold">Estimated Balance Changes</h5>
			                    </div>
			                    <div class="flex flex-row justify-between w-full py-3 px-2 rounded">
			                    	<h5 class="font-semibold text-white">DBN</h5>
			                    	<h5 class="font-semibold text-red-500">50.00 SOL</h5>
			                    </div>
			                    <div class="flex flex-row justify-between w-full py-3 px-2 rounded">
			                    	<h5 class="font-semibold text-white">SOL</h5>
			                    	<h5 class="font-semibold text-red-500">50.00 SOL</h5>
			                    </div>
		                    </div>
		                    <div class="flex flex-row justify-between w-full bg-gray-700 py-3 px-4 rounded">
		                    	<h5 class="font-semibold text-white">Network Fee</h5>
		                    	<h5 class="font-semibold text-white">50.00 SOL</h5>
		                    </div>
		                    <div class="py-3"></div>
		                    <div class="flex flex-row space-x-3 w-full mt-4">
		                        <button class="text-center rounded-full text-white bg-gray-700 w-full py-4 px-2 shadow-md" @click="onCancel">Cancel</button>
		                        <button class="text-center rounded-full text-white bg-green-500 w-full py-4 px-2 shadow-md" @click="approvePayment">Accept</button>
		                    </div>
		        		</div>
		        	</div>
		        </div>
			</div>
			<div v-if="currentPage === 'success'">
				<div class="grid">
		        	<div class="pl-4 pt-5 mt-5 flex flex-row ">
		                <div class="bg-white py-10 px-5 shadow-md rounded flex flex-col items-center text-center" style="max-width: 350px; height: auto; min-width: 350px;">
		                	<h4 class="text-gray-700 text-xl font-semibold">SUCCESS</h4>
		                	<img src="../../assets/nft2.png" class="rounded mt-7 mb-7" style="width: 150px; height: 150px;">
		                	<h5 class="font-extrabold text-xl">CREW/ DUSTY YETI</h5>
		                	<h5 class="font-extrabold text-xl"># 4372</h5>
		                	<h4 class="text-gray-700 text-xl font-semibold mt-3">CANDY MACHINE</h4>
		                	<h4 class="text-sm font-semibold mb-2 w-full break-words">https://www.solaneyes.com/address/2AaVEa5UMv8L5qfvrRryq5vRcsoVUaUuJrr9riHd1VxT?cluster=devnetCommand</h4>
		                </div>
		        	</div>
		        </div>
			</div>
		</div>
	</dashboard-layout>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, inject, computed  } from "vue";
import DashboardLayout from '../../components/DashboardLayout.vue';
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
	
	const currentPage = ref("create") 
	const fform = reactive({
		gang_name: '',
		gang_size: '',
		gang_price: ''
	})
	const rules = computed(() => (
		{	
			gang_name: { required },
			gang_size: { required },
			gang_price: { required }
		}
	))
	const vv = useVuelidate(rules, fform);

	const processMint = () => {
		currentPage.value = "confirm"
	};

	const onCancel = () => {
		currentPage.value = "create"
	};

	const approvePayment = () => {
		currentPage.value = "success"
	};
</script>

<style scoped>
.nft-list{
	width: calc(100% - 250px);
}
.login-container{
    max-width: 400px;
    min-width: 400px;
}
</style>
