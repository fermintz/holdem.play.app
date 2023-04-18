<template>
  <Dialog :open="show" @close="setIsOpen" class="relative z-50">
    <!-- The backdrop, rendered as a fixed sibling to the panel container -->
    <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
    <!-- Full-screen scrollable container -->
    <div class="fixed inset-0 overflow-y-auto">
      <!-- Container to center the panel -->
      <div class="flex min-h-full items-center justify-center p-6">
        <!-- The actual dialog panel -->
        <DialogPanel class="w-full max-w-sm rounded-lg bg-white p-5">
          <h4 class="font-bold">{{title}}</h4>
          <p class="mt-2">{{text}}</p>
          <div class="flex justify-end mt-6 gap-2">
            <button class="h-10 px-5 bg-neutral-200 rounded-md text-sm" @click="show = false">취소</button>
            <button class="h-10 px-5 rounded-md bg-rose-600 text-white text-sm" @click="show = false">확인</button>
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>

</template>

<script lang="ts" setup>
import { ref } from 'vue'


const isOpen = ref(true)

function setIsOpen(value:any) {
  isOpen.value = value
}

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