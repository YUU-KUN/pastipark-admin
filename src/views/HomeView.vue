<template>
  <div class="flex flex-col items-start justify-start w-full">
    <div class="flex justify-between items-center w-full mb-4">
      <p class="text-32">Selamat {{ getTime() }}, {{ user?.name }}!</p>
      <div class="rounded-2xl shadow p-2 bg-[#EBEBEB] ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
          <path
            d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z">
          </path>
        </svg>
      </div>
    </div>

    <div class="grid grid-cols-4 rounded-2xl shadow-lg bg-white py-9 w-full mb-7">
      <div class="border-r-2 border-r-[#D9DEF1] border-dashed px-12">
        <p class="text-16 text-[#7D7D7D] mb-2">Laporan</p>
        <p class="text-24 text-primary ">{{ reportStatistics?.count }}</p>
        <p class="text-14 ">{{ today }}</p>
      </div>
      <div class="border-r-2 border-r-[#D9DEF1] border-dashed px-12">
        <p class="text-16 text-[#7D7D7D] mb-2">Ditolak</p>
        <p class="text-24 text-primary ">{{ reportStatistics?.rejected }}</p>
        <p class="text-14 ">{{ today }}</p>
      </div>
      <div class="border-r-2 border-r-[#D9DEF1] border-dashed px-12">
        <p class="text-16 text-[#7D7D7D] mb-2">Ditindaklanjuti</p>
        <p class="text-24 text-primary ">{{ reportStatistics?.processed }}</p>
        <p class="text-14 ">{{ today }}</p>
      </div>
      <div class="px-12">
        <p class="text-16 text-[#7D7D7D] mb-2">Terselesaikan</p>
        <p class="text-24 text-primary ">{{ reportStatistics?.resolved }}</p>
        <p class="text-14 ">{{ today }}</p>
      </div>
    </div>

    <div class="grid grid-cols-8 desktop:grid-cols-7 gap-x-9 gap-y-7 w-full">

      <div class="flex flex-col gap-7 col-span-5 rounded-2xl shadow-lg bg-white p-7 w-full">
        <div class="flex justify-between items-center">
          <p class="text-24">Laporan Pelanggan</p>
          <select name="" id="">
            <option value="monthly">Bulan ini</option>
            <option value="annually">Tahun ini</option>
          </select>
        </div>
        <div>
          <LineChart />
        </div>
      </div>

      <div
        class="flex flex-col items-start justify-start gap-8 col-span-3 desktop:col-span-2 rounded-2xl shadow-lg bg-white p-7">
        <p class="text-24">Isu Pelanggan</p>
        <div class="flex flex-col items-start justify-start gap-5 w-full">
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center justify-start gap-3 text-14">
              <div class="bg-primary p-3 rounded-xl"></div>
              Parkir Liar
            </div>
            <p class="text-primary text-18">{{ reportStatistics?.illegal_parking_percentage }}%</p>
          </div>
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center justify-start gap-3 text-14">
              <div class="bg-primary p-3 rounded-xl"></div>
              Parkir Ganda
            </div>
            <p class="text-primary text-18">{{ reportStatistics?.double_parking_percentage }}% </p>
          </div>
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center justify-start gap-3 text-14">
              <div class="bg-primary p-3 rounded-xl"></div>
              Kerusakan Fasilitas
            </div>
            <p class="text-primary text-18">{{ reportStatistics?.facility_damage_percentage }}%</p>
          </div>
        </div>

      </div>

      <div class="flex flex-col gap-7 col-span-5 rounded-2xl shadow-lg bg-white p-7 w-full">
        <div class="flex justify-between items-center">
          <p class="text-24">Laporan Pelanggan</p>
          <button @click="$router.push({ name: 'reports' })" class="bg-[#F6F6F6] text-14 rounded-lg py-2 px-4">See
            All</button>
        </div>
        <table>
          <thead class="border-b">
            <tr>
              <th class="text-start font-normal text-16 text-[#949494] pb-3">Judul Laporan</th>
              <th class="text-start font-normal text-16 text-[#949494] pb-3">Lokasi Laporan</th>
              <th class="text-start font-normal text-16 text-[#949494] pb-3">Detail Laporan</th>
              <th class="text-start font-normal text-16 text-[#949494] pb-3">Bukti</th>
              <th class="text-start font-normal text-16 text-[#949494] pb-3">Plat Nomor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-14 pt-6">Parkir Liar</td>
              <td class="text-14 pt-6">Jl. Katapang no.130</td>
              <td class="text-14 pt-6">Parkir di tempat umum</td>
              <td class="text-14 pt-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#017afb" viewBox="0 0 256 256">
                  <path
                    d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM80,96a16,16,0,1,1,16,16A16,16,0,0,1,80,96Z">
                  </path>
                </svg>
              </td>
              <td class="text-14 pt-6">B 1234 AB</td>
            </tr>
          </tbody>

        </table>
      </div>

      <div
        class="flex flex-col items-start justify-start gap-8 col-span-3 desktop:col-span-2 rounded-2xl shadow-lg bg-white p-7">
        <p class="text-24">Top Kecamatan</p>
        <div class="flex flex-col items-start justify-start gap-5 w-full">
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center justify-start gap-3 text-14">
              <div class="bg-primary p-3 rounded-xl"></div>
              Pangalengan
            </div>
            <p class="text-primary text-18">96.42%</p>
          </div>
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center justify-start gap-3 text-14">
              <div class="bg-primary p-3 rounded-xl"></div>
              Dayeuh Kolot
            </div>
            <p class="text-primary text-18">12%</p>
          </div>
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center justify-start gap-3 text-14">
              <div class="bg-primary p-3 rounded-xl"></div>
              Katapang
            </div>
            <p class="text-primary text-18">9%</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { defineComponent, onMounted, ref } from 'vue'
import LineChart from '../components/Line.vue'
import { useUserStore } from '@/stores/user';
import axios from 'axios';

defineComponent({ LineChart })

const userStore = useUserStore();
const user = ref(null)
const reportStatistics = ref(null)
const today = ref(null)

const getReportStatistics = async () => {
  try {
    const { data } = await axios.get('/reports/statistics')
    reportStatistics.value = data.data
    console.log(reportStatistics.value);
  } catch (error) {
    console.log(error)
  }
}

const getDate = () => {
  const time = new Date();
  const date = time.toLocaleDateString('id-ID', { day: 'numeric' });
  const day = time.toLocaleDateString('id-ID', { weekday: 'long' });
  const month = time.toLocaleDateString('id-ID', { month: 'long' });

  today.value = `${day}, ${date} ${month}`;
}

const getTime = () => {
  const time = new Date();
  const hours = time.getHours();
  if (hours < 12) {
    return 'pagi';
  } else if (hours < 15) {
    return 'siang';
  } else if (hours < 18) {
    return 'sore';
  } else {
    return 'malam';
  }
}
onMounted(() => {
  user.value = userStore.user
  getReportStatistics()
  getDate()
})

</script>

<style></style>