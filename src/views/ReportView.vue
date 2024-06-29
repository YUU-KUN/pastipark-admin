<template>
    <div class="flex flex-col gap-7 p-7 w-full">
        <p class="text-24">Laporan Pelanggan</p>
        <table>
            <thead class="border-b">
                <tr>
                    <th class="text-start font-normal text-16 text-[#949494] pb-3">Judul Laporan</th>
                    <th class="text-start font-normal text-16 text-[#949494] pb-3">Lokasi Laporan</th>
                    <th class="text-start font-normal text-16 text-[#949494] pb-3">Detail Laporan</th>
                    <th class="text-start font-normal text-16 text-[#949494] pb-3">Bukti</th>
                    <th class="text-start font-normal text-16 text-[#949494] pb-3">Plat Nomor</th>
                    <th class="text-start font-normal text-16 text-[#949494] pb-3">Status</th>
                    <th class="text-start font-normal text-16 text-[#949494] pb-3">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ id, title, location, detail, lisencePlate, evidences, status } in reports" :key="id">
                    <td class="text-14 pt-6">{{ title }}</td>
                    <td class="text-14 pt-6">{{ location }}</td>
                    <td class="text-14 pt-6">{{ detail }}</td>
                    <td class="flex flex-wrap text-14 pt-6">
                        <a :href="`http://localhost:3000/${path}`" target="_black" v-for="{ id, path } in evidences"
                            :key="id">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#017afb"
                                viewBox="0 0 256 256">
                                <path
                                    d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM80,96a16,16,0,1,1,16,16A16,16,0,0,1,80,96Z">
                                </path>
                            </svg>
                        </a>
                    </td>
                    <td class="text-14 pt-6">{{ lisencePlate }}</td>
                    <td class="pt-6">
                        <div class="py-1 px-5 rounded-full w-fit text-white font-semibold text-14"
                            :class="getStatusColor(status)">
                            {{ getStatus(status) }}
                        </div>
                    </td>
                    <td class="flex items-center justify-start gap-2 text-primary pt-6">
                        <svg @click="changeStatus(id, 'PROCESSED')" v-if="status === 'OPEN'"
                            class="hover:cursor-pointer hover:scale-110 duration-200" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="#017afb" viewBox="0 0 256 256">
                            <path
                                d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z">
                            </path>
                        </svg>
                        <svg @click="changeStatus(id, 'REJECTED')" v-if="status === 'OPEN'"
                            class="hover:cursor-pointer hover:scale-110 duration-200" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="#017afb" viewBox="0 0 256 256">
                            <path
                                d="M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z">
                            </path>
                        </svg>
                        <svg @click="changeStatus(id, 'RESOLVED')" v-if="status === 'PROCESSED'"
                            class="hover:cursor-pointer hover:scale-110 duration-200" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="#017afb" viewBox="0 0 256 256">
                            <path
                                d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z">
                            </path>
                        </svg>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const reports = ref([]);
const getReports = async () => {
    try {
        const response = await axios.get('/reports');
        reports.value = response.data.data.rows
        console.log(reports.value);
    } catch (error) {
        console.log(error);
    }
}

const getStatusColor = (status) => {
    switch (status) {
        case 'OPEN':
            return 'bg-[#BB6BD9]';
        case 'PROCESSED':
            return 'bg-[#6B97D9]';
        case 'RESOLVED':
            return 'bg-[#8ED96B]';
        case 'REJECTED':
            return 'bg-[#FF3232]';
        default:
            break;
    }
}

const getStatus = (status) => {
    switch (status) {
        case 'OPEN':
            return 'Dibuka';
        case 'PROCESSED':
            return 'Tindakan';
        case 'RESOLVED':
            return 'Selesai';
        case 'REJECTED':
            return 'Ditolak';
        default:
            break;
    }
}

const changeStatus = async (id, status) => {
    try {
        const data = { status }
        const response = await axios.patch(`/reports/${id}`, data);
        getReports()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
onMounted(() => {
    getReports()
})
</script>

<style></style>