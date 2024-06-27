<template>
    <div class="flex flex-col items-center justify-between h-full p-10">
        <div class="flex flex-col">
            <RouterLink to="/dashboard">
                <img src="/public/assets/logos/logo-main.png" alt="logo-main" class="mb-6 w-40 h-20 mx-auto">
            </RouterLink>
            <div class="flex flex-col gap-5 items-center justify-center">
                <RouterLink to="/dashboard" active-class="text-primary bg-white shadow rounded-2xl"
                    class="flex items-center justify-start gap-5 px-8 py-4 text-18 w-full">
                    <PhSquaresFour :size="28" />
                    Dashboard
                </RouterLink>
                <RouterLink to="/" active-class="text-primary bg-white shadow rounded-2xl"
                    class="flex items-center justify-start gap-5 px-8 py-4 text-18 w-full">
                    <PhPresentationChart :size="28" />
                    Kasus
                </RouterLink>
                <RouterLink to="/reports" active-class="text-primary bg-white shadow rounded-2xl"
                    class="flex items-center justify-start gap-5 px-8 py-4 text-18 w-full">
                    <PhIdentificationCard :size="28" />
                    Laporan
                </RouterLink>
                <RouterLink to="/" active-class="text-primary bg-white shadow rounded-2xl"
                    class="flex items-center justify-start gap-5 px-8 py-4 text-18 w-full">
                    <PhChartBar :size="28" />
                    Performance
                </RouterLink>
                <RouterLink to="/" active-class="text-primary bg-white shadow rounded-2xl"
                    class="flex items-center justify-start gap-5 px-8 py-4 text-18 w-full">
                    <PhThumbsUp :size="28" />
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
                <PhDotsThree :size="28" />
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