<script setup lang="ts">

const { title, description } = defineProps<{
  title: string;
  description: string;
}>();

defineEmits(['typing-title', 'typing-description']);

</script>

<template>
  <div>
    <label
      for="title"
    >
      <input
        id="title"
        class="rounded-blue-input"
        type="text"
        :value="title"
        placeholder="Enter Title"
        @input="$emit('typing-title', $event.target)"
      >
    </label>

    <label
      class="block"
      for="description"
    >
      <textarea
        id="description"
        class="rounded-blue-input"
        :value="description"
        placeholder="Enter Description"
        @input="$emit('typing-description', $event.target)"
      />
    </label>
  </div>
</template>
