<template>
  <div class="w-screen h-screen items-center justify-center overflow-hidden flex">
    <div
      class="fixed z-9999 flex flex-col items-end gap-2 w-[400px] pointer-events-none"
      :style="getPosition(position as 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | 'left-center' | 'right-center')"
    >
      <TransitionGroup
        name="notify"
        tag="div"
        class="flex flex-col gap-2 w-full"
      >
        <div
          v-for="item in notifications"
          :key="item.id"
          :initial="{ opacity: 0, y: -30 }"
          :enter="{ opacity: 1, y: 0 }"
          :leave="{ opacity: 0, y: -30 }"
          :transition="{ duration: 300 }"
          class="pointer-events-auto bg-[#121315] rounded-[4px] p-[12px] flex items-center gap-x-[8px] overflow-hidden border-l-4"
          :class="borderColor(item.type)"
        >
          <div class="w-[40px] h-[40px] flex items-center justify-center">
            <i
              :class="icon(item.type)"
              class="fa-solid text-[20px] fa-shake"
            ></i>
          </div>

          <div class="flex flex-col items-start max-w-[320px]">
            <p
              class="font-semibold text-[14px] leading-[16px] line-clamp-1"
              :class="textColor(item.type)"
            >
              {{ item.title }}
            </p>
            <p class="text-white text-[12px] opacity-90 wrap-break-words">
              {{ item.description }}
            </p>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
  import messageEvents from '@/utils/message';
  import { useDefaultData } from '@/store/index';
  import { storeToRefs } from 'pinia';
  import { onMounted } from 'vue';

  const defaultData = useDefaultData();
  const { notifications, position } = storeToRefs(defaultData);

  function borderColor(type?: string) {
    switch (type) {
      case 'success':
        return 'border-l-[#00C851]'
      case 'error':
        return 'border-l-[#ff4444]'
      case 'warning':
        return 'border-l-[#FFBB00]'
      default:
        return 'border-l-[#2b7fff]'
    }
  }

  function icon(type?: string) {
    switch (type) {
      case 'success':
        return 'fa-circle-check text-[#00C851]'
      case 'error':
        return 'fa-circle-xmark text-[#ff4444]'
      case 'warning':
        return 'fa-triangle-exclamation text-[#FFBB00]'
      default:
        return 'fa-circle-info text-[#2b7fff]'
    }
  }

  function textColor(type?: string) {
    switch (type) {
      case 'success':
        return 'text-[#00C851]'
      case 'error':
        return 'text-[#ff4444]'
      case 'warning':
        return 'text-[#FFBB00]'
      default:
        return 'text-[#2b7fff]'
    }
  };

  function getPosition(position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | 'left-center' | 'right-center') {
    switch (position) {
      case 'top-left':
        return `top: 12px; left: 12px; right: auto; bottom: auto;`
      case 'bottom-right':
        return `bottom: 12px; right: 12px; top: auto; left: auto;`
      case 'bottom-left':
        return `bottom: 12px; left: 12px; top: auto; right: auto;`
      case 'top-right':
        return `top: 12px; right: 12px; left: auto; bottom: auto;`
      case 'top-center':
        return `top: 12px; left: 50%; right: auto; bottom: auto; transform: translateX(-50%)`
      case 'bottom-center':
        return `bottom: 12px; left: 50%; right: auto; top: auto; transform: translateX(-50%)`
      case 'left-center':
        return `top: 50%; left: 12px; right: auto; bottom: auto; transform: translateY(-50%)`
      case 'right-center':
        return `top: 50%; right: 12px; left: auto; bottom: auto; transform: translateY(-50%)`
      default:
        return `top: 12px; right: 12px; left: auto; bottom: auto;`
    }
  }

  onMounted(() => {
    messageEvents();
  });
</script>

<style scoped>
    .notify-move,
    .notify-enter-active,
    .notify-leave-active {
        transition: all 0.3s ease;
    }
    .notify-enter-from,
    .notify-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }
</style>