<template>
  <NuxtScrollbar tag="aside" class="lg:w-[300px] border-r h-screen shrink-0 hidden lg:block">
    <div class="flex flex-col h-full">
      <div
        class="h-16 border-b flex items-center justify-between px-3 sticky top-0 z-10 bg-background"
      >
        <p class="text-sm font-medium">admin@acmecorp.com</p>
        <HMenu class="relative" as="div">
          <HMenuButton class="flex items-center justify-center">
            <Icon name="fluent:more-vertical-24-regular" class="w-5 h-5" />
          </HMenuButton>

          <TransitionScale origin="top right" :scale="0.8">
            <HMenuItems
              class="absolute focus:outline-none overflow-hidden mt-1 w-48 z-20 right-0 bg-background ring-1 ring-border rounded-md divide-y"
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
      </div>

      <div class="flex flex-col divide-y flex-grow">
        <template v-for="(f, i) in folders" :key="i">
          <button
            class="flex w-full items-center gap-3 text-left p-3 text-sm group hover:bg-primary transition"
          >
            <Icon :name="f.icon" class="w-5 h-5 text-muted-text group-hover:text-primary-text" />
            <span class="flex-1 group-hover:text-primary-text">{{ f.title }}</span>
            <span
              v-if="f.count"
              class="text-xs text-muted-text bg-muted p-0.5 px-1 rounded group-hover:bg-white group-hover:text-primary"
              >{{ f.count }}</span
            >
          </button>
        </template>
      </div>
      <div class="p-3 border-t flex items-center justify-between mt-auto text-muted-text">
        <Icon name="fluent:storage-24-regular" class="w-6 h-6 shrink-0" />
        <div class="rounded-full h-2 w-full bg-muted mx-5">
          <div class="rounded-full h-full bg-primary w-[20%]"></div>
        </div>
        <span class="text-sm shrink-0">20%</span>
      </div>
    </div>
  </NuxtScrollbar>
</template>

<script setup lang="ts">
  const folders = [
    { title: "Inbox", icon: "fluent:mail-inbox-24-regular", count: 588 },
    { title: "Draft", icon: "fluent:document-edit-24-regular" },
    { title: "Sent", icon: "fluent:send-24-regular", count: 56 },
    { title: "Junk", icon: "fluent:folder-junk-24-regular" },
    { title: "Trash", icon: "fluent:delete-24-regular" },
    { title: "Archive", icon: "fluent:archive-24-regular" },
    { title: "Flagged", icon: "fluent:flag-24-regular" },
    { title: "Important", icon: "fluent:important-24-regular" },
    { title: "Categories", icon: "fluent:bookmark-24-regular" },
    { title: "Slack", icon: "fluent:folder-24-regular" },
  ];

  const menuItems = [
    { title: "Compact", icon: "fluent:arrow-expand-24-regular" },
    { title: "Empty folder", icon: "fluent:broom-24-regular" },
    { title: "Mark all read", icon: "fluent:mail-all-read-24-regular" },
    { title: "Manage folders", icon: "fluent:folder-24-regular" },
  ];
</script>
