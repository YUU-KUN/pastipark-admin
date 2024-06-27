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
                            <PhImageSquare :size="24" class="text-primary" weight="fill" />
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
                        <PhInfo @click="changeStatus(id, 'PROCESSED')" v-if="status === 'OPEN'" :size="24" weight="bold"
                            class="hover:cursor-pointer hover:scale-110 duration-200" />
                        <PhXCircle @click="changeStatus(id, 'REJECTED')" v-if="status === 'OPEN'" :size="24"
                            weight="bold" class="hover:cursor-pointer hover:scale-110 duration-200" />
                        <PhCheckCircle @click="changeStatus(id, 'RESOLVED')" v-if="status === 'PROCESSED'" :size="24"
                            weight="bold" class="hover:cursor-pointer hover:scale-110 duration-200" />
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