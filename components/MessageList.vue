<template>
  <NuxtScrollbar tag="div" class="md:w-[300px] border-r h-screen shrink-0 w-full">
    <!-- Options at the top - Menu buttons -->
    <div class="sticky top-0 bg-background z-10">
      <div class="h-16 border-b flex w-full items-center justify-between px-3">
        <HMenu class="relative" as="div">
          <HMenuButton
            class="text-xs flex flex-col justify-center gap-1 items-center h-full text-muted-text"
          >
            <Icon name="fluent:cursor-click-24-regular" class="w-6 h-6" />
            <span>Select</span>
          </HMenuButton>

          <TransitionScale origin="top left" :scale="0.8">
            <HMenuItems
              class="absolute focus:outline-none overflow-hidden mt-1 w-48 z-20 left-0 bg-background ring-1 ring-border rounded-md divide-y"
            >
              <HMenuItem v-for="(mi, k) in menuItems" :key="`menuItem-${k}`" v-slot="{ active }">
                <button
                  :class="[active && 'bg-primary text-primary-text']"
                  class="flex items-center gap-3 text-sm px-3 py-2 w-full text-left data-[headlessui-state=active]:bg-muted transition"
                >
                  <Icon :name="mi.icon" class="w-[18px] h-[18px]" />
                  <span>{{ mi.title }}</span>
                </button>
              </HMenuItem>
            </HMenuItems>
          </TransitionScale>
        </HMenu>
        <button
          v-for="(m, i) in topBarItems"
          :key="i"
          class="text-xs flex flex-col justify-center gap-1 items-center h-full text-muted-text"
        >
          <Icon :name="m.icon" class="w-6 h-6" />
          <span>{{ m.title }}</span>
        </button>
      </div>
      <!-- Search box -->
      <div class="flex items-center gap-5 px-3 py-1 border-b">
        <div class="grow flex items-center">
          <Icon name="fluent:search-24-regular" class="w-5 h-5 text-muted-text" />
          <input
            class="bg-transparent p-2 focus:outline-none text-sm block w-full"
            placeholder="Search folder..."
            type="text"
            name="search"
            id="search"
          />
        </div>
        <div class="shrink-0 flex items-center">
          <button class="text-muted-text">
            <Icon name="fluent:filter-24-regular" class="w-5 h-5" />
            <span class="sr-only">Filter</span>
          </button>
        </div>
      </div>
    </div>
    <!-- List of messages -->
    <ul class="relative">
      <template v-for="n in 50">
        <li class="p-3 border-b group hover:bg-primary hover:text-primary-text cursor-pointer">
          <div
            class="flex font-light items-center text-muted-text group-hover:text-primary-text gap-x-5 text-xs"
          >
            <p class="truncate text-sm">samantha.frost@acmecorp.com</p>
            <span class="ml-auto shrink-0">2:45 PM</span>
          </div>
          <p class="truncate text-sm font-medium mt-2.5">
            RE: National Conference on Sunday, May 12, 20223
          </p>
        </li>
      </template>
    </ul>
  </NuxtScrollbar>
</template>

<script setup lang="ts">
  const topBarItems = [
    { title: "Threads", icon: "fluent:link-square-24-regular" },
    { title: "Options", icon: "fluent:settings-cog-multiple-24-regular" },
    { title: "Refresh", icon: "fluent:arrow-sync-24-regular" },
  ];

  const menuItems = [
    { title: "Selection", icon: "fluent:copy-select-24-regular" },
    { title: "All", icon: "fluent:text-period-asterisk-20-regular" },
    { title: "Current page", icon: "fluent:document-one-page-24-regular" },
    { title: "Unread", icon: "fluent:mail-unread-24-regular" },
    { title: "Flagged", icon: "fluent:flag-24-regular" },
    { title: "None", icon: "fluent:dismiss-24-regular" },
  ];
</script>
