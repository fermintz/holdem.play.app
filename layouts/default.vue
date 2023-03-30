<template>
  <div class="font-sans">
    <div class="container ">
      <slot />
    </div>

    <div
      class="
      gap-4 bottomNav w-full h-14 fixed bottom-0 
      bg-white border-t border-solid border-gray-200 
      flex items-center justify-center z-30"
    >
      <button
        v-for="(item, index) in bottomNav"
        :key="index"
        class="flex flex-col items-center justify-center w-14 h-14"
        :class="{ active: route.path === item.path }"
        @click="$router.push(item.path)"
      >
        <span class="material-icons-round" style="font-size: 18px">{{item.icon}}</span>
        <span class="text-gray-500 mt-0.5" style="font-size: 10px">{{item.name}}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const bottomNav = [
  {
    name:'홈으로',
    path:'/',
    icon:'home'
  },
  {
    name:'리그',
    path:'/league',
    icon:'emoji_events'
  },

  {
    name:'시드지갑',
    path:'/wallet',
    icon:'wallet'
  },
  {
    name:'내정보',
    path:'/mypage',
    icon:'person'
  },
]

</script>

<style lang="scss" scoped>
button.active{
  border-top:3px solid #e11d48;
}
</style>
