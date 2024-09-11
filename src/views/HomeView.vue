<script setup lang="ts">
import { ScheduleXCalendar } from '@schedule-x/vue';
import {
  createCalendar,
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
  viewWeek,
} from '@schedule-x/calendar';

import { createEventModalPlugin } from '@schedule-x/event-modal';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop';
import '@schedule-x/theme-default/dist/index.css';
import calendars from '@/config/calendars';
import configEvents from '@/config/configEvents';
import CustomEventModal from '@/components/CustomEventModal.vue';
import type { Event } from '@/types';
import { throwToast, generateUniqueId } from '@/utils';
import PlusButton from '@/components/PlusButton.vue';
import CreateEvent from '@/components/CreateEvent.vue';
import { ref } from 'vue';
import validateEvent from '@/validators';

const creteEventMenu = ref(false);

const eventsServicePlugin = createEventsServicePlugin();
const eventModalPlugin = createEventModalPlugin();
const dragAndDrop = createDragAndDropPlugin();

const calendarApp = createCalendar({
  defaultView: viewWeek.name,

  views: [
    createViewDay(),
    createViewWeek(),
    createViewMonthGrid(),
    createViewMonthAgenda(),
  ],

  firstDayOfWeek: 0,

  events: configEvents,

  plugins: [
    eventsServicePlugin,
    eventModalPlugin,
    dragAndDrop,
  ],

  callbacks: {},

  calendars,
});

const closeModal = () => {
  eventModalPlugin.close();
};

const removeEvent = (id: string | number) => {
  eventsServicePlugin.remove(id);
  eventModalPlugin.close();
};

const updateEvent = ({
  id, title, description, start, end, calendarId,
}: Event) => {
  const error = validateEvent({
    id,
    title,
    description,
    start,
    end,
    calendarId,
  });

  if (error) {
    throwToast(error);
    return;
  }

  eventsServicePlugin.update({
    id,
    title,
    description,
    start,
    end,
    calendarId,
  });
  eventModalPlugin.close();
};

const addEvent = ({
  title, description, start, end, calendarId,
}: Event) => {
  const id = generateUniqueId();

  const error = validateEvent({
    id,
    title,
    description,
    start,
    end,
    calendarId,
  });

  if (error) {
    throwToast(error);
    return;
  }

  const newEvent = {
    id,
    title,
    description,
    start,
    end,
    calendarId,
  };
  eventsServicePlugin.add(newEvent);
  creteEventMenu.value = false;
};

</script>

<template>
  <ScheduleXCalendar :calendar-app="calendarApp">
    <template #eventModal="{ calendarEvent }">
      <CustomEventModal
        :calendar-event="calendarEvent"
        :close-modal="closeModal"
        :remove-event="removeEvent"
        :update-event="updateEvent"
      />
    </template>
  </ScheduleXCalendar>

  <CreateEvent
    v-show="creteEventMenu"
    @close-menu="creteEventMenu = false"
    @create-event="addEvent"
  />

  <PlusButton @plus-clicked="creteEventMenu = true" />
</template>

<style>
.sx__month-grid-day__header {
  @apply flex items-end
}

.sx__month-grid-day__header-day-name {
  @apply py-2 px-0 w-full bg-slate-100 text-center border-b
}

.sx__month-grid-day {
  @apply p-0 relative
}

.is-selected {
  @apply bg-slate-200 bg-opacity-40
}

.sx__month-grid-day__header-date {
  @apply mt-2
}

.sx__month-grid-day__events {
  @apply min-h-32
}

.sx__event {
  @apply text-lg p-4
}

.sx__event:hover {
  @apply opacity-80
}
</style>
