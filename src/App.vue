<template>
  <div class="relative flex h-screen w-screen">
    <RouterView class="col-span-1" name="Sidebar" />
    <div class="w-full">
      <!-- <RouterView name="Header" /> -->
      <!-- <div class="">
      </div> -->
      <RouterView class="relative p-8 desktop:py-10 desktop:px-11" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>