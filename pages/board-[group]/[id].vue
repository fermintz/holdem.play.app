<template>
  <div>
    <header class="h-16 flex justify-between items-center px-2">
      <div 
        class="w-12 h-12 flex items-center justify-center active:bg-gray-200 rounded-full"
        @click="$router.go(-1)"
      >
        <span class="material-icons-round">arrow_back</span>
      </div>
    </header>
    <div class="p-5 border-b border-solid border-gray-200">
      <div class="text-md font-bold">포인트 적립 안내 및 사용방법</div>
      <div class="mt-2 text-sm flex items-center gap-5">
        <span>23.03.14 13:45</span>
      </div>
    </div>
    <div class="p-5">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore beatae repudiandae vitae maiores sit quos illo enim consequatur unde soluta mollitia quisquam obcaecati, reprehenderit cumque? Ipsa commodi autem suscipit quibusdam?
      <br/>
      <br/>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente veniam molestiae repellendus explicabo, architecto nobis accusamus? Temporibus odio ipsum inventore pariatur? Fugit ut soluta eius exercitationem. Eius aspernatur quidem magnam.
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'empty'
})
</script>

<style lang="scss" scoped>

</style>