<template>
  <NuxtScrollbar
    tag="aside"
    class="md:w-20 py-3 border-r h-screen dark bg-background text-text shrink-0 hidden md:block"
  >
    <div class="flex flex-col h-full">
      <div class="text-center">
        <NuxtLink to="/">
          <Icon name="fluent:circle-24-filled" class="w-10 h-10" />
        </NuxtLink>
      </div>
      <nav class="mt-5 flex flex-col gap-y-3">
        <template v-for="(m, i) in miniLeftMenu" :key="i">
          <NuxtLink
            v-if="m.to"
            to="#"
            class="w-full group flex flex-col lg:gap-2 items-center text-xs hover:text-primary hover:bg-primary/20 py-2 transition"
          >
            <Icon :name="m.icon" class="w-5 h-5" />
            <span class="group-hover:text-primary text-muted-text">{{ m.title }}</span>
          </NuxtLink>
          <button
            v-if="m.click"
            to="#"
            @click="m.click"
            class="w-full group flex flex-col lg:gap-2 items-center text-xs hover:text-primary hover:bg-primary/20 py-2 transition"
          >
            <Icon :name="m.icon" class="w-5 h-5" />
            <span class="group-hover:text-primary text-muted-text">{{ m.title }}</span>
          </button>
        </template>
      </nav>
      <div class="mt-auto flex flex-col gap-y-3">
        <template v-for="(a, k) in miniLeftBottom" :key="`miniLeftBotom-${k}`">
          <button
            class="w-full group flex flex-col lg:gap-2 items-center text-xs hover:text-primary hover:bg-primary/20 py-2 transition"
            @click="a.click"
          >
            <Icon :name="a.icon" class="w-5 h-5" />
            <span class="group-hover:text-primary text-muted-text">{{ a.title }}</span>
          </button>
        </template>
      </div>
    </div>
  </NuxtScrollbar>
</template>

<script setup lang="ts">
  const mode = useColorMode();

  const toggleColorMode = () => {
    mode.value = mode.value === "light" ? "dark" : "light";
  };

  const miniLeftMenu = [
    { title: "Compose", icon: "fluent:draw-shape-24-regular", click: () => {} },
    { title: "Mail", icon: "fluent:mail-24-regular", to: "/" },
    {
      title: "Contacts",
      icon: "fluent:book-contacts-24-regular",
      to: "/contacts",
    },
    { title: "Calendar", icon: "fluent:calendar-20-regular", to: "/calendar" },
    { title: "Settings", icon: "fluent:settings-24-regular", to: "/settings" },
    { title: "Home", icon: "fluent:home-24-regular", to: "/home" },
  ];

  const miniLeftBottom = [
    {
      title: "Color Mode",
      icon: "fluent:weather-moon-20-filled",
      click: toggleColorMode,
    },
    {
      title: "About",
      icon: "fluent:book-question-mark-24-regular",
      click: () => {},
    },
    { title: "Logout", icon: "fluent:power-24-regular", click: () => {} },
  ];
</script>
