<script setup lang="ts">
defineEmits(['close', 'delete']);
</script>

<template>
  <div class="modal-window">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 class="text-xl font-bold mb-6">
        Are you sure you want to delete this event?
      </h2>

      <button
        type="button"
        class="mr-6"
        @click="$emit('delete')"
      >
        <span class="text-red-700 rounded-button bg-red-200">
          Yes
        </span>
      </button>

      <button
        type="button"
        @click="$emit('close')"
      >
        <span class="text-green-700 rounded-button bg-green-200">
          No
        </span>
      </button>
    </div>
  </div>
</template>
