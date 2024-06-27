// stores/user.js
import axios from 'axios';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        token: null,
    }),
    persist: true,
    actions: {
        setUser(userData) {
            this.user = userData;
        },

        setToken(token) {
            this.token = token;
            localStorage.setItem('token', token);
            // axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
            // console.log(axios.defaults.headers.common['Authorization']);
        },

        clearUser() {
            this.user = null;
        },
    },
});
