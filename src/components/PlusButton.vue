<script setup lang="ts">
import IconPlus from '@/icons/IconPlus.vue';

defineEmits(['plus-clicked']);
</script>

<template>
  <div class="fixed top-1/4 z-10">
    <div class="relative">
      <button
        type="button"
        class="
          absolute
          -left-12
          bg-blue-500
          rounded-full
          p-4
          shadow-md
          shadow-gray-500
          hover:animate-signal
        "
        @click="$emit('plus-clicked')"
      >
        <IconPlus />
      </button>
    </div>
  </div>
</template>
