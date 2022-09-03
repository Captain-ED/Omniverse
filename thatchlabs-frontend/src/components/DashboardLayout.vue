<template>
    <div class="bg-gray-100 w-full min-h-screen flex flex-row">
        <div class="w-44 bg-white shadow min-h-screen">
            <router-link to="/" class="w-full text-center flex flex-col justify-center items-center pt-16">
                <h1 class="italic text-5xl font-extrabold">TL</h1>
                <h6 class="font-semibold uppercase text-sm">thactch labs</h6>
            </router-link>
            <ul class="mt-10">
            	<li class="text-center w-full flex justify-center">
            		<router-link to="/persona">
            			<img src="../assets/persona.png" v-if="currentRouter.split('/')[1] === 'persona'">
                        <img src="../assets/noun-heisenberg-54737.png" v-if="currentRouter.split('/')[1] !== 'persona'">
            		</router-link>
            	</li>
            	<li class="text-center w-full flex justify-center mt-10">
            		<router-link to="/gang">
                        <img src="../assets/gang.png" v-if="currentRouter.split('/')[1] === 'gang'">
            			<img src="../assets/324411.png" v-if="currentRouter.split('/')[1] !== 'gang'">
            		</router-link>
            	</li>
            	<li class="text-center w-full flex justify-center mt-10">
            		<router-link to="/token">
                        <img src="../assets/token-icon.png" v-if="currentRouter.split('/')[1] === 'token'">
            			<img src="../assets/noun-bill-5075157.png" v-if="currentRouter.split('/')[1] !== 'token'">
            		</router-link>
            	</li>
            </ul>
        </div>
        <div class="page-wrapper w-full pt-10 px-4 pb-24">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted  } from "vue";
import { useRouter, useRoute } from 'vue-router'
    
    const router = useRouter();
    const route = useRoute();
    const currentRouter = ref(route.fullPath);

    //currentRouter.split('/')[2] === 'transaction'

    //const router_name = "alex";
</script>

<style>
.page-wrapper{
    
}
</style>