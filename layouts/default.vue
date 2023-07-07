<template>
  <div class="flex">
    <!-- Minibar on the left -->
    <MiniLeftBar />
    <!-- Center with Folders -->
    <FolderBar />
    <!-- List of messages -->
    <MessageList />
    <main class="grow">
      <slot />
    </main>
  </div>
</template>
