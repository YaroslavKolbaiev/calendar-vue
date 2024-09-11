<script lang="ts" setup>
import IconClose from '@/icons/IconClose.vue';
import IconeDelete from '@/icons/IconeDelete.vue';
import IconEdit from '@/icons/IconEdit.vue';
import { ref } from 'vue';
import type { Event } from '@/types';
import DeleteModal from './DeleteModal.vue';
import EditEventMenu from './EditEventMenu.vue';

const { calendarEvent } = defineProps<{
  calendarEvent: Event;
  closeModal: () => void;
  removeEvent: (id: string | number) => void
  updateEvent: (event: Event) => void
}>();

const showDeleteEventModalWindow = ref(false);
const showEditMenu = ref(false);

</script>

<template>
  <div class="relative pt-2 border shadow-md rounded-md">
    <div class="px-3">
      <h3 class="text-2xl font-semibold mb-2">
        {{ calendarEvent.title }}
      </h3>

      <p class="mb-4 text-lg text-gray-500">
        {{ calendarEvent.description }}
      </p>

      <button
        class="absolute top-2 right-2"
        type="button"
        @click="closeModal"
      >
        <IconClose />
      </button>

      <button
        class="mr-4"
        type="button"
        @click="() => showEditMenu = !showEditMenu"
      >
        <IconEdit />
      </button>

      <button
        type="button"
        @click="() => showDeleteEventModalWindow = true"
      >
        <IconeDelete />
      </button>
    </div>
  </div>

  <Transition name="fade">
    <EditEventMenu
      v-show="showEditMenu"
      :event="calendarEvent"
      @update-event="updateEvent"
      @close-edit="showEditMenu = false"
    />
  </Transition>

  <Transition name="fade">
    <DeleteModal
      v-show="showDeleteEventModalWindow"
      @close="() => showDeleteEventModalWindow = false"
      @delete="() => removeEvent(calendarEvent.id)"
    />
  </Transition>
</template>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
