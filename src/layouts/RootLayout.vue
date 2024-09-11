<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen bg-[#f0f0f0]">
    <header class="bg-stone-text-neutral">
      <div class="app-container">
        <h1 class="text-2xl">
          Kolendar
        </h1>
      </div>
    </header>

    <main class="grow">
      <div class="app-container">
        <router-view />
      </div>
    </main>

    <footer class="bg-stone-text-neutral">
      <div class="app-container">
        Footer
      </div>
    </footer>
  </div>
</template>
