<template>
	<dashboard-layout>
		<div class="pt-5 px-4">
			<h4 class="text-gray-700 text-5xl font-semibold">qT4A3E....165</h4>
			<div class="mt-24"></div>
			<div class="grid grid-cols-3 gap-4">
				<router-link to="/persona" class="rounded py-3 px-2 shadow bg-white cursor-pointer">
					<div class="flex flex-row">
						<h2 class="italic font-semibold text-6xl mr-1">TL</h2>
						<h5 class="font-semibold text-2xl">New <br> Persona</h5>
					</div>
					<div class="flex flex-row justify-center my-10">
						<img style="width: 100px; height: 100px;" src="../assets/persona.png">
					</div>
				</router-link>
				<router-link to="/gang" class="rounded py-3 px-2 shadow bg-white cursor-pointer">
					<div class="flex flex-row">
						<h2 class="italic font-semibold text-6xl mr-1">TL</h2>
						<h5 class="font-semibold text-2xl">New <br> Gang</h5>
					</div>
					<div class="flex flex-row justify-center my-10">
						<img style="width: 100px; height: 100px;" src="../assets/gang.png">
					</div>
				</router-link>
				<router-link to="/token" class="rounded py-3 px-2 shadow bg-white cursor-pointer">
					<div class="flex flex-row">
						<h2 class="italic font-semibold text-6xl mr-1">TL</h2>
						<h5 class="font-semibold text-2xl">New <br> Tokens</h5>
					</div>
					<div class="flex flex-row justify-center my-10">
						<img style="width: 100px; height: 100px;" src="../assets/token.png">
					</div>
				</router-link>
			</div>
		</div>
	</dashboard-layout>
</template>

<script lang="ts" setup>
import DashboardLayout from '../components/DashboardLayout.vue';

</script>

<style scoped>
</style>
