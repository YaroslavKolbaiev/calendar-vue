<script setup lang="ts">
import TitleDescription from '@/components/TitleDescription.vue';
import DateSelector from '@/components/DateSelector.vue';
import CalendarColorSelector from '@/components/CalendarColorSelector.vue';
import { ref } from 'vue';
import IconClose from '@/icons/IconClose.vue';

const createTitle = ref('');
const createDescription = ref('');
const createStartDate = ref('');
const createEndDate = ref('');
const createStartTime = ref('');
const createEndTime = ref('');
const createCalendarId = ref('');

const clearFields = () => {
  createTitle.value = '';
  createDescription.value = '';
  createCalendarId.value = '';
  createStartDate.value = '';
  createEndDate.value = '';
  createStartTime.value = '';
  createEndTime.value = '';
};

defineEmits(['close-menu', 'create-event']);

</script>

<template>
  <div
    class="
      fixed
      top-10
      left-1/2
      z-10
      transform
      -translate-x-1/2
      bg-white
      p-3
      shadow-lg
      border
      rounded-md
    "
  >
    <h4 class="relative text-center text-2xl font-semibold mb-2">
      Create Event

      <button
        type="button"
        class="absolute right-0"
        @click="$emit('close-menu')"
      >
        <IconClose />
      </button>
    </h4>

    <TitleDescription
      :title="createTitle"
      :description="createDescription"
      @typing-title="(data) => createTitle = data.value"
      @typing-description="(data) => createDescription = data.value"
    />

    <DateSelector
      :start-date="createStartDate"
      :end-date="createEndDate"
      :start-time="createStartTime"
      :end-time="createEndTime"
      @start-date="(data) => createStartDate = data.value"
      @end-date="(data) => createEndDate = data.value"
      @start-time="(data) => createStartTime = data.value"
      @end-time="(data) => createEndTime = data.value"
    />

    <CalendarColorSelector
      :new-calendar-id="createCalendarId"
      @select-color="(emit) => createCalendarId = emit.value"
    />

    <button
      type="button"
      class="mt-2 w-full bg-blue-500 rounded-md p-2 text-white text-lg"
      @click="() => {
        $emit('create-event', {
          title: createTitle,
          description: createDescription,
          start: `${createStartDate} ${createStartTime || '12:00'}`,
          end: `${createEndDate || createStartDate} ${createEndTime || '12:00'}`,
          calendarId: createCalendarId,
        });
        clearFields();
      }"
    >
      Create Event
    </button>
  </div>
</template>
