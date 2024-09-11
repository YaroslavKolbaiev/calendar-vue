<script setup lang="ts">
import Colors from '@/enums';

const { newCalendarId } = defineProps<{ newCalendarId: string }>();

defineEmits(['select-color']);
</script>

<template>
  <label for="calendar-select">
    Select Calendar Color

    <select
      id="calendar-select"
      :value="newCalendarId"
      class="rounded-blue-input bg-white"
      :class="`text-${newCalendarId}-500`"
      @change="$emit('select-color', $event.target)"
    >
      <option
        class="text-blue-500"
        :value="Colors.BLUE"
      >
        Blue
      </option>

      <option
        class="text-green-500"
        :value="Colors.GREEN"
      >
        Green
      </option>

      <option
        class="text-red-500"
        :value="Colors.RED"
      >
        Red
      </option>

      <option
        class="text-yellow-500"
        :value="Colors.YELLOW"
      >
        Yellow
      </option>
    </select>
  </label>
</template>
