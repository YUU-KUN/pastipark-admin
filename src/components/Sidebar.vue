<template>
    <div class="flex flex-col items-center justify-between h-full p-10">
        <div class="flex flex-col">
            <RouterLink to="/dashboard">
                <img src="/public/assets/logos/logo-main.png" alt="logo-main" class="mb-6 w-40 h-20 mx-auto">
            </RouterLink>
            <div class="flex flex-col gap-5 items-center justify-center">
                <RouterLink to="/dashboard" active-class="text-primary bg-white shadow rounded-2xl"
                    class="flex items-center justify-start gap-5 px-8 py-4 text-18 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path
                            d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z">
                        </path>
                    </svg>
                    Dashboard
                </RouterLink>
                <RouterLink to="/" active-class="text-primary bg-white shadow rounded-2xl"
                    class="flex items-center justify-start gap-5 px-8 py-4 text-18 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 256 256">
                        <path
                            d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z">
                        </path>
                    </svg>
                    Kasus
                </RouterLink>
                <RouterLink to="/reports" active-class="text-primary bg-white shadow rounded-2xl"
                    class="flex items-center justify-start gap-5 px-8 py-4 text-18 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 256 256">
                        <path
                            d="M200,112a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h40A8,8,0,0,1,200,112Zm-8,24H152a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm40-80V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Zm-80.26-34a8,8,0,1,1-15.5,4c-2.63-10.26-13.06-18-24.25-18s-21.61,7.74-24.25,18a8,8,0,1,1-15.5-4,39.84,39.84,0,0,1,17.19-23.34,32,32,0,1,1,45.12,0A39.76,39.76,0,0,1,135.75,166ZM96,136a16,16,0,1,0-16-16A16,16,0,0,0,96,136Z">
                        </path>
                    </svg>
                    Laporan
                </RouterLink>
                <RouterLink to="/" active-class="text-primary bg-white shadow rounded-2xl"
                    class="flex items-center justify-start gap-5 px-8 py-4 text-18 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 256 256">
                        <path
                            d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z">
                        </path>
                    </svg>
                    Performance
                </RouterLink>
                <RouterLink to="/" active-class="text-primary bg-white shadow rounded-2xl"
                    class="flex items-center justify-start gap-5 px-8 py-4 text-18 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 256 256">
                        <path
                            d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z">
                        </path>
                    </svg>
                    Insentif
                </RouterLink>
            </div>
        </div>

        <div class="flex justify-between items-center w-full">
            <div class="flex items-center justify-start gap-5 text-18">
                <img src="/public/assets/logos/logo-dishub.png" alt="logo-dishub">
                {{ user?.name }}
            </div>
            <div class="flex items-center justify-center h-6 w-6 rounded-2xl bg-[#EBEBEB]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 256 256">
                    <path
                        d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z">
                    </path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
const userStore = useUserStore()

const user = ref(null)

onMounted(() => {
    user.value = userStore.user
})
</script>

<style></style>