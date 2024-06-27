<template>
    <div class="relative flex flex-col items-center justify-center bg-primary w-screen h-screen">
        <img src="/public/assets/images/circle-login-top-right-corner.png" alt="circle-login-top-right-corner"
            class="absolute z-10 top-0 right-0">
        <img src="/public/assets/images/circle-login-bottom-left-corner.png" alt="circle-login-bottom-left-corner"
            class="absolute z-10 bottom-0 left-0">

        <div class="z-20 flex flex-col items-center justify-start bg-white rounded-[40px] px-7 py-16 w-[517px]">
            <p class="text-primary text-32 font-semibold">Masuk</p>
            <p class="text-14 mb-16">Masuk dan akses seluruh fitur</p>
            <div class="w-full mb-4">
                <label for="email" class="text-18 mb-2">Email</label>
                <input v-model="email" id="email" type="text" placeholder="Masukkan email Anda"
                    class="w-full bg-black bg-opacity-5 rounded-full py-5 px-7">
            </div>
            <div class="w-full mb-16">
                <label for="password" class="text-18 mb-2">Password</label>
                <input v-model="password" id="password" type="password" placeholder="Masukkan password Anda"
                    class="w-full bg-black bg-opacity-5 rounded-full py-5 px-7">
            </div>

            <button @click="login"
                class="w-full rounded-full bg-primary text-white text-20 font-semibold py-4">Masuk</button>
        </div>
        <!-- <div class="absolute -top-72 right-0">
            <div class="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-white to-[#017AFB]"></div>
        </div> -->
        <!-- <div class="absolute -top-48 -right-80">
            <div class="w-[500px] h-[500px] rounded-full bg-gradient-to-br to-[#017AFB] from-white opacity-35"></div>
        </div> -->
    </div>
</template>

<script setup>
import router from "@/router"
import axios from "axios"
import { onMounted, ref } from "vue"
import { useUserStore } from '../stores/user'

const email = ref('')
const password = ref('')
const userStore = useUserStore()

const login = async () => {
    try {
        const data = {
            email: email.value,
            password: password.value
        }
        const response = await axios.post('auth/login', data)
        console.log(response)

        if (response.status === 200) {
            userStore.setToken(response.data.data.token)
            userStore.setUser(response.data.data.user)
            router.push({ name: 'dashboard' })
        }

    } catch (error) {
        console.log(error)
    }

    // axios.post('auth/login').then((res) => {
    //     console.log(res)
    // }).catch((err) => {
    //     console.log(err)
    // })
}

onMounted(() => {
    console.log(import.meta.env.MODE);
})
// export default {
//     data() {
//         return {
//             email: '',
//             password: '',
//         }
//     },
//     methods: {
//         login() {
//             console.log(this.email, this.password)
//         }
//     },
//     mounted() {
//         console.log(import.meta.env.MODE);
//     }
// }
</script>

<style></style>