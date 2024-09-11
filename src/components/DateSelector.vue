<script setup lang="ts">

const {
  startDate, endDate, startTime, endTime,
} = defineProps<{
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}>();

defineEmits(['start-date', 'end-date', 'start-time', 'end-time']);

</script>

<template>
  <div
    date-rangepicker
    class="flex gap-3 items-center justify-between mb-2"
  >
    <div class="flex flex-col">
      Start
      <input
        id="start-date"
        :value="startDate"
        type="date"
        class="rounded-blue-input"
        @input="$emit('start-date', $event.target)"
      />

      <input
        id="startTime"
        :value="startTime"
        type="time"
        class="rounded-blue-input"
        @input="$emit('start-time', $event.target)"
      />
    </div>

    <div class="flex flex-col">
      End
      <input
        id="end-date"
        :value="endDate"
        class="rounded-blue-input"
        type="date"
        @input="$emit('end-date', $event.target)"
      />

      <input
        id="endTime"
        :value="endTime"
        type="time"
        class="rounded-blue-input"
        @input="$emit('end-time', $event.target)"
      />
    </div>
  </div>
</template>
