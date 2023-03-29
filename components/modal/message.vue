<template>
  <div class="fixed top-0 left-0 w-full h-full overflow-hidden z-30" v-if="show">
    <transition
      appear
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-500 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      class="absolute top-0"
    >
      <div class=" bg-opacity-70 bg-black w-full h-full absolute z-10 top-0 left-0" 
        v-if="show"  
        @click="show = false"
      >
      </div> 
    </transition>

    <transition
      appear
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-500 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div class="absolute top-1/2 -translate-y-1/2 left-0 w-full z-30 px-8" v-if="show">
        <div class="bg-white rounded-lg p-4">
 
          <h4 class="font-bold text-xs">{{title}}</h4>
          <p class="mt-2 text-neutral-500">{{text}}</p>
     
          <div class="flex items-center justify-end left-0 top-0 gap-3 mt-5">
            <button class="h-9 px-5 rounded-md bg-neutral-100 text-sm active:bg-neutral-200"
              @click="show = false"
            >취소</button>
            <button class="h-9 px-5 rounded-md bg-neutral-100 text-sm active:bg-neutral-200"
              @click="$router.push('cash_finish')"
            >확인</button>
          </div>
        </div>
      </div>
     
    </transition>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean,
  text: string,
  title:string
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', state:boolean): void,
}>()

const show = computed({
  get(){
    return props.modelValue;
  },
  set(change: boolean) {
    emits('update:modelValue', change)
    
  }
})


</script>

<style lang="scss" scoped>

</style>