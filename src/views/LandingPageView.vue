<template>
    <div class="relative flex justify-center items-center h-screen w-screen">
        <Header class="absolute top-0" />
        <div class="flex justify-around items-center w-full px-24">
            <div>
                <p class="text-51 font-bold text-primary">PASTI-PARK</p>
                <!-- 4xl -->
                <p class="text-24 w-[578px]">Solusi Terintegrasi Penanganan Parkir Liar Berbasis AI untuk
                    Pelayanan Publik</p>
                <!-- <button class="bg-primary rounded-full border-4 border-white text-white px-9 py-5 mt-[123px]">Lihat
                    Selengkapnya</button> -->
            </div>
            <div>
                <img src="/public/assets/logos/logo-big.png" alt="logo-big">
                <p class="text-24">Solusi Terdepan Penanganan Parkir Liar</p>
            </div>
        </div>
        <img class="absolute bottom-0 left-0 -z-10" src="/public/assets/images/circle-corner.png" alt="circle-corner">
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
    components: { Header }
}
</script>

<style></style>