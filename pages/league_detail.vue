<template>
  <div>
    <div class="bg-neutral-100  h-36 absolute top-0 left-0 w-full z-0">
    </div>

    <header class="h-16 flex items-center px-2 relative z-10">
      <div
        class="w-12 h-12 flex items-center justify-center active:bg-gray-200 rounded-full"
        @click="$router.go(-1)"
      >
        <span class="material-icons-round">arrow_back</span>
      </div>
    </header>

    <div class="flex flex-col items-center relative z-10">
      <img src="~/assets/img/profile01.png" class="w-36 h-36 object-cover rounded-full" />
      <strong class="text-2xl font-bold mt-4">
        HL
      </strong>
      <button class="h-8 px-5 bg-neutral-900 text-white text-xs rounded-full mt-2">구독하기</button>
    
      <div class="px-5 w-full mt-10 flex justify-between items-center pb-5">
        <span class="text-xs text-neutral-500">구독중인 회원</span>
        <strong class="text-lg font-bold">1,344명</strong>
      </div>
    </div>

    <div class="flex flex-col pb-16">
      <Feed />
    </div>

  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'empty'
})
</script>

<style lang="scss" scoped>
.image{
  overflow:hidden;
  position: relative;

  &:after{
    content:'';
    padding-bottom:100%;
    display:block;
  }
  img{
    width:100%;
    position: absolute;
    object-fit: cover;
  }
}

</style>