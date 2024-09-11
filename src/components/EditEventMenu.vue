<script setup lang="ts">
import { ref } from 'vue';
import type { Event } from '@/types';
import IconClose from '@/icons/IconClose.vue';
import TitleDescription from './TitleDescription.vue';
import DateSelector from './DateSelector.vue';
import CalendarColorSelector from './CalendarColorSelector.vue';

const {
  event,
} = defineProps<{
  event: Event;
}>();

const {
  id, title, description, start, end, calendarId,
} = event;

const newTitle = ref(title);
const newDescription = ref(description);
const newStartDate = ref(start.split(' ')[0]);
const newEndDate = ref(end.split(' ')[0]);
const newStartTime = ref(start.split(' ')[1]);
const newEndTime = ref(end.split(' ')[1]);
const newCalendarId = ref(calendarId);

defineEmits(['update-event', 'close-edit']);

</script>

<template>
  <div class="modal-window">
    <div class="bg-slate-200 p-4 rounded-md">
      <h4 class="text-center text-2xl font-semibold mb-2 relative">
        Edit Event

        <button
          class="absolute top-0 right-1"
          type="button"
          @click="$emit('close-edit')"
        >
          <IconClose />
        </button>
      </h4>

      <TitleDescription
        :title="newTitle"
        :description="newDescription"
        @typing-title="(data) => newTitle = data.value"
        @typing-description="(data) => newDescription = data.value"
      />

      <DateSelector
        :start-date="newStartDate"
        :end-date="newEndDate"
        :start-time="newStartTime"
        :end-time="newEndTime"
        @start-date="(data) => newStartDate = data.value"
        @end-date="(data) => newEndDate = data.value"
        @start-time="(data) => newStartTime = data.value"
        @end-time="(data) => newEndTime = data.value"
      />

      <CalendarColorSelector
        :new-calendar-id="newCalendarId"
        @select-color="(emit) => newCalendarId = emit.value"
      />

      <button
        type="button"
        class="mt-2"
        @click="$emit('update-event', {
          id,
          title: newTitle,
          description: newDescription,
          start: `${newStartDate} ${newStartTime}`,
          end: `${newEndDate} ${newEndTime}`,
          calendarId: newCalendarId,
        })"
      >
        <span class="rounded-md py-2 px-4 bg-blue-500 text-white">
          Save
        </span>
      </button>
    </div>
  </div>
</template>
