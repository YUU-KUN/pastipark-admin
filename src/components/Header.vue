<template>
    <div class="flex justify-end items-center gap-16 text-20 w-full h-[153px] bg-white py-10 px-20">
        <!-- <button class="font-medium">Daftar</button> -->
        <button @click="$router.push({name: 'login'})"
            class="text-white rounded-full h-[60px] w-[160px] border-8 border-[#6F9FE2] bg-primary font-semibold">Masuk</button>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>