<template>
    <dashboard-layout>
        <div class="grid grid-cols-2">
        	<div class="pl-4 pt-5">
                <div class="pt-10">
                    
                </div>
        		<h2 class="text-gray-700 text-5xl font-semibold">CONNECT WALLET</h2>
        		<h5 class="text-5xl font-semibold">Thatch Labs</h5>
        	</div>
        	<div class="px-3 pt-5 flex flex-row justify-end">
        		<div class="bg-gray-800 pb-10 pt-4 px-5 flex flex-col justify-center items-center login-container">
        			<div class="flex flex-row justify-evenly mt-4 w-full">
        				<div class="" style="width: 40px;">
                            <font-awesome-icon icon="bars" class="text-xl text-white" :style="{marginRight: '10px'}" />            
                        </div>
        				<div style="width: calc(100% - 50px);">
                            <h5 class="text-center text-white font-semibold">Wallet1 023949c2342304322</h5>            
                        </div>
        			</div>
        			<div class="bg-black p-4 mt-10 mb-2">
        				<h5 class="italic text-5xl font-extrabold text-gray-400">TL</h5>
        			</div>
                    <h5 class="text-2xl font-extrabold text-white">Thatch Labs</h5>
                    <h5 class="font-semibold text-gray-400">demo.thatchlabs.ssc</h5>
                    <h5 class="font-semibold text-gray-400 mt-5">This app would lke to:</h5>
                    <h5 class="font-semibold text-white text-sm">
                        <font-awesome-icon icon="check" class="text-xl text-green-500" :style="{marginRight: '10px'}" />
                        View your wallet balance & activity
                    </h5>
                    <h5 class="font-semibold text-white text-sm mt-2">
                        <font-awesome-icon icon="check" class="text-xl text-green-500" :style="{marginRight: '10px'}" />
                        Request approval for transactions
                    </h5>
                    <div class="py-3"></div>
                    <h5 class="font-semibold text-gray-400 text-sm">Only connect to websites you trust</h5>
                    <div class="flex flex-row space-x-3 w-full mt-4">
                        <button class="text-center rounded-full text-white bg-gray-500 w-full py-4 px-2">Cancel</button>
                        <router-link to="/dashboard" class="text-center rounded-full text-white bg-green-500 w-full py-4 px-2">Connect</router-link>
                    </div>
        		</div>
        	</div>
        </div>
    </dashboard-layout>
</template>

<script lang="ts" setup>
import DashboardLayout from '../components/DashboardLayout.vue';

</script>

<style scoped>
.login-container{
    max-width: 400px;
    min-width: 400px;
}
</style>
